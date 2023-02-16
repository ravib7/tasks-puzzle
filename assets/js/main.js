$('.drag-me').draggable({revert:"invalid", snap:".target"});
$('.target').droppable({
    drop: function( event, ui ) {
      itemsInPosition++;
      // get id of draggable and droppable id
      var draggableID = $(ui.draggable).attr("id");
      var droppableID = $(this).attr("id");
      if(draggableID[4]==droppableID[6]){
        alert("correct")
    testIfComplete();
        totalCorrect++;
      }
    }
});

var itemsInPosition = 0;
var totalItems = 4;
var totalCorrect = 0;

function testIfComplete(){
if(itemsInPosition==totalItems){
alert("You got " + totalCorrect + " right")
  }
}