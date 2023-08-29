/**
 * 把各模块的 action 合并为一个 action
 */
import personalAction from "./personalAction";
import voteAction from "./voteAction";

const action = {
  vote:voteAction,
  personal:personalAction
}
export default action

