// 引入createStore
import {createStore, applyMiddleware} from 'redux'
// 引入redux-thunk用于支持异步action
import thunk from 'redux-thunk'
// 引入工具插件
import {composeWithDevTools} from 'redux-devtools-extension';

import reducers from './reducers/index'

// 创建并暴露store
export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
