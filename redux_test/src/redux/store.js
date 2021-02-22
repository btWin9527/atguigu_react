// 引入createStore
import {createStore, applyMiddleware, combineReducers} from 'redux'
// 引入redux-thunk用于支持异步action
import thunk from 'redux-thunk'
import countReducer from './reducers/count'
import personReducer from './reducers/person'

// 汇总reducer
const allReducer = combineReducers({
  count: countReducer,
  person: personReducer
});
// 创建并暴露store
export default createStore(allReducer, applyMiddleware(thunk))
