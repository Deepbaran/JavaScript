// Always create a TextNode out of texts before adding them in the DOM

const courses = [
  {
    name: "Complete ReactJS course",
    price: "2.3"
  },
  {
    name: "Complete Angular course",
    price: "2.1"
  },
  {
    name: "Complete MERN course",
    price: "2.7"
  },
  {
    name: "Complete C++ course",
    price: "2.8"
  }
];

{
  // <li class='list-group-item'>
  //   Complete C++ course
  //   <span class="float-right">$ 2.8</span>
  // </li>
}

function generateLIST() {
  const ul = document.querySelector(".list-group");
  //We cannot use innerText with ul as there are a lot of HTML inside the ul
  ul.innerHTML = ""; //Everytime the function is invoked, all the html inside ul becomes empty
  courses.forEach(course => {
    const li = document.createElement("li"); //Creating a li Element
    li.classList.add("list-group-item"); //Adding a class to the li Element

    const name = document.createTextNode(course.name); //Creating a Text Node
    li.appendChild(name); //append a child item to the list element

    const span = document.createElement("span");
    span.classList.add("float-right");
    const price = document.createTextNode("$" + course.price);
    span.appendChild(price); //appendChild only takes a node or element

    li.appendChild(span);
    ul.appendChild(li);
  });
}

// generateLIST(); //This will make this method run as soon as the file loads.

//Run it whenever the page loads
window.addEventListener("load", generateLIST);

const incButton = document.querySelector(".inc-sort-btn");
incButton.addEventListener("click", () => {
  //This will sort the array but will not rerender the view
  courses.sort((a, b) => a.price - b.price);
  /*
    a - b <= 0 : No need to swap
    a - b > 0 : swap
  */

  //Re-render the view with the sorted list
  generateLIST();
});

const decButton = document.querySelector(".dec-sort-btn");
decButton.addEventListener("click", () => {
  //This will sort the array but will not rerender the view
  courses.sort((a, b) => b.price - a.price);
  /*
    b - a <= 0 : No need to swap
    b - a > 0 : swap
  */

  //Re-render the view with the sorted list
  generateLIST();
});
