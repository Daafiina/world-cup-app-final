// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRa7Oh9nl46zUf9jB6RFpfLytiMQdV-uY",
  authDomain: "vue-auth-proj-3444d.firebaseapp.com",
  projectId: "vue-auth-proj-3444d",
  storageBucket: "vue-auth-proj-3444d.appspot.com",
  messagingSenderId: "61718751280",
  appId: "1:61718751280:web:911f96212f4e8c83e8a5f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);//cili firebase e kemi konektu ja dergojm app ne rastin ton

export { auth }