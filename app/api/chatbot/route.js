// app/api/chatbot/route.js
export async function POST(req) {
  const { messages } = await req.json();

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "http://localhost:3000",
      "X-Title": "ChatBot Pintar",
    },
    body: JSON.stringify({
      model: "meta-llama/llama-3-8b-instruct", // ✅ ganti ke model yang valid
      messages: [
        { role: "system", content: "Kamu adalah asisten pintar yang ramah dan membantu." },
        ...messages,
      ],
    }),
  });

  const data = await response.json();
  console.log("OpenRouter response:", data);

  const reply = data.choices?.[0]?.message?.content || "(tidak ada jawaban)";
  return Response.json({ reply });
}
