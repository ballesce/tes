"use client";

export default function CommentList({ comments }) {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-bold">Komentar</h2>
      {comments.map((c, idx) => (
        <div key={idx} className="border p-2 rounded shadow-sm">
          <p className="font-semibold">{c.name}</p>
          <p>{c.comment}</p>
        </div>
      ))}
    </div>
  );
}
