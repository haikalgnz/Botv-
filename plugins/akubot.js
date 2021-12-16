let handler  = async (m, { conn, usedPrefix }) => { 
	conn.sendButton(m.chat, `Apasih Kak🐷\nmanggil mulu cape tau kak kalau mau gunain bot silahkan😡`.trim(), '© mikebot', 'Menu', '.menu', 'Galak bener', m)
	}

handler.command = /^(bot)$/i

module.exports = handler
