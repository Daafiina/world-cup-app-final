import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {auth} from '../firebase'

import Products from "../views/ProductsPage.vue";
import CreateProduct from "../views/CreatePage.vue";
//import Listprod from "../views/ListProd.vue";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,  meta:{
      requiresAuth:true
    }
  },
  {
    path: '/AboutView',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta:{
      requiresAuth:true
    }

  },
  {
    path:'/login',
    name:'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path:'/register',
    name:'register',
    component: () => import('../views/RegisterView.vue')
  },
  
  {
    path: '/ContactUs',
    name:'Contact us',
    component: ()=>import('../views/Home/Contact.vue'),
    meta:{
      requiresAuth:true
    }
  },


  {
    path:'/BlogListComponent',
    name:'BlogListComponent',
    component:()=>import('../components/BlogListComponent.vue'),
    meta: { requiresAuth: true, roles: ['Admin']}
  },
  
  
  {
    path:'/BlogCreateComponent',
    name:'BlogCreateComponent',
    component:()=>import('../components/BlogCreateComponent.vue')
  },
  {
    path:'/BlogEditComponent',
    name:'BlogEditComponent',
    component:()=>import('../components/BlogEditComponent.vue')
  },
  {
    path:'/ ',
    name:'LajmetQendrore',
    component:()=>import('../components/LajmetQendrore.vue')
  },
  { 
  path:'/FanellatCreateComponent',
  name:'FanellatCreateComponent',
  component:()=>import('../components/FanellatCreateComponent.vue')
},
{ 
path:'/FanellatListComponent',
name:'FanellatListComponent',
component:()=>import('../components/FanellatListComponent.vue')
},
{ 
  path:'/FanellatEditComponent',
  name:'FanellatEditComponent',
  component:()=>import('../components/FanellatEditComponent.vue')
  },
  { 
    path:'/ShitjaFanellave',
    name:'ShitjaFanellave',
    component:()=>import('../components/ShitjaFanellave.vue')
    },
    {
      path:'/AddPost',
      name:"add-post",
      component:()=>import('../views/AddPost.vue')
    },
    {
      path:'/ListPost',
      name:"ListPost",
      component:()=>import('../views/ListPost.vue'),
      meta: { requiresAuth: true}
    },
    {
      path:'/post/:id',
      name:"post",
      component:()=>import('../views/SinglePost.vue'),
      meta: { requiresAuth: true, roles: ['Admin']}

    },
    {
      path:'/edit-post/:id',
      name:"edit-post",
      component:()=>import('../views/EditPost.vue'),
      meta: { requiresAuth: true, roles: ['Admin']}
    },
    {
      path: '/users',
      name: 'Users',
      component: () =>
        import( '../components/UsersManage.vue'),
        meta: { requiresAuth: true, roles: ['Admin']}

    },
    
    {
      path: "/products",
      name: "products",
      component: Products,
    },
    {
      path: "/CreatePage",
      name: "CreatePage",
     //meta: {
       // isAdmin: true,
     // },
      component: CreateProduct,
    },

    {
      path:'/ListProd',
      name:"ListProd",
      component:()=>import('../views/ListProd.vue')
    },

    
/*
    {
      path: "/list-product",
      name: "LitProduct",
     // meta: {
       // isAdmin: true,
     // },
      component: Listprod,
    },
   
  */
    
    
  
]


const router = createRouter({
  history: createWebHistory(),
  routes,
});


const userId = localStorage.getItem('userId')
const userRole = localStorage.getItem('userRole')


router.beforeEach((to) => {
  if (to.matched.some(record => record.meta.requiresAuth)){
    const roles = to.meta.roles || ''

    if (userId == null) {
      router.push('/login')
    }
    else if(roles == ''){
      return;
    }
    else if (!roles.includes(userRole)){
      alert("Access denied! You'll be redirected to homepage")
      router.push('/')}
    else{
      return;
    }

}
})

export default router;