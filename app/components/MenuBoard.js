"use client";

import { Children, useState } from "react";

const categories = [
  { key: "all", label: "전체" },
  { key: "coffee", label: "☕ 커피" },
  { key: "drink", label: "🧃 음료" },
  { key: "dessert", label: "🍰 디저트" },
];

export default function MenuBoard({ items = [], children }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const keyword = search.trim().toLowerCase();

  // 카테고리, 검색어, 주문 가능 여부를 함께 적용합니다.
  // 메뉴 카드는 서버에서 받은 children을 그대로 사용합니다.
  const filteredCards = Children.toArray(children)
    .map((card, index) => ({ card, menu: items[index] }))
    .filter(({ menu }) => category === "all" || menu.category === category)
    .filter(({ menu }) => `${menu.name} ${menu.description}`.toLowerCase().includes(keyword))
    .filter(({ menu }) => !onlyAvailable || !menu.soldOut)
    .map(({ card }) => card);

  return (
    <div className="menu-board">
      <label className="menu-search-label">
        메뉴 검색
        <input
          className="menu-search"
          type="search"
          placeholder="메뉴 이름이나 설명을 검색하세요"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </label>
      <label className="available-filter">
        <input
          type="checkbox"
          checked={onlyAvailable}
          onChange={(event) => setOnlyAvailable(event.target.checked)}
        />
        주문 가능한 메뉴만 보기
      </label>
      <div className="category-tabs" role="group" aria-label="메뉴 카테고리">
        {categories.map((cat) => (
          <button
            key={cat.key}
            type="button"
            className={category === cat.key ? "tab active" : "tab"}
            aria-pressed={category === cat.key}
            onClick={() => setCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <p className="search-count" role="status">검색 결과 {filteredCards.length}개</p>
      {items.length === 0 ? (
        <p className="empty">준비 중인 메뉴입니다</p>
      ) : filteredCards.length === 0 ? (
        <p className="empty">조건에 맞는 메뉴가 없습니다. 검색어나 필터를 변경해 주세요.</p>
      ) : (
        <div className="menu-grid">{filteredCards}</div>
      )}
    </div>
  );
}
