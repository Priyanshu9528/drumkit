//Detecting Button press
var numberofDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function handleclick() {

        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });

}

//Detecting Keyboard press 
document.addEventListener("keypress", function(event) {
    makesound(event.key);
    buttonAnimation(event.key);
})

function makesound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sound/tom1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sound/tom2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sound/tom3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sound/tom4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sound/snare.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sound/drum-crash.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sound/kick.mp3");
            audio.play();
            break;

        default:
            console.log(buttonInnerHTML);

    }
}

function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);

    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}