const _ = require('lodash');

export const getEmailBaseUrl = state => {
  const defaultUrl = state.baseUrl + '/jmap';

  if (state.session.user) {
    const inboxConfiguration = _.find(state.session.user.configurations.modules, { name: 'linagora.esn.unifiedinbox' });

    return _.find(inboxConfiguration.configurations, { name: 'api' }).value || defaultUrl;
  }

  return defaultUrl;
};
