const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");
let progress; // progress of scroll
let currentFrame;
let totalImagesCount = 350;
const videoImages = [];

function setImages() {
  for (let i = 0; i < totalImagesCount; i++) {
    let imgElem = new Image();
    imgElem.src = `./images/monolith/monolith${1001 + i}.png`;
    videoImages.push(imgElem);
  }
}

function scrollLoop() {
  progress =
    window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
  if (progress < 0) progress = 0;
  if (progress > 1) progress = 1;

  currentFrame = Math.round((totalImagesCount - 1) * progress);
  context.drawImage(videoImages[currentFrame], 0, 0);
  requestAnimationFrame(scrollLoop);
}

window.addEventListener("load", () => {
  context.drawImage(videoImages[0], 0, 0);

  // 중간에서 새로고침 했을 경우 자동 스크롤로 제대로 그려주기
  let tempYOffset = window.pageYOffset;
  let tempScrollCount = 0;
  if (tempYOffset > 0) {
    let siId = setInterval(() => {
      scrollTo(0, tempYOffset);
      tempYOffset += 5;

      if (tempScrollCount > 20) {
        clearInterval(siId);
      }
      tempScrollCount++;
    }, 20);
  }

  window.addEventListener("scroll", () => {
    scrollLoop();
  });
});
setImages();
