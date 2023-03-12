import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { auth } from  '../firebase'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      requireAuth:true
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
      requireAuth:true
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
      requireAuth:true
    }
  },
  {
    path:'/BlogListComponent',
    name:'BlogListComponent',
    component:()=>import('../components/BlogListComponent.vue')
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
  name:'FanellatEdit',
  component:()=>import('../components/FanellatEditComponent.vue')
  }
  
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.path=== '/login' && auth.currentUser){
    next('/')
    return;
  }
  if(to.matched.some(record => record.meta.requireAuth)&& !auth.currentUser){
    next('/login')
    return;
  }

  next();

})

export default router
