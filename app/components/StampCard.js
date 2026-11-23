"use client";

import { useState } from "react";

export default function StampCard() {
  const [count, setCount] = useState(0);

  const message = count === 0
    ? "아직 스탬프가 없어요. 첫 스탬프를 찍어보세요!"
    : count >= 10
      ? "🎉 스탬프 10개 달성! 무료 음료 한 잔을 받으세요!"
      : `무료 음료까지 ${10 - count}개 남았어요!`;

  function handleStamp() {
    setCount((currentCount) => Math.min(currentCount + 1, 10));
  }

  return (
    <section className="stamp-card" aria-labelledby="stamp-title">
      <h2 id="stamp-title">☕ 스탬프 쿠폰</h2>
      <div className="stamps" aria-hidden="true">
        {Array.from({ length: 10 }, (_, index) => (
          <span key={index}>{index < count ? "☕" : "○"}</span>
        ))}
      </div>
      <div className="stamp-status" role="status">
        <p>모은 스탬프: <strong>{count} / 10개</strong></p>
        <p>{message}</p>
      </div>
      <button type="button" onClick={handleStamp} disabled={count >= 10}>
        {count >= 10 ? "적립 완료" : "스탬프 찍기"}
      </button>
      <button type="button" onClick={() => setCount(0)} disabled={count === 0}>
        초기화
      </button>
    </section>
  );
}
