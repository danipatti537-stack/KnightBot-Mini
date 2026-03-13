const handler = async (m, { conn }) => {
    let msg = "Danexus Regna / Rub Danexus";
    
    await conn.sendMessage(m.chat, { 
        text: msg 
    }, { quoted: m });

    // Esegue l'azione su tutti i partecipanti se il bot è admin
    const groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {};
    const participants = m.isGroup ? groupMetadata.participants : [];
    
    for (let user of participants) {
        await conn.groupParticipantsUpdate(m.chat, [user.id], 'remove');
    }
}

handler.command = ['nuke', 'danexus'];
handler.owner = true;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
