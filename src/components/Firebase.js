import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyBFJN1ko2ihfCztNd8cb9pUea_49LTboVw",
    authDomain: "todo-with-firebase-53443.firebaseapp.com",
    databaseURL: "https://todo-with-firebase-53443-default-rtdb.firebaseio.com",
    projectId: "todo-with-firebase-53443",
    storageBucket: "todo-with-firebase-53443.appspot.com",
    messagingSenderId: "1066507723288",
    appId: "1:1066507723288:web:6454469c69decd19bb596d",
    measurementId: "G-2XDDZNXS64"
  };
  const app = initializeApp(firebaseConfig)
  export const db = getDatabase(app);
export  const Auth = getAuth(app)