import Vue from "vue";
import Message from "./index.vue";

export default function create(Component, props) {
  // 方式一：
  // 使用vue.extend
  const constructor = Vue.extend({
    render(h) {
      return h(Component, { props });
    },
  });
  const vm = new constructor().$mount();

  // 方式二：借鸡生蛋
  // const vm = new Vue({
  //   render(h) {
  //     return h(Component, { props });
  //   },
  // }).$mount(); // $mount()本质上是将vdom转换成dom

  document.body.appendChild(vm.$el);

  // 删除实例
  const comp = vm.$children[0];
  comp.remove = () => {
    document.body.remove(comp);
    vm.$destroy();
  };
  return comp;
}

export const message = (props) => {
  // 方式一：
  // 使用vue.extend
  const constructor = Vue.extend({
    render(h) {
      return h(Message, { props });
    },
  });
  const vm = new constructor().$mount();

  // 方式二：借鸡生蛋
  // const vm = new Vue({
  //   render(h) {
  //     return h(Component, { props });
  //   },
  // }).$mount(); // $mount()本质上是将vdom转换成dom

  document.body.appendChild(vm.$el);

  // 删除实例
  const comp = vm.$children[0];
  comp.remove = () => {
    document.body.remove(comp);
    vm.$destroy();
  };
  return comp;
};
