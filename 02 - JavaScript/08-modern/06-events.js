// Event Bubbling & Capturing
// Stop Propagation, Immediate Propagation & Prevent Default
var div = document.querySelector("div");
var button = document.querySelector("button");
var a = document.querySelector("a");

/////////////////////////////////////////////////////////////////////////////////////////////////
/*
div.addEventListener("click", () => {
  console.log("div");
});

button.addEventListener("click", () => {
  console.log("button");
});
*/
//Event Bubbling states that the element where the event started, it will go to the parent and then their parent and so on and accessible in all of them.
// In the above examplt, when the click event happens on the button it propagates to it's parent div element, so div also has that click event with it.
//We could have done the same for body and html too as they are also ancestors of button and the click event will propagate to them too. This is Event Bubbling.
//Propagation happens to all ancestors.
// When we click on the button it first logs button and then logs div. That means the event propagated (bubbled up) from child to parent.

//////////////////////////////////////////////////////////////////////////////////////////////////
// Capturing is opposite of Event Bubbling. That is Event propagates from parent to child (descendants)
/*
div.addEventListener(
  "click",
  () => {
    console.log("div");
  },
  true
);

button.addEventListener(
  "click",
  () => {
    console.log("button");
  },
  true
);
*/
//Here first div will be logged then button will be logged due to Event capture is set as true.
//So, from parent to child

/////////////////////////////////////////////////////////////////////////////////////////////////
/*
div.addEventListener("click", () => {
  console.log("div");
});

button.addEventListener("click", event => {
  event.stopPropagation();
  console.log("button");
});
*/
//Prevent propagation is a concept that stops all kind of propagations of events. Essentially stopping Event Bubbling and Event Capturing.
//Here only button will be logged and div will not be logged as the event propagation is stopped in button. So, clicking the button will not cause Event Bubbling

/////////////////////////////////////////////////////////////////////////////////////////////////
/*
div.addEventListener("click", () => {
  console.log("div");
});

button.addEventListener("click", event => {
  event.stopImmediatePropagation();
  //Event will not propagate to any other EventListener after this that are associated with the same element.
  //It will also not propagate to parent/child element
  console.log("button");
});

button.addEventListener("click", event => {
  // event.stopImmediatePropagation(); //This will log button and button1 but not button2
  console.log("button1");
});

button.addEventListener("click", event => {
  // event.stopImmediatePropagation();
  //If we use stopImmediatePropagation here then button, button1 and button2 will be logged as they are defined above this EventListener.
  console.log("button2");
});
*/
//Stop Immediate propagation lets the even propagate to only one Event Listener and prevent the event to propagate to any other EventListener that are associated with the button and stop the event from propagating to the parent/child element.
//Here only button will be logged but button1, button2, button3 and div will not be logged.
//stopPropagation will prevent any parent/child handlers from being executed stopImmediatePropagation will prevent any parent/child handlers and also any other handlers from executing

/////////////////////////////////////////////////////////////////////////////////////////////////
//Prevent Default prevents the default beavior of the browser/engine forcefully.
a.addEventListener("click", event => {
  event.preventDefault();
  console.log("a tag is clicked");
});
