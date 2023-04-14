import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {auth} from '../firebase'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
     meta:{
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
    component: ()=>import('../views/ContactUs.vue'),
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
    path:'/LajmetQendrore',
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
<<<<<<< HEAD
    {
      path:'/AddPost',
      name:"add-post",
      component:()=>import('../views/AddPost.vue')
    },
    {
      path:'/ListPost',
      name:"ListPost",
      component:()=>import('../views/ListPost.vue')
    },
    {
      path:'/post/:id',
      name:"post",
      component:()=>import('../views/SinglePost.vue')
    },
    {
      path:'/edit-post/:id',
      name:"edit-post",
      component:()=>import('../views/EditPost.vue')
    }
=======

    {
      path: '/create',
      name: 'Create',
      component: () =>
        import('../views/Create.vue'),
    },
    {
      path: '/update/:id',
      name: 'Update',
      component: () =>
        import( '../views/Update.vue'),
    },
   
>>>>>>> 6e3eee412d46b5e524931645e73f7b89fe998186
    
    
    
  
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