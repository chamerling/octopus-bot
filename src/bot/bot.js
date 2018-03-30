import Listener from './listener';

export default class Bot {
  constructor(options) {
    this.options = options;
    this.store = options.store;
    this.listeners = [];
  }

  listen(pattern, options, handler) {
    this.listeners.push(new Listener(this, pattern, options, handler));
  }

  start() {
    // TODO: watch a value, or subscribe to actions, make type configurable
    this.store.subscribe((mutation) => {
      if (mutation.type === 'SEND_BOT_MESSAGE') {
        const { payload } = mutation;
        const { type } = payload;

        if (type === 'user') {
          this.listeners.forEach(listener => listener.receive(payload));
          // TODO: Check when no one replied
        }
      }
    });
  }

  send(message = {}) {
    message.type = message.type || 'bot';
    message.createdAt = message.createdAt || new Date();
    message.content = message.content || 'I can not say anything...';

    this.store.commit('SEND_BOT_MESSAGE', message);
  }
}
