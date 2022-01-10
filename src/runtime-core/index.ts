// 导出的出口文件
import { nextTick } from './scheduler';
// h 就是去调用我们的创建虚拟节点
export { h } from "./h"

export { renderSlots } from './helpers/renderSlots'

export { createTextVNode } from './vnode'

export { getCurrentInstance } from '../runtime-core/component'

export { provide, inject } from './apiInject';

export { createRenderer } from './renderer';

export { nextTick } from './scheduler';