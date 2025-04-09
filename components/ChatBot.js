"use client";
import { useState } from "react";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input) return;

    const userMessage = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    const botMessage = { role: "bot", content: data.reply };

    setMessages(prev => [...prev, botMessage]);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">💬 SmartBot (AI Chat)</h2>
      <div className="space-y-2 max-h-80 overflow-y-auto mb-4 border p-2 rounded">
        {messages.map((msg, i) => (
          <div key={i} className={`text-${msg.role === "user" ? "right" : "left"}`}>
            <span className={`inline-block p-2 rounded bg-${msg.role === "user" ? "blue-100" : "gray-200"}`}>
              <strong>{msg.role === "user" ? "You" : "Bot"}:</strong> {msg.content}
            </span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border px-4 py-2 rounded"
          placeholder="Tanyakan sesuatu..."
        />
        <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded">
          Kirim
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
