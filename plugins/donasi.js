let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let teks = `───[🐈‍⬛]───╮
│╭────────────────────
┴│👋 مرحباً!
⬡│🐈‍⬛\n⬡│ أنا تـيـمـون 🐈‍⬛ *الـقـط الأسـود (🐈‍⬛)*! 
│╰────────────────────
┠───[ معلومات ]────╮
│╭────────────────────
┴│ ( تـيـمـون )
⬡│💻 هو بوت واتساب حديث تم صنعه بواسطة :
⬡│👨‍💻 Alazhar (🇴🇲)
⬡│👩‍💻 Nya (🇾🇪)
⬡│📞 للتواصل معنا, انضم عبر الرابط :
⬡│📌 https://chat.whatsapp.com/CLELmSuuVZaHSq1lOjmXhB
⬡│🙅‍♂️ *( لاتتصل على البوت )*
│╰────────────────────
┠───[ كيف تستخدم البوت ؟ ]────⋆
┴│💡 سوف أعطيكم بعض الأمثلة على كيفية أستخدامه :
⬡│🔸 .منشن \n⬡│- هذا الامر خاص بالمنشن.
⬡│🔸 .طقم \n⬡│- هذا امر مخصوص ل طقم صور الانمي.
⬡│🔸 .ملصق \n⬡│- تحويل الصورة او فيديو إلى ملصق.
┬│🔸 .صورة \n⬡│- هذا امر يطلب اي صورة من جوجل مثال: اكتب .صورة قطة
│╰──────────────
│( البوت تحت الصيانة )
╰────────═┅═────
`

let you = flaaa.getRandom()

const buttons = [
  {buttonId: '.منشن', buttonText: {displayText: '( المنشن الجماعي )'}, type: 1},
  {buttonId: '.طقم', buttonText: {displayText: '( تطقيمات )'}, type: 1},
  {buttonId: '.مخفي', buttonText: {displayText: '( المنشن المخفي )'}, type: 1}
]

const templateMessage = {
    image: {url: you + 'Menu'},
    caption: teks, 
    footer: wm,
    buttons: buttons,
    headerType: 4
}
await conn.sendMessage(m.chat, templateMessage, m)}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = ['الاوامر|القائمة']

export default handler
