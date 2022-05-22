<template>
  <div class="bg-background w-full pt-24 pb-12 px-8">
    <div class="flex justify-between items-center">
      <h1 class="font-tima text-4xl opacity-40">Mon Mur</h1>
      <button
        @click="creating = !creating"
        class="bg-primary text-background rounded-full px-8 py-1"
      >
        {{ creating ? "Close" : " New" }}
      </button>
    </div>
    <transition name="open">
      <c-message-form v-if="creating" />
    </transition>
    <hr class="border border-black opacity-5 my-6" />
    <div v-if="$store.state.messages.length" class="flex flex-col">
      <transition-group name="open">
        <c-message
          v-for="message in $store.state.messages"
          :key="message._id"
          :message="message"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import CMessageForm from "./c-message-form.vue";
import cMessage from "./c-message.vue";
export default {
  components: { cMessage, CMessageForm },
  data() {
    return {
      creating: false,
    };
  },
};
</script>

<style>
.open-enter-active,
.open-leave-active {
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
}
.open-enter,
.open-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>