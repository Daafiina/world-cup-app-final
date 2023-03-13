<template>
    <div>
      <div class="row">
        <div v-for="fanella in fanellat" :key="fanella._id" class="col-md-3">
          <div class="card mb-4" style="background-color: #F5F5F5">
            <img class="card-img-top"  src="https://www.tfcfootball.com.my/wp-content/uploads/2022/09/DN0687-100.png" alt="Fanella">
            <div class="card-body">
              <h5 class="card-title" style="color: #696969">{{ fanella.Shteti }}</h5>
              <p class="card-text" style="color: #FFA500">{{ fanella.Cmimi }} €</p>
              <p class="card-text">{{ fanella.Madhesite }}</p>
              <p class="card-text">{{ fanella.Gjinia }}</p>
            </div>
            <div class="card-footer">
           <a href=""><button class="btn btn-primary" style="background-color:green">Bli tani</button></a>  
            </div>
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
        fanellat: [],
      };
    },
    created() {
      let apiURL = "http://localhost:4000/api/fanellat";
      axios
        .get(apiURL)
        .then((res) => {
          console.log(res.data);
          this.fanellat = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  };
  </script>
  <style>
  .card {
    width: 18rem;
    margin: 1rem;
    border-radius: 20px;
    box-shadow: 0px 0px 10px #B0C4DE;
  }
  
  .card-img-top {
    height: 10rem;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
  
  .card-title {
    font-size: 1.5rem;
  }
  
  .card-text {
    font-size: 1.2rem;
  }
  
  .btn-primary {
    width: 100%;
    background-color: #FFA500;
    border-color: #FFA500;
  }
  
  .btn-primary:hover {
    background-color: #FF8C00;
    border-color: #FF8C00;
  }
  </style>