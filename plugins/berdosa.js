let handler  = async (m, { conn, usedPrefix }) => { 
	conn.sendButton(m.chat, `Astagfirullah kak\nini berdosa banget dasar anak haram`.trim(), '© mikebot', 'Biarin', 'Emg lu siapa', m)
	}

handler.command = /^(kontol|kntl|pantek|memek|mmk|anjing|anjg|ptk|bangsat)$/i

module.exports = handler
