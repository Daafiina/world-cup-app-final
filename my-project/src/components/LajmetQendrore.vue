<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col" v-for="blog in blogu" :key="blog._id">
      <div class="card h-100">
        <img :src="blog.Foto" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ blog.Titulli }}</h5>
          <p class="card-text">{{ blog.Permbajtja }}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">{{ blog.Autori }}</small>
          <small class="text-muted float-right">{{ blog.DataPostimit }}</small>
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
      blogu: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api";
    axios
      .get(apiURL)
      .then((res) => {
        console.log(res.data);
        this.blogu = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
.card {
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s;
}

.card:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>
