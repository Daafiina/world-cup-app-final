import { createStore } from 'vuex'
import router from '@/router'
import axios from 'axios';


// firebase imports
import { auth, db } from '../firebase/index'
import { doc, setDoc, getDoc } from "firebase/firestore"; 

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

const store = createStore({
  state: {
    user: null,
    authIsReady: false,
    userRole: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      localStorage.setItem('userId', state.user.uid)
      localStorage.setItem('userRole', state.userRole)
      console.log('user state changed:', state.user)

      // Get user's data from Firestore collection
      const userRef = doc(db, 'users', state.user.uid);
      getDoc(userRef)
        .then((doc) => {
          if (doc.exists()) {
            // Extract user's role from data
            state.userRole = doc.data().role;
            console.log('user role:', state.userRole);
            localStorage.setItem('userRole', state.userRole)
          } else {
            console.log('user not found');
          }
        })
        .catch((error) => {
          console.log('error getting user data:', error);
        });
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload
    }
  },
  actions: {
    async signup(context, { email, password, pickedRole }) {
      console.log('signup action')
    
      const res = await createUserWithEmailAndPassword(auth, email, password)
      if (res) {
        const user = res.user
        var roli = pickedRole; 

        const adminEmails = ['admin1@example.com', 'dafina@ubt-uni.net']
        console.log()
        if (adminEmails.includes(email)){
          roli = "Admin";
        }
        else{
          roli = pickedRole;
        }
        // Add user role
        await setDoc(doc(db, `users/${user.uid}`), {
          role: roli
        }, { merge: true })
        // Commit user to store
        context.commit('setUser', user)
      } else {
        throw new Error('could not complete signup')
      }
    },
    async login(context, { email, password }) {
      console.log('login action')
      

      const res = await signInWithEmailAndPassword(auth, email, password)
      if (res) {
        context.commit('setUser', res.user)
        console.log("Alloooo")
        router.push({ path: '/' })


          var lastLogin = {
            userId: res.user.uid,
            lastLoginTime: new Date()
          }
  
          // var userId = res.user.uid
          // axios.get('http://localhost:4000/api/getMyLastLogin', { params: { userId } })
          // .then(response => {
          //   console.log("A po e merr last login?")
          //   console.log(response.data)
          //   if(response.data.at(0) == null){
          //     let apiURL = 'http://localhost:4000/api/create-lastLogin';
          //     axios.post(apiURL, lastLogin).then(() => {
          //       console.log(lastLogin)
          //     })
          //   }
          //   else{
          //     var JobPosts = []
          //     var count = 0
          //     var jobCategory = ''
          //     var loginId = response.data.at(0)._id
          //     var lastLoginTime = response.data.at(0).lastLoginTime
          //     var freelancerId = lastLogin.userId
  
          //     let apiiURL = 'http://localhost:4000/api/getMyFreelancerDetails';
          //     axios.get(apiiURL, { params: { freelancerId } })
          //     .then(response => {
          //       jobCategory = response.data.at(0).jobCategory
          //       console.log("kategoria jem "+ jobCategory)
  
          //       axios.get('http://localhost:4000/api/getSuggestedJobs', { params: { jobCategory } })
          //         .then(response => {
          //           console.log("suggested posts" + response.data)
          //           JobPosts = response.data
  
          //           JobPosts.forEach(jobPost => {
          //             const creationDatetime = jobPost.creationDate;
          //             console.log("last cr datetime" + creationDatetime)
          //             console.log(lastLoginTime)
          //             if (creationDatetime > lastLoginTime) {
          //               count++                    
          //             }
          //           });
    
          //           if(count == 1){
          //             alert("There is " + count + " new jobpost for " + jobCategory);
          //           }
          //           else if(count > 1){
          //             alert("There are " + count + " new jobposts for " + jobCategory);
          //           }
    
          //           let updateURL = `http://localhost:4000/api/update-lastLogin/${loginId}`;
          //           axios.put(updateURL, lastLogin).then((res) => {
          //               console.log(res)
          //           })

          //           location.reload(true)
          //         })
          //       })
          //   }
          // })
          // .catch(error => {
          //   console.log(error)
          // })
          
      } else {
        throw new Error('could not complete login')
      }
    },
    async logout(context) {
      console.log('logout action')
      localStorage.removeItem('userId')
      localStorage.removeItem('userRole')
      router.push({ path: '/login' })

      await signOut(auth)
      context.commit('setUser', null)
      router.push({ path: '/login' })

    }
  }
})

// wait until auth is ready
const unsub = onAuthStateChanged(auth, (user) => {
  store.commit('setAuthIsReady', true)
  store.commit('setUser', user)
  unsub()
})


// export the store
export default store