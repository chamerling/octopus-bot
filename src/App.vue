<template>

 <v-app id="app">
  <v-toolbar
    class="blue"
    dark
    color="red"
    dense
    fixed
    clipped-left
    app
  >
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>OctoPus</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>notifications</v-icon>
    </v-btn>
    <v-menu bottom left>
      <v-btn icon slot="activator" dark>
        <v-icon>more_vert</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile v-if="$auth.check()" @click.prevent="logout">
          <v-list-tile-title>Logout</v-list-tile-title>
        </v-list-tile>
        <v-list-tile v-if="!$auth.check()" @click.prevent="login">
          <v-list-tile-title>Login</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-title>About</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
  <main>
    <v-content>
      <v-container fluid>
        <v-layout justify-center align-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
  </main>
</v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: false
    }
  },
  methods: {
    login () {
      this.$router.push({name: 'Login'})
    },
    logout () {
      this.$auth.logout()
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
