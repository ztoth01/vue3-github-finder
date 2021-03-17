<template>
  <div class="card grid-2">
    <div class="all-ceter">
      <img
        :src="user.avatar_url"
        alt=""
        class="round-img"
        style="width: 150px"
      />
      <h1>{{ user.name }}</h1>
      <p>Location: {{ user.location }}</p>
    </div>
    <div>
      <template v-if="user.bio">
        <h3>Bio</h3>
        <p>{bio}</p>
      </template>
      <a :href="user.html_url" class="btn btn-dark my-1"
        >Visit Github Profile</a
      >
      <ul>
        <li v-if="user.login"><strong>Username:</strong> {{ user.login }}</li>
        <li v-if="user.company">
          <strong>Company:</strong> {{ user.company }}
        </li>
        <li v-if="user.blog"><strong>Website:</strong> {{ user.blog }}</li>
      </ul>
    </div>
  </div>
  <div class="card text-center">
    <div class="badge badge-primary">Followers: {{ user.followers }}</div>
    <div class="badge badge-success">Following: {{ user.following }}</div>
    <div class="badge badge-light">Public Repos: {{ user.public_repos }}</div>
    <div class="badge badge-dark">Public Gists: {{ user.public_gists }}</div>
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
