import * as types from './mutation-types';

export default {
  [types.AUTHENTICATED](state, value) {
    state.session.authenticated = value;
  },

  [types.AUTHENTICATING](state, value) {
    state.session.authenticating = value;
  },

  [types.FETCH_USER](state, value) {
    state.session.user = value;
  },

  [types.FETCH_LAST_EMAILS](state, emails) {
    state.emails.list = emails;
  },

  [types.SET_JWT_TOKEN](state, value) {
    state.session.jwtToken = value;
  },

  [types.SET_SIDERBAR](state, value) {
    state.sidebar = value;
  },

  [types.SEND_BOT_MESSAGE](state, message) {
    state.bot.messages.list.push(message);
  }
};
