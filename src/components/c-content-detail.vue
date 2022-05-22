<template>
  <div ref="details" class="w-full scroll-smooth">
    <transition name="fade">
      <div
        v-if="$store.state.selectedMessage"
        class="bg-white w-full px-4 py-6 min-h-screen"
      >
        <button class="block p-3 my-6" @click="close">
          <svg
            width="7"
            height="12"
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
        <div class="flex justify-between items-center py-4">
          <span class="bg-text text-background rounded-full px-8 py-1">
            {{
              new Date(
                $store.state.selectedMessage.created_at
              ).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            }}
          </span>
          <button
            @click.prevent="scroll"
            class="bg-primary text-background rounded-full px-8 py-1"
          >
            Commenter
          </button>
        </div>
        <div>
          <h2 class="text-lg font-bold">
            {{ $store.state.selectedMessage.title }}
          </h2>
          <span class="text-primary block">
            Par {{ $store.state.selectedMessage.user.name }}</span
          >
          <span class="block"
            >{{
              `${$store.state.selectedMessage.likes.length} like${
                $store.state.selectedMessage.likes.length > 1 ? "s" : ""
              }`
            }}
          </span>
          <hr class="border border-black opacity-5 my-6" />
        </div>
        <div>
          <img
            class="w-full"
            :src="$store.state.selectedMessage.cover"
            alt=""
          />
          <div class="my-8">
            {{ $store.state.selectedMessage.content }}
          </div>
        </div>
        <hr class="border border-black opacity-5 my-6" />
        <div>
          <transition-group name="comments">
            <c-comment
              v-for="comment in $store.state.selectedMessage.comments"
              :key="comment._id"
              :comment="comment"
            />
          </transition-group>
        </div>
        <c-comment-form /></div
    ></transition>
  </div>
</template>

<script>
import cComment from "./c-comment.vue";
import cCommentForm from "./c-comment-form.vue";
export default {
  components: { cCommentForm, cComment },
  methods: {
    scroll() {
      this.$refs.details.scroll({
        top: this.$refs.details.scrollHeight,
        behavior: "smooth",
      });
    },
    close() {
      this.$store.commit("selectMessage", false);
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: transform 0.5s ease-in-out;
  transform-origin: right;
}
.fade-enter,
.fade-leave-to {
  transform: translateX(100%);
}
.comments-enter-active,
.comments-leave-active {
  transition: transform 1s ease-in-out, opacity 1s ease-in-out;
}
.comments-enter,
.comments-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>