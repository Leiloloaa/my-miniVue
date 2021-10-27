import { h } from '../../lib/my-miniVue.esm.js';

window.self = null;
export const App = {
    // 必须要写 render
    render() {
        window.self = this;
        // ui
        return h(
            'div', {
                id: 'root',
                class: ['red', 'hard']
            },
            // 直接使用 this
            // 思想思路：将 setup 的返回值绑定到 render 函数
            'hi,' + this.msg
            // string
            // "hi, mini-vue"
            // Array
            // [h('p', { class: 'red' }, 'hi'), h('p', { class: 'blue' }, 'mini-vue')]
        );
    },

    setup() {
        return {
            msg: 'mini-vue'
        };
    }
};