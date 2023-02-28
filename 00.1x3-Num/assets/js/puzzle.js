
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
  if (array.length === 3) {
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








