<template>
  <div class="life">
    <div class="flex flex-col justify-center flex-wrap gap-10px">
      <template v-for="(boxs, index) in boxss" :key="index">
        <div class="flex gap-10px">
          <template v-for="box in boxs" :key="box">
            <div class="box module">
              <span>{{ box }}</span>
            </div>
          </template>
        </div>
      </template>
      <div class="flex gap-10px">
        <div class="box question">❔</div>
        <div class="box question">❔</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const boxss = [
  ["偶像", "电影"],
  ["旅行", "穿搭"],
];
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
      font-size: 30px;
      background: rgba(165, 111, 69, 0.9);
      border: 2px solid #cf5735;
    }
  }
}
</style>
