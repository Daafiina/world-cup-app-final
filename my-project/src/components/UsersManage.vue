<template>
    <div class="col-md-12">
      <table class="table table-striped">
        <thead class="table-warning" style="border-radius: 20px;border: solid 2px bisque;color: darkred">
          <tr>
            <th>User Id</th>
            <th>Role</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.role }}</td>
            
            <td>
              <button class="btn btn-danger"  @click="userDelete(user.id)">Delete User</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
import { collection, getDocs, doc, deleteDoc} from "firebase/firestore";
import { db } from "../firebase/index";


  
export default {
    data() {
      return {
        users: [],

      }
    },
    created() {


     const getUsers = async () => {
  const usersCollection = collection(db, "users");
  const querySnapshot = await getDocs(usersCollection);
  const users = [];

  querySnapshot.forEach(async (doc) => {
    const data = doc.data();
    const user = {
      id: doc.id,
      role: data.role,
   
    };

    if(user.role == 'User' || user.role=="Admin"){
  

    users.push(user);}
  });

  return users;
};

    // Call getUsers function and log the users
    getUsers().then((users) => {
    console.log(users);
    this.users = users;
    }).catch((error) => {
    console.log(error);
    });
    },
    methods:{
        async userDelete(userId) {
          try {
            const userRef = doc(db, "users", userId);
            await deleteDoc(userRef);
            const updatedUsers = this.users.filter((user) => user.id !== userId);
            this.users = updatedUsers;
            console.log(`User with ID ${userId} has been deleted`);
          } catch (error) {
            console.error(error);
          }
        },
      },
    }


  </script>