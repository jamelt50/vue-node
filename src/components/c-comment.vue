<template>
  <div
    class="flex my-8 w-3/4"
    :class="{ 'ml-auto': $store.state.currentUser._id === comment.user._id }"
  >
    <div v-if="datetime" class="flex flex-grow-0 flex-col items-center px-4">
      <img class="w-12 rounded-full" :src="comment.user.profile_pic" alt="" />
      <span class="text-xs">{{
        `${datetime.getHours()}:${
          datetime.getMinutes() >= 10
            ? datetime.getMinutes()
            : "0" + datetime.getMinutes()
        }`
      }}</span>
      <span class="text-xs">{{ datetime.toLocaleDateString() }}</span>
    </div>

    <div
      :class="{
        'bg-primary text-white':
          $store.state.currentUser._id === comment.user._id,
      }"
      class="bg-background rounded-2xl p-4 flex-grow"
    >
      <h3 class="font-bold text-lg">{{ comment.user.name }}</h3>
      <p>{{ comment.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: { comment: Object },
  data() {
    return {
      datetime: null,
    };
  },
  mounted() {
    this.datetime = new Date(this.comment.created_at);
  },
};
</script>

<style>
</style>