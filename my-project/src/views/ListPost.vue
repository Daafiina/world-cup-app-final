<template>

    <!-- <v-container>
        <v-row>
            <v-col sm="4" class =" pa-3" v-for="post in posts" :key="post._is">
                <v-card>asd
                    <v-img :src="`/${post.image}`"></v-img>
                    <v-btn class = "ml-4 mt-3">{{ post.category }}</v-btn>

                    <v-card-title class="headline">{{ post.title }}</v-card-title>

                    <v-card-text class = "py-0">
                        <p>{{ post.content.substring(0,100) + "..." }}</p>
                        </v-card-text>
                </v-card>
            </v-col>
        </v-row>


    </v-container> -->
    <div class="container">
      <div v-if="$route.params.message" class="alert alert-success alert-dismissible fade show" role="alert">
  {{ $route.params.message }}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
      <h1>Postimet e fundit</h1>

    <div class="row no-gutters" >
      <div v-for="post in posts" :key="post._id" class="col-sm-4 p-3">
        <router-link :to="{name:'post', params:{id:post._id}}" class="text-decoration-none" style="color:black">
        <div class="card" >
          <div class="imazi">
          <img :src="`http://localhost:4000/${post.image}`"  class="card-img-top mx-auto"  >
        </div>
       
          <div class="card-body text-left">
            <h4 class="card-title">{{ post.title.substring(0,40) + "..." }}</h4>
            <button class="btn btn-primary btn-block  mt-0 mb-0">-<b>{{ post.category }}</b></button><br>

            <label class="form-label mb-0 mt-3"><b>Kontenti:</b></label>
            <p class="card-text">{{ post.content.substring(0,200) + "..." }}</p>
          </div>
        </div>
      </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import API from '../api'
export default {
    name:"ListPost",
    data(){
        return{
            posts:[],
        };
    },
    async created(){
      console.log("HINI")
        this.posts = await API.getAllPost();
    }
}
</script>
















