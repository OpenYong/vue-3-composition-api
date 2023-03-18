<template>
  <div>
    <h2>{{ name }}</h2>
    <YummyMealPrice :price="price" />
    <button @click="addToCart">추가하기</button>
  </div>
</template>

<script>
import YummyMealPrice from "./YummyMealPrice.vue";

export default {
  props: {
    name: String,
    price: Number,
  },
  setup(props, { emit }) {
    const addToCart = () => {
      emit("addToCart", props.name);
    };

    return { addToCart };
  },
  components: { YummyMealPrice },
};
</script>

<style lang="scss" scoped></style>
