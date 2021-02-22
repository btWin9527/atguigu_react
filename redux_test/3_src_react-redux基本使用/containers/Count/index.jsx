// 引入connect连接ui组件与redux
import CountUI from '../../components/Count'
import {connect} from 'react-redux';
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from "../../redux/count_action";

// 向ui组件注入数据
/*
	1.mapStateToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapStateToProps用于传递状态
*/
function mapStateToProps(state) {
  return {
    count: state
  }
}

// 向ui组件注入操作方法
/*
	1.mapDispatchToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapDispatchToProps用于传递操作状态的方法
*/
function mapDispatchToProps(dispatch) {
  return {
    increment: (data) => { // 通知redux执行加法
      dispatch(createIncrementAction(data))
    },
    decrement: (data) => {
      dispatch(createDecrementAction(data))
    },
    asyncIncrement: (data, time) => {
      dispatch(createIncrementAsyncAction(data, time))
    }
  }
}

// 使用connect()()创建并暴露一个Count容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
