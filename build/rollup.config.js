import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';

export default {
  entry: 'src/vue-sui-loading.js',
  dest: 'dist/vue-sui-loading.js',
  format: 'umd',
  moduleName: 'vueSuiLoading',
  exports: 'named',

  plugins: [
    vue({
      compileTemplate: true,
      css: true
    }),
    buble()
  ]
}
