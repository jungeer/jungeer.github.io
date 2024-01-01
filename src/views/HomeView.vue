<template>
  <div class="home-view">
    <div class="job" @click="toJobPage">
      <span>工作</span>
      <span class="resume">（个人简历）</span>
    </div>
    <div class="life" @click="toLifePage">生活</div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

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
  background-color: rgba(237, 237, 237, 0.6);
  .job,
  .life {
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
    position: relative;
    background-color: #fcfbf7;
    color: #cf5735;
    border: 2px solid #cf5735;
    .resume {
      position: absolute;
      top: 60px;
      font-size: 10px;
    }
  }
  .life {
    background: #cf5735;
    color: #fcfbf7;
    border: 2px solid #fcfbf7;
  }
}
</style>
