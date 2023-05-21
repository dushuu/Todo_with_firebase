import React, { useEffect, useState , useContext } from "react";
import "./Todo.scss";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { Auth, db } from "../../../components/Firebase";
import { useNavigate } from "react-router-dom";
import { onValue, ref, set , remove} from "firebase/database";
import { uid } from "uid";
import UiContext from "../../../UiContext";
import TodoDelte from "./TodoDelte";
import UpdateTodo from "./updateTodo";

const Todo = () => {
  const {setToast , openModal} = useContext(UiContext)
  const [Todo, setTodo] = useState("");
  const [loading , setLoading] =useState(false)
  const [tododata, setTodoData] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    console.log(tododata);
    Auth.onAuthStateChanged((user) => {
      if (user) {
        // read
        onValue(ref(db, `/${Auth.currentUser.uid}`), (snapshot) => {
          setTodoData([]);
          snapshot.forEach((item) => {
            const data = item.val();
            setTodoData((oldArray) => [...oldArray, data]);
          });
        });
      } else if (!user) {
        navigate("/");
      }
    });
  }, []);
  const handleLogout = () => {
    signOut(Auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const handleTodo = () => {
    const uidd = uid();
    if(Todo === ''){
      setToast({
        message:'Please write your work then add it',
        type:'warning'
      })
      return
    }else{
    set(ref(db, `${Auth.currentUser.uid}/${uidd}`), {
      todo: Todo,
      uid: uidd,
    }).then(()=>{
      setToast({
        message:'new todo added',
        type:'info'
      })
    });
  }

    setTodo("");
  };
  const handleDeleteTodoModal = (uid) =>{
    const Modal = () => <TodoDelte uid={uid}/>

    openModal(()=> Modal)

  }

  const handleupdateTodoModal = (todo) =>{
    const Modal = () => <UpdateTodo Todo={todo.todo} uid={todo.uid}/>
    openModal(()=>Modal)
  }

  Auth.onAuthStateChanged((user) => {
    if (!user) {
      return null;
    }
  });
  return (
    <div className="Todo-container">
      <div>
        <h3>Add your goals</h3>
      </div>
      <div className="Todolist-box">
        <div className="input-box">
          <input
            placeholder="Enter your work"
            type="text"
            className="input"
            value={Todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <div className="btn-container">
            <button className="btn" onClick={handleTodo}>
              Add
            </button>
            <button
              className="btn"
              style={{ background: "#dc4117", color: "white" }}
              onClick={handleLogout}
            >
              Log out
            </button>
          </div>
        </div>
        <div className="Todo-list">
          {tododata.map((item) => {
            return (
              <div key={item.uid}>
                <h1>{item.todo}</h1>
                <button onClick={()=>handleDeleteTodoModal(item.uid)} >Delete</button>
                <button onClick={()=>handleupdateTodoModal(item)}>update</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
