<template>
  <div id="app" class="bg-background font-body text-text">
    <c-sidebar v-if="$route.path !== '/register' && $route.path !== '/login'" />

    <transition name="swip" mode="out-in">
      <router-view :key="$route.fullPath"></router-view>
    </transition>
  </div>
</template>
<script>
import cSidebar from "./components/c-sidebar.vue";
export default {
  components: { cSidebar },
  created() {
    this.$store.dispatch("init");
  },
};
</script>
<style>
.swip-enter-active,
.swip-leave-active {
  transition: all 0.4s;
}
.swip-enter,
.swip-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>


