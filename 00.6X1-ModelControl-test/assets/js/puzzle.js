
const myButton = document.querySelector(".save");

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function chkFillSeq() {
  const parent = document.getElementById("text");
  const childDivs = parent.querySelectorAll("div");
  const divsWithImages = [];

  childDivs.forEach((childDiv) => {
    const images = childDiv.querySelectorAll("img");
    if (images.length > 0) {
      divsWithImages.push(images[0].id.substr(4));
    }
  });

  checkSorted(divsWithImages);
}

function checkSorted(array) {
  if (array.length === 6) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        alert("The Images are not arranged sequentially!");
        return false;
      }
    }
    alert("Congratulation You Completed Puzzle Successfully!");
  } else {
    alert("Please arrange all Images!");
  }
}

myButton.addEventListener("click", chkFillSeq);




function shuffleImages() {
  var imageContainer = document.getElementById("images");
  var images = Array.from(imageContainer.children);
  images.sort(function() { return 0.5 - Math.random() });
  images.forEach(function(img) {
    imageContainer.removeChild(img);
  });
  images.forEach(function(img) {
    imageContainer.appendChild(img);
  });
}



function openNewPage() {
  window.open("http://127.0.0.1:5555/00.7X1-ModelControl/00.7X1-ModelControl.html");
}
