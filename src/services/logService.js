import Raven from 'raven-js';

const logService = {
  init() {
    Raven.config(
      'https://8cfcfee0664547b88d4aca65e7451224@o1076498.ingest.sentry.io/6078418',
      {
        release: '1-0-0',
        environment: 'development-test',
      }
    ).install();
  },

  log(error) {
    // console.error(error);
    Raven.captureException(error);
  },
};

export default logService;
