<template>
  <div v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>

<script setup>
import useResource from "../composables/useResource";
import { watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// Post
const { item: post, fetchOne: fetchPost } = useResource("posts");
fetchPost(route.params.id);

// User
const { item: user, fetchOne: fetchUser } = useResource("users");
// post.value.userId는 아직 undefined. 비동기 처리이기 때문에
// watch로 logical concern 없이 로직들을 그룹화 했음.
watch(
  () => ({ ...post.value }),
  () => {
    fetchUser(post.value.userId);
  }
);
</script>
