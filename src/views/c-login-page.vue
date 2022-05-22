<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <img src="/logo.svg" alt="" />
    <c-login />
  </div>
</template>

<script>
import cLogin from "../components/c-login.vue";
export default {
  components: { cLogin },
  name: "c-login-page",
};
</script>
