export default {
  sidebar: true,
  baseUrl: 'https://openpaas.linagora.com',
  bot: {
    messages: {
      list: [
        {
          content: 'Hello! What can I do?',
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
