export default {
  sidebar: true,
  // checkk webpack config
  baseUrl: process.env.OPENPAAS,
  bot: {
    messages: {
      list: [
        {
          content: 'Hello! What can I do? (type "help" if you are lost)',
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
