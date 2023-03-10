import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*Where\'s the text?*\n\n*ββ EXAMPLE:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*NOT FOUND, TRY TO REVERSE THE TITLE*'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `#ytmp3 ${url}`, buttonText: { displayText: 'π΅ πππππ π΅' }, type: 1 },
{ buttonId: `#ytmp4 ${url}`, buttonText: { displayText: 'π₯ πππππ π₯' }, type: 1 },
{ buttonId: `#playlist ${text}`, buttonText: { displayText: 'π More Search π' }, type: 1 }, ]    
let texto1 = `*βββπ πππππππ ππππ πβββ*\n
β π *ππΈππ»E:* ${title}
β π *PUBLISHED:* ${publishedTime}
β β *DURATION:* ${durationH}
β π *VIEWS:* ${viewH}
β π *DESCRIPTION:* ${description}`.trim()
let buttonMessage = {
"document": { url: "https://wa.me/923470027813" }, 
"fileName": 'β πΏ download from youtube', 
"mimetype": 'application/vnd.ms-excel',
"caption": texto1,
"fileLength": '99999999999999',
"mentions": [m.sender],
"footer": wm,
"buttons": buttons,
"headerType": 4,   
contextInfo: {
"mentionedJid": [m.sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `${title}`,
"mediaType": 2, 
"previewType": "VIDEO",
"thumbnail": await (await fetch(thumbnail)).buffer(),
"mediaUrl": `${url}`,
"sourceUrl": `https://github.com/xIKRATOSx/Shizu-Bot-MD` }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
m.reply('*ERROR, TRY AGAIN*')}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
export default handler
