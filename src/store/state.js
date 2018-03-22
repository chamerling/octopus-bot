export default {
  sidebar: true,
  baseUrl: 'https://openpaas.linagora.com',
  bot: {
    messages: {
      list: [
        {
          content: 'What is my last email?',
          createdAt: new Date(),
          type: 'user'
        },
        {
          content: 'Your last email is from chamerling@linagora.com',
          createdAt: new Date(),
          type: 'bot'
        }
      ]
    }
  },
  emails: {
    list: [],
    jmapClient: null
  },
  session: {
    jwtToken: localStorage.getItem('default_auth_token'),
    user: null
  }
};
