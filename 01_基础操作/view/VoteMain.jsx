import React, {useContext,useEffect,useState} from 'react'
import ThemeContext from "../ThemeContext";



class VoteMain extends React.Component {
  static contextType= ThemeContext

  render (){
    const {store} = this.context
    let {supNum,oppNum} = store.getState()
    return  (
      <div>
        <div>支持人数: {supNum}</div>
        <div>反对人数: {oppNum}</div>
      </div>
    );
  }
  //组件第一次渲染完毕，把“让组件更新的办法”，基于 store.subscribe放入到事件池中！！
  // 类组件，让组件更新，有更简单的操作：
  //直接基于 forceUpdate 强制更新即可！
  componentDidMount(){
    const {store} = this.context
    store.subscribe(()=>{
      this.forceUpdate()
    })
  }
}
export default VoteMain;
