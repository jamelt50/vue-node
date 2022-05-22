<template>
  <div class="w-full">
    <form @submit.prevent="storeMessage" method="post">
      <div class="my-4">
        <div class="flex flex-col">
          <input
            v-model="title"
            placeholder="title"
            type="text"
            name="title"
            class="rounded-full bg-white py-2 px-4 my-3"
          />
        </div>
        <div class="flex flex-col">
          <label class="rounded-full bg-white py-2 px-4 my-3" for="cover">
            <span>{{ cover ? cover.name : "Cover" }}</span></label
          >
          <img class="w-24 h-24 object-cover" v-if="src" :src="src" alt="" />
          <input
            @change="handleChange"
            id="cover"
            ref="cover"
            type="file"
            class="hidden"
          />
        </div>
        <div class="flex flex-col">
          <textarea
            v-model="content"
            placeholder="content"
            name="content"
            rows="5"
            class="rounded-md bg-white py-2 px-4 my-3"
          />
        </div>
      </div>

      <button
        type="submit"
        class="bg-primary text-white rounded-full px-8 py-2 mx-auto block"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: { message: Object },
  data() {
    return {
      content: "",
      title: "",
      cover: null,
      src: "",
    };
  },
  mounted() {
    if (this.message) {
      this.content = this.message.content;
      this.title = this.message.title;
      this.src = this.message.cover;
    }
  },
  methods: {
    handleChange() {
      this.cover = this.$refs.cover.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.src = reader.result;
      };
      reader.readAsDataURL(this.cover);
    },
    async storeMessage() {
      if (this.message) {
        this.$store.dispatch("updateMessage", {
          content: this.content,
          cover: this.cover,
          title: this.title,
          _id: this.message._id,
        });
      } else {
        this.$store.dispatch("addMessage", {
          content: this.content,
          cover: this.cover,
          title: this.title,
        });
      }
      this.$parent.creating = false;
    },
  },
};
</script>

<style>
</style>