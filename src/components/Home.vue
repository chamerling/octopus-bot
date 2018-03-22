<template>
  <chat-bot/>
</template>

<script>
import ChatBot from '@/components/ChatBot.vue';

export default {
  name: 'Home',
  components: {
    'chat-bot': ChatBot
  }
};
</script>
