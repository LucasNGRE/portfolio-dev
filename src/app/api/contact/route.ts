import { NextResponse } from 'next/server';
import Airtable from 'airtable';

export async function POST(req: Request) {
  try {
    console.log("Requête reçue sur /api/contact");

    const { name, email, message, subject, honeypot } = await req.json();
    console.log("Données reçues :", { name, email, message, subject });

    if (honeypot) {
      console.log("Spam détecté, honeypot activé");
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
      console.error("Clé API Airtable ou Base ID manquants dans les variables d'environnement");
      throw new Error("Missing Airtable API key or Base ID in environment variables");
    }

    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);
    const table = base(process.env.AIRTABLE_TABLE_NAME!);

    const today = new Date().toISOString().split('T')[0];
    console.log(`Recherche des enregistrements dans Airtable pour ${email} aujourd'hui (${today})`);

    const records = await table.select({ filterByFormula: `AND(email = '${email}', createdAt >= '${today}')` }).firstPage();
    console.log(`Enregistrements trouvés : ${records.length}`);

    if (records.length >= 2) {
      console.log("Limite de messages atteinte pour cet email (2 par jour)");
      return NextResponse.json({ error: "Message limit reached (2/day)" }, { status: 429 });
    }

    console.log("Enregistrement des données dans Airtable");

    // Inclure le champ "name" et "subject" dans les enregistrements Airtable
    await table.create([{ fields: { name, email, message, subject } }]);

    console.log("Message enregistré avec succès");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur serveur :", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
