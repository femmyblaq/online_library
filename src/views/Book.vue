<template>
  <div class="book-view m-5 d-flex justify-content-center align-item-center">
    <div class="row w-75" v-if="book">
      <div class="col-6">
        <h1>{{ $route.params.id }}</h1>
        <h4>{{ book.bookTitle }}</h4>
      </div>
      <div class="col-6">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic nesciunt
          ducimus vero, iure modi nam quae autem optio corrupti, vel maxime
          ratione omnis porro. Perferendis corrupti sapiente illum sunt id!
        </p>
        <div class="btn btn-success btn-block">Download Pdf</div>
      </div>
    </div>
    <div v-else>
      <h1>Book not found</h1>
    </div>
  </div>
</template>

<script>
import books from "../data/books_data";
export default {
  data() {
    return {
      book: null,
    };
  },
  mounted() {
    console.log(books);
    const findBook = books.find(
      (book) => book.id == Number(this.$route.params.id)
    );
    if (findBook !== undefined) {
      this.book = findBook;
    }
    console.log(findBook);
  },
};
</script>

// const books = this.$store.getters.books; // console.log("HHHH",
this.$route.params.id, books); // const findBook = books.find( // (book) =>
book.id == Number(this.$route.params.id) // ); // if (findBook != undefined) {
// this.book = findBook; // }
