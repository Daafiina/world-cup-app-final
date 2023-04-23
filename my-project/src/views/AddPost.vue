<template>

<!-- <div>
  <div class="mx-auto" style="width: 50%;">
    <div class="pa-5">
      <h2>Add New Post</h2>
      <hr>
      <form ref="form" class="pa-5" enctype="multipart/form-data" @submit.prevent="submitForm()">
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" v-model="post.title" id="title" placeholder="Enter title" required>
        </div>
        <div class="form-group">
          <label for="category">Category</label>
          <input type="text" class="form-control" id="category" v-model="post.category" placeholder="Enter category" required>
        </div>
        <div class="form-group">
          <label for="content">Content</label>
          <textarea class="form-control" id="content" rows="5" v-model="post.content" placeholder="Enter content" prepend-icon="mdi-note" required></textarea>
        </div>
        <div class="form-group">
          <label for="image">Select Image</label>
          <input type="file" @change="selectFile"  class="form-control-file" id="image" multiple required>
        </div>
        <button type="submit" class="btn btn-primary mt-3">Add Post</button>
        
      </form>
    </div>
  </div>
</div> -->

<div>
    <div class="container">
      <div class="row no-gutters">
        <div class="col-sm-10 mx-auto">
            <div class="card-title"><h1>Add New Post</h1></div>

          <div class="card pa-5">
            <div class="divider"></div>
            <form ref="form" @submit.prevent="submitForm" class="pa-5" enctype="multipart/form-data">
              <div class="form-group">
                <label for="title">Title</label>
                <input type="text" id="title" class="form-control" v-model="post.title">
              </div>
              <div class="form-group">
                <label for="category">Category</label>
                <input type="text" id="category" class="form-control" v-model="post.category">
              </div>
              <div class="form-group">
                <label for="content">Content</label>
                <textarea id="content" class="form-control" v-model="post.content"></textarea>
              </div>
              <div class="form-group">
                <label for="image">Select Image</label>
                <input type="file" id="image" @change="selectFile" class="form-control" multiple>
              </div>
              <button type="submit" class="btn btn-primary mt-3">Add Post</button>
              <div class="form-outline mb-4">
               <a href="/ListPost" style="padding-left:85%">All posts</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import API from '../api'

export default {
  data() {
    return {
      post: {
        title: '',
        category: '',
        content: ''
      },
      selectedFile: null,
      rules: [
        v => !!v || 'This field is required'
      ]
    }
  },
  methods: {
    async submitForm() {
      if (this.$refs.form.checkValidity()) {
        const formData = new FormData()
        formData.append('title', this.post.title)
        formData.append('category', this.post.category)
        formData.append('content', this.post.content)
        formData.append('image', this.selectedFile)

        const response = await API.addPost(formData)
        this.$router.push({ name: 'ListPost', params: { message: response.message } })
      } else {
        this.$refs.form.reportValidity()
      }
    },
    selectFile(event) {
      this.selectedFile = event.target.files[0]
    }
  }
}
</script>
