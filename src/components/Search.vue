<template>
  <form class="form" @submit="submit">
    <input
      type="text"
      name="text"
      v-model="text"
      placeholder="Search User..."
    />
    <input type="submit" value="Search" class="btn btn-dark btn-block" />
  </form>
  <button
    v-if="!!users && users.length !== 0"
    @click="clear"
    class="btn btn-light btn-block"
  >
    Clear
  </button>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const text = ref('')
    const store = useStore()

    const submit = async (e) => {
      e.preventDefault()
      store.dispatch('searchUser', text.value)
    }

    const clear = () => {
      text.value = ''
      store.commit('SET_USERS', { users: [] })
    }

    return {
      clear,
      submit,
      text,
      users: computed(() => store.state.users)
    }
  }
}
</script>
