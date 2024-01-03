<template>
  <div class="life">
    <div class="absolute flex flex-col justify-center flex-wrap gap-10px">
      <template v-for="(boxs, index) in boxss" :key="index">
        <div class="flex gap-10px">
          <template v-for="box in boxs" :key="box">
            <div class="box module" @click="toPage(box)">
              <span>{{ box }}</span>
            </div>
          </template>
        </div>
      </template>
      <div class="flex gap-10px">
        <div class="box question">
          <span class="text-24px">❔</span>
          <span class="random">（发现3个惊喜页）</span>
        </div>
        <div class="box question" @click="toMePage">
          <span class="text-24px">❔</span>
          <span class="random">（发现更多）</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

import { useRouter } from "vue-router";

import { Fireworks } from "fireworks-js";

const boxss = [
  ["偶像", "电影"],
  ["旅行", "穿搭"],
];

const router = useRouter();

const toPage = (boxText) => {
  const routerMap = {
    偶像: "/life/idol",
    电影: "/life/movies",
    旅行: "/life/travel",
    穿搭: "/life/ootd",
  };

  router.push({ name: routerMap[boxText] });
};

const toMePage = () => {
  router.push({ name: "/life/me" });
};

onMounted(() => {
  const container = document.querySelector(".life");
  const fireworks = new Fireworks(container, {
    /* options */
  });
  fireworks.start();
});
</script>

<style lang="less" scoped>
.life {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  gap: 10px;
  font-size: 20px;
  background-color: rgba(237, 237, 237, 0.6);
  // background: url("./night-sky.jpg") no-repeat;
  // background-size: 100% 100%;
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    font-size: 14px;
    border-radius: 10px;
    cursor: pointer;
    &.module {
      background: #cf5735;
      color: #fcfbf7;
      border: 2px solid #fcfbf7;
    }
    &.question {
      position: relative;
      background: rgba(165, 111, 69, 0.9);
      border: 2px solid #cf5735;
      .random {
        position: absolute;
        top: 70px;
        font-size: 10px;
        color: white;
      }
    }
  }
}
</style>
