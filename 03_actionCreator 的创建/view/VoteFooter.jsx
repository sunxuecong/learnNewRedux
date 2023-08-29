import { Button } from 'antd';
import React,{useContext} from 'react';
import ThemeContext from '../ThemeContext'
import action from '../store/action'

// 从目前来看，此工程化步骤，不仅没有啥好处，反而让之前的操作更麻烦了!!！
// 之前每次派发，把派发的行为对象直接写出来即可！！
// 现在，还需要把派发的行为对象，放到store/actions的某个版块下，靠方法
// 执行们才能返回我们需要的行为对象！！
// 此操作的意义，我们称之为 创建actionCreator，在我们接下来，处理react-redux


const VoteFooter = ()=>{
  const {store} = useContext(ThemeContext)
  return (
    <div>
    <Button type='primary' onClick={()=>{
      store.dispatch(action.vote.support())
    }}>支持</Button>
    <Button type='primary' danger onClick={()=>{
      store.dispatch(action.vote.oppose())
    }}>反对</Button>
  </div>
  )
}
export default VoteFooter