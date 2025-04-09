"use client";

import { useEffect, useState } from "react";
import CommentForm from "@/components/CommentForm";
import CommentList from "@/components/CommentList";
import RatingStars from "@/components/RatingStars";

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [ratingStats, setRatingStats] = useState({ average: 0, total: 0 });

  const loadComments = async () => {
    const res = await fetch("/api/comments");
    const data = await res.json();
    setComments(data);
  };

  const loadRatings = async () => {
    const res = await fetch("/api/ratings");
    const data = await res.json();
    setRatingStats(data);
  };

  useEffect(() => {
    loadComments();
    loadRatings();
  }, []);

  const handleCommentSubmit = async (comment) => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify(comment),
    });
    loadComments();
  };

  const handleRatingSubmit = async (rating) => {
    await fetch("/api/ratings", {
      method: "POST",
      body: JSON.stringify({ rating }),
    });
    loadRatings();
  };

  return (
    <main className="max-w-xl w-full px-4 py-6 mx-auto mt-[100px] min-h-screen sm:px-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-6 text-center">
        💬 Beri Komentar & Penilaian
      </h1>

      {/* Form Komentar */}
      <section className="mb-6">
        <CommentForm onSubmit={handleCommentSubmit} />
      </section>

      {/* List Komentar */}
      <section className="mb-10">
        <CommentList comments={comments} />
      </section>

      {/* Rating */}
      <section className="mb-8">
        <RatingStars
          onSubmit={handleRatingSubmit}
          average={ratingStats.average}
          total={ratingStats.total}
        />
      </section>
    </main>
  );
}
