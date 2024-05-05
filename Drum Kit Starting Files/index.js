var numberOFDrumButtons = document.querySelectorAll(".drum");
for (var i = 0; i < numberOFDrumButtons.length; i++){
    numberOFDrumButtons[i].addEventListener("click", function(){
        alert("on Click");
    });
}
