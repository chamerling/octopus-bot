const _ = require('lodash');

export const getEmailBaseUrl = state => {
  const defaultUrl = state.baseUrl + '/jmap';

  if (state.session.user) {
    const inboxConfiguration = _.find(state.session.user.configurations.modules, { name: 'linagora.esn.unifiedinbox' });

    return _.find(inboxConfiguration.configurations, { name: 'api' }).value || defaultUrl;
  }

  return defaultUrl;
};

export const getUserAvatarUrl = state => `${state.baseUrl}/api/user/profile/avatar`;

export const getUserName = state => state.session.user && `${state.session.user.firstname} ${state.session.user.lastname}`;
