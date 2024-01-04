import "./index.less";

import { cloneDeep } from "lodash-es";

export default function MoviesPage() {
  const errorClass = ["font-500 color-#cf5735"];

  const linkClass = ["font-500 underline color-#576D93"];

  const renderPopover = (movieName) => {
    return (
      <a-popover content={movieName}>
        <span class={linkClass}>{movieName}</span>
      </a-popover>
    );
  };
  const renderHeader = () => {
    return (
      <div class="p-12px">
        <div class="text-16px font-500">"Dawson, Rose Dawson." 💐</div>
        <div class="flex gap-12px mt-12px text-12px">
          <span class="color-#576D93">俊哥儿乐___</span>
          <span class="color-#A9A9A9">2024-01-04 13:48 深圳</span>
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
          感谢所有所有所有的电影（制作人，演员...）在一定程度上丰富了我的人格，我的灵魂，感恩
          💐 我爱你们 ❤️
        </p>
      </div>
    );
  };

  const renderTextContainer = () => {
    return (
      <div class="px-16px line-height-22px italic">
        <p class="text-14px font-500 color-#f4d68a ">
          祝你早安，<span class="color-green">午安，</span>
          <span class="color-#d9363e">晚安 ~</span> 💛💚❤️
        </p>
        <p>
          喜欢电影，因为电影让我感觉去到了另一个
          “现实世界”，不喜欢惊悚电影，它在伤害我的心灵 ~
        </p>
        <p>喜欢的电影类型：</p>
        <p>
          中学：爱情 {">"} 人生 {">"} 喜剧 {">"} 科幻
        </p>
        <p>
          大学：喜剧 {">"} 科幻 {">"} 爱情 {">"} 人生
        </p>
        <p>
          现在呢，保持着大学差不多的想法，喜欢喜剧，喜欢科幻，喜欢喜剧就是因为快乐呀，喜欢科幻就是因为有趣呀
          ~ 当然除了惊悚什么什么什么都看 ~
        </p>
        <p>
          看过的电影还蛮多的吧，偏好是高分的经典电影，豆瓣 Top250，应该得看了有
          200 部了；（除了惊悚，什么什么都看 ~）
        </p>
        <p>也有好多好多电影 🎬 看过后也忘记了 ~</p>
        <p>
          惊悚，初中看过{renderPopover("咒怨")}
          三部曲，嗯当时看了还行，反正现在是不看这类型的电影了
        </p>
        <p>
          还是很喜欢理想中的爱情，比如{renderPopover("初恋五十次")}，比如
          {renderPopover("傲慢与偏见")}
          （一直提醒自己<span class={errorClass}>放下傲慢</span>，去
          <span class={errorClass}>了解偏见</span>
          ，去解释去沟通，千万不要因为傲慢与偏见伤害了爱自己的人，错过了爱自己的人），比如
          {renderPopover("怦然心动")}，{renderPopover("剪刀手爱德华")}，
          {renderPopover("真爱至上")}…
        </p>
        <p>
          越长大越看不得亲情类的电影或者你已经感受到 ”眼泪“ 的电影，
          {renderPopover("熔炉")}，{renderPopover("被嫌弃的松子的一生")}
          ，是我一直不敢看的电影，因为我知道，我一定会哭得很厉害（就好像有时候读着简介，眼泪都要准备打转了），
          {renderPopover("你好，李焕英")}
          也还没有看
        </p>
        <p>
          虽然如此，还是会看 ”喜剧“，
          <span class={errorClass}>笑着笑着笑着就哭了哭了的喜剧</span>
          ，是啊，所以我蛮喜欢周星驰的电影，
          {renderPopover("大话西游")}（”你看那个人，好像一条狗啊
          ~“）他的电影总是充满着深刻又日常的爱（{renderPopover("七品芝麻官")}，
          {renderPopover("武状元苏乞儿")}，{renderPopover("功夫")}，
          {renderPopover("一本漫画走天下")}，{renderPopover("喜剧之王")}，
          {renderPopover("逃学威龙")}，{renderPopover("整蛊专家")}…）
        </p>
        <p>
          也看人生剧情电影，{renderPopover("肖申克的救赎")}
          （被制度化是很可怕的一件事，但好坏也只是正反面），
          {renderPopover("阿甘正传")}（一直跑就是了），
          {renderPopover("勇敢的心")}（Freedom），
          {renderPopover("当幸福来敲门")}…
        </p>
        <p>
          也喜欢高颜值轻松浪漫电影，好像{renderPopover("公主日记")}
          （如果你想成为公主，你得相信自己是个公主），
          {renderPopover("穿普拉达的女王")}（太美了是不是），
          {renderPopover("西西里的美丽传说")}…
        </p>
        <p>
          噢对了，还喜欢张曼玉（{renderPopover("青蛇")}，
          {renderPopover("阮玲玉")}，{renderPopover("甜蜜蜜")}
          没看过），还有一段时间喜欢过王家卫（{renderPopover("堕落天使")}，
          {renderPopover("重庆森林")}，{renderPopover("阿飞正传")}，
          {renderPopover("东邪西毒")}… 还专门买过一本书 《王家卫映画世界》）
        </p>
        <p>
          也挺喜欢诺兰，他的电影也太牛逼了（与周星驰放一块），
          {renderPopover("盗梦空间")}，{renderPopover("致命魔术")}，
          {renderPopover("信条")}，{renderPopover("星际穿越")}，
          {renderPopover("蝙蝠侠*黑暗骑士")}，{renderPopover("记忆碎片")}…
        </p>
        <p>
          也喜欢武侠，大爱呀，为什么好看的武侠片那么少 😭（
          {renderPopover("新龙门客栈")}，{renderPopover("倚天屠龙记之魔教教主")}
          ，{renderPopover("卧虎藏龙")}，{renderPopover("绣春刀")}…）
        </p>
        <p>
          科幻科幻科幻（让你提前了解未来世界），科幻电影也很少，能看的好像也不多，十几部？几十部？
          {renderPopover("黑客帝国")}，{renderPopover("阿凡达")}，
          {renderPopover("源代码")}，{renderPopover("回到未来")}，
          {renderPopover("魔戒")}，{renderPopover("沙丘")}，漫威，DC（超级爱
          {renderPopover("神奇女侠")}这个 IP，大爱大赞；{renderPopover("海王")}
          刚上映那一年女主的出场让我从此喜欢上了大红卷发，只是喜欢好看）…
        </p>
        <p>玄幻也看 ~ 想不起来有哪些，反正就是一些奇幻特效？</p>
        <p>
          认为{renderPopover("那些年我们一起追的女孩")}
          是国产青春片的巅峰了，所以之后的青春片几乎是一部没看过…
        </p>
        <p>
          喜欢很多动画电影（也许是成人最应该看的电影了），如
          {renderPopover("玩具总动员")}系列，{renderPopover("小黄人")}，
          {renderPopover("飞屋环游记")}，宫崎骏（{renderPopover("千与千寻")}
          （吃太多会变成猪哦），{renderPopover("幽灵公主")}，
          {renderPopover("天空之城")}，{renderPopover("哈尔的移动城堡")}…
        </p>
        <p>
          还喜欢很多很多，{renderPopover("教父")}，{renderPopover("控方证人")}，
          {renderPopover("白日梦想家")}，{renderPopover("遗愿清单")}，
          {renderPopover("大鱼")}，{renderPopover("低俗小说")}，
          {renderPopover("少年派的奇幻漂流")}，{renderPopover("七宗罪")}，
          {renderPopover("美丽人生")}，{renderPopover("爱在黎明破晓前")}，
          {renderPopover("幸福终点站")}，{renderPopover("龙门飞甲")}…
        </p>
        <p>
          还有很多很多没有提到的电影人（虽然我也不懂艺术鉴赏），如陈凯歌（
          {renderPopover("霸王别姬")}），姜文（{renderPopover("让子弹飞")}
          ），张艺谋（
          {renderPopover("满城尽带黄金甲")}，{renderPopover("长城")}），昆汀（
          {renderPopover("杀死比尔")}），李安（{renderPopover("断背山")}，
          {renderPopover("比利林恩的中场故事")}），吴宇森（
          {renderPopover("英雄本色")}，{renderPopover("变脸")}）…
        </p>
        <p>
          （噢我宏哥的{renderPopover("恋爱通告")}
          也上一下吧，虽然评分不是很高，但却是一些音乐老师的强烈推荐，因为说王力宏是真的很认真在对待传统音乐，至少我高中的音乐老师是这么说的）
        </p>
        <p>
          喜欢看电影，因为会让自己的精神感觉到很放松，喜欢看电影，因为觉得那是一个特别理想的世界
          ~
        </p>
        <p>
          以上内容为脑中想到哪到哪随缘（❤️）而写，不考虑逻辑与文笔 ~
          总之，我是挺喜欢看电影的一个人 ~
        </p>
      </div>
    );
  };

  const renderMovieImages = () => {
    const importImgs = import.meta.glob("/public/movies/*.{png,jpg,jpeg,svg}");

    const shuffleArray = (arr) => {
      const arrTemp = cloneDeep(arr);
      const n = arrTemp.length;
      for (let i = n - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrTemp[i], arrTemp[j]] = [arrTemp[j], arrTemp[i]];
      }
      return arrTemp;
    };

    const getImgSrc = (src) => {
      return src.split("public")[1];
    };

    const renderImgs = shuffleArray(
      Object.keys(importImgs).map((src) => getImgSrc(src))
    ).slice(0, 60);

    return (
      <div class="movies-container">
        <a-image-preview-group>
          <a-row>
            {renderImgs.map((img) => {
              return (
                <a-col span={4}>
                  <a-image src={img}></a-image>
                </a-col>
              );
            })}
          </a-row>
        </a-image-preview-group>
      </div>
    );
  };

  return (
    <div class="movies">
      {renderHeader()}
      {renderThanks()}
      {renderTextContainer()}
      {renderThanks()}
      {renderMovieImages()}
    </div>
  );
}
