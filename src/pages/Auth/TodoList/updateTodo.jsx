import React, { useContext, useState } from "react";
import UiContext from "../../../UiContext";
import { Auth, db } from "../../../components/Firebase";
import {  ref, update} from "firebase/database";

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
  return (
    <>
      {!isEditable ? (
        <>
          <div>Are you sure you wanna update {Todo}</div>
          <div>
            <button onClick={() => setIsEditTable(true)}>yes</button>
            <button onClick={cancle}>cancle</button>
          </div>
        </>
      ) : (
        <div>
          <div>
            <input type="text" placeholder="Enter todo for update" 
             value={updateTodo}
             onChange={updateingTodo}/>
          </div>
          <div>
            <button onClick={handleupdateTodo}>update</button>
            <button onClick={cancle}>cancle</button>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateTodo;
