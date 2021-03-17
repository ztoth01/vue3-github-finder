<template>
  <div className="card text-center">
    <img
      :src="user.avatar_url"
      class="round-img"
      alt="avatar-img"
      style="width: 60px;"
    />
    <h3>{{ user.login }}</h3>
    <div>
      <router-link
        :to="`/user/${user.login}`"
        class="btn btn-small btn-dark my-1"
        >More</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>
