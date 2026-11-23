import MenuList from "./components/MenuList";
import StampCard from "./components/StampCard";
import { menu } from "@/data/menu";

// 부모 컴포넌트: 메뉴 데이터를 자식에게 props로 전달합니다.
export default function Home() {
  return (
    <main>
      <h1>☕ 수민 카페</h1>
      <p className="intro">오늘의 메뉴를 소개합니다.</p>

      <StampCard />

      <section aria-labelledby="menu-title">
        <h2 id="menu-title">오늘의 추천</h2>
        <MenuList items={menu} />
      </section>
    </main>
  );
}
