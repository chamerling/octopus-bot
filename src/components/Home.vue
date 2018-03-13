<template>
  <div>
    <span>Hello OpenPaaS User</span>
    <a href="#" @click.prevent="loadUser()">Load user</a>
    <span>{{ user }}</span>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    user () {
      return this.$store.state.session.user && this.$store.state.session.user._id;
    }
  },
  methods: {
    loadUser () {
      this.$store.dispatch('fetchUser');
    }
  }
}
</script>
