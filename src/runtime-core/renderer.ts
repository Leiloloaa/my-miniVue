import { isObject } from "../shared/index"
import { createComponentInstance, setupComponent } from "./component"

export function render(vnode, container) {
  // 只需要调用 patch 方法
  // 方便后续的递归处理
  patch(vnode, container)
}

function patch(vnode: any, container: any) {
  // TODO 去处理组件
  // 判断什么类型
  // 是 element 那么就应该去处理 element
  // 如何区分是 element 还是 component 类型???
  // console.log(vnode.type);
  // object 是 component
  // div 是 element

  // debugger

  if (typeof vnode.type === 'string') {
    processElement(vnode, container)
  } else if (isObject(vnode.type)) {
    processComponent(vnode, container)
  }
}

function processElement(vnode, container) {
  // 初始化
  mountElement(vnode, container)
}

function processComponent(vnode: any, container: any) {
  // 挂载组件
  mountComponent(vnode, container)
}

function mountComponent(vnode, container) {
  // 创建组件实例
  // 这个实例上面有很多属性
  const instance = createComponentInstance(vnode)

  // 初始化
  setupComponent(instance)

  // 调用 render 函数
  setupRenderEffect(instance, container)
}

function setupRenderEffect(instance, container) {
  // 虚拟节点树
  const subTree = instance.render()

  // vnode -> patch
  // vnode -> element -> mountElement

  patch(subTree, container)
}


function mountElement(vnode: any, container: any) {
  // const el = document.createElement("div")
  // string 或 array
  // el.textContent = "hi , minivue"
  // el.setAttribute("id", "root")
  // document.body.append(el)
  const el = document.createElement(vnode.type)
  const { children } = vnode
  if (typeof children === "string") {
    el.textContent = children
  } else if (Array.isArray(children)) {
    mountChildren(children, el)
  }
  // props
  const { props } = vnode
  for (const key in props) {
    const val = props[key]
    el.setAttribute(key, val)
  }
  container.append(el)
}

function mountChildren(vnode, container) {
  vnode.forEach((v) => {
    patch(v, container)
  })
}