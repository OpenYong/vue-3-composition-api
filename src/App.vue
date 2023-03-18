<template>
  <h1>{{ name }}</h1>
  <button @click="placeOrder">주문</button>
  <YummyMeal name="Bento 🍱" :price="9.99" @addToCart="addItemToCart" />
</template>

<script>
import YummyMeal from "./components/YummyMeal.vue";

export default {
  components: {
    YummyMeal,
  },
  setup() {
    const name = "The Snazzy Burger";

    const placeOrder = () => {
      alert("Your order has been placed!");
    };

    const addItemToCart = (item) => {
      alert(`Added ${item} to cart!`);
    };

    return { name, placeOrder, addItemToCart };
  },
};
</script>

<style scoped></style>
