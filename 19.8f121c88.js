(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{334:function(n,e,t){var o=t(335);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(5)(o,r);o.locals&&(n.exports=o.locals)},335:function(n,e,t){var o=t(15);(n.exports=t(4)(!1)).push([n.i,".values {\n  width: 771px;\n  height: 414px;\n  background: url("+o(t(336))+") no-repeat 0 0;\n}\n",""])},336:function(n,e,t){n.exports=t.p+"3942007890ad3700dd3f68147beec53f.png"},45:function(n,e,t){var o=t(46);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(5)(o,r);o.locals&&(n.exports=o.locals)},46:function(n,e,t){(n.exports=t(4)(!1)).push([n.i,".main {\n  line-height: 2;\n}\n.main h2,\n.main h3,\n.main h4,\n.main h5,\n.main h6 {\n  clear: both;\n  margin: 1.6em 0 0.6em;\n  color: #0d1a26;\n  font-weight: 500;\n}\n.main h3 {\n  font-size: 24px;\n  line-height: 32px;\n}\n.main h4 {\n  font-size: 18px;\n}\n.main ul,\n.main ol,\n.main li {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.main .tv-menu-item {\n  padding-left: 59px;\n}\n.main hr {\n  clear: both;\n  height: 1px;\n  margin: 56px 0;\n  background: #ebedf0;\n  border: 0;\n}\n.main blockquote {\n  margin: 1em 0;\n  padding-left: 0.8em;\n  color: #697b8c;\n  font-size: 90%;\n  border-left: 4px solid #ebedf0;\n}\n.main em,\n.main cite {\n  font-style: normal;\n}\n.main cite {\n  color: #929292;\n  font-size: 90%;\n}\n.main-component {\n  margin: 0 60px;\n  width: 800px;\n}\n.main-component .code-wraper {\n  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.15);\n}\n.main-component .code-demo {\n  padding: 35px 35px 20px;\n}\n.main-component .code-demo .tv-button {\n  margin-right: 68px;\n  margin-bottom: 25px;\n}\n.main-component .code-demo .tv-button-group .tv-button {\n  margin-right: 0;\n}\n.main-component .code-block-control {\n  position: absolute;\n  left: 0;\n  right: 0;\n  border-top: 1px solid #eee;\n  padding-top: 6px;\n  color: #1d1d1d;\n  text-align: center;\n  cursor: pointer;\n}\n.main-component .language-jsx pre {\n  margin: 0;\n}\n",""])},48:function(n,e,t){"use strict";t.d(e,"a",function(){return s});var o=t(0),r=t.n(o);t(2),t(45);function a(n){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function i(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function l(n,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function c(n){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function u(n,e){return(u=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}var p={main:{display:"flex"},left:{flexGrow:0,width:299,minWidth:299,maxWidth:299,height:"auto",borderRight:"1px solid #ebebeb"},right:{flexGrow:1,margin:"0 60px",width:800}},s=function(n){function e(n){var t;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=l(this,c(e).call(this,n))).state={children:null},t}var t,a,s;return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&u(n,e)}(e,o["Component"]),t=e,(a=[{key:"onClick",value:function(n,e,t){e&&(t[n]=!0,this.props.history.push({pathname:e,state:{openMaps:t}}))}},{key:"opened",value:function(n){var e=this.props.location.pathname.split("/")[2];return console.log(e,n),e===n}},{key:"render",value:function(){var n=this.props,e=n.children,t=n.className,o=n.title,a=n.desc;return r.a.createElement("section",{style:p.right,className:"main-spec"},r.a.createElement("article",{className:t},r.a.createElement("h1",null,o),r.a.createElement("p",null,a),r.a.createElement("section",{className:"main-body"},e)))}}])&&i(t.prototype,a),s&&i(t,s),e}();s.displayName="Layout"},480:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return m});var o=t(0),r=t.n(o),a=t(48);t(334);function i(n){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function l(){return(l=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}function c(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function u(n,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function p(n){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function s(n,e){return(s=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}var m=function(n){function e(n){return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,p(e).call(this,n))}var t,i,m;return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&s(n,e)}(e,o["Component"]),t=e,(i=[{key:"render",value:function(){return r.a.createElement(a.a,l({},this.props,{className:"main-arts-box",title:"人文体验",desc:"当用户在使用一个产品时，如果他能很顺畅的进行操作获得想要的信息的时候，他是不会关注到交互和体验的，反而当他不能顺畅使用以及获取信息时，才会关注到产品的交互体验。"}),r.a.createElement("p",{style:{marginTop:-15,marginBottom:0}},"设计不只是关乎好看，更关乎好用。产品体验的提升能够助力产品业绩的增长，让产品体验 可度 、可优化、可监控。"),r.a.createElement("cite",null,"“If you cannot measure it, you cannot improve it.” Lord Kelvin"),r.a.createElement("div",{className:"values",style:{marginTop:20}}),r.a.createElement("h3",null,"一致"),r.a.createElement("ul",null,r.a.createElement("li",null,"1.好的体验是润物细无声的，产品的设计与现实生活的规律保持一致，设计者应该多分析用户行为，并运用到当下的设计工作中。"),r.a.createElement("li",null,"2.整体页面的元素和机构保持一致")),r.a.createElement("h3",null,"便捷"),r.a.createElement("ul",null,r.a.createElement("li",null,"1.借助行为分析、人工智能、大数据等一系列方式，辅助用户有效决策、减少用户额外操作，从而节省用户脑力和体力，让人机交互行为更便捷。"),r.a.createElement("li",null,"2.尽可能让操作流程简洁直观，界面清晰可读，直观的传递给用户信息，减少用户学习成本。")),r.a.createElement("h3",null,"简约"),r.a.createElement("ul",null,r.a.createElement("li",null,"1.保持克制： 用尽可能少的设计元素产品的当前功能，减少研发团队的成本，提高研发效率。正如 Antoine de St.Exupery 所说：完美不在于无以复加，而在于无可删减，万事莫不如此。"),r.a.createElement("li",null,"2.复用规范模版： 运用现有的组件/模板或者自行抽象可复用的组件/模板，节约无谓的设计且保持系统一致性，把创造力专注在最需要的地方。"),r.a.createElement("li",null,"3.保持核心功能：不断的向软件增加功能是不可持续的，增加的共功能越多，就越难发现真正对用户有价值的新功能，这样盲目添加的新功能早晚会成为垃圾功能，同时增加复杂性意味这遗留代码越来越沉重，导致产品维护成本越来越高，而且也越来越难以灵活应对市场变化——《简约至上》 Giles Colborne")),r.a.createElement("h3",null,"情感"),r.a.createElement("p",null,"推荐《情感化设计》——Donald A.Norman"),r.a.createElement("p",null,"情感化设计需要设计师能够有意识的去思考每一个设计带给用户的心里感受，以及能不能“暖”到用户。浅层次的锻炼可以从文案、视觉表现和场景出发，而更深层次的情感化则需要从产品的整体体验的角度出发，去思考产品能够带给用户的价值和感受。"))}}])&&c(t.prototype,i),m&&c(t,m),e}();m.displayName="ArtsDemo"}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFnZXMvc3BlYy9hcnRzL2luZGV4Lmxlc3M/NGFhMCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFnZXMvc3BlYy9hcnRzL2luZGV4Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3BhZ2VzL3NwZWMvYXJ0cy9pbWcvdmFsdWVzLnBuZyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tbW9uL21haW4ubGVzcz8zOTY1Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21tb24vbWFpbi5sZXNzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21tb24vZGVzaWduLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9wYWdlcy9zcGVjL2FydHMvaW5kZXguanMiXSwibmFtZXMiOlsiY29udGVudCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGUiLCJpIiwib3B0aW9ucyIsImhtciIsInRyYW5zZm9ybSIsImluc2VydEludG8iLCJ1bmRlZmluZWQiLCJsb2NhbHMiLCJleHBvcnRzIiwiZXNjYXBlIiwicHVzaCIsInAiLCJzdHlsZSIsIm1haW4iLCJkaXNwbGF5IiwibGVmdCIsImZsZXhHcm93Iiwid2lkdGgiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmlnaHQiLCJyaWdodCIsIm1hcmdpbiIsIkxheW91dCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0aGlzIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfZ2V0UHJvdG90eXBlT2YiLCJjYWxsIiwic3RhdGUiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsImluZGV4IiwidG8iLCJvcGVuTWFwcyIsImhpc3RvcnkiLCJwYXRobmFtZSIsInF1ZXJ5IiwiY3VyclF1ZXJ5IiwibG9jYXRpb24iLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJfdGhpcyRwcm9wcyIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGVzYyIsInJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCIsImEiLCJjcmVhdGVFbGVtZW50IiwiQXJ0c0RlbW8iLCJfY29tbW9uX2Rlc2lnbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fIiwiX2V4dGVuZHMiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI4RUFDQSxJQUFBQSxFQUFjQyxFQUFRLEtBRXRCLGlCQUFBRCxNQUFBLEVBQTRDRSxFQUFBQyxFQUFTSCxFQUFBLE1BT3JELElBQUFJLEVBQUEsQ0FBZUMsS0FBQSxFQUVmQyxlQVBBQSxFQVFBQyxnQkFBQUMsR0FFYVAsRUFBUSxFQUFSQSxDQUFpRUQsRUFBQUksR0FFOUVKLEVBQUFTLFNBQUFQLEVBQUFRLFFBQUFWLEVBQUFTLDZCQ2pCQSxJQUFBRSxFQUFhVixFQUFRLEtBQ3JCQyxFQUFBUSxRQUEyQlQsRUFBUSxFQUFSQSxFQUE2RCxJQUt4RlcsS0FBQSxDQUFjVixFQUFBQyxFQUFTLG1FQUErQ1EsRUFBK0JWLEVBQVEsTUFBa0Isd0JBQXlCLDBCQ054SkMsRUFBQVEsUUFBaUJULEVBQUFZLEVBQXVCLDJEQ0N4QyxJQUFBYixFQUFjQyxFQUFRLElBRXRCLGlCQUFBRCxNQUFBLEVBQTRDRSxFQUFBQyxFQUFTSCxFQUFBLE1BT3JELElBQUFJLEVBQUEsQ0FBZUMsS0FBQSxFQUVmQyxlQVBBQSxFQVFBQyxnQkFBQUMsR0FFYVAsRUFBUSxFQUFSQSxDQUEyREQsRUFBQUksR0FFeEVKLEVBQUFTLFNBQUFQLEVBQUFRLFFBQUFWLEVBQUFTLDZCQ2pCQVAsRUFBQVEsUUFBMkJULEVBQVEsRUFBUkEsRUFBdUQsSUFLbEZXLEtBQUEsQ0FBY1YsRUFBQUMsRUFBUyx1MkNBQXEyQyw0NEJDQTUzQyxJQUFNVyxFQUFRLENBQ1ZDLEtBQU0sQ0FDRkMsUUFBUyxRQUViQyxLQUFNLENBQ0ZDLFNBQVUsRUFDVkMsTUFBTyxJQUNQQyxTQUFVLElBQ1ZDLFNBQVUsSUFDVkMsT0FBUSxPQUVSQyxZQUFhLHFCQUVqQkMsTUFBTyxDQUNITixTQUFVLEVBQ1ZPLE9BQVEsU0FDUk4sTUFBTyxNQUdNTyxjQUNqQixTQUFBQSxFQUFZQyxHQUFNLElBQUFDLEVBQUEsbUdBQUFDLENBQUFDLEtBQUFKLElBQ2RFLEVBQUFHLEVBQUFELEtBQUFFLEVBQUFOLEdBQUFPLEtBQUFILEtBQU1ILEtBQ0RPLE1BQVEsQ0FDVEMsU0FBVSxNQUhBUCx3UEFEY1Esc0RBUXhCQyxFQUFPQyxFQUFJQyxHQUNYRCxJQUlKQyxFQUFTRixJQUFTLEVBQ2xCUCxLQUFLSCxNQUFNYSxRQUFRNUIsS0FBSyxDQUFFNkIsU0FBVUgsRUFBSUosTUFBTyxDQUFFSyw4Q0FFOUNHLEdBQ0gsSUFBTUMsRUFBWWIsS0FBS0gsTUFBTWlCLFNBQVNILFNBQVNJLE1BQU0sS0FBSyxHQUUxRCxPQURBQyxRQUFRQyxJQUFJSixFQUFZRCxHQUNqQkMsSUFBY0QsbUNBR2hCLElBQUFNLEVBQ3dDbEIsS0FBS0gsTUFBMUNRLEVBREhhLEVBQ0diLFNBQVVjLEVBRGJELEVBQ2FDLFVBQVdDLEVBRHhCRixFQUN3QkUsTUFBT0MsRUFEL0JILEVBQytCRyxLQUNwQyxPQUNJQyxFQUFBQyxFQUFBQyxjQUFBLFdBQVN4QyxNQUFPQSxFQUFNVSxNQUFPeUIsVUFBVSxhQUNuQ0csRUFBQUMsRUFBQUMsY0FBQSxXQUFTTCxVQUFXQSxHQUNoQkcsRUFBQUMsRUFBQUMsY0FBQSxVQUFLSixHQUNMRSxFQUFBQyxFQUFBQyxjQUFBLFNBQUlILEdBQ0pDLEVBQUFDLEVBQUFDLGNBQUEsV0FBU0wsVUFBVSxhQUNkZCwwQ0E5QkpULG1vQ0NuQkE2QixjQUNqQixTQUFBQSxFQUFZNUIsR0FBTSxtR0FBQUUsQ0FBQUMsS0FBQXlCLEdBQUF4QixFQUFBRCxLQUFBRSxFQUFBdUIsR0FBQXRCLEtBQUFILEtBQ1JILDBQQUZ3QlMsdURBTTlCLE9BQU9nQixFQUFBQyxFQUFBQyxjQUFDRSxFQUFBLEVBQURDLEVBQUEsR0FBWTNCLEtBQUtILE1BQWpCLENBQ0hzQixVQUFVLGdCQUNWQyxNQUFNLE9BQ05DLEtBQUsscUZBRUxDLEVBQUFDLEVBQUFDLGNBQUEsS0FBR3hDLE1BQU8sQ0FBQzRDLFdBQVksR0FBSUMsYUFBYyxJQUF6Qyx5REFDQVAsRUFBQUMsRUFBQUMsY0FBQSw4RUFDQUYsRUFBQUMsRUFBQUMsY0FBQSxPQUFLTCxVQUFVLFNBQVNuQyxNQUFPLENBQUM0QyxVQUFXLE1BQzNDTixFQUFBQyxFQUFBQyxjQUFBLGdCQUNBRixFQUFBQyxFQUFBQyxjQUFBLFVBQ0lGLEVBQUFDLEVBQUFDLGNBQUEsd0VBQ0FGLEVBQUFDLEVBQUFDLGNBQUEsK0JBRUpGLEVBQUFDLEVBQUFDLGNBQUEsZ0JBQ0FGLEVBQUFDLEVBQUFDLGNBQUEsVUFDSUYsRUFBQUMsRUFBQUMsY0FBQSwrRUFDQUYsRUFBQUMsRUFBQUMsY0FBQSx5REFFSkYsRUFBQUMsRUFBQUMsY0FBQSxnQkFDQUYsRUFBQUMsRUFBQUMsY0FBQSxVQUNJRixFQUFBQyxFQUFBQyxjQUFBLDhHQUNBRixFQUFBQyxFQUFBQyxjQUFBLGdGQUNBRixFQUFBQyxFQUFBQyxjQUFBLGdLQUVKRixFQUFBQyxFQUFBQyxjQUFBLGdCQUNBRixFQUFBQyxFQUFBQyxjQUFBLHVDQUNBRixFQUFBQyxFQUFBQyxjQUFBLG1LQWhDU0MiLCJmaWxlIjoiMTkuOGYxMjFjODguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXgubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXgubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4Lmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgZXNjYXBlID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzXCIpO1xuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudmFsdWVzIHtcXG4gIHdpZHRoOiA3NzFweDtcXG4gIGhlaWdodDogNDE0cHg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vaW1nL3ZhbHVlcy5wbmdcIikpICsgXCIpIG5vLXJlcGVhdCAwIDA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM5NDIwMDc4OTBhZDM3MDBkZDNmNjgxNDdiZWVjNTNmLnBuZ1wiOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4ubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4ubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1haW4ge1xcbiAgbGluZS1oZWlnaHQ6IDI7XFxufVxcbi5tYWluIGgyLFxcbi5tYWluIGgzLFxcbi5tYWluIGg0LFxcbi5tYWluIGg1LFxcbi5tYWluIGg2IHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgbWFyZ2luOiAxLjZlbSAwIDAuNmVtO1xcbiAgY29sb3I6ICMwZDFhMjY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4ubWFpbiBoMyB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMzJweDtcXG59XFxuLm1haW4gaDQge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4ubWFpbiB1bCxcXG4ubWFpbiBvbCxcXG4ubWFpbiBsaSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuLm1haW4gLnR2LW1lbnUtaXRlbSB7XFxuICBwYWRkaW5nLWxlZnQ6IDU5cHg7XFxufVxcbi5tYWluIGhyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IDU2cHggMDtcXG4gIGJhY2tncm91bmQ6ICNlYmVkZjA7XFxuICBib3JkZXI6IDA7XFxufVxcbi5tYWluIGJsb2NrcXVvdGUge1xcbiAgbWFyZ2luOiAxZW0gMDtcXG4gIHBhZGRpbmctbGVmdDogMC44ZW07XFxuICBjb2xvcjogIzY5N2I4YztcXG4gIGZvbnQtc2l6ZTogOTAlO1xcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjZWJlZGYwO1xcbn1cXG4ubWFpbiBlbSxcXG4ubWFpbiBjaXRlIHtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuLm1haW4gY2l0ZSB7XFxuICBjb2xvcjogIzkyOTI5MjtcXG4gIGZvbnQtc2l6ZTogOTAlO1xcbn1cXG4ubWFpbi1jb21wb25lbnQge1xcbiAgbWFyZ2luOiAwIDYwcHg7XFxuICB3aWR0aDogODAwcHg7XFxufVxcbi5tYWluLWNvbXBvbmVudCAuY29kZS13cmFwZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDhweCAycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuLm1haW4tY29tcG9uZW50IC5jb2RlLWRlbW8ge1xcbiAgcGFkZGluZzogMzVweCAzNXB4IDIwcHg7XFxufVxcbi5tYWluLWNvbXBvbmVudCAuY29kZS1kZW1vIC50di1idXR0b24ge1xcbiAgbWFyZ2luLXJpZ2h0OiA2OHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG59XFxuLm1haW4tY29tcG9uZW50IC5jb2RlLWRlbW8gLnR2LWJ1dHRvbi1ncm91cCAudHYtYnV0dG9uIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLm1haW4tY29tcG9uZW50IC5jb2RlLWJsb2NrLWNvbnRyb2wge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XFxuICBwYWRkaW5nLXRvcDogNnB4O1xcbiAgY29sb3I6ICMxZDFkMWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tYWluLWNvbXBvbmVudCAubGFuZ3VhZ2UtanN4IHByZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE1lbnUgfSBmcm9tICd0dmlydXMnO1xuaW1wb3J0ICcuL21haW4ubGVzcyc7XG5cbmNvbnN0IHN0eWxlID0ge1xuICAgIG1haW46IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnXG4gICAgfSxcbiAgICBsZWZ0OiB7XG4gICAgICAgIGZsZXhHcm93OiAwLFxuICAgICAgICB3aWR0aDogMjk5LCBcbiAgICAgICAgbWluV2lkdGg6IDI5OSxcbiAgICAgICAgbWF4V2lkdGg6IDI5OSxcbiAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG5cbiAgICAgICAgYm9yZGVyUmlnaHQ6ICcxcHggc29saWQgI2ViZWJlYidcbiAgICB9LFxuICAgIHJpZ2h0OiB7XG4gICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICBtYXJnaW46ICcwIDYwcHgnLFxuICAgICAgICB3aWR0aDogODAwXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2hpbGRyZW46IG51bGxcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBvbkNsaWNrKGluZGV4LCB0bywgb3Blbk1hcHMpe1xuICAgICAgICBpZighdG8pe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgb3Blbk1hcHNbaW5kZXhdID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goeyBwYXRobmFtZTogdG8sIHN0YXRlOiB7IG9wZW5NYXBzIH0gfSk7XG4gICAgfVxuICAgIG9wZW5lZChxdWVyeSl7XG4gICAgICAgIGNvbnN0IGN1cnJRdWVyeSA9IHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKVsyXTtcbiAgICAgICAgY29uc29sZS5sb2coY3VyclF1ZXJ5ICwgcXVlcnkpXG4gICAgICAgIHJldHVybiBjdXJyUXVlcnkgPT09IHF1ZXJ5O1xuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgdGl0bGUsIGRlc2MgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17c3R5bGUucmlnaHR9IGNsYXNzTmFtZT1cIm1haW4tc3BlY1wiPlxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cD57ZGVzY308L3A+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1haW4tYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgPC9zZWN0aW9uPiAgIFxuICAgICAgICApXG4gICAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9kZXNpZ24nO1xuXG5pbXBvcnQgJy4vaW5kZXgubGVzcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJ0c0RlbW8gZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPExheW91dCB7Li4udGhpcy5wcm9wc30gXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYWluLWFydHMtYm94XCJcbiAgICAgICAgICAgIHRpdGxlPVwi5Lq65paH5L2T6aqMXCJcbiAgICAgICAgICAgIGRlc2M9XCLlvZPnlKjmiLflnKjkvb/nlKjkuIDkuKrkuqflk4Hml7bvvIzlpoLmnpzku5bog73lvojpobrnlYXnmoTov5vooYzmk43kvZzojrflvpfmg7PopoHnmoTkv6Hmga/nmoTml7blgJnvvIzku5bmmK/kuI3kvJrlhbPms6jliLDkuqTkupLlkozkvZPpqoznmoTvvIzlj43ogIzlvZPku5bkuI3og73pobrnlYXkvb/nlKjku6Xlj4rojrflj5bkv6Hmga/ml7bvvIzmiY3kvJrlhbPms6jliLDkuqflk4HnmoTkuqTkupLkvZPpqozjgIJcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8cCBzdHlsZT17e21hcmdpblRvcDogLTE1LCBtYXJnaW5Cb3R0b206IDB9fT7orr7orqHkuI3lj6rmmK/lhbPkuY7lpb3nnIvvvIzmm7TlhbPkuY7lpb3nlKjjgILkuqflk4HkvZPpqoznmoTmj5DljYfog73lpJ/liqnlipvkuqflk4HkuJrnu6nnmoTlop7plb/vvIzorqnkuqflk4HkvZPpqowg5Y+v5bqmIOOAgeWPr+S8mOWMluOAgeWPr+ebkeaOp+OAgjwvcD5cbiAgICAgICAgICAgIDxjaXRlPuKAnElmIHlvdSBjYW5ub3QgbWVhc3VyZSBpdCwgeW91IGNhbm5vdCBpbXByb3ZlIGl0LuKAnSBMb3JkIEtlbHZpbjwvY2l0ZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFsdWVzXCIgc3R5bGU9e3ttYXJnaW5Ub3A6IDIwfX0+PC9kaXY+XG4gICAgICAgICAgICA8aDM+5LiA6Ie0PC9oMz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+MS7lpb3nmoTkvZPpqozmmK/mtqbniannu4bml6Dlo7DnmoTvvIzkuqflk4HnmoTorr7orqHkuI7njrDlrp7nlJ/mtLvnmoTop4Tlvovkv53mjIHkuIDoh7TvvIzorr7orqHogIXlupTor6XlpJrliIbmnpDnlKjmiLfooYzkuLrvvIzlubbov5DnlKjliLDlvZPkuIvnmoTorr7orqHlt6XkvZzkuK3jgII8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT4yLuaVtOS9k+mhtemdoueahOWFg+e0oOWSjOacuuaehOS/neaMgeS4gOiHtDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGgzPuS+v+aNtzwvaDM+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPjEu5YCf5Yqp6KGM5Li65YiG5p6Q44CB5Lq65bel5pm66IO944CB5aSn5pWw5o2u562J5LiA57O75YiX5pa55byP77yM6L6F5Yqp55So5oi35pyJ5pWI5Yaz562W44CB5YeP5bCR55So5oi36aKd5aSW5pON5L2c77yM5LuO6ICM6IqC55yB55So5oi36ISR5Yqb5ZKM5L2T5Yqb77yM6K6p5Lq65py65Lqk5LqS6KGM5Li65pu05L6/5o2344CCPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+Mi7lsL3lj6/og73orqnmk43kvZzmtYHnqIvnroDmtIHnm7Top4LvvIznlYzpnaLmuIXmmbDlj6/or7vvvIznm7Top4LnmoTkvKDpgJLnu5nnlKjmiLfkv6Hmga/vvIzlh4/lsJHnlKjmiLflrabkuaDmiJDmnKzjgII8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxoMz7nroDnuqY8L2gzPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT4xLuS/neaMgeWFi+WItu+8miDnlKjlsL3lj6/og73lsJHnmoTorr7orqHlhYPntKDkuqflk4HnmoTlvZPliY3lip/og73vvIzlh4/lsJHnoJTlj5Hlm6LpmJ/nmoTmiJDmnKzvvIzmj5Dpq5jnoJTlj5HmlYjnjofjgILmraPlpoIgQW50b2luZSBkZSBTdC5FeHVwZXJ5IOaJgOivtO+8muWujOe+juS4jeWcqOS6juaXoOS7peWkjeWKoO+8jOiAjOWcqOS6juaXoOWPr+WIoOWHj++8jOS4h+S6i+iOq+S4jeWmguatpOOAgjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjIu5aSN55So6KeE6IyD5qih54mI77yaIOi/kOeUqOeOsOacieeahOe7hOS7ti/mqKHmnb/miJbogIXoh6rooYzmir3osaHlj6/lpI3nlKjnmoTnu4Tku7Yv5qih5p2/77yM6IqC57qm5peg6LCT55qE6K6+6K6h5LiU5L+d5oyB57O757uf5LiA6Ie05oCn77yM5oqK5Yib6YCg5Yqb5LiT5rOo5Zyo5pyA6ZyA6KaB55qE5Zyw5pa544CCPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+My7kv53mjIHmoLjlv4Plip/og73vvJrkuI3mlq3nmoTlkJHova/ku7blop7liqDlip/og73mmK/kuI3lj6/mjIHnu63nmoTvvIzlop7liqDnmoTlhbHlip/og73otorlpJrvvIzlsLHotorpmr7lj5HnjrDnnJ/mraPlr7nnlKjmiLfmnInku7flgLznmoTmlrDlip/og73vvIzov5nmoLfnm7Lnm67mt7vliqDnmoTmlrDlip/og73ml6nmmZrkvJrmiJDkuLrlnoPlnL7lip/og73vvIzlkIzml7blop7liqDlpI3mnYLmgKfmhI/lkbPov5npgZfnlZnku6PnoIHotormnaXotormsonph43vvIzlr7zoh7Tkuqflk4Hnu7TmiqTmiJDmnKzotormnaXotorpq5jvvIzogIzkuJTkuZ/otormnaXotorpmr7ku6XngbXmtLvlupTlr7nluILlnLrlj5jljJbigJTigJTjgIrnroDnuqboh7PkuIrjgIsgR2lsZXMgQ29sYm9ybmU8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxoMz7mg4XmhJ88L2gzPlxuICAgICAgICAgICAgPHA+5o6o6I2Q44CK5oOF5oSf5YyW6K6+6K6h44CL4oCU4oCURG9uYWxkIEEuTm9ybWFuPC9wPlxuICAgICAgICAgICAgPHA+5oOF5oSf5YyW6K6+6K6h6ZyA6KaB6K6+6K6h5biI6IO95aSf5pyJ5oSP6K+G55qE5Y675oCd6ICD5q+P5LiA5Liq6K6+6K6h5bim57uZ55So5oi355qE5b+D6YeM5oSf5Y+X77yM5Lul5Y+K6IO95LiN6IO94oCc5pqW4oCd5Yiw55So5oi344CC5rWF5bGC5qyh55qE6ZS754K85Y+v5Lul5LuO5paH5qGI44CB6KeG6KeJ6KGo546w5ZKM5Zy65pmv5Ye65Y+R77yM6ICM5pu05rex5bGC5qyh55qE5oOF5oSf5YyW5YiZ6ZyA6KaB5LuO5Lqn5ZOB55qE5pW05L2T5L2T6aqM55qE6KeS5bqm5Ye65Y+R77yM5Y675oCd6ICD5Lqn5ZOB6IO95aSf5bim57uZ55So5oi355qE5Lu35YC85ZKM5oSf5Y+X44CCPC9wPlxuICAgICAgICA8L0xheW91dD5cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9