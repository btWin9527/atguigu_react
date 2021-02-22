/*
* Reducers 指定了应用状态的变化如何响应 actions 并发送到 store 的，记住 actions 只是描述了有事情发生了这一事实，并没有描述应用如何更新 state
* 1. 该文件是用于创建一个为Count组件服务的reducer, reducer的本质是一个函数
* 2. reducer函数会接到两个参数，分别为：之前的状态preState,动作对象action ({type,data} = action)
* */
import {INCREMENT, DECREMENT} from "./constant";

const initState = 0; // 初始状态值

export default function countReducer(preState = initState, action) {
  const {type, data} = action;
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default: // 默认返回初始值
      return preState;
  }
}
