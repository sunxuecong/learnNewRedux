// personal要派发的行为对象管理
// personalAction包含好多方法，每一个方法执行都要返回派发的行为对象
import * as types from '../reducer/action-types'

const personalAction = {
  support() {
    return {
      type: types.VOTE_SUP
    }
  },
  oppose(){
    return {
      type:types.VOTE_OPP
    }
  }
}
export default personalAction
