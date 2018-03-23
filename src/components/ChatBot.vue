<template>
  <v-container fluid>
    <v-form ref="form" v-on:submit="sendMessage">
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
                <v-avatar class="red" :size="40">
                  <span class="white--text headline">O</span>
                </v-avatar>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="message.content"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import Emails from '@/components/Emails';

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
    this.$bot.listen(/beer/, {}, (message) => {
      message.reply('🍺');
    });

    this.$bot.listen(/who/, {}, (message) => {
      message.reply(`You are ${this.$store.getters.getUserName}`);
    });

    this.$bot.listen(/time/, {}, (message) => {
      message.reply(new Date());
    });
  }
};
</script>
