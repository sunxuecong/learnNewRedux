 import logger from 'redux-logger'
 import thunk from 'redux-thunk'
import {configureStore} from '@reduxjs/toolkit'
import taskSlice from './features/taskSlice'


/**
 * 创建一个 store 容器
 */
 const store = configureStore({
   reducer:{
    //各模块按切片管理
    task:taskSlice
    

    
   },
   // 使用中间件「如果我们不指定任何中间件，则默认集成了reduxThunk；但是一但设置，会整体替换默认值，需要手动指定'redux-thunk
   middleware:[logger,thunk]
  }
  )
 export default store