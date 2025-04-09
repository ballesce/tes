export async function POST(req) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return new Response("❌ OPENROUTER_API_KEY tidak tersedia", { status: 500 });
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://tes2-swart.vercel.app", // ✅ ganti sesuai domainmu
        "X-Title": "ChatBot Pintar",
      },
      body: JSON.stringify({
        model: "meta-llama/llama-3-8b-instruct",
        messages: [
          { role: "system", content: "Kamu adalah asisten pintar yang ramah dan membantu." },
          ...messages,
        ],
      }),
    });

    const text = await response.text();
    console.log("🔁 Status:", response.status);
    console.log("📥 Response Text:", text);

    if (!response.ok) {
      return new Response(`Gagal ambil response dari OpenRouter: ${text}`, {
        status: response.status,
      });
    }

    const data = JSON.parse(text);
    const reply = data.choices?.[0]?.message?.content || "(tidak ada jawaban)";
    return Response.json({ reply });

  } catch (err) {
    console.error("❌ Error:", err);
    return new Response("Terjadi kesalahan saat memproses permintaan", { status: 500 });
  }
}
