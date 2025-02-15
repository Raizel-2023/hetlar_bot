const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './tmp' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    SESSION: process.env.BOBIZ_SESSION === undefined ? '' : process.env.BOBIZ_SESSION,
    URL_1NAME: process.env.URL_1NAME === undefined ? '🎃شات المطور🎃' : process.env.URL_1NAME,
    URL_1LINK: process.env.URL_1LINK === undefined ? 'https://wa.me/+967770500831 ' : process.env.URL_1LINK,
    URL_2NAME: process.env.URL_2NAME === undefined ? '✨قروب الدعم✨' : process.env.URL_2NAME,
    URL_2LINK: process.env.URL_2LINK === undefined ? 'https://chat.whatsapp.com/CMp1e9NHmHU5K5sCM2mmKn' : process.env.URL_2LINK,
    FOOTER: process.env.FOOTER === undefined ? '🔱 𝚁𝚊𝚒𝚣𝚎𝚕 𝙱𝙾𝚃 🔱   https://chat.whatsapp.com/CMp1e9NHmHU5K5sCM2mmKn الدعم ' : process.env.FOOTER,
    CAPTION: process.env.CAPTION === undefined ? '🔱 𝚁𝚊𝚒𝚣𝚎𝚕 𝙱𝙾𝚃 🔱 https://chat.whatsapp.com/CMp1e9NHmHU5K5sCM2mmKn' : process.env.CAPTION,
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://i.ibb.co/xJfT5Tj/bot.jpg' : process.env.ALIVE_LOGO,
    SONG_DOWN: process.env.SONG_DOWN === undefined ? '*📥Downloading your song...*' : process.env.SONG_DOWN,
    SONG_UP: process.env.SONG_UP === undefined ? '*📤Uploading your song...*' : process.env.SONG_UP,
    VIDEO_DOWN: process.env.VIDEO_DOWN === undefined ? '*📥Downloading your video...*' : process.env.VIDEO_DOWN,
    VIDEO_UP: process.env.VIDEO_UP === undefined ? '*📤Uploading your video...*' : process.env.VIDEO_UP,
    FILE_DOWN: process.env.FILE_DOWN === undefined ? '*📥Downloading your file...*' : process.env.FILE_DOWN,
    FILE_UP: process.env.FILE_UP === undefined ? '*📤Uploading your file...*' : process.env.FILE_UP,
    STIC_WM: process.env.STIC_WM === undefined ? '卍 HETLA 𝙱𝙾𝚃 卍 ' : process.env.STIC_WM,
};
