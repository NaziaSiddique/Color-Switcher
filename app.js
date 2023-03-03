const body = document.body;
const switchBtn = document.querySelector(".switch");
const switchPara = document.querySelector("p");

switchBtn.addEventListener("click", function () {
  let color1 = getRandomNum(); //red color
  let color2 = getRandomNum(); //green color
  let color3 = getRandomNum(); //blue color

  const colorString = `rgb(${color1}, ${color2}, ${color3})`;
  // console.log(colorString);

  body.style.backgroundColor = colorString;
  switchPara.innerText = colorString;
});

function getRandomNum() {
  return Math.floor(Math.random() * 256);
}
