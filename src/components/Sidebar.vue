<template>
  <v-navigation-drawer fixed clipped app v-model="sidebar">
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img :src="getUserAvatarUrl" >
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{username}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-list class="pt-0">
      <v-divider></v-divider>
      <v-list-tile @click="loadEmails()">
        <v-list-tile-action>
          <v-icon>email</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Emails</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    username() {
      return this.$store.state.session.user && `${this.$store.state.session.user.firstname} ${this.$store.state.session.user.lastname}`;
    },
    sidebar: {
      get: function() {
        return this.$store.state.sidebar
      },
      set: function(newValue) {
        this.$store.dispatch('setSidebar', newValue);
      }
    },
    ...mapGetters(['getUserAvatarUrl'])
  },
  methods: {
    loadEmails() {
      this.$router.push({ name: 'Emails' });
    }
  }
};
</script>
