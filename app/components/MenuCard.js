import OrderButton from "./OrderButton";
import LikeButton from "./LikeButton";

// 자식 컴포넌트: {...menu}로 전달받은 props를 화면에 보여줍니다.
export default function MenuCard({
  emoji,
  name,
  price,
  description,
  soldOut = false,
  isNew = false,
}) {
  return (
    <article className={soldOut ? "menu-card soldout" : "menu-card"}>
      <h3>
        <span aria-hidden="true">{emoji}</span>
        {name}
        {isNew && <span className="badge">NEW</span>}
      </h3>
      <p className="price">
        {price.toLocaleString("ko-KR")}원
        {price >= 6000 && (
          <span className="premium"><span aria-hidden="true">💎</span> 프리미엄</span>
        )}
      </p>
      {soldOut && <p className="soldout-label">품절</p>}
      <p className="description">{description}</p>
      <div className="menu-actions">
        <OrderButton name={name} soldOut={soldOut} />
        <LikeButton name={name} />
      </div>
    </article>
  );
}
