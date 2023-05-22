import React, { useContext, useState } from "react";
import UiContext from "../../../UiContext";
import { Auth, db } from "../../../components/Firebase";
import {  ref, update} from "firebase/database";
import './updateTodo.scss'

const UpdateTodo = ({ Todo , uid}) => {
  const { closeModal , setTost} = useContext(UiContext);
  const [isEditable, setIsEditTable] = useState(false);
  const [updateTodo, setUpdate] = useState(Todo);
  const cancle = () => {
    setIsEditTable(false);
    closeModal();
  };
  const updateingTodo = (e) =>{
    setUpdate(e.target.value)

  }
  const handleupdateTodo = () =>{
    if(updateTodo === ''){
      setTost(
        {
            message:'can not leave empty',
            type:'warning'
        }
    )

    }else{
    update(ref(db, `/${Auth.currentUser.uid}/${uid}`), {
        todo: updateTodo,
        tempUidd: uid
      }).then(()=>{
        setTost(
            {
                message:'updated succssfully',
                type:'info'
            }
        )
        
      });
      closeModal()
      }
  
  }
  return (
    <div className="container-update">
      {!isEditable ? (
        <>
          <div>Are you sure you wanna update {Todo}</div>
          <div className="btn-container">
            <button onClick={() => setIsEditTable(true)} className='button-1'>yes</button>
            <button onClick={cancle} className='button-3'>cancle</button>
          </div>
        </>
      ) : (
        <div>
          <div>
            <input type="text" placeholder="Enter todo for update" 
             value={updateTodo}
             onChange={updateingTodo}
             className='input'
             />
          </div>
          <div className="btn-container"> 
            <button onClick={handleupdateTodo}  className='button-1'>update</button>
            <button onClick={cancle}  className='button-3'>cancle</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateTodo;
