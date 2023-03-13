<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <td>Titulli</td>
                        <td>Foto</td>
                        <td>Autori</td>
                        <td>Permbajtja</td>
                        <td>DataPostimit</td>
                        <td>category</td>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="blog in blogu" :key="blog._id">
                        <td>{{ blog.Titulli }}</td>
                        <td>{{ blog.Foto }}</td>
                        <td>{{ blog.Autori }}</td>
                        <td>{{ blog.Permbajtja }}</td>
                        <td>{{ blog.DataPostimit }}</td>
                        <td>{{ blog.category }}</td>
                         <td>
                <router-link
                :to="{ name: 'BlogEditComponent', params: { id: blogu._id } }"
                class="btn btn-success"
                >Edit
              </router-link>  
         

 

               <button
                @click.prevent="deleteBlogus(blog._id)"
                class="btn btn-danger"
              >
                Delete
              </button> 
            </td> 
                    </tr>
                </tbody>
            </table>

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
  methods: {
    deleteBlogus(id) {
      let apiURL = `http://localhost:4000/api/delete-blogu/${id}`;
      let indexOfArrayItem = this.blogu.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.blogu.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

  
  },
};
</script>


<style>
.btn-success {
  margin-right: 10px;
}
</style>
