import Response from './response';

export default class Listener {
  constructor(bot, pattern, options, handler) {
    this.bot = bot;
    this.pattern = pattern;
    this.options = options;
    this.handler = handler;
  }

  receive(message) {
    const text = message.content;
    let match;

    if (typeof this.pattern === 'function') {
      match = this.pattern.match(text, this.bot);
    } else {
      match = text.match(this.pattern);
    }

    if (!match) {
      console.log('Text does not match pattern');

      return;
    }

    this.handler(new Response(this.bot, message, match, this.options));
  }
}
