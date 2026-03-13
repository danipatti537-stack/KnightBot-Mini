const handler = async (m, { conn, participants }) => {
    // Sceglie una persona a caso dal gruppo
    const target = participants[Math.floor(Math.random() * participants.length)];
    const tag = `@${target.id.split('@')[0]}`;
    
    // Percentuale casuale da 0 a 100
    const randPerc = Math.floor(Math.random() * 101);

    let { key } = await conn.sendMessage(m.chat, { 
        text: `Scansione di ${tag} in corso... 🔎`,
        mentions: [target.id] 
    });

    const barre = [
        " [█▒▒▒▒▒▒▒▒▒] 10%",
        " [███▒▒▒▒▒▒▒] 30%",
        " [█████▒▒▒▒▒] 50%",
        " [████████▒▒] 80%",
        " [██████████] 100%"
    ];

    for (let step of barre) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        await conn.sendMessage(m.chat, { text: step, edit: key, mentions: [target.id] });
    }

    let risultato;
    if (randPerc > 80) risultato = "⚠️ Livello critico! È un caso disperato.";
    else if (randPerc > 50) risultato = "🤔 Situazione preoccupante...";
    else risultato = "✅ Per ora sembra salvo.";

    await conn.sendMessage(m.chat, { 
        text: `📊 **RISULTATO SCANSIONE**\n\nUtente: ${tag}\nPercentuale scemenza: *${randPerc}%*\n\n${risultato}`, 
        edit: key, 
        mentions: [target.id] 
    });
}

handler.command = ['test', 'percentuale', 'chiè'];
handler.group = true; // Funziona solo nei gruppi

export default handler;
