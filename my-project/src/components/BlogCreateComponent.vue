<template>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h3 class="text-center">Create New Blog</h3>
        <form @submit.prevent="handleSubmitForm">
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
              type="text"
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
              type="date"
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
            <button class="btn btn-danger btn-block">Create</button>
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
        blogu: {
            Titulli: "",
            Foto: "",
            Autori: "",
            Permbajtja:"",
            DataPostimit: "",
            category:"",
        },
      };
    },
    methods: {
      handleSubmitForm() {
        let apiURL = "http://localhost:4000/api/create-blogu";
  
        axios
          .post(apiURL, this.blogu)
          .then(() => {
            this.$router.push("/BlogListComponent");
            this.blogu = {
                Titulli: "",
            Foto: "",
            Autori: "",
            Permbajtja:"",
            DataPostimit: "",
            category:"",
            };
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
  </script>
  