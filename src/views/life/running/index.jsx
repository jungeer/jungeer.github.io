import runningJpg from "./running.jpeg";
export default function RunningPage() {
  const renderHeader = () => {
    return (
      <div class="p-12px">
        <div class="text-16px font-500">
          "2023年下半年跑步总公里数：396.261公里" 💐
        </div>
        <div class="flex gap-12px mt-12px text-12px">
          <span class="color-#576D93">俊哥儿乐___</span>
          <span class="color-#A9A9A9">2024-01-05 22:18 深圳</span>
        </div>
      </div>
    );
  };

  const mainStyle = {
    flex: 1,
    backgroundImage: `url(${runningJpg})`,
    backgroundSize: "100% 100%",
    margin: "16px",
  };
  const renderMain = () => {
    return <div style={mainStyle}></div>;
  };

  return (
    <div class="h-100% w-100% flex flex-col">
      {renderHeader()}
      {renderMain()}
    </div>
  );
}

RunningPage.displayName = "RunningPage";
