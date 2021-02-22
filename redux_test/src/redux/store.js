// 引入createStore
import {createStore, applyMiddleware} from 'redux'
import countReducer from './count_reducer'
// 引入redux-thunk用于支持异步action
import thunk from 'redux-thunk'
// 创建并暴露store
export default createStore(countReducer, applyMiddleware(thunk))
