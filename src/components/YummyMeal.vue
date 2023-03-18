<template>
  <div>
    <h1>{{ name }}</h1>
    {{ price }}
  </div>
  <button @click="addToCart">추가하기</button>
</template>

<script>
export default {
  props: {
    name: String,
    price: Number,
  },

  setup(props, { emit }) {
    // console.log(props.name);
    // console.log(props.price);

    const addToCart = () => {
      emit("addToCart", props.name);
    };

    return { addToCart };
  },
};
</script>

<style lang="scss" scoped></style>
