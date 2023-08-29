import { Button } from 'antd';
import React from 'react';
import action from '../store/action'
import {connect}from 'react-redux'

const VoteFooter = (props)=>{
  let {support,oppose} =  props
  return (
    <div>
    <Button type='primary' onClick={support}>支持</Button>
    <Button type='primary' danger onClick={oppose}>反对</Button>
  </div>
  )
}
export default connect(null,action.vote)(VoteFooter)
//下面是标准写法
// export default connect(
//   null,
//   dispatch=>{
//     return {
//       support(){
//         dispatch(action.vote.support())
//       },  
//       oppose(){
//         dispatch(action.vote.oppose())
//       }
//     }
//   }
// )(VoteFooter)




/*
 * connect(mapStateToProps,mapDispatchToProps)(我们要渲染的组件)
 *   2.mapDispatchToProps 必须派发的任务,当做属性传给组件
 *     connect(
 *        null,
 *        dispatch=>{
 *        //dispatch:store.dispatch       
 * 
 *        //返回对象的信息会作为属性传给组件。
 *        return {
 *          ...
 *        }
 *      }
 *     )(VoteFooter ) 
 * 
 */