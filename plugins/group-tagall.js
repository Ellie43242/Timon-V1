let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`${text ? `${text}\n` : ''}╭───[🐈‍⬛]───╮
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
╰────────═┅═───────\n` + users.map(v => '│🐈‍⬛ : @' + v.replace(/@.+/, '')).join`\n` + '\n└────', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['منشن.جماعي|منشن|الأوامر']
handler.admin = true
handler.group = true

export default handler
