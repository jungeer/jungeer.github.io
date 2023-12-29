// 获取所有匹配指定路径的图片文件
const imagePaths = import.meta.glob("@/images/photos/*.{png,jpg,jpeg,svg}");

export async function getImageInfo(callback) {
  const imageInfoArray = [];

  const imageLoadPromises = [];

  for (const path in imagePaths) {
    const promise = new Promise((resolve) => {
      const img = new Image();

      img.onload = function () {
        const imageInfo = {
          src: path,
          width: img.width,
          height: img.height,
        };

        imageInfoArray.push(imageInfo);
        resolve();
      };

      img.src = path;
    });

    imageLoadPromises.push(promise);
  }

  let handleImageInfo = callback;

  // 等待所有图片加载完成
  await Promise.all(imageLoadPromises).then((imageInfo) => {
    // 所有图片加载完成后，执行回调函数，并将图片信息数组作为参数传递出去
    handleImageInfo(imageInfoArray);
  });
}
