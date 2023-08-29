import React from 'react'
import {connect} from 'react-redux'


class VoteMain extends React.Component {
  render (){
    let {supNum,oppNum} = this.props
    return  (
      <div>
        <div>支持人数: {supNum}</div>
        <div>反对人数: {oppNum}</div>
      </div>
    );
  }
}
export default connect(state =>state.vote)(VoteMain)
