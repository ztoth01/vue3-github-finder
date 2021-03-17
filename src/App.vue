<template>
  <Header title="Github Finder" icon="fab fa-github" />
  <router-view />
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss"></style>
