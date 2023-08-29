import React from 'react'
import VoteMain from './VoteMain'
import { connect } from 'react-redux'

const Box1 = function Box1(props){
  return (
    <div>
      <h2>任务列表总条数</h2>
      <VoteMain></VoteMain>
    </div>
  )
}

export default Box1
// export default connect(state =>{
//     return {
//       sumNum:state.vote.sumNum
//     }
// })(Box1)
/***
 * connect(mapStateToProps,mapDispatchToProps)(我们要渲染的组件)
 *    mapStateToProps可以获取 redux 中的公共状态，把需要的信息作为属性，传递给即可
 *     connect(state =>{
 *        //存储 redux中,所有模块的公共状态信息
 *        //返回对象中的信息,就是要作为属性，传给组件的信息
 *        return {
 *          supNum:state.vote.supNum
 *        }
 *    })(Box1) 
 */