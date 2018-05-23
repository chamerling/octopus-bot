<template>
 <v-layout row>
    <v-flex shrink>
      <v-list two-line>
        <template>
          <v-list-tile avatar class="event">
            <v-list-tile-avatar>
              <v-avatar class="red" :size="40">
                <span class="white--text headline">{{event.organizer.cn[0].toUpperCase()}}</span>
              </v-avatar>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title class="summary" v-html="event.summary"></v-list-tile-title>
              <v-list-tile-sub-title class="text--primary">{{event.start}} - {{event.end}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-flex>
 </v-layout>
</template>
<script>
export default {
  name: 'Event',
  computed: {
    event() {
      return this.$store.state.events.next || {};
    }
  },
  mounted() {
    this.$store.dispatch('fetchNextEvent');
  }
};
</script>
<style scoped>
  .event {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .summary {
    font-weight: 800;
  }
</style>

