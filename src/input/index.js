import React from 'react';
import { Component, PropTypes, noop } from '@Libs';
import Icon from '@icon';

export default class Input extends Component {
    static propTypes = {
        type: PropTypes.oneOf(['text', 'textarea', 'password', 'number', 'radio', 'checkbox']),
        prefix: PropTypes.string,
        suffix: PropTypes.string,
        className: PropTypes.string,
        autoComplete: PropTypes.oneOf(['on', 'off']),
        placeholder: PropTypes.string,
        size: PropTypes.oneOf(['large', 'medium', 'small']),
        value: PropTypes.string,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onPressEnter: PropTypes.func,
    };

    static defaultProps = {
        type: 'text',
        autoComplete: 'off',
        size: 'medium',
        onChange: noop,
        onFocus: noop,
        onBlur: noop,
    };

    constructor(props) {
        super(props);
        this.state = {
            textareaHeight: 0,
            passwdToggle: true
        }
    }
    handleChange(evt){
        const { onChange, name } = this.props;
        const { value } = evt.target
        onChange(value, name, evt);
    }
    handleFocus(evt){
        const { onFocus, name } = this.props;
        const { value } = evt.target
        onFocus(value, name, evt);
    }
    handleBlur(evt){
        const { onBlur, name } = this.props;
        const { value } = evt.target
        onBlur(value, name, evt);
    }
    handlePressEnter(evt){
        const { autosize, onPressEnter, name } = this.props;
        if(autosize){
            const { target } = evt;
            const height = target.scrollHeight;
            this.setState({
                textareaHeight: height
            })
        }

        const { value } = evt.target
        onPressEnter && onPressEnter(value, name, evt);
    }
    addPasswdVisible(){
        const { type, showToggle } = this.props;
        const { passwdToggle } = this.state;
        if(type === 'password' && showToggle){
            return (
                <span className="tv-input-suffix" onClick={() => {this.setState({
                    passwdToggle: !passwdToggle
                })}}>
                    <Icon type={passwdToggle ? 'eye-open' : 'eye-close'} />
                </span>
            )
        }
    }
    render() {
        let { prefix, suffix, type, size, autoComplete, value, placeholder, name, onChange, onFocus, onBlur, ...otherProps } = this.props;
        const { textareaHeight } = this.state;
        const { passwdToggle } = this.state;

        if(type === 'password'){
            type = passwdToggle ? 'password' : 'text'
        }

        if(type === 'textarea'){
            return (
                <span className={this.className('tv-input-wraper')}>
                    <textarea 
                        style={this.style({
                            height: textareaHeight || 'auto'
                        })}
                        className={this.className('tv-input', {
                            [`tv-input-size-${size}`]: size,
                        })} 
                        onChange={this.handleChange.bind(this)}
                        onFocus={this.handleFocus.bind(this)}
                        onBlur={this.handleBlur.bind(this)}
                        onKeyPress={this.handlePressEnter.bind(this)}
                        {...otherProps}
                    >{value || ''}</textarea>
                </span>
            )
        }

        return (
            <span className={this.className('tv-input-wraper', {
                'tv-input-wraper-prefix': prefix
            })}>
                {prefix && <span className="tv-input-prefix"><Icon type={prefix} /></span>}
                {this.addPasswdVisible()}
                {
                    suffix && <span className="tv-input-suffix">
                        <Icon type={suffix} />
                    </span>
                }
                <input
                    className={this.className('tv-input', {
                        [`tv-input-size-${size}`]: size,
                        [`tv-input-${type}`]: type
                    })} 
                    name={name}
                    type={type}
                    value={value}
                    autoComplete={autoComplete}
                    placeholder={placeholder}
                    // onInput={this.handleChange.bind(this)}
                    onChange={this.handleChange.bind(this)}
                    onFocus={this.handleFocus.bind(this)}
                    onBlur={this.handleBlur.bind(this)}
                    onKeyPress={this.handlePressEnter.bind(this)}
                    {...otherProps}

                />
            </span>
        );
    }
}