<template>
  <div class="h-screen flex overflow-hidden pl-44">
    <div class="flex w-full">
      <c-content-list class="overflow-y-scroll flex-grow" />

      <c-content-detail class="overflow-y-scroll flex-grow" />
    </div>
  </div>
</template>

<script>
import cContentDetail from "../components/c-content-detail.vue";
import cContentList from "../components/c-content-list.vue";

export default {
  components: { cContentList, cContentDetail },
  mounted() {
    this.$store.dispatch("getMessages");
  },
};
</script>

<style>
</style>