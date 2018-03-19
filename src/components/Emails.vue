<template>
 <v-layout row>
    <v-flex>
      <v-list three-line>
        <template v-for="(email, index) in emails">
          <v-list-tile avatar :key="email.id" class="email">
            <v-list-tile-avatar>
              <v-avatar class="blue" :size="40">
                <span class="white--text headline">{{email.from.email[0].toUpperCase()}}</span>
              </v-avatar>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-html="email.subject"></v-list-tile-title>
              <v-list-tile-sub-title class="text--primary">{{email.from.email}} - {{email.date}}</v-list-tile-sub-title>
              <v-list-tile-sub-title v-html="email.preview"></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider v-if="index + 1 < emails.length" :key="index"></v-divider>
        </template>
      </v-list>
    </v-flex>
 </v-layout>
</template>
<script>
export default {
  name: 'Emails',
  computed: {
    emails() {
      return this.$store.state.emails.list.slice().reverse();
    }
  },
  mounted() {
    this.$store.dispatch('fetchLastEmails');
  }
};
</script>
<style scoped>
  .email {
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>

