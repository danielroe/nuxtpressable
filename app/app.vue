<script setup lang="ts">
const { loggedIn, clear } = useUserSession()
</script>

<template>
  <div class="container">
    <NuxtRouteAnnouncer />
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">
            blog
          </nuxt-link>
        </li>
        <li v-if="loggedIn">
          <nuxt-link to="/new">
            new
          </nuxt-link>
        </li>
      </ul>
      <ul>
        <li>
          <nuxt-link
            v-if="!loggedIn"
            external
            to="/auth/github"
          >
            login
          </nuxt-link>
          <button
            v-else
            @click="clear"
          >
            log out
          </button>
        </li>
      </ul>
    </nav>
    <NuxtPage />
  </div>
</template>
