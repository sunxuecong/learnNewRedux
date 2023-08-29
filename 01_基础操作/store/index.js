 import  { createStore }from 'redux'

 /**
  * 管理员:修改 store容器中的公共状态 
  */
 let initial = {
  supNum:10,
  oppNum:5
 }
const reducer  = function reducer(state = initial,action){
  //state: 储存store 容器中的公共状态,[最开始没有的时候，赋值初始状态值initial]
  //action: 每一次基于dipatch派发的时候，传递进来的行为对象 [要求必须具备 Type属性，储存派发的行为标识]
  //为了接下来的操作中，我们操作state，不会直接修改容器中的状态 「要等到最后return的时候」，我们需要先克隆
  state = {...state}
  switch (action.type) {
    case 'VOTE_SUP':
      state.supNum++
      break;  
    case 'VOTE_OPP':
      state.oppNum++
      break;
    default:
      break;
  }

  // return的内容会整体替换 storer容器中内容
  return state
}

// store.dispatch({
//   type:'VOTE_SUP',
//   step:10
// })

/**
 * 创建一个 store 容器
 */
 const store = createStore(reducer)
 export default store