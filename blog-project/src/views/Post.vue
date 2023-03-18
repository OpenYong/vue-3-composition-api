<template>
  <div v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>

<script setup async>
import useResource from "../composables/useResource";
import { watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// Post
const { item: post, fetchOne: fetchPost } = useResource("posts");
await fetchPost(route.params.id);

// User
const { item: user, fetchOne: fetchUser } = useResource("users");
await fetchUser(post.value.userId);
</script>
