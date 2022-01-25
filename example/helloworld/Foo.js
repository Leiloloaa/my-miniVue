import { h } from '../../lib/mini-vue3.esm.js';

export const Foo = {
  setup(props) {
    console.log(props.count);
    // props 是不可以被修改的 shallowReadonly
  },

  render() {
    return h('div', {}, 'foo:' + this.count);
  }
};
