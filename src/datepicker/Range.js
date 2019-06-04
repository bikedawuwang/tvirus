import React from 'react';
import { Component, PropTypes, noop } from '@Libs';
import DateTable from './DateTable';
import YearTable from './YearTable';
import MonthTable from './MonthTable';
import Button from '@button';
import Popup from '@popup';

import { weekOfYear, parse, fixedYM, format, nextMonth } from './utils';

export default class Range extends Component {
    static propTypes = {
        className: PropTypes.string,
        defaultValue: PropTypes.arrayOf(PropTypes.string),
        placeholder: PropTypes.string,
        mode: PropTypes.string,
        name: PropTypes.string,
        trigger: PropTypes.string,
        disabled: PropTypes.bool,
        disabledDate: PropTypes.func,
        onChange: PropTypes.func
    };

    static defaultProps = {
        mode: 'day',
        trigger: 'click',
        position: "bottom left",
        disabledDate: noop,
        onChange: noop
    };

    constructor(props) {
        super(props);
        const now = new Date();

        let left_date = parse(props.minDate || format(now));
        let right_date = parse(props.maxDate || format(now));

        if(left_date.getFullYear() === right_date.getFullYear() && left_date.getMonth() === right_date.getMonth()){
            right_date.setMonth(right_date.getMonth() + 1);
        }
        
        this.state = {
            view: {
                ['day']: props.mode === 'day',
                ['leftyear']: props.mode === 'year',
                ['rightyear']: props.mode === 'year',
                ['leftmonth']: props.mode === 'month',
                ['rightmonth']: props.mode === 'month',
                ['leftweek']: props.mode === 'week',
                ['rightweek']: props.mode === 'week'
            },
            left_date: left_date,
            right_date: right_date,
            minDate: left_date,
            maxDate: parse(props.maxDate) || left_date,
            selected: {
                minDate: left_date,
                maxDate: parse(props.maxDate) || left_date,
            },
            rangeState: {
                endDate: null,
                selecting: false,
            }
        }
    }

    handlePopupChange(showPopup){
        const { disabled } = this.props;

        if(disabled){
            this.setState({visible: false});
            return;
        }
        if(disabled){
            showPopup = false
        }
        this.setState({visible: showPopup});
    }

    handleDate = ({ minDate, maxDate }, isClose) => {
        const { onChange, name } = this.props;
        minDate = minDate || this.state['left_date'];
        maxDate =  maxDate || this.state['right_date'];
        if (!isClose){
            this.setState({ 
                visible: true, view: {'day': true}, minDate, maxDate, 
                left_date: minDate, right_date: maxDate 
            });
            return;
        };
        this.setState({ 
            visible: false, view: {'day': true}, minDate, maxDate, 
            left_date: minDate, right_date: maxDate,
            selected: {
                minDate, maxDate,
            }
        });
        onChange([minDate, maxDate], false, name)
    }
    handleMoveRange = ({ endDate }) => {
        const { mode } = this.props;
        if(mode == 'week'){
            return;
        }
        const { rangeState, minDate } = this.state
        if (endDate <= minDate) endDate = null

        rangeState.endDate = endDate
        this.setState({
            maxDate: endDate,
        })
    }
    handleYearDate = (cell, key, name, isClose) => {
        const { mode } = this.props;
        const { view } = this.state;
        if(mode === 'day' || mode === 'month'){
            let date = this.state[`${key}_date`];
            let { year } = weekOfYear(format(cell));

            date.setFullYear(year);
            // 把当前打开的辅助层关掉
            this.setState({
                visible: true, 
                view: {...view, [`${key}year`]: false, 'day': true},
                [`${key}_date`]: date
            });
            return;
        }

        this.setOtherRange(cell, 'month', name, isClose)
    }
    setOtherRange(cell, currMode, name, isClose){
        const { onChange, mode } = this.props;
        const { view } = this.state;
        const { minDate, maxDate } = cell;
        if (!isClose){
            this.setState({ 
                visible: true, view: mode === currMode ? view : {...view, 'day': true}, 
                minDate, maxDate, [`left_date`]: minDate 
            });
            return;
        };
        this.setState({ 
            visible: false, 
            view: mode === currMode ? view : {...view, 'day': true}, 
            minDate, maxDate, [`left_date`]: minDate, [`right_date`]: maxDate, selected: {
                minDate, maxDate
            }
        });
        onChange([minDate, maxDate], false, name)
    }
    handleMonthDate = (cell, rangeKey, name, isClose) => {
        const { mode } = this.props;
        const { view } = this.state;

        if(mode === 'day'){
            let date = this.state[`${rangeKey}_date`];
            const { year, month } = weekOfYear(format(cell));
            const array  = fixedYM(year, month - 1);

            date.setFullYear(array[0]);
            date.setMonth(array[1]);
            return this.setState({
                visible: true, 
                view: {...view, [`${rangeKey}month`]: false, 'day': true},
                [`${rangeKey}_date`]: date
            });
        }
        this.setOtherRange(cell, 'month', name, isClose)
    }
    // 上年
    handlePrevYearClick(key){
        let date = this.state[`${key}_date`];
        let { year } = weekOfYear(format(date));
        year = year - 1;

        date.setFullYear(year);

        this.setState({
            [`${key}_date`]: date
        });
    }

