import React,{useContext} from 'react'
import { onValue, ref, set , remove} from "firebase/database";
import { Auth ,db } from '../../../components/Firebase';
import UiContext from '../../../UiContext';

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
    <>
    <div>Are you sure you wanna remove this todo</div>
    <button onClick={handleDeleteTodo}>confirm</button>
    <button onClick={closeModal}>cancle</button>
    </>
  )
}

export default TodoDelte