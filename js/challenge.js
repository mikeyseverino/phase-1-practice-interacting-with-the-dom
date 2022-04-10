//Set a timer to increase by 1 every 1000ms

const counterValue = document.getElementById('counter');

var myInterval = setInterval(increase, 1000);
console.log(myInterval)
var i = 0;

function increase() {
    counterValue.innerText = i;
    if (i < 1000) {
        i++;
    }
}

//Manually increment or decrement the timer using the buttons

const increaseButton = document.getElementById('plus');
const decreaseButton = document.getElementById('minus');

increaseButton.addEventListener('click', function() {
    counterValue.innerText++
});

decreaseButton.addEventListener('click', function() {
    counterValue.innerText--
});

//Add a 'like' to an individual number on the counter and show the number of 'likes

const div = document.createElement('div')
div.innerHTML = `<p> ${(`h1#counter`).innerHTML} like</p>`;

 const likeButton = document.getElementById('heart')
 const likePhrase = document.createTextNode(`${counterValue.innerHTML} has been liked 1 time` )

 likeButton.addEventListener('click', function(){
document.body.appendChild(div)
}

)

//Pause the counter
const pauseButton = document.getElementById('pause');

pauseButton.addEventListener('click', function() {
clearInterval(myInterval)
});