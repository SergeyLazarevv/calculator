import './style.scss';

const screen = document.querySelector('.calculator__screen'), // screen
    buttons = document.querySelectorAll('.button'), // buttons
    result = document.querySelector('.result'),// equal button
    broom = document.querySelector('.broom') // broom 
//used in dot func
let lastOperator = null,
    resultScreen = false;

//clear screen...
broom.addEventListener('click',()=>{
    //...and set default value 0
    screen.innerHTML = '0'
    //last operator clear
    lastOperator = null
    resultScreen=false
})
//add number at screen as string
function addNumAtScreen(event) {
    //if screen is empty change zero to first number...
    if (screen.innerHTML === '0') {
        screen.innerHTML = event.target.innerHTML
    } else if (resultScreen){
        console.log('bil result')
        //...in case of result on display replace it by event number
        //but in case of adding operator result stay on screen
        screen.innerHTML = event.target.innerHTML
        //
        resultScreen=false
    } else {
        //just concat
        screen.innerHTML += event.target.innerHTML
    }
}

//add operators at screen
function addOperatorAtScreen(event) {
    resultScreen=false
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
    //in case of add dot width result at screen reset result var
    resultScreen=false
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
    console.log('equal')
    //get expression from screen
    let inputString = screen.innerHTML;
    //make array of numbers
    let numbers = inputString.split(/\+|\-|\*|\//g);
    //console.log(numbers)
    //get operators array
    let operators = inputString.replace(/[0-9]|\./g, "").split("");
    //console.log(operators)
    //get index of devide operator in operators array
    let divide = operators.indexOf("/");
    //divide operation at first
    while (divide != -1) {
        //while operators array has divide sign...
        //replace two operands with result
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        //remove operator from array
        operators.splice(divide, 1);
        //check any divide operator
        divide = operators.indexOf("/");
    }
    //the same operation for multiply
    let multiply = operators.indexOf("*");
    while (multiply != -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf("*");
    }
    //substraction
    let subtract = operators.indexOf("-");
    while (subtract != -1) {
        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
        operators.splice(subtract, 1);
        subtract = operators.indexOf("-");
    }
    //addition
    let add = operators.indexOf("+");
    while (add != -1) {
        //using parseFloat is necessary, otherwise it will result in string concatenation
        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
        operators.splice(add, 1);
        add = operators.indexOf("+");
    }

    screen.innerHTML = numbers[0]; // displaying the result = last one number in number array
    resultScreen = true

    //let url = 'https://heylookatthis.website'
    ///fetch(url, {
       // method: 'POST',
        //body: JSON.stringify('testText')
    //}).then(res=>res.json()).then((res)=>console.log(res)).catch((err)=>console.log(err))
    //post to php
    //and clear screen...
    //screen.innerHTML = '0'
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
