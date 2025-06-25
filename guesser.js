let title = document.getElementById("title")
let form = document.getElementById("form")
let input = document.getElementById("input")
let wrong = document.getElementById("wrong")
let span = document.getElementById("span")
let button = document.getElementById("button")
let button2 = document.getElementById("button2")
let number_of_trials = document.getElementById("number_of_trials")
let right_div = document.getElementById("right_div")
let trial_div = document.getElementById("trial_div")
number_of_trials.innerText = 5
number_of_trials.style.color = "green";

let random_number = Math.round(Math.random()*100)

form.addEventListener("submit", function(e){
    let input_value = input.value.trim();
    e.preventDefault();
    if (input.value == "") {
        wrong.innerText = "Empty inputs are not allowed!";
        wrong.style.color = "red";
    }else if(input_value == random_number){
        form.style.display = "none";
        wrong.style.display = "none";
        title.style.display = "none";
        right_div.style.display = "none";
        right_div.style.display = "block";
    }else if((input_value < 1) && (input_value != "")){
        wrong.innerText = "Inputs can not be lower than 1!";
        wrong.style.color = "red";
    }else if((input_value > 100) && (input_value != "")){
        wrong.innerText = "Inputs can not be greater than 100!";
        wrong.style.color = "red";
    }else{
        if ((input_value !== random_number) && (input_value != "")) {
        wrong.innerText = "You guessed wrong!";
        wrong.style.color = "red";
        number_of_trials.innerText = number_of_trials.innerText - 1;

         if (number_of_trials.innerText == 3) {
            number_of_trials.style.color = "orange"
        }else if (number_of_trials.innerText == 1) {
            number_of_trials.style.color = "red"
        }else if (number_of_trials.innerText == 0) {
       wrong.innerText = " ";
        }
        }
    }

    input.value = " ";
    if (number_of_trials.innerText == 0) {
        form.style.display = "none";
        wrong.style.display = "none";
        title.style.display = "none";
        right_div.style.display = "none";
        trial_div.style.display = "block";
    }
})
span.innerText = random_number;
button.addEventListener("click", function(){
   window.location.reload();
})

button2.addEventListener("click", function(){
   window.location.reload();
})

let h1 = document.createElement("h1")
document.body.appendChild(h1)





