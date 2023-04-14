<template>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h3 class="text-center">Update Blogun</h3>
        <form @submit.prevent="handleUpdateForm">
          <div class="form-group">
            <label>Titulli</label>
            <input
              type="text"
              class="form-control"
              v-model="blogu.Titulli"
              required
            />
          </div>
  
          <div class="form-group">
            <label>Foto</label>
            <input
              type="string"
              class="form-control"
              v-model="blogu.Foto"
              required
            />
          </div>
  
          <div class="form-group">
            <label>Autori</label>
            <input
              type="text"
              class="form-control"
              v-model="blogu.Autori"
              required
            />
          </div>
          
          <div class="form-group">
            <label>Permbajtja</label>
            <input
              type="text"
              class="form-control"
              v-model="blogu.Permbajtja"
              required
            />
          </div>

          <div class="form-group">
            <label>DataPostimit</label>
            <input
              type="text"
              class="form-control"
              v-model="blogu.DataPostimit"
              required
            />
          </div>

          <div class="form-group">
            <label>category</label>
            <input
              type="text"
              class="form-control"
              v-model="blogu.category"
              required
            />
          </div>

          <div class="form-group">
            <button class="btn btn-danger btn-block">Update</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";

  export default {
    data() {
      return {
        blogu: {},
      };
    },
    async created() {
         let apiURL = `http://localhost:4000/api/edit-blogu/${this.$route.params.id}`;
       axios.get(apiURL).then((res) => {
         console.log(res.data);
         this.blogu = res.data;
        
       });

     
    },
    methods: {
      handleUpdateForm() {
        let apiURL = `http://localhost:4000/api/update-blogu/${this.$route.params.id}`;
  
        axios
          .put(apiURL, this.blogu)
          .then((res) => {
            console.log(res );
            this.$router.push("/BlogListComponent");
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
  </script>
  