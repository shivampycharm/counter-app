var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var msg = document.getElementById("msg");

var count = document.getElementById("counter").innerText;

function btn3_hide() {
  if (count < 1) {
    btn3.style.visibility = "hidden";
  } else {
    btn3.style.visibility = "visible";
  }
}

btn3_hide();

function increment() {
  count++;
  document.getElementById("counter").innerText = count;
  msg.innerText = "";
  btn3_hide();
}

function decrement() {
  if (count == 0) {
    msg.innerText = "Error: can not go below 0";
  } else {
    count--;
    document.getElementById("counter").innerText = count;
  }
  btn3_hide();
}

function clear() {
  count = 0;
  document.getElementById("counter").innerText = count;
  btn3_hide();
}

btn1.onclick = decrement;
btn2.onclick = increment;
btn3.onclick = clear;
