import Emails from '@/components/Emails';

export default {
  listeners: [
    {
      pattern: /last email/,
      handler: (message) => {
        message.reply({
          content: 'Here are your last emails:',
          component: Emails
        });
      }
    }
  ]
};
