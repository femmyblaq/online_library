<template>
  <div class="row p-0 m-auto justify-content-center align-items-center">
    <app-book v-for="book in books" :book="book" :key="book.id"></app-book>
  </div>
</template>

<script>
import appBook from "../Books/Book.vue";
export default {
  computed: {
    books() {
      return this.$store.getters.books;
    },
  },
  components: {
    appBook,
  },
};
</script>
