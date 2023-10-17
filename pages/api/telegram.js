const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TELEGRAM_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

export function shareNewApply(name) {
  const bot = new TelegramBot(token, {polling: false});
  process.env.count = Number(process.env.count) + 1;  
  const count = process.env.count;
  const message = `Nuova Candidatura: ${name}\nCount: ${count}`;
  bot.sendMessage(chatId, message);
}
