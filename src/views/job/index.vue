<template>
  <div class="job">
    <div class="job-box">
      <!-- <span class="color-#ededed mb--12px"
        >该页面最后一次更新于 2024-01-01</span
      > -->
      <div class="item">
        <h2>📋 基本信息：</h2>
        <p>1995-05-22 男 俊哥儿乐___ 深圳</p>
        <p>952432141@qq.com / jungeer6@gmail.com</p>
        <p class="font-500 color-#cf5735">前端开发工程师</p>
        <p>
          <a href="https://github.com/jungeer"> https://github.com/jungeer </a>
        </p>
        <p>本科（计算机科学与技术） CET-6</p>
      </div>
      <div class="item">
        <h2>🔧 工作技能：</h2>
        <div class="flex flex-col gap-8px">
          <template v-for="item in technologyList">
            <div class="flex gap-4px">
              <div class="text-12px font-500">{{ item.title }}：</div>
              <div class="flex flex-wrap gap-4px">
                <span v-for="tag in item.tags">
                  {{ tag }}
                </span>
              </div>
            </div>
          </template>
        </div>
        <p class="mt-16px">
          ✅
          基于以上技术，写过一些后台管理系统，一些小程序，一些移动端页面，一些数据大屏......
        </p>
        <p>
          ✅ 尝试做过一些团队建设，如Code
          Reiview，如项目初始化，如简单的脚手架工具，如一些团队代码标准与规范，如一些工作沉淀的分享......
        </p>
        <p>✅ 做过面试官 ～ 面试目标是高级前端开发工程师</p>
        <p>
          ✅ 机缘巧合碰巧做了小红书的一个前端小博主，ID：<span
            class="color-#d9363e underline"
            >420524309</span
          >
        </p>
        <p>
          ✅ 机缘巧合在 Github 写了一些小项目，如<a
            href="https://jungeer.github.io/fe-blog"
            >技术博客</a
          >，<a href="https://jungeer.github.io/fe-book">前端工作入门小册</a
          >，<a href="https://jungeer.github.io/lucky-board"
            >超幸运的翻翻乐……</a
          >
        </p>
      </div>
      <div class="item">
        <h2>💡 工作能力：</h2>
        <p>还行，挺优秀的 💯</p>
        <p>
          ps.只研究应用层的使用，了解基本原理，对深入了解原理不太感兴趣（能力有限，耐心有限，志趣有限）
        </p>
      </div>
      <div class="item">
        <h2>🏆 工作态度：</h2>
        <p>积极向上，认真负责。三人行则必有我师</p>
        <p>自己的锅自己背，同事的锅帮着背（希望公司团队没有 “锅”的概念）</p>
      </div>
      <div class="item">
        <h2>🌟 自我评价：</h2>
        <p>
          喜欢标准的一些代码风格，喜欢优雅的代码，喜欢优雅的逻辑（代码整洁之道）
        </p>
        <p>可以在规则里生存，也觉得规则是死的，不应拘泥于规则，享自由 ～</p>
      </div>
      <div class="item">
        <h2>🏫 教育经历：</h2>
        <p>深圳职业技术学院（3年） 大专 计算机网络技术专业</p>
        <p>广东金融学院（2年） 本科 计算机科学与技术专业</p>
      </div>
      <div>
        <h2><router-link to="/life">🌈 工作之外： </router-link></h2>
      </div>
    </div>
  </div>
</template>

<script setup>
const technologyList = [
  {
    title: "基本技术",
    tags: ["Html(5)", "Css(3)", "Javascript", "Jquery"],
  },
  {
    title: "框架",
    tags: ["Vue2.0", "Vue3.0", "React(不是很熟)"],
  },
  {
    title: "工具",
    tags: ["VueRouter", "Vuex", "Pinia", "VueUse", "Lodash", "Dayjs", "Ahooks"],
  },
  {
    title: "小程序",
    tags: ["UniApp", "ReactTaro"],
  },
  {
    title: "网页UI框架",
    tags: ["ElementUI", "AntDesign", "ArcoDesign", "NaiveUI"],
  },
  {
    title: "移动UI框架",
    tags: ["VantUI", "NutUI", "UView"],
  },
  {
    title: "可视化",
    tags: ["Echarts", "Highcharts"],
  },
  {
    title: "后端",
    tags: ["Nodejs", "Koa", "Express"],
  },
  {
    title: "数据库",
    tags: ["MongoDB", "GraphQL"],
  },
];
</script>

<style lang="less" scoped>
.job {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 10px;
  // background-color: rgba(252, 251, 247, );
  font-size: 12px;
  font-style: italic;

  &-box {
    display: flex;
    flex-direction: column;
    gap: 22px;
    border: 2px solid #cf5735;
    border-radius: 10px;
    padding: 10px;
  }
}
</style>
