var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var msg = document.getElementById("msg");

var count = document.getElementById("counter").innerText;

function increment() {
  count++;
  document.getElementById("counter").innerText = count;
  msg.innerText = "";
}

function decrement() {
  if (count == 0) {
    msg.innerText = "Error: can not go below 0";
  } else {
    count--;
    document.getElementById("counter").innerText = count;
  }
}

function clear() {
  count = 0;
  document.getElementById("counter").innerText = count;
}

btn1.onclick = decrement;
btn2.onclick = increment;
btn3.onclick = clear;
