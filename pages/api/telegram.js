const TelegramBot = require('node-telegram-bot-api');
import { kv } from '@vercel/kv';

const token = process.env.TELEGRAM_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

export async function shareNewApply(name) {
  const bot = new TelegramBot(token, {polling: false});
  let counter;
  try {
    const counterValue = Number(await kv.hget('apply', 'counter')) + 1;
    await kv.hset('apply', { 'counter': counterValue });
    counter = counterValue;
  } catch (e) {
    counter = "I don't know";
    console.log("Error retrieving count from KV", e);
  }
  const message = `Nuova Candidatura: ${name}\nCount: ${counter}`;
  bot.sendMessage(chatId, message);
}
