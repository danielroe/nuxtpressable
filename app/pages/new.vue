<script setup lang="ts">
definePageMeta({
  middleware: ['logged-in']
})

const html = ref('hi')
const loading = ref(false)

async function addNewPost(event: Event) {
  const data = new FormData(event.target as HTMLFormElement)
  const title = data.get('title')!

  loading.value = true

  try {
    await $fetch('/api/posts/new', {
      method: 'POST',
      body: {
        title,
        slug: title.toString().toLowerCase().replace(/\s+/g, '-'),
        body: html.value
      }
    })
  } finally {
    loading.value = false
  }

  return navigateTo('/')
}
</script>

<template>
  <div>
    <h1>create new post</h1>
    <form @submit.prevent="addNewPost">
      <label>
        title
        <input name="title" required type="text" />
      </label>
      <TiptapEditor v-model="html" />
      <button :aria-busy="loading" type="submit">submit</button>
    </form>
  </div>
</template>


