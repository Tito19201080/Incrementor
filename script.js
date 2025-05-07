// INCREMENTING VARIABLES & RANDOM VALUES

// Incrementing Variables
var counter = 0;
var minus50Btn = document.getElementById("minus50");
var minus10Btn = document.getElementById("minus10");
var minus1Btn = document.getElementById("minus1");
var displayEl = document.getElementById("display");
// Addition Variables
var plus1Btn = document.getElementById("plus1");
var plus10Btn = document.getElementById("plus10");
var plus50Btn = document.getElementById("plus50");
var displayEl = document.getElementById("display");
// Story String Variables
var story = "Once upon a time, ";
var stringinEl = document.getElementById("strIn");
var storyEl = document.getElementById("strOut");
// Random Number Variables
var roundBtn1 = document.getElementById("rand1");
var roundBtn2 = document.getElementById("rand2");
var roundBtn3 = document.getElementById("rand3");
// Page Reload Variables
var reload = document.getElementById("reset");
// Random Size Variables
var randSize = document.getElementById("random-size");
// Random Number To Number Variables
var rand1 = document.getElementById("rand-in1");
var rand2 = document.getElementById("rand-in2");
var displayEl2 = document.getElementById("rand4-out");
// Random Color Variables
var randColor = document.getElementById("random-rgb");
// Event Listeners
minus50Btn.addEventListener("click", minus50fcn);
minus10Btn.addEventListener("click", minus10fcn);
minus1Btn.addEventListener("click", minus1fcn);
plus1Btn.addEventListener("click", plus1fcn);
plus10Btn.addEventListener("click", plus10fcn);
plus50Btn.addEventListener("click", plus50fcn);
stringinEl.addEventListener("change", updateStory);
roundBtn1.addEventListener("click", round1);
roundBtn2.addEventListener("click", round2);
roundBtn3.addEventListener("click", round3);
reload.addEventListener("click", reloadpg);
randSize.addEventListener("click", randsizefcn);
rand1.addEventListener("change", randMulti);
rand2.addEventListener("change", randMulti);
randColor.addEventListener("click", randColorfcn);
// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before
function minus50fcn() {
  counter = counter - 50;
  displayEl.innerHTML = counter;
}

function minus10fcn() {
  counter = counter - 10;
  displayEl.innerHTML = counter;
}

function minus1fcn() {
  counter = counter - 1;
  displayEl.innerHTML = counter;
}
// Addition Variable Functions
function plus1fcn() {
  counter = counter + 1;
  displayEl.innerHTML = counter;
}
function plus10fcn() {
  counter = counter + 10;
  displayEl.innerHTML = counter;
}

function plus50fcn() {
  counter = counter + 50;
  displayEl.innerHTML = counter;
}

// 3. Story Function
function updateStory() {
  var word = stringinEl.value;
  story += word + " ";
  stringinEl.value = "";
  storyEl.innerHTML = story;
}
// Random Number Functions
function round1() {
  let rand = Math.random();
  rand = rand.toFixed(3);
  document.getElementById("rand1-out").innerHTML = rand;
}

function round2() {
  let rand = Math.random() * 100;
  rand = Math.round(rand);
  document.getElementById("rand2-out").innerHTML = rand;
}

function round3() {
  var rand = Math.random() * 10 - 5;
  rand = Math.round(rand);
  document.getElementById("rand3-out").innerHTML = rand;
}

// Page Reload Function
function reloadpg() {
  location.reload();
}

// Random Size Functions
function randsizefcn() {
  let rand = Math.random() * 75;
  let fixed = rand.toFixed(0);
  let output = rand + "px";
  document.getElementById("font").style.fontSize = output;
}
// Random Number To Number Functions
function randMulti() {
  var num1 = +document.getElementById("rand-in1").value;
  var num2 = +document.getElementById("rand-in2").value;
  var pre = Math.random() * (num2 - num1) + num1;
  var round = pre.toFixed(0);
  displayEl2.innerHTML = round;
}

function randColorfcn() {
  var r = Math.random() * 255;
  var g = Math.random() * 255;
  var b = Math.random() * 255;
  var rgbString = `rgb(${r},${g},${b})`;
  console.log(rgbString);
  document.getElementById("HTML").style.background = rgbString;
}
