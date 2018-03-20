<template>
  <v-app id="app" dark>
    <div v-if="$auth.ready()">
      <sidebar v-if="$auth.check()" />
      <v-toolbar v-if="$auth.check()" dark fixed clipped-left app>
        <v-toolbar-side-icon @click.stop="sidebar = !sidebar"></v-toolbar-side-icon>
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
            <v-list-tile>
              <v-list-tile-title>About</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar>
      <main>
        <v-content>
          <v-container fluid fill-height>
            <v-layout justify-center align-center>
              <router-view></router-view>
            </v-layout>
          </v-container>
        </v-content>
      </main>
    </div>
    <div v-if="!$auth.ready()">
      <v-progress-circular indeterminate :size="50" color="primary"></v-progress-circular>
    </div>
  </v-app>
</template>

<script>
import Sidebar from '@/components/Sidebar';

export default {
  name: 'App',
  computed: {
    sidebar: {
      get: function() {
        return this.$store.state.sidebar
      },
      set: function(newValue) {
        this.$store.dispatch('setSidebar', newValue);
      }
    }
  },
  created () {
    this.$auth.ready(() => {
      this.$store.dispatch('fetchUser');
    });
  },
  methods: {
    login () {
      this.$router.push({name: 'Login'})
    },
    logout () {
      this.$store.dispatch('logout').then(() => {
        this.$router.push({name: 'Login'});
      });
    }
  },
  components: {
    'Sidebar': Sidebar
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
