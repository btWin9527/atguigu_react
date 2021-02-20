// 引入createStore
import {createStore} from 'redux'
import countReducer from './count_reducer'

// 创建并暴露store
export default createStore(countReducer)
