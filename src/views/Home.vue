<template>
  <div class="container">
    <Search />
    <Users />
  </div>
</template>

<script>
import Search from '../components/Search.vue'
import Users from '../components/user/Users.vue'

export default {
  name: 'Home',
  components: {
    Search,
    Users
  }
}
</script>
