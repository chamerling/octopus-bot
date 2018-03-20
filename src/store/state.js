export default {
  sidebar: true,
  baseUrl: 'https://openpaas.linagora.com',
  emails: {
    list: [],
    jmapClient: null
  },
  session: {
    jwtToken: localStorage.getItem('default_auth_token'),
    user: null
  }
};