    // 下年
    handleNextYearClick(key){
        let date = this.state[`${key}_date`];
        let { year } = weekOfYear(format(date));
        year = year + 1;

        date.setFullYear(year);

        this.setState({
            [`${key}_date`]: date
        });
    }

    // 上月
    handlePrevMonthClick(key){
        let date = this.state[`${key}_date`];
        const { year, month } = weekOfYear(format(date));
        const array  = fixedYM(year, month - 1);

        date.setFullYear(array[0]);
        date.setMonth(array[1] - 1);

        this.setState({
            [`${key}_date`]: date
        });
    }

    // 下月
    handleNextMonthClick(key){
        let date = this.state[`${key}_date`];
        const { year, month } = weekOfYear(format(date));
        const array  = fixedYM(year, month + 1);

        date.setFullYear(array[0]);
        date.setMonth(array[1] - 1);

        this.setState({
            [`${key}_date`]: date
        });
    }

    showYearPicker(key){
        const { view } = this.state;
        this.setState({
            visible: true, 
            view: {...view, [key + 'year']: true}
        })
    }

    showMonthPicker(key){
        const { view } = this.state;
        this.setState({
            visible: true, 
            view: {...view, [key + 'month']: true}
        })
    }

    disabledDate = (value, key) => {
        let { view } = this.state;
        let { disabledDate, mode } = this.props;
        
        if(view[`${key}year`]){
            return false;
        }

        const otherKey = key === 'left' ? 'right' : 'left';
        const otherDate = this.state[`${otherKey}_date`];
        let dateObj = weekOfYear(format(value));
        let otherDateObj = weekOfYear(format(otherDate));
        const dateObjMonth = parse(`${dateObj.year}-${dateObj.month}-01`);
        const otherDateObjMonth = parse(`${otherDateObj.year}-${otherDateObj.month}-01`);

        if(mode === 'year'){
            if((otherKey !== 'left' && dateObj.year < otherDateObj.year) 
            || (otherKey === 'left' && dateObj.year > otherDateObj.year)) {
                return false
            }
            return true;
        }

        if(mode === 'month' || view[`${key}month`]){
            if(otherKey !== 'left'){
                if(dateObjMonth < otherDateObjMonth){
                    return false
                }
            } else {
                if(dateObjMonth > otherDateObjMonth){
                    return false
                }
            }
    
            return true;
        }
        return disabledDate(value);
    }

