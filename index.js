const TelegramApi = require("node-telegram-bot-api");
const token = "6617013108:AAFB8O2dadlWSU8pnBPske1854e--L4-500";
var opt = { polling: true };

const bot = new TelegramApi(token, opt);
const options = require("./options");

const {
  greetingMessage,
  infoMessage,
  articles,
  lectures,
  development,
  finals,
  knowledgeData,
  articlesTDH,
  contacts,
} = require("./messages");

const start = () => {
  bot.setMyCommands([
    { command: "info", description: "info" },
    { command: "getData", description: "getData" },
    {
      command: "contacts",
      description: "contacts ",
    },
  ]);

  bot.on("message", (message) => {
    const { text } = message;
    const chatId = message.chat.id;

    switch (text) {
      case "/start":
        return bot.sendMessage(chatId, greetingMessage);
      case "/info":
        return bot.sendMessage(chatId, infoMessage);
      case "/getData":
        return bot.sendMessage(chatId, "выбери, что тебе нужно", options);
      case "/contacts":
        return bot.sendMessage(chatId, contacts);

      default:
        break;
    }

    return bot.sendMessage(chatId, "на такое у меня ответа нет ахах");
  });

  bot.on("callback_query", (callbackQuery) => {
    const chatId = callbackQuery.message.chat.id;

    switch (callbackQuery.data) {
      case "articles":
        return bot.sendMessage(chatId, articles);
      case "lectures":
        return bot.sendMessage(chatId, lectures);
      case "development":
        return bot.sendMessage(chatId, development);
      case "finals":
        return bot.sendMessage(chatId, finals);
      case "knowledgeData":
        return bot.sendMessage(chatId, knowledgeData);
      case "articlesTDH":
        return bot.sendMessage(chatId, articlesTDH);

      default:
        return bot.sendMessage(
          chatId,
          `Такая команда недоступна: ${callbackQuery.data}`
        );
    }
  });
  bot.on("polling_error", console.log);
};

start();
