<template>
  <div class="movies">
    <div class="movies-container">
      <a-image-preview-group>
        <a-row>
          <template v-for="img of getImgs" :key="img">
            <a-col :span="4">
              <a-image :src="getImgSrc(img)" object-fill></a-image
            ></a-col>
          </template>
        </a-row>
      </a-image-preview-group>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

import { cloneDeep } from "lodash-es";

const imgs = import.meta.glob("/public/movies/*.{png,jpg,jpeg,svg}");

const shuffleArray = (arr) => {
  const arrTemp = cloneDeep(arr);
  const n = arrTemp.length;
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrTemp[i], arrTemp[j]] = [arrTemp[j], arrTemp[i]];
  }
  return arrTemp;
};

const getImgs = computed(() => {
  return shuffleArray(Object.keys(imgs).map((url) => url)).slice(0, 60);
});

const getImgSrc = (src) => {
  return process.env.NODE_ENV === "development" ? src : src.split("public")[1];
};
</script>

<style lang="less" scoped>
.movies {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  &-container {
    padding: 30px;
    width: 100%;
    background-image: url("./movies-bg.png");
    background-size: 100% 100%;
    .box {
      height: 200px;
    }
  }
}
</style>
