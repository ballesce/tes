"use client";

import { useState, useEffect } from "react";
import ChatInput from "@/components/ChatInput";
import ChatLog from "@/components/Chatlog";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const sendMessage = async (userMessage) => {
    const newMessages = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);

    const res = await fetch("/api/chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMessages }),
    });

    const data = await res.json();
    const reply = data.reply;

    setMessages([...newMessages, { role: "assistant", content: reply }]);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-[120px] min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">💬 Chatbot Pintar</h1>
      <ChatLog messages={messages} />
      <ChatInput onSend={sendMessage} />
    </div>
  );
}
