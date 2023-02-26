(function (window, document) {
  var layout = document.getElementById("layout"),
    menu = document.getElementById("menu"),
    menuLink = document.getElementById("menuLink"),
    contents = document.querySelectorAll(".main");

  function toggleClass(element, className) {
    var classes = element.className.split(/\s+/),
      index = classes.indexOf(className);

    if (index >= 0) {
      classes.splice(index, 1);
    } else {
      classes.push(className);
    }

    element.className = classes.join(" ");
  }

  function toggleAll(e) {
    e.preventDefault();
    toggleClass(layout, "active");
    toggleClass(menu, "active");
    toggleClass(menuLink, "active");
  }

  menuLink.addEventListener("click", toggleAll);

  contents.forEach(function (content) {
    content.addEventListener("click", function (e) {
      if (menu.classList.contains("active")) {
        toggleAll(e);
      }
    });
  });
})(window, document);

function shuffle() {
  var container = document.getElementById("container");
  if (!container) return;

  var elementsArray = Array.from(container.getElementsByClassName("shuffleMe"));
  if (elementsArray.length === 0) return;

  shuffleArray(elementsArray);
  elementsArray.forEach(function (element) {
    container.appendChild(element);
  });
}

function shuffleArray(array) {
  array = array.slice(); // Make a copy of the original array
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
