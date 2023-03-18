<template>
  <h1>{{ name }}</h1>
  <input v-model="name" type="text" />
  <button @click="placeOrder">주문</button>
  <YummyMeal :name="meal.name" :price="meal.price" @addToCart="addItemToCart" />
</template>

<script>
import YummyMeal from "./components/YummyMeal.vue";
import { ref, reactive } from "vue";

export default {
  components: {
    YummyMeal,
  },
  setup() {
    const name = ref("The Snazzy Burger");

    const meal = reactive({
      name: "Bento 🍱",
      price: 9.99,
    });

    const placeOrder = () => {
      alert("Your order has been placed!");
    };

    const addItemToCart = (item) => {
      alert(`Added ${item} to cart!`);
    };

    return { name, placeOrder, addItemToCart, meal };
  },
};
</script>

<style scoped></style>
