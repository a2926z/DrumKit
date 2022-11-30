for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonPressed = this.innerHTML
    // console.log(buttonPressed);
    makeSound(buttonPressed);
    buttonAnimation(buttonPressed);

  })
}

document.addEventListener("keydown", function(event) {
  // console.log(event.key);
  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      // Added a counter onlly when "l" button is pressed
      var numberOfClicks = parseInt(document.querySelector(".counter").innerHTML);
      document.querySelector(".counter").innerHTML = numberOfClicks + 1;
      break;
    default: console.log(key)
  }
}

// var numberOfClicks = parseInt(document.querySelector(".counter").innerHTML);
// console.log(numberOfClicks);
// document.addEventListener("click", function() {
//   numberOfClicks = numberOfClicks + 1;
//   console.log(numberOfClicks);
//   document.querySelector(".counter").innerHTML = numberOfClicks;
// })

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  // Set delay in js
  setTimeout(function() {
  activeButton.classList.remove("pressed");
}, 100)


}
