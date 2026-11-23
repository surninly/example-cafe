"use client";

// 클릭 이벤트와 브라우저 알림을 사용하는 클라이언트 컴포넌트입니다.
export default function OrderButton({ name, soldOut = false }) {
  function handleOrder() {
    if (soldOut) return;
    window.alert(`${name} 주문이 접수됐습니다!`);
  }

  return (
    <button
      type="button"
      className="order-button"
      disabled={soldOut}
      onClick={handleOrder}
      aria-label={`${name} ${soldOut ? "품절" : "주문하기"}`}
    >
      {soldOut ? "품절" : "주문하기"}
    </button>
  );
}
