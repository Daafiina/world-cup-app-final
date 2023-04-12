<template>
  <section style="margin-left:75px;margin-right:75px;margin-top:200px;margin-bottom:200px;">
    <div class="px-4 py-5 px-md-5 text-center text-lg-start" style="background-color:beige;border-radius: 20px;">
      <div class="container">
        <div class="row gx-lg-5 align-items-center">
          <div class="col-lg-8 mb-5 mb-lg-0">
            <h1 class="my-5 display-3 fw-bold ls-tight" style="color:green">
                        Login to <br />
                        <span class="text" style="color:orange">FIFA world-cup</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                        quibusdam tempora at cupiditate quis eum maiores libero
                        veritatis? Dicta facilis sint aliquid ipsum atque?
                    </p>
          </div>

          <div class="col-lg-6 mb-5 mb-lg-0">
                    <div class="card" style="border-radius: 20px;">
                        <div class="card-body py-5 px-md-5">
                          <form @submit.prevent="handleSubmit">
                                    <div class="row">
                                      <div class="col-md-8 mb-4">
                                        <div class="form-outline">
                                          <label for="email" class="form-label">Email:</label>
                                          <input type="email" class="form-control" name="email" v-model="email" required>
                                        </div>
                                      </div>

                                      <div class="col-md-8 mb-4">
                                        <div class="form-outline">
                                          <label for="email" class="form-label">Password:</label>
                                          <input type="password" class="form-control" name="password" v-model="password" required>
                                        </div>
                                      </div>
                                    </div>

                                    <button class="btn btn-primary btn-block mb-4" style="background-color:orange;color:white;">Login</button>
                                    <div v-if="error" class="text-danger">{{ error }}</div>
                                    <div class="form-outline mb-4">
                                     Are you new to our site? <a href="/register" style="color:green">Register</a>
                                  </div>
                          </form>
                        </div>
                    </div>
                </div>
          


        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const error = ref(null)

    const store = useStore()
    const router = useRouter()

    const handleSubmit = async () => {
      try {
        await store.dispatch('login', {
          email: email.value,
          password: password.value
        })
        router.push('/')
      }
      catch (err) {
        error.value = err.message
      }
    }

    return { handleSubmit, email, password, error }
  }
}
</script>