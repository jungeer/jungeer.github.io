import fashion from "./fashion.png";

export default function OotdPage() {
  const renderHeader = () => {
    return (
      <div class="p-12px">
        <div class="text-16px font-500">"Fashion 与气质的碰撞 👠💥" 💐</div>
        <div class="flex gap-12px mt-12px text-12px">
          <span class="color-#576D93">俊哥儿乐___</span>
          <span class="color-#A9A9A9">2024-01-05 09:22 深圳</span>
        </div>
      </div>
    );
  };

  const thankStyle = {
    padding: "12px",
    borderTop: "1px solid #f0f0f0",
    borderBottom: "1px solid #f0f0f0",
    margin: "8px 0",
  };

  const renderThanks = () => {
    return (
      <div style={thankStyle}>
        <p class="text-10px  mb-0 normal">
          感谢生活中遇见的所有所有所有的可爱的人儿 ～ 💐
        </p>
      </div>
    );
  };

  const renderTextContainer = () => {
    return (
      <div class="px-16px line-height-22px text-12px italic">
        <p>本人也没啥品味，只是一些记录 ~ </p>
        <p>喜欢简约有质感的衣服，当然也喜欢一些多巴胺，喜欢色彩…</p>
        <p>主要还是看气质 ~ </p>
        <p>衣服库存最后一次更新于 2023 年底</p>
        <p>以下衣服都为实拍，如与实物不符，那就是光线的艺术 ~ </p>
      </div>
    );
  };

  const renderOotdPhotos = () => {
    return (
      <div
        style={{
          width: "100%",
          height: "500px",
          // height: "fit-content",
          backgroundImage: `url(${fashion})`,
          backgroundSize: "100% 100%",
        }}
      ></div>
    );
  };

  return (
    <div class="w-100% h-100% bg-#dfca9b/[0.2]">
      {renderHeader()}
      {/* {renderThanks()} */}
      {renderTextContainer()}
      {renderOotdPhotos()}
    </div>
  );
}
