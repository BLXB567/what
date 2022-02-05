let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Exis [083117436733]
│ • Gopay [6283117436733]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6283117436733
│ > ingin sewa? hubungi owner Wa.me/6283117436733
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
