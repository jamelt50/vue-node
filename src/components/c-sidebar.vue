<template>
  <div
    class="flex items-center flex-col min-h-screen w-44 absolute left-0 top-0"
  >
    <div class="px-2 fixed top-4 left-16">
      <button class="rounded-full block p-3 my-6" @click="toggle">
        <svg
          :class="{ 'transform rotate-180': open }"
          width="10"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="transition-all stroke-current text-primary"
            d="M1 1L6 6L1 11"
            stroke="#444444"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <transition name="pop">
      <div class="bg-secondary min-h-screen pt-20" v-if="open">
        <div class="py-12">
          <img class="w-24 mx-auto" src="/logo.svg" alt="" />
        </div>
        <div>
          <div class="px-2 w-40 h-40">
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
        <nav class="flex items-center flex-col px-2">
          <ul class="w-full">
            <li
              :class="{ 'font-bold': $route.name === 'wall' }"
              class="flex justify-between items-center py-3 hover:font-bold"
            >
              <router-link class="text-lg" to="/wall"> Mon Mur</router-link>

              <c-notif />
            </li>
            <li
              :class="{ 'font-bold': $route.name === 'messages' }"
              class="flex justify-between items-center py-3 hover:font-bold"
            >
              <router-link class="text-lg" to="/messages">
                Mes Messages</router-link
              >
            </li>
            <li
              :class="{ 'font-bold': $route.name === 'profile' }"
              class="flex justify-between items-center py-3 hover:font-bold"
            >
              <router-link class="text-lg" to="/profile">
                Mon Compte</router-link
              >
            </li>
          </ul>
        </nav>
        <button
          class="
            bg-red-800
            block
            mx-auto
            my-4
            text-background
            rounded-full
            px-8
            py-1
          "
          @click.prevent="logout"
        >
          Logout
        </button>
      </div></transition
    >
  </div>
</template>

<script>
import cNotif from "./c-notif.vue";
import { removeToken } from "../services/AuthServices";
export default {
  components: { cNotif },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    logout() {
      removeToken();
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style>
.pop-enter-active,
.pop-leave-active {
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
}
.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>