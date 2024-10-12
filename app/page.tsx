// nextjs-dashboard/pages/index.tsx
import Image from "next/image";
// 클래스 컴포넌트 -> 필요할 때
// 함수형 컴포넌트 -> 기본

export default function Home() {
  // JSX
  const key = "value";
  const obj = { key: "value" };
  const arr = [1, 2, 3];
  const inlineStyle = {
    backgroundColor: "red",
    color: "white",
    textDecoration: "underline",
  };

  //xml
  return (
    <main
      className={"flex min-h-screen flex-col items-center justify-between p-24"}
      // style={inlineStyle}>
    >
      Hello, Next.js!
      {key}
      <div>
        {arr.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </main>
  ); //jsx
}

// export default Home;
