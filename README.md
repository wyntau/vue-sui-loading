## vue-sui-loading

> Vue 2.x port of sui $.{showIndicator,hideIndicator,showPreloader,hidePreloader}

### Install

```
npm install vue-sui-loading
```

### Usage

```js
import Vue from 'vue';
import vueSuiLoading from 'vue-sui-loading';

Vue.use(vueSuiLoading);

new Vue({
    el: '#container',
    methods: {
        showIndicator(){
            this.$showIndicator();
            // this.$hideIndicator();
        },
        showPreloader(){
            this.$showPreloader();
            // this.$hidePreloader();
        }
    }
});
```

### APIs

- $showIndicator()
- $hideIndicator()
- $showPreloader([title])
- $hidePreloader()

### Thanks To

- [SUI-Mobile](https://github.com/sdc-alibaba/SUI-Mobile)

### License

MIT
