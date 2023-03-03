const body = document.body;
const switchBtn = document.querySelector('.switch');
const switchPara = document.querySelector('.color');

switchBtn.addEventListener('click', function () {
  getRandomNum();
  getRandomNum();
  getRandomNum();
});

function getRandomNum() {
  return Math.floor(Math.random() * 256);
}
