//draggable puzzle is the idea, not yet finished as you can probably tell
//copied and pasted this js from w3school
//feel free to give suggestions to any part of the code and tweet me @ilovepeoplez ! ^^

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

function showMessage() {
    alert("Congratulations if you finished!");
}
function chkFillSeq(){
    // var board = document.getElementById('text');
    // for (var i=0; i<board.length; i++) {
    //     console.log(board[i]);
    // }
    debugger;
    // get the parent element
    const parent = document.getElementById('text');

    // get all child div elements
    const childDivs = parent.querySelectorAll('div');

    // create an empty array to store the div elements that contain an image
    const divsWithImages = [];

    // iterate over all child div elements and check whether they contain an image
    childDivs.forEach(childDiv => {
        const images = childDiv.querySelectorAll('img');
        if (images.length > 0) {                        
            //console.log(images.length);
            divsWithImages.push(images[0].id.substr(4));
        }
    });

    // divsWithImages array now contains all child div elements that contain an image tag
    console.log(divsWithImages);
    alert(divsWithImages);
}