 import  { createStore }from 'redux'
 import reducer from './reducer'
 
/**
 * 创建一个 store 容器
 */
 const store = createStore(reducer)
 export default store