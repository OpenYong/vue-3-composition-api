<template>
  <div>
    <h2>{{ name }}</h2>
    <YummyMealPrice :price="price" />
    <button @click="addToCart">추가하기</button>
  </div>
</template>

<script setup>
import YummyMealPrice from "./YummyMealPrice.vue";

const emit = defineEmits(["addToCart"]);

const props = defineProps({
  name: String,
  price: Number,
});

const addToCart = () => {
  emit("addToCart", props.name);
};
</script>

<style lang="scss" scoped></style>
