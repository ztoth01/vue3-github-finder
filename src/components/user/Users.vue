<template>
  <div v-if="error">
    {{ error }}
  </div>
  <Suspense v-else>
    <template #default>
      <div class="users-wrapper">
        <UserItem v-for="user in users" :key="user.login" :user="user" />
      </div>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script>
import { ref, computed, onErrorCaptured } from 'vue'
import { useStore } from 'vuex'

import UserItem from './UserItem.vue'

export default {
  components: {
    UserItem
  },
  setup() {
    // error
    const error = ref(null)
    onErrorCaptured((e) => {
      error.value = e
      return true
    })

    // users
    const store = useStore()

    return {
      error,
      users: computed(() => store.state.users)
    }
  }
}
</script>

<style scoped>
.users-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
</style>
