// 引入connect连接ui组件与redux
import CountUI from '../../components/Count'
import {connect} from 'react-redux';
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from "../../redux/count_action";

// 映射状态
const mapStateToProps = (state) => ({count: state})

// 映射操作状态的方法 对象写法配置
const mapDispatchToProps = {
  increment: createIncrementAction,
  decrement: createDecrementAction,
  asyncIncrement: createIncrementAsyncAction
}

// 使用connect()()创建并暴露一个Count容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
