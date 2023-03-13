<template>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h3 class="text-center mb-0">Create New Fanella</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="handleSubmitForm">
              <div class="form-group">
                <label>Foto e fanelles</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="fanellat.Foto"
                  required
                />
              </div>
  
              <div class="form-group">
                <label>Fanella e Shtetit</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="fanellat.Shteti"
                  required
                />
              </div>
  
              <div class="form-group">
                <label>Cmimi</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">€</span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    v-model="fanellat.Cmimi"
                    required
                  />
                </div>
              </div>
              <div class="form-group">
                <label>Madhesite</label>
                <select class="form-control" v-model="fanellat.Madhesite" required>
                  <option value="">Zgjidh Madhesine</option>
                  <option v-for="size in sizes" :key="size" :value="size">{{ size }}</option>
                </select>
              </div>
              <div class="form-group">
                <label>Gjinia</label>
                <select class="form-control" v-model="fanellat.Gjinia" required>
                  <option value="">Zgjidh Gjinine</option>
                  <option value="mashkull">Mashkull</option>
                  <option value="femer">Femer</option>
                </select>
              </div>
  
              <div class="form-group">
                <button class="btn btn-primary btn-block">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        fanellat: {
          Foto: "",
          Shteti: "",
          Cmimi: "",
          Madhesite: "",
          Gjinia: "",
        },
        sizes: ["S", "M", "L", "XL", "XXL"],
      };
    },
    methods: {
      handleSubmitForm() {
        let apiURL = "http://localhost:4000/api/create-fanellat";
  
        axios
          .post(apiURL, this.fanellat)
          .then(() => {
            this.$router.push("/FanellatListComponent");
            this.fanellat = {
              Foto: "",
              Shteti: "",
              Cmimi: "",
              Madhesite: "",
              Gjinia: "",
            };
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    margin-top: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
  
  
   </style>