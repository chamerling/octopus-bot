import Emails from '@/components/Emails';
import Image from '@/components/Image';

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
    },
    {
      pattern: /beer/,
      options: {
        description: 'We can have a beer together if you ask for "beer"'
      },
      handler: (message) => {
        message.reply({
          content: 'Cheers 🍻',
          component: Image,
          data: {
            url: 'https://media.giphy.com/media/h8NdYZJGH1ZRe/giphy.gif'
          }
        });
      }
    }
  ]
};
