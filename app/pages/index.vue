<script setup lang="ts">
const { data: posts, refresh, status } = useFetch('/api/posts')
</script>

<template>
  <div>
    <h1>index page</h1>
    <article
      v-for="post of posts"
      :key="post.slug"
    >
      <hgroup>
        <h2>{{ post.title }}</h2>
        <p>by {{ post.author }} on {{ new Date(post.createdAt).toLocaleDateString() }}</p>
      </hgroup>
      <div v-html="post.body" />
    </article>
    <button :aria-busy="status === 'pending'" class="outline" @click="() => refresh()">
      refresh posts
    </button>
  </div>
</template>
