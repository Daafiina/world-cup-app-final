<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <td>Foto</td>
                        <td>Shteti</td>
                        <td>Cmimi</td>
                        <td>Madhesite</td>
                        <td>Gjinia</td>
                        
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="fanella in fanellat" :key="fanella._id">
                        <td>{{ fanella.Foto }}</td>
                        <td>{{ fanella.Shteti }}</td>
                        <td>{{ fanella.Cmimi }}</td>
                        <td>{{ fanella.Madhesite }}</td>
                        <td>{{ fanella.Gjinia }}</td>
                       
                         <td>
               <router-link
                :to="{ FanellaEditComponent: 'FanellaEditComponent', params: { id: fanella._id } }"
                class="btn btn-success"
                >Edit
              </router-link> 
             

               <button
                @click.prevent="deletefanellat(fanella._id)"
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
      fanellat: [],
    };
  },
  created() {
    let apiURL = "http://localhost:5000/api";
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
  methods: {
    deletefanellat(id) {
      let apiURL = `http://localhost:5000/api/delete-fanellat/${id}`;
      let indexOfArrayItem = this.fanellat.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.fanellat.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>


<style>
.btn-success {
  margin-right: 10px;
}
</style>
