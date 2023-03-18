<template>
  <div>{{ pricePretty }}</div>
</template>

<script>
import { computed, inject } from "vue";

export default {
  props: {
    price: Number,
  },
  setup(props) {
    const currencySymbol = inject("currencySymbol");

    const pricePretty = computed(
      () => `${currencySymbol.value}${props.price.toFixed(2)}`
    );

    return { pricePretty };
  },
};
</script>

<style lang="scss" scoped></style>
