import { useRoute } from "vue-router";

export default function TravelPage() {
  const route = useRoute();

  const from = route.query.from;

  const isShowMore = from === "MePage";

  const errorClass = ["font-500 color-#cf5735"];

  const linkClass = ["font-500 underline color-#576D93"];

  const renderHeader = () => {
    return (
      <div class="p-12px">
        <div class="text-16px font-500">"青春年华，不负韶光" 💐</div>
        <div class="flex gap-12px mt-12px text-12px">
          <span class="color-#576D93">俊哥儿乐___</span>
          <span class="color-#A9A9A9">2024-01-04 22:34 深圳</span>
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
          感谢之前旅途中遇见的所有所有所有的可爱的人儿 ～ 💐
        </p>
      </div>
    );
  };

  const renderTextContainer = () => {
    return (
      <div class="px-16px line-height-22px text-12px italic">
        <p>喜欢旅行吗？喜欢吧？</p>
        <p>
          为什么不叫旅游呢？因为觉得 “旅行”
          更多地能贴合心情，贴合什么样的心情呢？那就叫 “修行” 吧 ~
        </p>
        <p>
          尽管认为绝大多数事情的本质是相同的，但是有些时候呢，我们应该抛开哲学，就认真地去体验，生活吧
          ~ 知足常乐，随遇而安 ~
        </p>
        <p class={errorClass}>
          感受不曾有过的感受，走不曾走过的路，看不同的人，听不同的话… （深呼吸）
          ~
        </p>
        {isShowMore && (
          <>
            <a-divider style="font-size: 12px;">分割线开始</a-divider>
            <p>
              以下这两段话如果你不是很想了解我，那么请跳过。因为是突然的感性写下来的
            </p>
            <p>
              （你有坐过 30+ 个小时的硬座绿皮火车 🚄
              吗？就很轻松地跟车上的叔叔阿姨聊天，就很享受地听着他们的对话，听他们聊他们的子女，有些听不懂的方言也觉得蛮有趣的
              ~ 抛开了手机，抛开了数码设备，你有试过
              <span class={errorClass}>认认真真</span>地静坐吗？有试过
              <span class={errorClass}>认认真真</span>
              地去感受对方的语气温度吗？你有试过
              <span class={errorClass}>认认真真</span>
              地看着窗外思考吗？（是吧，看着窗外的一幕幕过去，有些你喜欢的景，错过了就是错过了，那又如何呢？是吧？）…
              你知道火车站的烟火气吗？你知道有多少人回家一趟有多不容易吗？你知道火车站其实也是一些人的“酒店”
              吗？我还真“有幸”在火车站睡过几个小时呢。你能
              <span class={errorClass}>发自内心感受</span>
              那些可爱的人儿吗？小孩子跟着他们的爷爷奶奶（爸爸妈妈），一大家子，还蛮感动的呢…
              你知道其实有很多人认知程度都不高吗？你知道他们在当前社会坐一次火车（高铁）耗尽了他们这一辈子的所学吗？
              <span class={errorClass}>
                我好喜欢帮助他们啊，我多想帮助他们啊，可是有时候我也不敢踏出那一步，我还在学习让自己变得更有勇气
              </span>
            </p>
            <p>
              也曾坐过一次 30+
              小时的硬座绿皮火车，是从成都回深圳吧？忘记嘞。上车的时候我的手机有
              80% 的电量，嗯，回到家的时候，我的手机电量还剩
              20%（中途没有充过电），其实，没了手机，也没什么大不了的嘛？）
            </p>
            <a-divider style="font-size: 12px;">分割线结束</a-divider>
          </>
        )}
        <p>
          很幸运坐过一次最长途的火车（从广州到拉萨），三天两夜（硬卧），从广州上车，从夏天坐到了冬天
          ~
          遇见了一些目的相同的小伙伴，遇到了一些上车又下车的大爷，遇到了一些乘务员（是吧，毕竟天天见呢），听小伙伴说他们的旅行故事，听乘务员卖产品，听他们介绍一些站点，听大爷讲
          “西西里无人区”
          的故事，是什么样的心情呢，嗯我也不知道怎么描述，也就是很轻松，很开心。至今脑海还有当时的画面，可惜我写不出来当时的情境了，
          <span class={errorClass}>写不出来也就算了，反正也在脑海里了 ~</span>
        </p>
        <p>去过哪呢：</p>
        <p>
          成都，重庆，苏州，杭州，长沙，郴州，沈阳，北京，太原，西安，南京，海南，云南（昆明，大理），南昌，武汉，郑州，西藏…
        </p>
        <p>好像这一看，也不算多，还没出过国… 没事儿，慢慢来吧 ~ </p>
        <p>绝大多数地儿都是一个人去的 ~ 还可以 ~ </p>
        <p>有些时候吧，就怕思绪突然涌上来 ~ </p>
        <p>一个回忆，就把你拉回到了过去 ~ </p>
        <p class={errorClass}>且行且珍惜 ~ 归来仍是少年 ~ </p>
        <p>如果有幸结伴，希望我会是一个很好很好很好非常好非常好的同行伙伴 ~ </p>
      </div>
    );
  };

  const renderTravelPhotos = () => {
    return <div></div>;
  };

  return (
    <div class="w-100% h-100%">
      {renderHeader()}
      {renderThanks()}
      {renderTextContainer()}
      {renderThanks()}
    </div>
  );
}

TravelPage.displayName = "TravelPage";
