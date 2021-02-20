import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App";
import store from "./redux/store";

ReactDOM.render(<App/>, document.getElementById('root'))

// 全局监听store变化
store.subscribe(() => {
  ReactDOM.render(<App/>, document.getElementById('root'))
})
