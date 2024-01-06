<template>
  <div
    class="home-view"
    :style="{ backgroundImage: `url(${imgs[randomIndex]})` }"
  >
    <div class="job" @click="toJobPage">
      <span>工作</span>
      <span class="resume">（个人简历）</span>
    </div>
    <div class="life" @click="toLifePage">
      <span>生活</span>
      <span class="suprise">（充满惊喜）</span>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

import IMG_5292 from "./IMG_5292.jpg";
import IMG_5295 from "./IMG_5295.jpg";
import IMG_5299 from "./IMG_5299.jpg";

const imgs = [IMG_5292, IMG_5295, IMG_5299];

const randomIndex = Math.floor(Math.random() * imgs.length);

const router = useRouter();
const toJobPage = () => {
  router.push({ name: "job" });
};

const toLifePage = () => {
  router.push({ name: "life" });
};
</script>

<style lang="less" scoped>
.home-view {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 10px;
  font-size: 20px;
  // background-color: rgba(237, 237, 237, 0.6);
  // background-image: url("./IMG_5295.JPG");
  background-size: 100% 100%;
  .job,
  .life {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    font-size: 14px;
    border-radius: 10px;
    cursor: pointer;
  }
  .job {
    background-color: rgba(252, 251, 247, 0.8);
    color: #cf5735;
    border: 2px solid #cf5735;
    .resume {
      position: absolute;
      top: 60px;
      font-size: 10px;
    }
  }
  .life {
    background: rgba(207, 87, 53, 0.8);
    color: #fcfbf7;
    border: 2px solid #fcfbf7;
    .suprise {
      position: absolute;
      top: 60px;
      font-size: 10px;
    }
  }
}
</style>
