<template>
    <div class="container mt-5">
      <form @submit.prevent="submitForm">
        <div class="field">
          <label class="label">TeamName</label>
          <div class="control">
            <input v-model="formData.TeamName" class="input"
            type="text"
            placeholder="TeamName"
            />
          </div>
        </div>
  
        <div class="field">
          <label class="label">Club</label>
          <div class="control">
            <input v-model="formData.Club" class="input"
            type="text"
            placeholder="Club"
            />
          </div>
        </div>
  
        <div class="field">
          <label class="label">PlayerName</label>
          <div class="control">
            <input v-model="formData.PlayerName" class="input"
            type="text"
            placeholder="PlayerName"
            />
          </div>
        </div>
  
        <div class="field">
          <label class="label">Permbajtja</label>
          <div class="control">
            <textarea
              v-model="formData.Permbajtja"
              class="input"
              placeholder="Permbajtja"
            ></textarea>
          </div>
        </div>
  
        <div class="field">
          <label class="label">rating</label>
          <div class="control">
            <input v-model="formData.rating" class="input"
            type="text"
            placeholder="rating"
            />
          </div>
        </div>
  
        <div class="field is-grouped">
          <div class="control">
            <button type="submit" class="button is-primary">Submit</button>
          </div>
        </div>
      </form> 
    </div>
  </template>
  
  <script>
  export default {
    props: ['team'],
    data() {
      return {
        formData: {
          TeamName: '',
          Club: '',
          PlayerName: '',
          Permbajtja: '',
          rating: '',
        }
      };
    },
    methods: {
      
    submitForm() {
        this.$emit('form-submitted', this.formData);
        this.formData = {
        teamName: '',
        club: '',
        playerName: '',
        permbajtja: '',
        rating: '',
    };
}

    }
  };
  </script>
  
