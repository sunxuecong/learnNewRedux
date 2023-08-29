const initial = {
  supNum:10,
  oppNum:0,
  num:5
}
export default function voteReducer(state = initial,action){
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
  return state
} 
