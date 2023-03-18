<template>
  <h1>{{ name }}</h1>
  <button @click="placeOrder">주문</button>
</template>

<script>
export default {
  setup() {
    const name = "The Snazzy Burger";
    const placeOrder = () => {
      alert("Your order has been placed!");
    };
    return { name, placeOrder };
  },
};
</script>

<style scoped></style>
