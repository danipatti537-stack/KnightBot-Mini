const handler = async (m, { conn }) => {
    // Messaggio iniziale
    let { key } = await conn.sendMessage(m.chat, { text: "Preparazione... ✊" });

    // Sequenza di movimento avanti e indietro (loop)
    const movimenti = [
        "✊", 
        "✊↕️", 
        "✊", 
        "✊↕️", 
        "✊", 
        "✊↕️", 
        "⚠️ Sta per succedere...",
        "💦",
        "💦💦",
        "💦💦💦\n\n**DANEXUS REGNA** 💀"
    ];

    for (let i = 0; i < movimenti.length; i++) {
        // Velocità variabile: aumenta verso la fine
        let delay = i > 6 ? 500 : 800; 
        await new Promise(resolve => setTimeout(resolve, delay));
        await conn.sendMessage(m.chat, { text: movimenti[i], edit: key });
    }
}

handler.help = ['sega'];
handler.tags = ['divertimento'];
handler.command = ['sega', 'fap'];

export default handler;
