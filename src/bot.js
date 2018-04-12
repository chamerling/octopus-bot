import Emails from '@/components/Emails';

export default {
  listeners: [
    {
      pattern: /last email/,
      options: {
        description: 'I can display your last emails when you ask for "last email"'
      },
      handler: (message) => {
        message.reply({
          content: 'Here are your last emails:',
          component: Emails
        });
      }
    }
  ]
};
