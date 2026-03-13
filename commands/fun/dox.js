const handler = async (m, { conn, text }) => {
    if (!text) return m.reply("Inserisci il numero da doxxare! Esempio: .dox 3331234567");

    // Fase 1: Inizio finta scansione
    let { key } = await conn.sendMessage(m.chat, { text: "🔍 Connessione al database interpol.gov in corso..." });

    const fasi = [
        "⏳ Accesso ai server satellitari... 15%",
        "⏳ Recupero pacchetti IP... 42%",
        "⏳ Bypass firewall WhatsApp... 78%",
        "⏳ Decrittazione file .creds... 99%",
        "✅ **DATI TROVATI!** Generazione report in corso..."
    ];

    for (let step of fasi) {
        await new Promise(resolve => setTimeout(resolve, 1500));
        await conn.sendMessage(m.chat, { text: step, edit: key });
    }

    // Generazione dati casuali (Fake)
    const nomi = ["Marco", "Luca", "Alessio", "Giovanni", "Francesco", "Davide"];
    const cognomi = ["Rossi", "Esposito", "Bianchi", "Romano", "Ricci", "Gallo"];
    const citta = ["Roma", "Milano", "Napoli", "Torino", "Palermo", "Bologna"];
    
    const fakeNome = nomi[Math.floor(Math.random() * nomi.length)];
    const fakeCognome = cognomi[Math.floor(Math.random() * cognomi.length)];
    const fakeCitta = citta[Math.floor(Math.random() * citta.length)];
    const fakeCF = (Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10)).toUpperCase();
    const fakeIP = `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;

    const reportFinale = `
⚠️ **REPORT DOX: ${text}** ⚠️

👤 **Nome:** ${fakeNome}
👥 **Cognome:** ${fakeCognome}
🏠 **Indirizzo:** Via delle Rose, 14 (${fakeCitta})
🆔 **Codice Fiscale:** ${fakeCF}
🌐 **Indirizzo IP:** ${fakeIP}
🛰️ **Coordinate:** 41.8902° N, 12.4922° E
📱 **Provider:** TIM/Vodafone Shared Node

**Danexus Regna / Rub Danexus** 💀
    `;

    await new Promise(resolve => setTimeout(resolve, 2000));
    await conn.sendMessage(m.chat, { text: reportFinale, edit: key });
}

handler.command = ['dox', 'doxxa'];
handler.owner = true; // Solo tu puoi farlo per evitare abusi

export default handler;
