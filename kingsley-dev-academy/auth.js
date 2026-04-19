// auth.js

import { app } from "./firebase.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const auth = getAuth(app);

window.signup = function(){
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(()=> alert("Account created"))
    .catch(e=> alert(e.message));
}

window.login = function(){
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(()=> alert("Logged in"))
    .catch(e=> alert(e.message));
}

window.logout = function(){
  signOut(auth);
}

export function observeUser(callback){
  onAuthStateChanged(auth, callback);
}