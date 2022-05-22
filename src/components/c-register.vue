<template>
  <div class="max-w-lg w-full">
    <form @submit.prevent="register" method="post">
      <div class="my-4">
        <div class="flex flex-col">
          <input
            v-model="email"
            placeholder="Email"
            type="text"
            name="email"
            class="rounded-full bg-white py-2 px-4 my-3"
          />
        </div>
        <div class="flex flex-col">
          <input
            v-model="name"
            placeholder="Name"
            type="text"
            name="name"
            class="rounded-full bg-white py-2 px-4 my-3"
          />
        </div>
        <div class="flex flex-col">
          <input
            v-model="password"
            placeholder="Password"
            type="password"
            name="password"
            class="rounded-full bg-white py-2 px-4 my-3"
          />
        </div>
        <div class="flex flex-col">
          <input
            v-model="confirmation"
            placeholder="Password confirmation"
            type="password"
            name="confirmation"
            class="rounded-full bg-white py-2 px-4 my-3"
          />
        </div>
      </div>

      <button
        type="submit"
        class="bg-primary text-white rounded-full px-8 py-2 mx-auto block"
      >
        S'inscrire
      </button>
    </form>
    <div class="text-center my-4 text-primary">
      <router-link to="/login">Login</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmation: "",
      name: "",
    };
  },
  methods: {
    async register() {
      await this.$store.dispatch("register", {
        email: this.email,
        name: this.name,
        password: this.password,
      });
      this.$router.push({ path: "/wall" });
    },
  },
};
</script>

<style>
</style>