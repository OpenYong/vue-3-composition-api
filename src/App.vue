<template>
  <h1>{{ name }}</h1>
  <input v-model="name" type="text" />
  <button @click="placeOrder">주문</button>
  <button @click="removeWatcher">카드 알람 끄기</button>

  <label for="currencySymbol">통화 선택</label>
  <select id="currencySymbol" v-model="currencySymbol">
    <option value="$">$</option>
    <option value="€">€</option>
    <option value="£">£</option>
  </select>

  <YummyMeal
    v-for="meal in meals"
    :name="meal.name"
    :price="meal.price"
    @addToCart="addItemToCart"
  />
</template>

<script>
import YummyMeal from "./components/YummyMeal.vue";
import { ref, reactive, watch, provide, onMounted } from "vue";

export default {
  components: {
    YummyMeal,
  },
  setup() {
    const currencySymbol = ref("$");

    provide("currencySymbol", currencySymbol);

    const name = ref("용녀 식당");

    const cart = reactive([]);

    const meal = reactive({
      name: "Bento 🍱",
      price: 9,
    });

    const meals = reactive([
      { name: "Bento 🍱", price: 9 },
      { name: "Sushi 🍣", price: 12 },
      { name: "Curry 🍛", price: 15 },
    ]);

    const placeOrder = () => alert("Your order has been placed!");

    const addItemToCart = (item) => {
      cart.push(item);
    };

    const removeWatcher = watch(
      [() => [...cart]], // 객체와 배열은 복사본을 만들어서 watch에 전달
      (newValue, oldValue) => {
        alert(newValue.join("\n"));
      }
    );

    // mounted 라이프사이클 훅
    onMounted(() => {
      console.log("mounted", name.value);
    });

    // created 라이프사이클 훅
    // setup 함수가 실행되고 나서 실행됨
    // setup 함수가 실행되기 전에는 ref, reactive, provide, watch, onMounted 등이 정의되지 않음
    console.log("created", name.value);

    return {
      name,
      placeOrder,
      addItemToCart,
      meal,
      meals,
      removeWatcher,
      currencySymbol,
    };
  },
};
</script>

<style scoped></style>
