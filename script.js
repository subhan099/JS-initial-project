// document.getElementById("first").innerHTML="hello world"
function onclickfirst() {
  document.getElementById("first").innerHTML = "hello world";
  document.getElementById("first").style.display = "block";
  document.getElementById("first").style.fontSize = "100px";
}

document.getElementById("testsum").innerHTML = 5 + 5;

function check() {
  var sum = 5 + 5;
  var result = document.getElementById("result-check");
  result.innerHTML = sum;
}
function _alert() {
  window.alert(5 + 6);
}
// function ar() {
//   const fruits = ["apple", "mango", "banana", "orange", "grapes"];

//   let fLen = fruits.length;

//   let text = "<ul>";
//   for (let i = 0; i < fLen; i++) {
//     text += "<li>" + fruits[i] + "</li>";
//   }
//   text += "</ul>";
// }

let text;
function ar() {
  const fruits = ["apple", "banana", "orange", "grape"];
  const fruitListElement = document.getElementById("fruitList");

  // Loop through the fruits array and create list items
  for (let i = 0; i < fruits.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = fruits[i];
    fruitListElement.appendChild(listItem);
  }
}
function traverse() {
  const fruits = ["apple", "banana", "orange", "grape"];
  var list = document.getElementById("ul_test");
  for (let i = 0; i < fruits.length; i++) {
    const add_element = document.createElement("li");
    add_element.innerHTML = fruits[i];
    list.appendChild(add_element);
  }
}

function tr() {
  const fruits = ["apple", "banana", "orange", "grape"];
  fruits.push("lemon");
  var element = document.getElementById("trav_arr");
  let text = "";
  for (let i = 0; i < fruits.length; i++) {
    text += "<li>" + fruits[i] + "</li>";
  }
  element.innerHTML = text;
}
function find_min() {
  const arr = [45, 30, 2, 7, 9, 6, 1, 8];
  var result = document.getElementById("min");
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  //   return min;
  result.innerHTML = min;
}
