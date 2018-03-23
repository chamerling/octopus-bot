import Bot from './bot';

export default {
  install(Vue, options) {
    console.log('Installing VueBot...', options);
    const bot = new Bot(options);

    bot.start();
    Vue.prototype.$bot = bot;
  }
};
