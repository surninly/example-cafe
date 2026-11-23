"use client";

import { useState } from "react";

export default function LikeButton({ name }) {
  const [count, setCount] = useState(0);

  function handleLike() {
    setCount((currentCount) => currentCount + 1);
  }

  return (
    <button
      type="button"
      className="like-button"
      onClick={handleLike}
      aria-label={`${name} 좋아요 ${count}개`}
    >
      <svg
        className="like-heart"
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill={count <= 0 ? "#fff" : "#e53935"}
        stroke={count <= 0 ? "#999" : "#e53935"}
        strokeWidth="1.5"
      >
        <path d="M12 21 3.8 13A5.5 5.5 0 0 1 12 5.7 5.5 5.5 0 0 1 20.2 13Z" />
      </svg>
      <span aria-live="polite" aria-atomic="true">{count}</span>
    </button>
  );
}
