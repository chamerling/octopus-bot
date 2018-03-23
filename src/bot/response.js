export default class Response {
  constructor(bot, message, match, options) {
    this.bot = bot;
    this.message = message;
    this.match = match;
    this.options = options;
  }

  reply(content) {
    this.bot.send({ content });
  }
}
