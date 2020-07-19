import './style.scss';

const screen = document.querySelector('.calculator__screen'), // screen
    buttons = document.querySelectorAll('.button'), // buttons
    result = document.querySelector('.result') // equal button
//used in dot func
let lastOperator = ''

//add number at screen as string
function addNumAtScreen(event) {
    //if screen is empty change zero to first number...
    if (screen.innerHTML === '0') {
        screen.innerHTML = event.target.innerHTML
    } else {
        //...or concat number
        screen.innerHTML += event.target.innerHTML
    }
}

//add operators at screen
function addOperatorAtScreen(event) {
    screen.innerHTML += event.target.getAttribute('value')
    lastOperator=event.target.getAttribute('value')
}

//add dot at screen
function addDotAtScreen() {
    //if dot is first set 0.
    if (screen.innerHTML == '0') screen.innerHTML = '0.'
    //for any case...
    let currentNum
    //in case no used operator as yet
    if (!lastOperator) {
        currentNum = screen.innerHTML
    } else {
        //or get index of last operator in screen number
        let lastOperatorIndex = screen.innerHTML.lastIndexOf(lastOperator)
        //get current number after last operator
        currentNum = screen.innerHTML.slice(lastOperatorIndex+1,screen.innerHTML.length)
    }
    //console.log(currentNum)
    //and check availability of dot in it
    if (currentNum && currentNum.indexOf('.')==-1) {
        //adding if number does not have a dot
        screen.innerHTML+='.'
    } else if (currentNum.indexOf('.')==-1) {
        //adding 0. if it start or new current nember
        screen.innerHTML+='0.'
    }
}

function equal() {
    //post to php
    //and clear screen...
    screen.innerHTML = '0'
    //and last operator too
    lastOperator=''
}
//add listener to every btn
//check class and selecting the appropriate function
for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click',(e) => {
            //for btn has number class
            if (e.target.classList.contains('number')) {
                addNumAtScreen(e)
            //add operator to screen
            } else if (e.target.classList.contains('operator')) {
                addOperatorAtScreen(e)
            //dot adding
            } else if(e.target.classList.contains('dot')) {
                addDotAtScreen()
            //or equal btn for return expression
            } else {
                equal()
            }
        })
}
