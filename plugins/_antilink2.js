let linkRegex = /https:/i
export async function before(m, { isAdmin, isBotAdmin, text }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
if (chat.antiLink2 && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
const linkThisGroup2 = `https://www.youtube.com/`
const linkThisGroup3 = `https://youtu.be/`
if (m.text.includes(linkThisGroup)) return !0
if (m.text.includes(linkThisGroup2)) return !0
if (m.text.includes(linkThisGroup3)) return !0
}    
await conn.sendButton(m.chat, `*γ ππππ πππππ γ*\n*SEE YOU BABY π, ${await this.getName(m.sender)} YOU BROKE THE GROUP RULES, YOU WILL BE KICKED...!!*${isBotAdmin ? '' : '\n\n*[βππππβ] THE BOT IS NOT ADMIN, CANNOT KICK PEOPLE*'}`, author, ['DEACTIVATE π°π½ππΈπ»πΈπ½πΊπ', '/disable antilink'], m)    
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply('*[βππππβ] BOT OWNER DOES NOT HAVE RESTRICTIONS ENABLED (#ππππππ ππππππππ) CONTACT HIM TO ENABLE IT*')
}
return !0
}
