<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <img src="/logo.svg" alt="" />
    <c-register />
  </div>
</template>

<script>
import cRegister from "../components/c-register.vue";
export default {
  components: { cRegister },
  name: "c-register-page",
};
</script>