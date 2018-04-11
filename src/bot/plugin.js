import Bot from './bot';

export default {
  install(Vue, options) {
    console.log('Installing VueBot...', options);
    const bot = new Bot(options);

    if (options.listeners && options.listeners.length) {
      bot.configure(options.listeners);
    }

    bot.start();
    Vue.prototype.$bot = bot;
  }
};
