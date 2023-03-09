<template>
  <nav v-if="$store.state.user">
    <HeaderComp/>
    <!-- <FooterComp/> -->
  </nav>
  <router-view/>
</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import HeaderComp from './components/HeaderComp.vue'
// import FooterComp from './components/FooterComp.vue'
// import BlogListComponent from'./components/BlogListComponent.vue';



export default {
  components:{
    HeaderComp,
    // FooterComp
    // BlogListComponent
  },
  setup(){
    const store = useStore()

    onBeforeMount(()=>{
      store.dispatch('fetchUser')
    })
    // return{
    //   user:store.state.user
    }
  }


</script>

<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px;

  
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;

  
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
