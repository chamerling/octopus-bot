export default class Response {
  constructor(bot, message, match, options) {
    this.bot = bot;
    this.message = message;
    this.match = match;
    this.options = options;
  }

  replyText(text) {
    this.bot.send({ content: text });
  }

  reply(content) {
    this.bot.send(content);
  }
}
