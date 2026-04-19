// app.js

import { app } from "./firebase.js";
import { observeUser } from "./auth.js";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const db = getFirestore(app);

let currentUser = null;
let userData = { progress: 0, premium: false };

observeUser(async(user)=>{
  if(user){
    currentUser = user;

    const ref = doc(db, "users", user.uid);
    const snap = await getDoc(ref);

    if(snap.exists()){
      userData = snap.data();
    } else {
      await setDoc(ref, userData);
    }

    updateUI();
  }
});

window.completeLesson = async function(){
  userData.progress += 20;
  if(userData.progress > 100) userData.progress = 100;

  await setDoc(doc(db, "users", currentUser.uid), userData);
  updateUI();
}

function updateUI(){
  document.getElementById("progressText").innerText =
    userData.progress + "%";

  document.getElementById("bar").style.width =
    userData.progress + "%";
}

window.canAccessLesson = function(index){
  if(index > 2 && !userData.premium){
    alert("Upgrade to premium");
    return false;
  }
  return true;
}