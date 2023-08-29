import React,{useContext,useEffect,useState} from 'react'
import VoteFooter from './VoteFooter'
import VoteMain from './VoteMain'
import ThemeContext from '../ThemeContext'

const Box1 = function Box1(){
  const {store}= useContext(ThemeContext)
  const {oppNum,supNum} = store.getState()
  
  // 组件第一次渲染完成之后,把能让组件更新的方法放入store 的事件池
  let [num,setNum]= useState(0)
  const update = ()=>{
    setNum(num + 1)
  }

  useEffect(()=>{
    console.log(store);
    // let unsubscribe = store.subscribe(让组件更新的方法)
    // + 把让组件更新的方法放在store 的事件池
    // +返回的unsubscribe方法执行，可以把刚才放入事件池中的方法移除掉
    let unsubscribe = store.subscribe(update)
    return ()=>{
      unsubscribe()
    }
  },[num])

  return (
    <div>
      <h2>react是一个很棒的前端框架</h2>
      <h2>{oppNum + supNum}</h2>
      <VoteMain></VoteMain>
      <VoteFooter></VoteFooter>
    </div>
  )
}


export default Box1