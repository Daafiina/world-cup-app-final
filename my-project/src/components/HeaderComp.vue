<template>
    <nav class="bg-gray-800">
     <div class="relative flex h-16 items-center justify-between">
       <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
         <!-- Mobile menu button-->
         <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
           <span class="sr-only">Open main menu</span>
           <!--
             Icon when menu is closed.
 
             Menu open: "hidden", Menu closed: "block"
           -->
           <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
             <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
           </svg>
           <!--
             Icon when menu is open.
 
             Menu open: "block", Menu closed: "hidden"
           -->
           <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
             <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
           </svg>
         </button>
       </div>
       <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
         <div class="flex flex-shrink-0 items-center">
           <img id="icon" class="hidden h-8 w-auto lg:block" src="../assets/img/world-cup.png" alt="Your Company">
         </div>
         <div id="navitems"  class="hidden sm:ml-6 sm:block">
           <div class="flex space-x-4" id="links" >
            <!-- <li class="navitems" v-for="item in navItems" v-bind:key="item.path">

              <router-link v-bind:to="item.path"  class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page" id="font">{{ item.name }}</router-link> -->
              <!-- Current: "bg-gra
              y-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <li  v-if="user">
              <router-link to="/">Home</router-link></li>
              <li v-if="user">
              <router-link to="/AboutView">About Us</router-link></li>
              <li v-if="user">
              <router-link to="/ContactUs">Contact us</router-link></li>
              <router-link v-if="isUser" to="/ListPost">Lajmet</router-link>


              <router-link v-if="isAdmin" to="/AddPost">Shto Lajme</router-link>


              <li v-if="isUser"><router-link to="/user">User Page</router-link></li>

              
              

             <!-- <a href="" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page" id="font" ><router-link to="/">Home</router-link></a>
 
             <a href="../views/AboutView.vue" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" id="font"><router-link to="/AboutView">About us</router-link></a>
 
             <a href="../views/ContactUs.vue" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" id="font"><router-link to="/ContactUs">Contact us</router-link></a>
 
             <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"  id="font">Calendar</a>  -->
            <!-- </li> -->
         

            </div>         
         </div>
       </div>
       <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
         <button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
           <span class="sr-only">View notifications</span>
           <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
             <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
           </svg>
         </button>
 
         <!-- Profile dropdown -->
         <div class="relative ml-3">
           <div>
             <button type="button" class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
               <span class="sr-only">Open user menu</span>
               
             </button><img class="h-8 w-8 rounded-full" src="../assets/img/person.jpg" height="100px" alt="">
           </div>
 
           <!--
             Dropdown menu, show/hide based on menu state.
 
             Entering: "transition ease-out duration-100"
               From: "transform opacity-0 scale-95"
               To: "transform opacity-100 scale-100"
             Leaving: "transition ease-in duration-75"
               From: "transform opacity-100 scale-100"
               To: "transform opacity-0 scale-95"
           -->
           <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
             <!-- Active: "bg-gray-100", Not Active: "" -->
             <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0" style="color:green">Your Profile<span class="nav-link active px-3">{{ user.email }} </span></a>
             <p v-if="isUser" style="color:red">Role: User</p>
             <p v-if="isAdmin" style="color:red;">Role: Admin</p>

             <button class="btn btn-danger px-3" @click="handleClick" style="paddding-top: 50px;">Logout</button>
           </div>
         </div>
       </div>
     </div>
   
 
   <!-- Mobile menu, show/hide based on menu state. -->
   <!-- <div class="sm:hidden" id="mobile-menu">
     <div class="space-y-1 px-2 pt-2 pb-3">
        Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" 
       <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
 
       <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
 
       <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
 
       <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
     </div>
   </div> -->
 </nav>
 </template>
 
 
 <script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  data(){
    return{
      title:'FIFA',
      navItems:[
        {path: '/', name:'Home'},
        {path:'/AboutView', name:'About'},
        {path:'/Contactus', name:'Contact'},
        {path:'/AddPost', name:'Create Post'}
        
      ],
      userRole: localStorage.getItem('userRole')
    }
  },
  computed: {
  isAdmin() {
    return this.$store.state.userRole === 'Admin'
  },
  isUser() {
    return this.$store.state.userRole === 'User'
  }
},

  setup() {
    const store = useStore()
    

    const handleClick = () => {
      store.dispatch('logout')
    }



    return {
      handleClick,
      user: computed(() => store.state.user),
      authIsReady: computed(() => store.state.authIsReady)
    }
  },
   name: 'HeaderComp' 
 }
 
 </script>
 
 <style>

   #icon{
     height: 70px;
     font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   }

   #links{
    align-content: space-between;
    gap: 2rem;
    padding: 50px;
    padding-left: 10rem;
   }

   #font{
    font-size: 14px;
    
   }

  .title{
    font-family: "Lucida Console", "Courier New", monospace;
    font-size: 1.5rem;
    font-weight: 100;
    color:bisque;
    position:absolute;
    margin-left: 3.7rem;
   }

   #navitems{
    list-style-type: none;
   }
   nav a {
    font-weight: 500 !important;
    color: white ;
    text-decoration: none !important;
    font-family: rubik !important;
}
nav a:active{
  color: red !important;
}
 </style>