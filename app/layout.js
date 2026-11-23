import "./globals.css";

export const metadata = {
  title: "수민 카페 메뉴판",
  description: "React 학습용 카페 메뉴판",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
