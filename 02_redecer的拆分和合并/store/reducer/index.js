// 合井各个模块的reducer,最后创建出一个总的reducer
// 此时容器中的公共状态,会按照我们设置的成员名字,分模块进来管理
// state = {
//   vote: {
//     supNum: 10,
//     ppNum: 5 ,
//     num:0
//   },
//   person:{
//      info:{}
//   }
// } 
import voteReducer from './vote.js'
import personalReducer from "./personalReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  vote:voteReducer,
  person:personalReducer,
});
export default reducer;
  