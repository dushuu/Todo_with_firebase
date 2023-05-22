import React,{useContext} from 'react'
import { onValue, ref, set , remove} from "firebase/database";
import { Auth ,db } from '../../../components/Firebase';
import UiContext from '../../../UiContext';
import './Delete.scss'

const TodoDelte = ({uid}) => {
    const { closeModal } = useContext( UiContext )

    const handleDeleteTodo = ()=>{
        remove(ref(db,`/${Auth.currentUser.uid}/${uid}`)).then(()=>{
            closeModal()
        }).catch((err)=>{
            console.log(err)
        })
        
    
      }
  return (
    <div className='container-delete'>
    
    <div>
      <h4>Are you sure you wanna remove this todo </h4></div>
    <div className='btn-container'>
    <button onClick={handleDeleteTodo} className='button-1'>confirm</button>
    <button onClick={closeModal} className='button-3'>cancle</button>
    </div>
    </div>
  )
}

export default TodoDelte