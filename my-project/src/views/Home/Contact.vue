<template>
  <!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
-->

  <section class="bg-gray-100">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        <div class="lg:col-span-2 lg:py-12">
          <img class="h-12" viewBox="0 0 28 24" fill="none" src="@/assets/img/istockphoto-1173732631-612x612.jpg" width="600" height="1000" />
          <p class="max-w-xl text-lg">
            At the same time, the fact that we are wholly owned and totally
            independent from manufacturer and other group control gives you
            confidence that we will only recommend what is right for you.
          </p>

          <div class="mt-8">
            <a href="" class="text-2xl font-bold text-emerald-600 hover:text-emerald-800">
              049 876 342
            </a>

            <address class="mt-2 not-italic">
              Henri Dynan C6, Prishtine, XK 10000
            </address>
          </div>
        </div>

        <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <form action="#" @submit.prevent="handleSubmitForm" class="space-y-4">
            <div>
              <label class="sr-only" for="name">Name</label>
              <input class="w-full rounded-lg border shadow-md p-3 text-sm" placeholder="Name" type="text" id="name"
                v-model="contact.name" required />
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label class="sr-only" for="email">Email</label>
                <input class="w-full rounded-lg border shadow-md p-3 text-sm" placeholder="Email address"
                  type="email" id="email" v-model="contact.email" required />
              </div>

              <div>
                <label class="sr-only" for="phone">Phone</label>
                <input class="w-full rounded-lg border shadow-md p-3 text-sm" placeholder="Phone Number" type="tel"
                  id="phone" v-model="contact.phone" required />
              </div>
            </div>



            <div>
              <label class="sr-only" for="message">Message</label>

              <textarea class="w-full rounded-lg border shadow-md p-3 text-sm" placeholder="Message" rows="8"
                id="message" v-model="contact.message" required></textarea>
            </div>

            <div class="mt-4">
              <button type="submit"
                class="inline-block w-full rounded-lg bg-emerald-600 px-5 py-3 font-medium text-white sm:w-auto hover:bg-emerald-700">
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      contact: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/create-contact";

      axios
        .post(apiURL, this.contact)
        .then(() => {
          this.contact = {
            name: "",
            email: "",
            phone: "",
            message: "",
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
* {
  text-decoration: none;
}
</style>