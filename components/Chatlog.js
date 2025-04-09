export default function ChatLog({ messages }) {
  return (
    <div className="bg-gray-100 p-4 rounded shadow max-h-[500px] overflow-y-auto mb-4">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`mb-2 p-2 rounded ${
            msg.role === "user" ? "bg-white text-right" : "bg-blue-100 text-left"
          }`}
        >
          <p className="text-sm">
            <strong>{msg.role === "user" ? "Kamu" : "AI"}:</strong> {msg.content}
          </p>
        </div>
      ))}
    </div>
  );
}
