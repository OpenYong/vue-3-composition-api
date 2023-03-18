<template>
  <div>
    <h2>{{ name }}</h2>
    {{ pricePrettySentence }}
  </div>
  <button @click="addToCart">추가하기</button>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    name: String,
    price: Number,
  },

  setup(props, { emit }) {
    const addToCart = () => {
      emit("addToCart", props.name);
    };

    const pricePretty = computed(() => `$${props.price.toFixed(2)}`);

    const pricePrettySentence = computed(
      () => `가격은 ${pricePretty.value} 입니다.`
    );

    return { addToCart, pricePretty, pricePrettySentence };
  },
};
</script>

<style lang="scss" scoped></style>
