<template>
  <div>
    <div
      @click="select"
      class="
        p-2
        my-3
        bg-white
        rounded-xl
        flex
        items-center
        relative
        shadow-lg
        cursor-pointer
        hover:opacity-80
        z-10
      "
    >
      <div v-if="message.user._id === $store.state.currentUser._id">
        <button
          @click.stop="deleteMessage"
          class="
            text-background text-lg
            absolute
            top-2
            right-4
            z-20
            bg-red-600
            hover:bg-red-900
            px-2
            rounded-full
          "
        >
          x
        </button>
        <button
          @click.stop="creating = !creating"
          class="
            text-background text-lg
            absolute
            top-2
            right-12
            z-20
            bg-primary
            hover:bg-blue-900
            px-2
            rounded-full
          "
        >
          Edit
        </button>
      </div>

      <div class="m-4 flex-grow-0">
        <img :src="message.user.profile_pic" class="rounded-full w-20" alt="" />
      </div>
      <div class="flex-grow">
        <div>
          <h2 class="font-bold">{{ message.title }}</h2>
          <p>{{ message.content }}</p>
        </div>
        <div class="flex justify-between items-center my-2">
          <div class="flex justify-center items-center">
            <img class="p-1" src="/comment.svg" alt="" /><span
              >{{
                `${message.comments.length} comment${
                  message.comments.length > 1 ? "s" : ""
                }`
              }}
            </span>
          </div>
          <c-like-button :likes="message.likes" />
        </div>
      </div>
      <svg
        v-if="message === $store.state.selectedMessage"
        class="absolute -right-5 top-1/2 -translate-y-1/2"
        width="7"
        height="12"
        viewBox="0 0 7 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L6 6L1 11"
          stroke="#444444"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <c-message-form :message="message" v-if="creating" />
  </div>
</template>

<script>
import cLikeButton from "./c-like-button.vue";
import CMessageForm from "./c-message-form.vue";
export default {
  components: { cLikeButton, CMessageForm },
  props: { message: Object },
  data() {
    return {
      creating: false,
    };
  },
  methods: {
    select() {
      this.$store.commit("selectMessage", this.message);
    },
    deleteMessage() {
      this.$store.dispatch("deleteMessage", this.message);
    },
  },
};
</script>

<style>
</style>