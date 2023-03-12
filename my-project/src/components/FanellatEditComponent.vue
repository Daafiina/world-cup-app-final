<template>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h3 class="text-center">Update Fanellat</h3>
        <form @submit.prevent="handleUpdateForm">
          <div class="form-group">
            <label>Titulli</label>
            <input type="text" class="form-control" v-model="fanellat.Foto" required />
          </div>
  
          <div class="form-group">
            <label>Foto</label>
            <input type="string" class="form-control" v-model="fanella.Shteti" required />
          </div>
  
          <div class="form-group">
            <label>Autori</label>
            <input type="text" class="form-control" v-model="fanellat.Cmimi" required />
          </div>
  
          <div class="form-group">
            <label>Madhesia</label>
            <select class="form-control" v-model="fanellat.Madhesite" required>
              <option value="">Selekto Madhesine</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XL">XXL</option>
            </select>
          </div>
  
          <div class="form-group">
            <label>Gjinia</label>
            <select class="form-control" v-model="fanellat.Gjinia" required>
              <option value="">Selekto gjinine</option>
              <option value="M">Meshkuj</option>
              <option value="F">Femra</option>
            </select>
          </div>
  
          <div class="form-group">
            <label>Data Postimit</label>
            <input type="text" class="form-control" v-model="fanellat.DataPostimit" required />
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
        fanellat: {},
      };
    },
    created() {
      let apiURL = `http://localhost:5000/api/edit-fanellat/${this.$route.params.id}`;
      axios.get(apiURL).then((res) => {
        console.log(res.data);
        this.fanellat = res.data;
      });
    },
    methods: {
      handleUpdateForm() {
        let apiURL = `http://localhost:5000/api/update-fanellat/${this.$route.params.id}`;
  
        axios
          .put(apiURL, this.fanellat)
          .then((res) => {
            console.log(res);
            this.$router.push("/FanellatListComponent");
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
  </script>
  