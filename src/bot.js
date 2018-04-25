import Emails from '@/components/Emails';

export default {
  listeners: [
    {
      pattern: /last emails/i,
      options: {
        description: 'I can display your last emails when you ask for "last emails"'
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
