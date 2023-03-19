const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// The global object, window is used when we copy, click to copy, animation, etc.
// window.getComputedStyle() gives the complete computed/finalized CSS style of the element.
console.log(window.getComputedStyle(red).backgroundColor); // background-color -> backgroundColor

const getBGColor = selectedElement =>
  window.getComputedStyle(selectedElement).backgroundColor;

// var orangeElementColor = getBGColor(orange);

// orange.addEventListener("mouseenter", () => {
//   center.style.backgroundColor = orangeElementColor;
// });

// var pinkElementColor = getBGColor(pink);

// pink.addEventListener("mouseenter", () => {
//   center.style.backgroundColor = pinkElementColor;
// });

const magicColorChanger = (element, color) => {
  return element.addEventListener("mouseenter", () => {
    center.style.backgroundColor = color;
  });
};

magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(violet, getBGColor(violet));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(pink, getBGColor(pink));

// element.addEventListener('TypeOfEvent', callback)
// window.getComputedStyle is used to grab the full and final style
// center.style is used to set the style
