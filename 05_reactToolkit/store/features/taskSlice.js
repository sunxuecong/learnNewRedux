// TASK 板块下的切片 每个切片包含 reducer和 action-creator
import {createSlice}from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const taskSlice = createSlice({
  // 设置切片的名字
  name:'task',
  // 设置此切片reducer中的初始状态
  initialState:{
    taskList:null
  },
  // 编写不同业务逻辑下对公共状态的更改
  reducers:{
    getAllTaskList (state,action){
      // state: redux 中的公公共状态信息，基于 immer 库管理，无需自己克隆了
      // action：派发的行为对象，我们无需考虑行为标识问题,传递的其他信息,都是以action.payload传递
      state.taskList = action.payload
    },
    removeTask(state,{payload}){
      let taskList = state.taskList
      if(!Array.isArray(taskList))return 
    }
  }
   
})

//从切换中获取actioncreator：此处解构的方法和上面reducers中的方法，仅仅是函数名相同
export let {getAllTaskList} = taskSlice.actions


//实现异步派发
export const getAllTaskListAsync = ()=>{
  return async  dispatch =>{
    let list = []
    // let res = await api.getList(0)
    // if(res.code == 0){
    //   list = res.data
    // }
    dispatch(getAllTaskList())
  }
}




console.log('getAllTaskList',getAllTaskList);
export default taskSlice.reducer