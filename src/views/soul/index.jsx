import "./index.less";

import { useRouter } from "vue-router";

export default function MySpacePage() {
  const router = useRouter();

  const toPage = (box) => {
    const pageMap = {
      "3000love": () => router.push({ name: "/soul/3000love" }),
      love: () => console.log("love"),
    };
    pageMap[box]();
  };

  const renderBoxs = () => {
    return (
      <div class="box-list">
        {["3000love", "love"].map((box) => (
          <div class="box" onClick={() => toPage(box)}>
            {box}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div class="soul p-12px">
      <div class="text-16px font-500">"第三空间：灵魂" 💐</div>
      {renderBoxs()}
    </div>
  );
}

MySpacePage.displayName = "MySpacePage";