    renderSearch(key){
        const { view } = this.state;
        let date = this.state[`${key}_date`];
        let { year, month } = weekOfYear(format(date));
        const array = fixedYM(year, month);
        return (
            <div className={this.className('tv-datepicker-header')}>
                <div className="tv-datepicker-header-wraper">
                    <a className="tv-datepicker-prev-year-btn" title="上一年" onClick={this.handlePrevYearClick.bind(this, key)}></a>
                    <a className="tv-datepicker-prev-month-btn" title="上个月" onClick={this.handlePrevMonthClick.bind(this, key)}></a>
                    <span className="tv-datepicker-ym-select">
                        <a className="tv-datepicker-year-select" title="选择年份" onClick={this.showYearPicker.bind(this, key)}>{array[0]}年</a>
                        <a style={{display: (!view[key + 'year'] && !view[key + 'month']) ? '' : 'none'}} className="tv-datepicker-month-select" title="选择月份" onClick={this.showMonthPicker.bind(this, key)}>{array[1]}月</a>
                    </span>
                    <a className="tv-datepicker-next-month-btn" title="下个月" onClick={this.handleNextMonthClick.bind(this, key)}></a>
                    <a className="tv-datepicker-next-year-btn" title="下一年" onClick={this.handleNextYearClick.bind(this, key)}></a>
                </div>
            </div>
        )
    }

    renderTable(key){
        let rangeMode = 'range';
        let { mode } = this.props;
        let { view, rangeState, minDate, maxDate } = this.state;
        let date = this.state[`${key}_date`];
        const monthMode = mode === 'day' ? 'sigle' : rangeMode;
        const yearMode = mode !== 'year' ? 'sigle' : rangeMode;

        return (
            <div className={this.className('tv-datepicker-body')}>
                <YearTable 
                range={yearMode}
                rangeState={rangeState}
                minDate={minDate}
                maxDate={maxDate}
                disabledDate={this.disabledDate} 
                rangeKey={key} date={date} onChange={this.handleYearDate} 
                style={{display: view[key + 'year'] ? '' : 'none'}} />
                {mode !== 'year' && <MonthTable 
                    range={monthMode}
                    rangeState={rangeState}
                    minDate={minDate}
                    maxDate={maxDate}
                    disabledDate={this.disabledDate} 
                    rangeKey={key} date={date} onChange={this.handleMonthDate} 
                    style={{display: view[key + 'month'] ? '' : 'none'}} />}
                {mode !== 'year' && mode !== 'month' && <DateTable 
                    disabledDate={this.disabledDate} 
                    style={{display: (!view[key + 'year'] && !view[key + 'month']) ? '' : 'none'}}
                    key={key}
                    mode={mode}
                    range={rangeMode} rangeState={rangeState} date={date} 
                    minDate={minDate}
                    maxDate={maxDate}
                    onMoveRange={this.handleMoveRange}
                    onChange={this.handleDate}
                />}
            </div>
        );
    }

    render(){
        const { position, placeholder, footer, children, trigger } = this.props;
        const { disabled, visible, selected } = this.state;
        const { minDate, maxDate } = selected;

        const content = [
            (
                <div className={this.className('tv-datepicker-range')}>
                    {
                        ['left', 'right'] .map((key) => {
                            return (
                                <div key={key} className={this.className('tv-datepicker')}>
                                    { this.renderSearch(key) }
                                    { this.renderTable(key) }
                                    
                                </div>
                            )
                        })
                    }
                </div>
            )
        ];

        if(footer){
            <div className={this.className('tv-datepicker-footer')}>
                <div className="tv-datepicker-footer-btn">
                    <a className="tv-datepicker-time-btn">选择时间</a>
                    <a className="tv-datepicker-ok-btn">确 定</a>
                </div>
            </div>
        }


        const min = minDate ? format(minDate) : null;
        const max = maxDate ? format(maxDate) : null;

        return (
            <div className={this.className('tv-datepicker-wraper')}>
                <Popup 
                disabled={disabled}
                showArrow={false} 
                visible={visible} 
                trigger={trigger} 
                position={position} 
                content={content}
                onChange={this.handlePopupChange.bind(this)}
                >
                    {children || <div className="tv-datepicker-trigger">
                        <Button>{ min && max ? `${min} ~ ${max}` : placeholder}</Button>
                    </div>}
                </Popup>
            </div>
        );
    }
}