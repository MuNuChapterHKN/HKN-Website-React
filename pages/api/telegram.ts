import TelegramBot from "node-telegram-bot-api";
import fs from "fs";
import { handleError } from "./application";

const token = process.env.TELEGRAM_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;
const filePath = process.env.COUNTER_FILE_PATH ?? "HKN_APPLY_COUNTER.txt";
const threadId = process.env.TELEGRAM_THREAD_ID ?? 1;

export async function shareNewApply(name: string) {
  let counter: number | undefined;
  try {
    counter = readCounter() + 1;
    updateCounter(counter);
  } catch (e) {
    handleError(e, "Error retrieving count");
  }
  const counterMessage = counter ?? "Unknown";
  const emoji1 = getRandomEmoji(["🔥", "✨", "👾"]);
  const emoji2 = getRandomEmoji(["🥳", "🤩", "😍"]);
  const message = `${emoji1} Nuova Candidatura! ${emoji2}\nNome: ${name}\nCount: ${counterMessage}`;
  await sendMessage(message);
}

export async function sendApplyFailedMessage(stage: string, applicant: string) {
  const message = `Apply failed ☠️\n\nStage: ${stage}\n Applicant: ${applicant}`;
  await sendMessage(message);
}

export async function sendMessage(message: string) {
  if (!token || !chatId) 
    throw new Error("Telegram APIs not configured.");
  const bot = new TelegramBot(token, { polling: false });
  await bot.sendMessage(chatId, message, { message_thread_id: Number(threadId) });
}

function readCounter(): number {
  try {
    if (isFileOlderThanNDays(filePath, 30)) return 0;
    const data = parseInt(fs.readFileSync(filePath, "utf-8"));
    return isNaN(data) ? 0 : data;
  } catch (error) {
    return 0; // File doesn't exist or couldn't be read
  }
}

function updateCounter(counter: number) {
  fs.writeFileSync(filePath, counter.toString());
}

function isFileOlderThanNDays(filePath: string, days: number): boolean {
  const stats = fs.statSync(filePath);
  const lastUpdated = stats.mtime.getTime();
  const now = new Date().getTime();
  const thirtyDaysInMilliseconds = days * 24 * 60 * 60 * 1000; // days in ms
  return now - lastUpdated > thirtyDaysInMilliseconds;
}

function getRandomEmoji(emojis: string[]): string {
  return emojis[Math.floor(Math.random() * emojis.length)];
}
