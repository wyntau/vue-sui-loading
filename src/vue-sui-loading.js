import IndicatorDefine from './indicator.vue';
import PreloaderDefine from './preloader.vue';

function createMount(type){
  let mount = document.createElement('div');
  mount.id = `vue-sui-${type}-${Date.now()}`;
  document.body.appendChild(mount);
  return mount;
}

export default function install(Vue){
  const IndicatorComponent = Vue.extend(IndicatorDefine);
  const PreloaderComponent = Vue.extend(PreloaderDefine);

  let indicatorInstance;
  let preloaderInstance;

  Vue.prototype.$showIndicator = function(){
    if(!indicatorInstance){
      indicatorInstance = new IndicatorComponent();
      let mount = createMount('indicator');
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

  Vue.prototype.$showPreloader = function(title = '加载中'){
    if(!preloaderInstance){
      preloaderInstance = new PreloaderComponent();
      let mount = createMount('preloader');
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
