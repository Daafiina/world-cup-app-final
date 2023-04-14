<template>
<div class="container">
  <div class="row no-gutters">
    <div class="col-sm-10 mx-auto py-4">
      <div class="card px-2">
        <img :src="`http://localhost:4000/${post.image}`" class="card-img-top mx-auto" >

        <div class="card-actions pb-0">
          <div class="row mt-1 mx-1">
            <div class="col-sm-2">
              <button class="btn btn-sm btn-outline-primary" style="margin-right:100%;">{{ post.category }}</button>
            </div>

            <div class="col-sm-10 d-flex justify-content-end">
              <!-- <button class="btn btn-success" text :to="{ name: 'edit-post', params: { id: post._id }}">Edit</button> -->
              <router-link class="btn btn-success" :to="{ name: 'edit-post', params: { id: post._id }}">Edit</router-link>

              <button class="btn btn-danger" style="margin-left:2%;" @click="removePost(post._id)">Delete</button>
            </div>
          </div>
        </div>

        <div class="card-subtitle mt-2 text-left">
          <h3>{{ post.title }}</h3>
        </div>

        <div class="card-text text-secondary text-left">
          <p>{{ post.content }}</p>
          <p>{{ post.created }}</p>
        </div>
      </div>
    </div>
  </div>
</div>

</template>


<script>
    import API from '../api'

export default{
    data(){
        return{
            post:{},
        };
    },

    async created(){
        const response = await API.getPostByID(this.$route.params.id);
        this.post = response;
    },
    methods:{
        async removePost(id){
            const response = await API.deletePost(id);
            this.$router.push({name:'ListPost', params:{message:response.message}})
        }
    }
}
</script>