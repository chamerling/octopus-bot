<template>
  <div>
    <span>Hello {{ user }}!</span>
    <button @click="loadEmails">Load Emails</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    user() {
      return this.$store.state.session.user && `${this.$store.state.session.user.firstname} ${this.$store.state.session.user.lastname}`;
    }
  },
  methods: {
    loadEmails() {
      this.$router.push({ name: 'Emails' });
    }
  }
};
</script>
