const handler = async (m, { conn }) => {
    // Fase 1: Inizio preparazione
    let { key } = await conn.sendMessage(m.chat, { text: "🍞 Preparo il panino per te..." });

    // Sequenza di preparazione (ritardo di 1 secondo tra ogni ingrediente)
    const fasi = [
        "🍞\n🥬 Aggiungo l'insalata...",
        "🍞\n🥬\n🍅 Metto il pomodoro...",
        "🍞\n🥬\n🍅\n🧀 Un po' di formaggio...",
        "🍞\n🥬\n🍅\n🧀\n🥩 Aggiungo la carne...",
        "🍞\n🥬\n🍅\n🧀\n🥩\n🍞 Chiudo il panino!",
        "🍔 **Ecco il tuo panino Danexus!** 🍔\n\n*Buon appetito!*"
    ];

    for (let step of fasi) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Aspetta 1 secondo
        await conn.sendMessage(m.chat, { text: step, edit: key });
    }
}

handler.help = ['panino'];
handler.tags = ['divertimento'];
handler.command = ['panino', 'sandwich', 'fame'];

export default handler;
