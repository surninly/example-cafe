import MenuCard from "./MenuCard";
import MenuBoard from "./MenuBoard";

// 메뉴 카드는 서버에서 만들고, 검색을 담당하는 클라이언트에 children으로 전달합니다.
export default function MenuList({ items = [] }) {
  return (
    <MenuBoard items={items}>
      {items.map((menu) => (
        <MenuCard key={menu.id} {...menu} />
      ))}
    </MenuBoard>
  );
}
