(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.vueSuiLoading = global.vueSuiLoading || {})));
}(this, (function (exports) { 'use strict';

(function(){ if(document){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .vue-sui-indicator-overlay, .vue-sui-indicator-overlay * { box-sizing: border-box; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); -webkit-touch-callout: none; } .vue-sui-indicator-overlay { position: fixed; top: 0; left: 0; bottom: 0; right: 0; z-index: 10600; } .vue-sui-indicator-modal{ position: absolute; top: 50%; left: 50%; margin-left: -25px; margin-top: -25px; background: rgba(0, 0, 0, 0.8); z-index: 11000; border-radius: 5px; padding: 8px; } .vue-sui-indicator{ display: block; width: 34px; height: 34px; -webkit-transform-origin: 50%; transform-origin: 50%; -webkit-animation: preloader-spin 1s steps(12, end) infinite; animation: preloader-spin 1s steps(12, end) infinite; } .vue-sui-indicator:after{ display: block; content: \"\"; width: 100%; height: 100%; background-position: 50%; background-size: 100%; background-repeat: no-repeat; background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\"); } @-webkit-keyframes preloader-spin { 100% { -webkit-transform: rotate(360deg); } } @keyframes preloader-spin { 100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); } } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

































































var IndicatorDefine = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.shown)?_c('div',{staticClass:"vue-sui-indicator-overlay"},[_vm._m(0)]):_vm._e()},staticRenderFns: [function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-sui-indicator-modal"},[_c('span',{staticClass:"vue-sui-indicator"})])}],
  data: function data(){
    return {
      shown: false
    };
  },
  methods: {
    show: function show(){
      this.shown = true;
    },
    hide: function hide(){
      this.shown = false;
    }
  }
};

(function(){ if(document){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .vue-sui-preloader-overlay, .vue-sui-preloader-overlay * { box-sizing: border-box; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); -webkit-touch-callout: none; } .vue-sui-preloader-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 10600; background-color: rgba(0, 0, 0, 0.4); opacity: 1; } .vue-sui-preloader-overlay.v-enter-active{ background-color: rgba(0, 0, 0, 0.4); opacity: 1; transition-property: opacity; transition-duration: .4s; } .vue-sui-preloader-overlay.v-enter{ opacity: 0; } .vue-sui-preloader-overlay.v-leave-active{ opacity: 0; transition: opacity .4s; } .vue-sui-preloader-modal { width: 270px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); opacity: 1; padding: 15px; background: #e8e8e8; border-radius: 7px; } .vue-sui-preloader-overlay.v-enter-active .vue-sui-preloader-modal { transform: translate(-50%, -50%); opacity: 1; transition-property: transform opacity; transition-duration: .4s; } .vue-sui-preloader-overlay.v-enter .vue-sui-preloader-modal{ opacity: 0; transform: translate(-50%, -50%) scale(1.185); } .vue-sui-preloader-overlay.v-leave-active .vue-sui-preloader-modal { transform: translate(-50%, -50%) scale(0.815); opacity: 0; transition-property: transform opacity; transition-duration: .4s; } .vue-sui-preloader-modal-title { font-weight: 500; font-size: 18px; text-align: center; } .vue-sui-preloader-modal-text{ margin-top: 5px; text-align: center; } .vue-sui-preloader{ display: inline-block; width: 34px; height: 34px; -webkit-transform-origin: 50%; transform-origin: 50%; -webkit-animation: preloader-spin 1s steps(12, end) infinite; animation: preloader-spin 1s steps(12, end) infinite; } .vue-sui-preloader:after{ display: block; content: \"\"; width: 100%; height: 100%; background-position: 50%; background-size: 100%; background-repeat: no-repeat; background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\"); } @-webkit-keyframes preloader-spin { 100% { -webkit-transform: rotate(360deg); } } @keyframes preloader-spin { 100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); } } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();


















































































































var PreloaderDefine = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',[(_vm.shown)?_c('div',{staticClass:"vue-sui-preloader-overlay"},[_c('div',{staticClass:"vue-sui-preloader-modal"},[_c('div',{staticClass:"vue-sui-preloader-modal-title"},[_vm._v(_vm._s(_vm.title))]),_c('div',{staticClass:"vue-sui-preloader-modal-text"},[_c('div',{staticClass:"vue-sui-preloader"})])])]):_vm._e()])},staticRenderFns: [],
  data: function data(){
    return {
      title: '加载中',
      shown: false
    };
  },
  methods: {
    show: function show(){
      this.shown = true;
    },
    hide: function hide(){
      this.shown = false;
    }
  }
};

function createMount(type){
  var mount = document.createElement('div');
  mount.id = "vue-sui-" + type + "-" + (Date.now());
  document.body.appendChild(mount);
  return mount;
}

function install(Vue){
  var IndicatorComponent = Vue.extend(IndicatorDefine);
  var PreloaderComponent = Vue.extend(PreloaderDefine);

  var indicatorInstance;
  var preloaderInstance;

  Vue.prototype.$showIndicator = function(){
    if(!indicatorInstance){
      indicatorInstance = new IndicatorComponent();
      var mount = createMount('indicator');
      indicatorInstance.$mount(mount);
    }

    indicatorInstance.show();
  };
  Vue.prototype.$hideIndicator = function(){
    if(!indicatorInstance){
      return;
    }
    indicatorInstance.hide();
  };

  Vue.prototype.$showPreloader = function(title){
    if ( title === void 0 ) title = '加载中';

    if(!preloaderInstance){
      preloaderInstance = new PreloaderComponent();
      var mount = createMount('preloader');
      preloaderInstance.$mount(mount);
    }

    preloaderInstance.title = title;
    preloaderInstance.show();
  };
  Vue.prototype.$hidePreloader = function(){
    if(!preloaderInstance){
      return;
    }
    preloaderInstance.hide();
  };
}

if(typeof window !== 'undefined' && window.Vue){
  window.Vue.use(install);
}

exports['default'] = install;

Object.defineProperty(exports, '__esModule', { value: true });

})));
