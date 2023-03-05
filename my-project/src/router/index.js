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
