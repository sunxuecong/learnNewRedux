import { Button } from 'antd';
import React,{useContext} from 'react';
import ThemeContext from '../ThemeContext'

const VoteFooter = ()=>{
  const {store} = useContext(ThemeContext)
  return (
    <div>
    <Button type='primary' onClick={()=>{
      // store
      store.dispatch({
        type:'VOTE_SUP',
      })
    }}>支持</Button>
    <Button type='primary' danger onClick={()=>{
      store.dispatch({
        type:'VOTE_OPP'
      })
    }}>反对</Button>
  </div>
  )
}
export default VoteFooter