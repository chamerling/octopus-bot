import Emails from '@/components/Emails';
import Event from '@/components/Event';

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
    },
    {
      pattern: /next event/i,
      options: {
        description: 'I can display your next event when you ask for "next event"'
      },
      handler: (message) => {
        message.reply({
          content: 'Here is your next event:',
          component: Event
        });
      }
    }
  ]
};
