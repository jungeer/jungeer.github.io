<template>
  <div class="photo-mosaic">
    <div ref="mosaic" class="mosaic-container">
      <img
        v-for="(photo, index) in photos"
        :key="index"
        :src="photo.src"
        :style="{
          width: photo.width + 'px',
          height: photo.height + 'px',
          objectFit: 'cover',
        }"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const photos = ref([]);
const arrangedPhotos = ref([]);
const number = ref("1995");

import { getImageInfo } from "@/utils/importImages";

onMounted(async () => {
  // generateMosaic();
  getImageInfo((imgArray) => {
    photos.value = imgArray;
  });
});

const generateMosaic = () => {
  const mosaicContainer = document.querySelector(".mosaic-container");
  const numberString = number.value.toString();

  // Function to arrange photos based on number shape
  const arrangePhotosByNumber = (photos, numberString) => {
    // Logic to arrange photos based on number shape
    // ...

    // Return an array of arranged photos
    return arrangedPhotosArray;
  };

  // Function to dynamically resize and place photos based on aspect ratio
  const placePhotosDynamically = (photos) => {
    // Logic to dynamically resize and place photos based on aspect ratio
    // ...

    // Modify arrangedPhotos array with dynamically placed photos
    arrangedPhotos.value = dynamicallyPlacedPhotos;
  };

  // Call the functions to arrange and place photos
  arrangedPhotos.value = arrangePhotosByNumber(photos, numberString);
  placePhotosDynamically(arrangedPhotos.value);
};
</script>

<style scoped>
/* Add necessary styles for the mosaic container and images */
.photo-mosaic {
  width: 400px;
  height: 400px;
  overflow: hidden;
}

.mosaic-container {
  display: flex;
  flex-wrap: wrap;
  /* Add other necessary styles */
}

/* Add styles for individual images if needed */
</style>
