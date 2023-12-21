const BigStar = document.createElement("i");
BigStar.setAttribute("class", "fa fa-caret-up big-star");
const colors = ["#ffffff", "#ff0000", "#00ff00", "#000000"];
const anim = [
  "fall-1 1s linear forwards",
  "fall-2 2s linear forwards",
  "fall-3 3s linear forwards"
];

function randomColor(colorList) {
  return colorList[Math.floor(Math.random() * colorList.length)];
}

function randomAnim(animList) {
  return animList[Math.floor(Math.random() * animList.length)];
}

window.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const OffsetX = e.offsetX + 4 / 3;
  const OffsetY = e.offsetY + 4 / 3;

  const star = document.createElement("i");
  star.setAttribute("class", "fa fa-star star");

  star.style.left = `${x}px`;
  star.style.top = `${y}px`;
  star.style.textShadow = "2px 2px rgba(0,0,0, 0.88)";
  star.style.color = randomColor(colors);
  star.style.animation = randomAnim(anim);
  document.body.appendChild(star);

  BigStar.style.left = `${OffsetX}px`;
  BigStar.style.top = `${OffsetY}px`;
  BigStar.style.fontSize = `3em`;
  document.body.appendChild(BigStar);

  setTimeout(() => {
    document.body.removeChild(star);
  }, 1500);
});

document.body.onmouseleave = () => updateLastMousePosition(originPosition);