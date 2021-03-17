<template>
  <!-- <div v-if="error">
    {{ error }}
  </div>
  <Suspense v-else>
    <template #default>
      <UserDetail :user="user" />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense> -->
  <div class="container">
    <UserDetail v-if="user" :user="user" />
  </div>
</template>

<script>
import { ref, computed, onErrorCaptured } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

import UserDetail from './UserDetail.vue'

export default {
  components: {
    UserDetail
  },
  setup() {
    const route = useRoute()
    const store = useStore()
    const error = ref(null)

    onErrorCaptured((e) => {
      error.value = e
      return true
    })

    store.dispatch('getUser', route.params.userId)

    return {
      error,
      user: computed(() => store.state.user)
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
