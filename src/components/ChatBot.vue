<template>
  <v-container fluid>
    <v-form ref="form" v-on:submit.prevent="sendMessage">
      <v-text-field
        color="cyan darken"
        placeholder="Ask the bot..."
        v-model="message"
        loading
      >
        <v-progress-linear
          slot="progress"
          :value="progress"
          height="7"
          :color="color"
        ></v-progress-linear>
      </v-text-field>
    </v-form>
    <v-layout row>
    <v-flex xs12>
      <v-card>
        <v-list>
          <template v-for="(message, index) in messages">
            <v-list-tile avatar :key="message.title">
              <v-list-tile-avatar v-if="message.type === 'user'">
                <img :src="getUserAvatarUrl">
              </v-list-tile-avatar>
              <v-list-tile-avatar v-if="message.type === 'bot'">
                <v-avatar :size="50">
                  <span class="botavatar">🐙</span>
                </v-avatar>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="message.content"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <component :key="message.title" v-if="message.component" :is="message.component" v-bind="message.data"></component>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ChatBot',
  data:() => ({
    message: '',
  }),
  computed: {
    messages() {
      return this.$store.state.bot.messages.list.slice().reverse();
    },
    progress() {
      return Math.min(100, this.message.length * 10)
    },
    color() {
      return ['error', 'warning', 'success'][Math.floor(this.progress / 40)]
    },
    ...mapGetters(['getUserAvatarUrl'])
  },
  methods: {
    sendMessage() {
      this.$store.dispatch('sendBotMessage', { content: this.message, createdAt: new Date(), type: 'user' });
      this.message = '';
    }
  },
  created() {
    this.$bot.listen(/who/, {}, (message) => {
      message.replyText(`You are ${this.$store.getters.getUserName}`);
    });
  }
};
</script>

<style scoped>
  .botavatar {
    font-size: 40px;
  }
</style>
