const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");
const Img = new Image();
let rightPos = 1125;
const imgWidth = 75;

function moveImg(timestamp){
  if (rightPos >= 0) {
     rightPos -= 5;
}
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(Img, rightPos, 345, imgWidth, Img.height * (imgWidth / Img.width));
  requestAnimationFrame(moveImg);
}
Img.src = "playerZ_red.png";

requestAnimationFrame(moveImg);