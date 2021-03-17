<template>
  <header>
    <nav class="navbar bg-primary">
      <h1><i :class="icon"></i> {{ title }}</h1>
      <ul>
        <li>
          <router-link to="/">
            Home
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            About
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
