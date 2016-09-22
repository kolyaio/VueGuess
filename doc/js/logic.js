const MAX_RAND = 10;
const MIN_RAND = 1;
let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let num3 = document.querySelector(".num3");

let rand1 = Math.floor((Math.random() * MAX_RAND)+MIN_RAND);
let rand2 = Math.floor((Math.random() * MAX_RAND)+MIN_RAND);
let rand3 = Math.floor((Math.random() * MAX_RAND)+MIN_RAND);

let guessForm = document.querySelector('.form-guess form');
let submitBtn = document.querySelector(".guessBtn");
let resetBtn = document.querySelector(".resetBtn");

let luckDescription = document.querySelector('.luck-description')

let firstRow = document.querySelector('.firstRow');
let secondRow = document.querySelector('.secondRow');
let thirdRow = document.querySelector('.thirdRow');

submitBtn.addEventListener("click", function(e) {
  if(guessForm.checkValidity())
  {
    e.preventDefault();

    $(".results").fadeIn(750).removeClass('hidden');


    rand1 = Math.floor((Math.random() * MAX_RAND)+MIN_RAND);
    rand2 = Math.floor((Math.random() * MAX_RAND)+MIN_RAND);
    rand3 = Math.floor((Math.random() * MAX_RAND)+MIN_RAND);

    firstRow.firstChild.data = num1.value;
    firstRow.lastChild.data = rand1;
    secondRow.firstChild.data = num2.value;
    secondRow.lastChild.data = rand2;
    thirdRow.firstChild.data = num3.value;
    thirdRow.lastChild.data = rand3;

    if (num1.value == rand1 || num2.value == rand2 || num3.value == rand3)
    {
      luckDescription.firstChild.data = "Well, congratulations you guessed one or more numbers";
    }
    else if((num1.value == rand1 && num2.value == rand2 && num3.value == rand3)) {
        luckDescription.firstChild.data = "Well, You lucky bastad, You guessed all the three!";
    }
    else {
      luckDescription.firstChild.data = "OH! You out of luck, You didn't guess any number :(";
    }
  }
});

resetBtn.addEventListener("click", function() {
  $(".results").fadeOut(750);
  firstRow.firstChild.data = "";
  firstRow.lastChild.data = "";
  secondRow.firstChild.data = "";
  secondRow.lastChild.data = "";
  thirdRow.firstChild.data = "";
  thirdRow.lastChild.data = "";
});
