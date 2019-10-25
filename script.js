const listOfLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const listOfWords = ['Workhorse', 'Snickerdoodle', "Daenerys", 'Awkward', 'Bagpipes', 'Banjo' , 'Bungler' , 'Croquet' , 'Crypt' , 'Dwarves' , 'Fervid' , 'Fishhook' , 'Fjord' , 'Gazebo' , 'Gypsy' , 'Haiku' , 'Haphazard' , 'Hyphen' , 'Ivory' , 'Jazzy' , 'Jiffy' , 'Jinx' , 'Jukebox' , 'Kayak' , 'Kiosk' , 'Klutz' , 'Memento' , 'Mystify' , 'Numbskull' , 'Ostracize' , 'Oxygen' , 'Pajama' , 'Phlegm' , 'Pixel' , 'Polka' , 'Quad' , 'Quip' , 'Rhythmic' , 'Rogue' , 'Sphinx' , 'Squawk' , 'Swivel' , 'Toady' , 'Twelfth' , 'Unzip' , 'Waxy' , 'Wildebeest' , 'Yacht' , 'Zealous' , 'Zigzag' , 'Zippy' , 'Zombie']
let word = ''
let turn = ''
let turns = []
let count = 0
let livesLeft = 6
let letterFound = false
let lettersDiv = document.getElementById('letters');
let wordArea = document.getElementById('wordInPlay');

let letterButtons = function () {
    let letters = document.createElement('ul');
    for (let i = 0; i < listOfLetters.length; i++) {
        letters.id = 'abc';
        letter = document.createElement('li');
        letter.classList.add('letter');
        letter.innerText = listOfLetters[i];
        letters.appendChild(letter);
    }
    lettersDiv.appendChild(letters);
}
let playButton = document.getElementById("play")
let mainGame = document.getElementById("mainGame")
let intro = document.getElementById("intro")
playButton.addEventListener('click', function(e){
    e.preventDefault()
    mainGame.classList.remove("hidden")
    intro.classList.add("hidden")
    play();
    answer();
    lettersDiv.innerHTML = ''
    letterButtons();
    logic();
})
console.dir(lettersDiv)

let playAgainButton = document.getElementById("playAgain")
playAgainButton.addEventListener('click', function(e){
    e.preventDefault()
    mainGame.classList.add("hidden")
    intro.classList.remove("hidden")
    wordArea.innerHTML = ''
    livesLeft = 6
    count = 0
    turns = []
    lifeDisplay.innerHTML = "You have " + livesLeft + " lives left!"
})

let play = function () {
    word = listOfWords[Math.floor(Math.random()*listOfWords.length)].toLowerCase();
    console.log(word)
    
}


let answer = function () {

    for (let i = 0; i < word.length; i++) {
      turn = document.createElement('p');
      turn.setAttribute('class', 'turn');
      turn.innerHTML = "_";
      wordArea.appendChild(turn);
      turns.push(turn);
    }
  }


const lettersDivArray = document.getElementsByClassName("letter");
const gameEnd = document.getElementById("gameStats")
let lifeDisplay = document.createElement('p')
gameEnd.appendChild(lifeDisplay)

console.log(lettersDivArray)
let logic = function() {
    for ( let j = 0; j < lettersDivArray.length; j++) {
        lettersDivArray[j].addEventListener('click', function (e) {
            
            if (count === (word.length - 1)) {
                for (let i = 0; i < word.length; i++) {
                    if (e.target.innerHTML === word[i]) {
                    wordArea.children[i].innerHTML = e.target.innerHTML 
                    lifeDisplay.innerHTML = "You have " + livesLeft + " lives left!"
                    letterFound = true
                    }
                }
                setTimeout(function(){gameEnd.innerText = "You Win!"}, 300)
            }else if (count < word.length) { 
                if (e.target.style.opacity === '') {
                    console.log('unclicked')
                    console.log(e.target.innerHTML)
                    letterFound = false
                    for (let i = 0; i < word.length; i++) {
                        if (e.target.innerHTML === word[i]) {
                        wordArea.children[i].innerHTML = e.target.innerHTML 
                        count += 1
                        lifeDisplay.innerHTML = "You have " + livesLeft + " lives left!"
                        letterFound = true
                        }
                    }
                    if (letterFound === false) {
                        livesLeft -= 1
                        lifeDisplay.innerHTML = "You have " + livesLeft + " lives left!"
                        if (livesLeft === 5) {
                            head();
                        } else if (livesLeft === 4) {
                            torso();
                        } else if (livesLeft === 3) {
                            rightArm();
                        } else if (livesLeft === 2) {
                            leftArm();
                        } else if (livesLeft === 1) {
                            rightLeg();
                        } else if (livesLeft === 0) {
                            ctx.fillStyle = 'red'
                            ctx.fillRect(0, 0, 600, 200)
                            head();
                            torso();
                            rightArm();
                            leftArm();
                            rightLeg();
                            leftLeg();
                        }
                    } else {
                        letterFound = true
                    }
                    if (livesLeft < 1) {
                        setTimeout(function(){gameEnd.innerText = "You Lose!"}, 300)
                    for (h = 0; h < lettersDivArray.length; h++) {
                        lettersDivArray[h].style.opacity = '.3'
                    }              
                }
                    e.target.style.opacity = ".3"
                }else{
                    console.log("already clicked")
                }
            }
        })
    }
}


let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
ctx.fillStyle = "grey";
ctx.fillRect(0, 0, 600, 200);

function hangingThing() {
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(0, 140);
    ctx.lineTo(150, 140);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(75, 5);
    ctx.lineTo(75, 140);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(75, 5);
    ctx.lineTo(150, 5);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(150, 5);
    ctx.lineTo(150, 10);
    ctx.stroke();
}

hangingThing();



if (c.getContext("2d")) { 
context = c.getContext("2d"); 

    function head() {
        context.beginPath();
        context.strokeStyle = "black"; 
        context.arc(150, 30, 20, 0, Math.PI * 2, true); 
        
        context.stroke();

        context.beginPath();
        context.strokeStyle = "black"; 
        context.lineWidth = 1;
        context.arc(150, 30, 10, 0, Math.PI, true); 
        context.stroke();


        context.beginPath();
        context.fillStyle = "black"; 
        context.arc(140, 15, 2, 0, Math.PI * 2, true); 
        context.fill();
        context.arc(160, 15, 2, 0, Math.PI * 2, true); 
        context.fill();
    }

    function torso() {
        context.beginPath();
        context.moveTo(150, 40);
        context.lineTo(150, 100);
        context.strokeStyle = "black";
        context.stroke();
    }


    function leftArm() {
        context.beginPath();
        context.strokeStyle = "black";
        context.moveTo(150, 60);
        context.lineTo(120, 100);
        context.stroke();
    }


    function rightArm() {
        context.beginPath();
        context.strokeStyle = "black";
        context.moveTo(150, 60);
        context.lineTo(180, 100);
        context.stroke();
    }


    function leftLeg() {
        context.beginPath();
        context.strokeStyle = "black";
        context.moveTo(150, 100);
        context.lineTo(120, 140);
        context.stroke();
    }

    function rightLeg() {
        context.beginPath();
        context.strokeStyle = "black";
        context.moveTo(150, 100);
        context.lineTo(180, 140);
        context.stroke();
    }

}
