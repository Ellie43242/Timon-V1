import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭───[🐈‍⬛]───╮
│╭────────────────────
┴│👋 مرحباً , ${conn.getName(m.sender)}!
⬡│🐈‍⬛\n⬡│ أنا تـيـمـون 🐈‍⬛ *الـقـط الأسـود (🐈‍⬛)*! 
│╰────────────────────
┠───[ معلومات ]────╮
│╭────────────────────
┴│ ( تـيـمـون )
⬡│💻 هو بوت واتساب حديث تم صنعه بواسطة :
⬡│👨‍💻 Alazhar (🇴🇲)
⬡│👩‍💻 Nya (🇾🇪)
⬡│📞 For any inquiries, contact:
⬡│📱 wa.me/923470027813
⬡│🙅‍♂️ Don't call the owner or you\'ll be
⬡│ ignored or blocked! 😬
│╰────────────────────
┠───[ كيف تستخدم البوت ؟ ]────⋆
┴│💡 Some commands you can use:
⬡│🔸 .menu \n⬡│- Shows a list of available commands
⬡│🔸 .play \n⬡│- Plays a YouTube video or audio.
⬡│🔸 .sticker \n⬡│- Converts an image to a sticker
┬│🔸 .translate \n⬡│- Translates text to other lang
│╰──────────────
╰────────═┅═───────
*Thank you for choosing Ikratos-MD-v1! 🌟✨*
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(الأوامر|القائمة)$/i


export default handler
