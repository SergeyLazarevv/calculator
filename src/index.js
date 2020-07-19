import './style.scss';

const screen = document.querySelector('.calculator__screen'), // screen
    buttons = document.querySelectorAll('.button'), // buttons
    result = document.querySelector('.result'),// equal button
    broom = document.querySelector('.broom') // broom 
//used in dot func
let lastOperator = null

//clear screen...
broom.addEventListener('click',()=>{
    //...and set default value 0
    screen.innerHTML = '0'
    //last operator clear
    lastOperator = null
})
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
    if (screen.innerHTML[screen.innerHTML.length-1] != lastOperator) {
        //add operator to screen
        screen.innerHTML += event.target.getAttribute('value')
        //and set it in last operator variable (used in add ddot func)
        lastOperator=event.target.getAttribute('value')
    } else {
        //if needed to change operator
        //slice expression widhout last operator
        screen.innerHTML = screen.innerHTML.slice(0,screen.innerHTML.length-1)
        console.log(screen.innerHTML)
        //set new last operator...
        lastOperator=event.target.getAttribute('value')
        console.log(lastOperator)
        //...and add it at screen expression
        screen.innerHTML+=lastOperator
    }
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
    //and check availability of dot in it
    if (currentNum && currentNum.indexOf('.')==-1) {
        //adding if number does not have a dot
        screen.innerHTML+='.'
    } else if (currentNum.indexOf('.')==-1) {
        //adding 0. if it start or new current nember
        screen.innerHTML+='0.'
    } //in other cases, the dot is not put
}

/*let defaultSize = 36
function changeSize(leng) {
    if (leng<13) screen.style.fontSize= defaultSize +'px'
    if (leng>=13) {
        defaultSize-=1
        screen.style.fontSize=defaultSize +'px'
    }
}*/

function equal() {
    //post to php
    //and clear screen...
    screen.innerHTML = '0'
    //and last operator too
    lastOperator=null
}
//add listener to every btn
//check class and selecting the appropriate function
for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click',(e) => {
            //changeSize(screen.innerHTML.length)
            //for btn has number class
            if (e.target.classList.contains('number')) {
                addNumAtScreen(e)
            //add operator to screen
            } else if (e.target.classList.contains('operator')) {
                addOperatorAtScreen(e)
            //dot adding
            } else if(e.target.classList.contains('dot')) {
                addDotAtScreen()
            //or equal btn for fetch expression to php
            } else {
                equal()
            }
        })
}
