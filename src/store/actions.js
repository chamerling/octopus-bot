import Vue from 'vue';
import * as types from './mutation-types';
import EmailClient from '../modules/email/client';

export const login = ({ commit }) => {
  commit(types.AUTHENTICATING, true);
  commit(types.AUTHENTICATED, true);
};

export const logout = ({ dispatch }) => new Promise((resolve) => {
  Vue.auth.logout();
  dispatch('resetSession');
  resolve();
});

export const resetSession = ({ commit, dispatch }) => {
  // TODO, should reset the whole store
  commit(types.FETCH_USER, {});
  dispatch('setJWTToken', null);
};

export const fetchUser = ({ commit }) => {
  Vue.axios.get('api/user').then((response) => {
    commit(types.FETCH_USER, response.data);
  });
};

export const fetchJWToken = () => Vue.axios.post('api/jwt/generate').then(response => response.data);

export const setJWTToken = ({ commit }, token) => {
  commit(types.SET_JWT_TOKEN, token);
};

export const fetchLastEmails = ({ commit, state, getters }) => {
  const client = new EmailClient({ token: state.session.jwtToken, url: getters.getEmailBaseUrl });

  client.getEmails().then(emails => commit(types.FETCH_LAST_EMAILS, emails));
};

// UI

export const setSidebar = ({ commit }, value) => {
  commit(types.SET_SIDERBAR, value);
};

export const sendBotMessage = ({ commit }, message) => {
  commit(types.SEND_BOT_MESSAGE, message);
};
