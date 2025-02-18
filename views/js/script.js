let currentNum = 0;

function showCurrentNum() {
  document.querySelector("#numGoUp").innerHTML = currentNum;
}

showCurrentNum();

function addNum() {
  currentNum++;
  showCurrentNum();
}