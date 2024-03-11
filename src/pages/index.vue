<script setup>
import { ref, computed } from 'vue'
import signup from './signup.vue'
import login from './login.vue'
import home from './home.vue'

const routes = {
  '/signup': signup,
  '/': login,
  '/home': home,

}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] 
})
</script>


<template>
  <!-- <a href="#/">login</a> |
  <a href="#/signup">Signup</a> |
  <a href="#/home">home</a> | -->
  <component :is="currentView" />
</template>




<style scoped>

</style>
