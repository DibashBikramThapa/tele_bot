const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '6235476898:AAG8TWI8AD1imWVFADllF2VWn78b3eDu0qQ';

// Create a bot instance
const bot = new TelegramBot(token, { polling: true });

// Listen for /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const message = `Hello! Welcome to my Telegram bot from funky. ${msg.chat.username}`;
  bot.sendMessage(chatId, message);
});

// Listener (handler) for showcasing different keyboard layout
bot.onText(/\/keyboard/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Alternative keybaord layout', {
        'reply_markup': {
            'keyboard': [['Sample text', '2nd sample'], ['Keyboards'], ['I\'m robot']],
            resize_keyboard: true,
            one_time_keyboard: true,
            force_reply: true,
        }
    });
 });