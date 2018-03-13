<template>
  <div>
    <span>Hello OpenPaaS User</span>
    <a href="#" @click.prevent="loadUser()">Load user</a>
    <pre>{{result}}</pre>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      result: {}
    }
  },
  methods: {
    loadUser () {
      this.$http.get('/user').then((response) => {
        this.result = response.data
      })
    }
  }
}
</script>
