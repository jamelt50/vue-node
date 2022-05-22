<template>
  <div class="w-1/2">
    <div>
      <div class="px-2 w-40 h-40 mx-auto">
        <img
          class="rounded-full border-2 object-cover border-text w-full"
          :src="$store.state.currentUser.profile_pic"
          alt=""
        />
      </div>

      <div class="py-3 text-center my-2">
        <h3 class="font-bold">{{ $store.state.currentUser.name }}</h3>
      </div>
    </div>
    <form @submit.prevent="updateProfile" method="post">
      <div class="my-4">
        <div class="flex flex-col">
          <input
            v-model="password"
            placeholder="password"
            type="text"
            name="password"
            class="rounded-full bg-white py-2 px-4 my-3"
          />
        </div>
        <div class="flex flex-col">
          <label class="rounded-full bg-white py-2 px-4 my-3" for="profile_pic">
            <span>profile pic</span></label
          >
          <img
            class="w-24 h-24 object-profile_pic"
            v-if="src"
            :src="src"
            alt=""
          />
          <input
            @change="handleChange"
            id="profile_pic"
            ref="profile_pic"
            type="file"
            class="hidden"
          />
        </div>
        <div class="flex flex-col">
          <textarea
            v-model="name"
            placeholder="name"
            name="name"
            rows="5"
            class="rounded-md bg-white py-2 px-4 my-3"
          />
        </div>
      </div>

      <button
        type="submit"
        class="bg-primary text-white rounded-full px-8 py-2 mx-auto block"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      password: "",
      profile_pic: null,
      src: "",
    };
  },

  methods: {
    handleChange() {
      this.profile_pic = this.$refs.profile_pic.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.src = reader.result;
      };
      reader.readAsDataURL(this.profile_pic);
    },
    async updateProfile() {
      this.$store.dispatch("updateProfile", {
        name: this.name,
        profile_pic: this.profile_pic,
        password: this.password,
      });
    },
  },
};
</script>

<style>
</style>