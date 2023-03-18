<template>
  <h1>{{ name }}</h1>
  <input v-model="name" type="text" />
  <button @click="placeOrder">주문</button>
  <YummyMeal name="Bento 🍱" :price="9.99" @addToCart="addItemToCart" />
</template>

<script>
import YummyMeal from "./components/YummyMeal.vue";
import { ref } from "vue";

export default {
  components: {
    YummyMeal,
  },
  setup() {
    const name = ref("The Snazzy Burger");

    name.value = "바꿀 수 있다!";

    // console.log(name);

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
