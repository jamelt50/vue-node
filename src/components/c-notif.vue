<template>
  <div class="relative">
    <div
      @mouseover="hover = true"
      @mouseleave="hover = false"
      class="
        bg-primary
        text-white
        w-8
        h-8
        rounded-full
        flex
        justify-center
        items-center
      "
    >
      12
    </div>

    <div
      v-if="hover"
      class="
        absolute
        bottom-12
        left-1/2
        transform
        -translate-x-1/2
        bg-background
        text-text
        shadow-lg
        z-20
        rounded-full
      "
    >
      <div class="relative pop-up z-10 py-1 px-8">qjdlqkjfldkqjlkqdfj</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style>
.pop-up::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  background: rgb(237, 237, 237);
  width: 14px;
  height: 14px;
  transform: rotate(45deg) translateX(-50%);
}
</style>