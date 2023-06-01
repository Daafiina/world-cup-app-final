// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB_iJaABFAdsEuTKgvX8q7MqEEpWBqyCkU",
//   authDomain: "world-cup-final-9c097.firebaseapp.com",
//   projectId: "world-cup-final-9c097",
//   storageBucket: "world-cup-final-9c097.appspot.com",
//   messagingSenderId: "718597841328",
//   appId: "1:718597841328:web:439ab45b697a635760f675"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth=getAuth(app);//cili firebase e kemi konektu ja dergojm app ne rastin ton
// const db=getFirestore(app);
// export { auth,db }


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_LJrCw4OmyimsyoR-siO5oKYkjhsQN2Q",
  authDomain: "worldcupfinal2.firebaseapp.com",
  projectId: "worldcupfinal2",
  storageBucket: "worldcupfinal2.appspot.com",
  messagingSenderId: "325174073497",
  appId: "1:325174073497:web:498cf5e574ea1aa3914008"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);//cili firebase e kemi konektu ja dergojm app ne rastin ton
const db=getFirestore(app);
export { auth,db }

