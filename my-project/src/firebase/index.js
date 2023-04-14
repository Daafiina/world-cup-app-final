// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_iJaABFAdsEuTKgvX8q7MqEEpWBqyCkU",
  authDomain: "world-cup-final-9c097.firebaseapp.com",
  projectId: "world-cup-final-9c097",
  storageBucket: "world-cup-final-9c097.appspot.com",
  messagingSenderId: "718597841328",
  appId: "1:718597841328:web:439ab45b697a635760f675"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);//cili firebase e kemi konektu ja dergojm app ne rastin ton
const db=getFirestore(app);
export { auth,db }