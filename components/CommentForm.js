"use client";

import { useState } from "react";

export default function CommentForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && comment) {
      await onSubmit({ name, comment });
      setName("");
      setComment("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-md mb-4">
      <input
        type="text"
        placeholder="Nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        required
      />
      <textarea
        placeholder="Komentar"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        required
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Kirim Komentar
      </button>
    </form>
  );
}
