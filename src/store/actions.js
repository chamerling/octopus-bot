import Vue from 'vue';
import * as types from './mutation-types';

export const login = ({ commit }) => {
  commit(types.AUTHENTICATING, true);
  commit(types.AUTHENTICATED, true);
};

export const fetchUser = ({ commit }) => {
  Vue.axios.get('/user').then((response) => {
    commit(types.FETCH_USER, response.data);
  });
};
