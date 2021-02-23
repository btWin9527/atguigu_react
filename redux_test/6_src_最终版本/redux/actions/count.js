/*
* 该文件专门为Count组件生成action对象
* 异步action 返回函数
* 同步action 返回对象
* */
import {INCREMENT, DECREMENT} from "../constant";
// 同步action
export const increment = (data) => ({type: INCREMENT, data})

export const decrement = (data) => ({type: DECREMENT, data})

// 异步action( 异步action中一般会调用同步action)
export const incrementAsync = (data, time) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment(data)); // 通知redux加data
    }, time)
  }
}
