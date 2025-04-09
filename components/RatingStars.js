"use client";

import { useState } from "react";

export default function RatingStars({ onSubmit, average, total }) {
  const [rating, setRating] = useState(0);

  const handleSubmit = async () => {
    if (rating > 0) {
      await onSubmit(rating);
      setRating(0);
    }
  };

  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold mb-2">
        Rating {average.toFixed(1)} (from {total} voters)
      </h2>
      <div className="flex items-center space-x-1 mb-2">
        {[1, 2, 3, 4, 5].map((n) => (
          <span
            key={n}
            className={`cursor-pointer text-2xl ${
              rating >= n ? "text-yellow-500" : "text-gray-300"
            }`}
            onClick={() => setRating(n)}
          >
            ★
          </span>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
      >
        Submit Rating
      </button>
    </div>
  );
}
