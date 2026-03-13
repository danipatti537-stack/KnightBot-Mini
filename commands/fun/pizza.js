const handler = async (m, { conn }) => {
    // Fase 1: Inizio preparazione
    let { key } = await conn.sendMessage(m.chat, { text: "👨‍🍳 Accendo il forno a legna..." });

    // Sequenza di preparazione con animazione fluida
    const fasi = [
        "⚪ Stendo il panetto di pasta...",
        "⚪\n🍅 Aggiungo il pomodoro San Marzano...",
        "⚪\n🍅\n🧀 Metto la mozzarella di bufala...",
        "⚪\n🍅\n🧀\n🌿 Un tocco di basilico fresco...",
        "🔥 Inforno la pizza... (350°C)",
        "⌛ La crosta si sta dorando...",
        "🍕 **Ecco la tua Pizza Danexus fumante!** 🍕\n\n*Servita calda!* 💀"
    ];

    for (let step of fasi) {
        // Aspetta 1.2 secondi tra ogni fase per renderlo più realistico
        await new Promise(resolve => setTimeout(resolve, 1200)); 
        await conn.sendMessage(m.chat, { text: step, edit: key });
    }
}

handler.help = ['pizza'];
handler.tags = ['divertimento'];
handler.command = ['pizza', 'margherita', 'fame2'];

export default handler;
