<template>
  <div class="photo-grid" ref="gridContainer">
    <template v-for="(photo, index) in photos">
      <div
        :style="{
          width: `${state.photoWidth}px`,
          height: `${state.photoHeight}px`,
          backgroundColor: photo.color,
        }"
      >
        <img
          :src="photo.src"
          :style="{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }"
        />
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";

import { getImageInfo } from "@/utils/importImages";

const gridContainer = ref(null);
const photos = ref([]);

const state = reactive({
  photoWidth: 0,
  photoHeight: 0,
});

onMounted(async () => {
  getImageInfo((photosInfo) => {
    photos.value = photosInfo;
    initialize();
    window.addEventListener("resize", initialize);
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", initialize);
});

const initialize = () => {
  const container = gridContainer.value;
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  console.log(containerWidth, containerHeight);

  state.photoWidth = containerWidth / 4;
  state.photoHeight = containerHeight / 4;
};
</script>

<style scoped>
.photo-grid {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}
</style>
