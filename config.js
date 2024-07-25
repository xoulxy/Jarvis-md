const { Sequelize } = require('sequelize');
const fs = require('fs');

if (fs.existsSync('config.env')) {
  require('dotenv').config({
      path: './config.env'
  });
}

const toBool = (x) => x === 'true';

const DATABASE_URL = process.env.DATABASE_URL === undefined ? "./database.db" : process.env.DATABASE_URL

module.exports = {
  BAN_CHATS: process.env.BAN_CHATS || "",
  PORT: toBool(process.env.PORT) || 8000,
  AUDIO_DATA: process.env.AUDIO_DATA || '𝑺 𝜟 𝜝 𝜟 𝑅 𝛪 /// 🌩️;🌝💗🕊️൱᭄റം ഏതꪆ͢യꪆലเ๐ ൱᭄ൖൽ കറുപ്പ് ത͢ന്നെ...!!🌚🖤🍃;https://i.imgur.com/CoAcgTb.jpeg',
  WARN_COUNT: process.env.WARN_COUNT || '3',
  ALIVE_DATA : process.env.ALIVE_DATA || "_*𝐇ᴇʏʏ &sender 𝐈ᴍ 𝐒ᴛɪʟʟ 𝐀ʟɪᴠᴇ 🫀🫂*_",
  SESSION_ID: process.env.SESSION_ID || 'Jarvis_2d64_66bf_0029_53e6_2cae_220a_9465_1edf',
  LANG: process.env.LANG || 'EN',
  ELEVENLABS: process.env.ELEVENLABS,
  HANDLERS: process.env.HANDLER  || 'null',
  ALLWAYS_ONLINE: toBool(process.env.ALLWAYS_ONLINE || "true"),
  READ_MSG: toBool(process.env.READ_MSG || "false"),
  BRANCH: "main",
  LINKPREVIEW: toBool(process.env.LINKPREVIEW || "false"),
  CONTEXTINFO: process.env.CONTEXTINFO || `{"title": "𝑺 𝜟 𝜝 𝜟 𝑅 𝛪 /// 🌩️", "body": "𝐀ᴡᴇꜱᴏᴍᴇ 🍉", "thumbnailUrl": "https://i.imgur.com/CoAcgTb.jpeg", "renderLargerThumbnail": true, "mediaType": 1, "mediaUrl": "", "sourceUrl": "https://www.instagram.com/xoulxy", "showAdAttribution": true}`,
  KOYEB_API: process.env.KOYEB_API,
  BRAINSHOP: process.env.BRAINSHOP || '172372,nbjE0YAlyw3cpoMl',
  TGTOKEN: "bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4",
  API: 'https://api.lokiser.xyz/',
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || '𝑺 𝜟 𝜝 𝜟 𝑅 𝛪 /// 🌩️',
  CALL_BLOCK: toBool(process.env.CALL_BLOCK) || false,
  SAVE_STATUS: toBool(process.env.SAVE_STATUS) || false,
  STATUS_VIEW: process.env.STATUS_VIEW || "true",
  REJECT_CALL: toBool(process.env.REJECT_CALL || "true"),
  ERROR_MSG: toBool(process.env.ERROR_MSG) || true,
  WELCOME_MSG: process.env.WELCOME_MSG || "Hi &mention Welcome to &gname",
  GOODBYE_MSG: process.env.GOODBYE_MSG || "Hi $mention It was Nice Seeing you",
  MEDIA_DATA: process.env.MEDIA_DATA|| 'ʟɪꜱᴛ ᴍᴇɴᴜ;𝑺 𝜟 𝜝 𝜟 𝑅 𝛪 /// 🌩️;https://i.imgur.com/CoAcgTb.jpeg',
  MENU_FONT: process.env.MENU_FONT || "11;29",
  SUDO: process.env.SUDO || '919633605648',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || '',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || '',
  BOT_INFO: process.env.BOT_INFO || '𝐗ᴏᴜʟ 𝐒ᴇʀ;𝑺 𝜟 𝜝 𝜟 𝑅 𝛪 /// 🌩️;https://i.imgur.com/CoAcgTb.jpeg',
  WORK_TYPE: process.env.WORK_TYPE || 'public',
  DATABASE: DATABASE_URL === "./database.db" ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: false }) : new Sequelize(DATABASE_URL, {dialect: "postgres", ssl: true, protocol: "postgres", dialectOptions: { native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false }),
};
