/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst screen = document.querySelector('.calculator__screen'), // screen\r\n    buttons = document.querySelectorAll('.button'), // buttons\r\n    result = document.querySelector('.result'),// equal button\r\n    broom = document.querySelector('.broom') // broom \r\n//used in dot func\r\nlet lastOperator = null,\r\n    resultScreen = false;\r\n\r\n//clear screen...\r\nbroom.addEventListener('click',()=>{\r\n    //...and set default value 0\r\n    screen.innerHTML = '0'\r\n    //last operator clear\r\n    lastOperator = null\r\n    resultScreen=false\r\n})\r\n//add number at screen as string\r\nfunction addNumAtScreen(event) {\r\n    //if screen is empty change zero to first number...\r\n    if (screen.innerHTML === '0') {\r\n        screen.innerHTML = event.target.innerHTML\r\n    } else if (resultScreen){\r\n        console.log('bil result')\r\n        //...in case of result on display replace it by event number\r\n        //but in case of adding operator result stay on screen\r\n        screen.innerHTML = event.target.innerHTML\r\n        //\r\n        resultScreen=false\r\n    } else {\r\n        //just concat\r\n        screen.innerHTML += event.target.innerHTML\r\n    }\r\n}\r\n\r\n//add operators at screen\r\nfunction addOperatorAtScreen(event) {\r\n    resultScreen=false\r\n    if (screen.innerHTML[screen.innerHTML.length-1] != lastOperator) {\r\n        //add operator to screen\r\n        screen.innerHTML += event.target.getAttribute('value')\r\n        //and set it in last operator variable (used in add ddot func)\r\n        lastOperator=event.target.getAttribute('value')\r\n    } else {\r\n        //if needed to change operator\r\n        //slice expression widhout last operator\r\n        screen.innerHTML = screen.innerHTML.slice(0,screen.innerHTML.length-1)\r\n        console.log(screen.innerHTML)\r\n        //set new last operator...\r\n        lastOperator=event.target.getAttribute('value')\r\n        console.log(lastOperator)\r\n        //...and add it at screen expression\r\n        screen.innerHTML+=lastOperator\r\n    }\r\n}\r\n\r\n//add dot at screen\r\nfunction addDotAtScreen() {\r\n    //in case of add dot width result at screen reset result var\r\n    resultScreen=false\r\n    //if dot is first set 0.\r\n    if (screen.innerHTML == '0') screen.innerHTML = '0.'\r\n    //for any case...\r\n    let currentNum\r\n    //in case no used operator as yet\r\n    if (!lastOperator) {\r\n        currentNum = screen.innerHTML\r\n    } else {\r\n        //or get index of last operator in screen number\r\n        let lastOperatorIndex = screen.innerHTML.lastIndexOf(lastOperator)\r\n        //get current number after last operator\r\n        currentNum = screen.innerHTML.slice(lastOperatorIndex+1,screen.innerHTML.length)\r\n    }\r\n    //and check availability of dot in it\r\n    if (currentNum && currentNum.indexOf('.')==-1) {\r\n        //adding if number does not have a dot\r\n        screen.innerHTML+='.'\r\n    } else if (currentNum.indexOf('.')==-1) {\r\n        //adding 0. if it start or new current nember\r\n        screen.innerHTML+='0.'\r\n    } //in other cases, the dot is not put\r\n}\r\n\r\n/*let defaultSize = 36\r\nfunction changeSize(leng) {\r\n    if (leng<13) screen.style.fontSize= defaultSize +'px'\r\n    if (leng>=13) {\r\n        defaultSize-=1\r\n        screen.style.fontSize=defaultSize +'px'\r\n    }\r\n}*/\r\n\r\nfunction equal() {\r\n    console.log('equal')\r\n    //get expression from screen\r\n    let inputString = screen.innerHTML;\r\n    //make array of numbers\r\n    let numbers = inputString.split(/\\+|\\-|\\*|\\//g);\r\n    //console.log(numbers)\r\n    //get operators array\r\n    let operators = inputString.replace(/[0-9]|\\./g, \"\").split(\"\");\r\n    //console.log(operators)\r\n    //get index of devide operator in operators array\r\n    let divide = operators.indexOf(\"/\");\r\n    //divide operation at first\r\n    while (divide != -1) {\r\n        //while operators array has divide sign...\r\n        //replace two operands with result\r\n        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);\r\n        //remove operator from array\r\n        operators.splice(divide, 1);\r\n        //check any divide operator\r\n        divide = operators.indexOf(\"/\");\r\n    }\r\n    //the same operation for multiply\r\n    let multiply = operators.indexOf(\"*\");\r\n    while (multiply != -1) {\r\n        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);\r\n        operators.splice(multiply, 1);\r\n        multiply = operators.indexOf(\"*\");\r\n    }\r\n    //substraction\r\n    let subtract = operators.indexOf(\"-\");\r\n    while (subtract != -1) {\r\n        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);\r\n        operators.splice(subtract, 1);\r\n        subtract = operators.indexOf(\"-\");\r\n    }\r\n    //addition\r\n    let add = operators.indexOf(\"+\");\r\n    while (add != -1) {\r\n        //using parseFloat is necessary, otherwise it will result in string concatenation\r\n        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));\r\n        operators.splice(add, 1);\r\n        add = operators.indexOf(\"+\");\r\n    }\r\n\r\n    screen.innerHTML = numbers[0]; // displaying the result = last one number in number array\r\n    resultScreen = true\r\n\r\n    //let url = 'https://heylookatthis.website'\r\n    ///fetch(url, {\r\n       // method: 'POST',\r\n        //body: JSON.stringify('testText')\r\n    //}).then(res=>res.json()).then((res)=>console.log(res)).catch((err)=>console.log(err))\r\n    //post to php\r\n    //and clear screen...\r\n    //screen.innerHTML = '0'\r\n    //and last operator too\r\n    lastOperator=null\r\n}\r\n//add listener to every btn\r\n//check class and selecting the appropriate function\r\nfor(let i = 0; i < buttons.length; i++) {\r\n        buttons[i].addEventListener('click',(e) => {\r\n            //changeSize(screen.innerHTML.length)\r\n            //for btn has number class\r\n            if (e.target.classList.contains('number')) {\r\n                addNumAtScreen(e)\r\n            //add operator to screen\r\n            } else if (e.target.classList.contains('operator')) {\r\n                addOperatorAtScreen(e)\r\n            //dot adding\r\n            } else if(e.target.classList.contains('dot')) {\r\n                addDotAtScreen()\r\n            //or equal btn for fetch expression to php\r\n            } else {\r\n                equal()\r\n            }\r\n        })\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBzY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsY3VsYXRvcl9fc2NyZWVuJyksIC8vIHNjcmVlblxyXG4gICAgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24nKSwgLy8gYnV0dG9uc1xyXG4gICAgcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdCcpLC8vIGVxdWFsIGJ1dHRvblxyXG4gICAgYnJvb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnJvb20nKSAvLyBicm9vbSBcclxuLy91c2VkIGluIGRvdCBmdW5jXHJcbmxldCBsYXN0T3BlcmF0b3IgPSBudWxsLFxyXG4gICAgcmVzdWx0U2NyZWVuID0gZmFsc2U7XHJcblxyXG4vL2NsZWFyIHNjcmVlbi4uLlxyXG5icm9vbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgIC8vLi4uYW5kIHNldCBkZWZhdWx0IHZhbHVlIDBcclxuICAgIHNjcmVlbi5pbm5lckhUTUwgPSAnMCdcclxuICAgIC8vbGFzdCBvcGVyYXRvciBjbGVhclxyXG4gICAgbGFzdE9wZXJhdG9yID0gbnVsbFxyXG4gICAgcmVzdWx0U2NyZWVuPWZhbHNlXHJcbn0pXHJcbi8vYWRkIG51bWJlciBhdCBzY3JlZW4gYXMgc3RyaW5nXHJcbmZ1bmN0aW9uIGFkZE51bUF0U2NyZWVuKGV2ZW50KSB7XHJcbiAgICAvL2lmIHNjcmVlbiBpcyBlbXB0eSBjaGFuZ2UgemVybyB0byBmaXJzdCBudW1iZXIuLi5cclxuICAgIGlmIChzY3JlZW4uaW5uZXJIVE1MID09PSAnMCcpIHtcclxuICAgICAgICBzY3JlZW4uaW5uZXJIVE1MID0gZXZlbnQudGFyZ2V0LmlubmVySFRNTFxyXG4gICAgfSBlbHNlIGlmIChyZXN1bHRTY3JlZW4pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdiaWwgcmVzdWx0JylcclxuICAgICAgICAvLy4uLmluIGNhc2Ugb2YgcmVzdWx0IG9uIGRpc3BsYXkgcmVwbGFjZSBpdCBieSBldmVudCBudW1iZXJcclxuICAgICAgICAvL2J1dCBpbiBjYXNlIG9mIGFkZGluZyBvcGVyYXRvciByZXN1bHQgc3RheSBvbiBzY3JlZW5cclxuICAgICAgICBzY3JlZW4uaW5uZXJIVE1MID0gZXZlbnQudGFyZ2V0LmlubmVySFRNTFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmVzdWx0U2NyZWVuPWZhbHNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vanVzdCBjb25jYXRcclxuICAgICAgICBzY3JlZW4uaW5uZXJIVE1MICs9IGV2ZW50LnRhcmdldC5pbm5lckhUTUxcclxuICAgIH1cclxufVxyXG5cclxuLy9hZGQgb3BlcmF0b3JzIGF0IHNjcmVlblxyXG5mdW5jdGlvbiBhZGRPcGVyYXRvckF0U2NyZWVuKGV2ZW50KSB7XHJcbiAgICByZXN1bHRTY3JlZW49ZmFsc2VcclxuICAgIGlmIChzY3JlZW4uaW5uZXJIVE1MW3NjcmVlbi5pbm5lckhUTUwubGVuZ3RoLTFdICE9IGxhc3RPcGVyYXRvcikge1xyXG4gICAgICAgIC8vYWRkIG9wZXJhdG9yIHRvIHNjcmVlblxyXG4gICAgICAgIHNjcmVlbi5pbm5lckhUTUwgKz0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgndmFsdWUnKVxyXG4gICAgICAgIC8vYW5kIHNldCBpdCBpbiBsYXN0IG9wZXJhdG9yIHZhcmlhYmxlICh1c2VkIGluIGFkZCBkZG90IGZ1bmMpXHJcbiAgICAgICAgbGFzdE9wZXJhdG9yPWV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy9pZiBuZWVkZWQgdG8gY2hhbmdlIG9wZXJhdG9yXHJcbiAgICAgICAgLy9zbGljZSBleHByZXNzaW9uIHdpZGhvdXQgbGFzdCBvcGVyYXRvclxyXG4gICAgICAgIHNjcmVlbi5pbm5lckhUTUwgPSBzY3JlZW4uaW5uZXJIVE1MLnNsaWNlKDAsc2NyZWVuLmlubmVySFRNTC5sZW5ndGgtMSlcclxuICAgICAgICBjb25zb2xlLmxvZyhzY3JlZW4uaW5uZXJIVE1MKVxyXG4gICAgICAgIC8vc2V0IG5ldyBsYXN0IG9wZXJhdG9yLi4uXHJcbiAgICAgICAgbGFzdE9wZXJhdG9yPWV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJylcclxuICAgICAgICBjb25zb2xlLmxvZyhsYXN0T3BlcmF0b3IpXHJcbiAgICAgICAgLy8uLi5hbmQgYWRkIGl0IGF0IHNjcmVlbiBleHByZXNzaW9uXHJcbiAgICAgICAgc2NyZWVuLmlubmVySFRNTCs9bGFzdE9wZXJhdG9yXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vYWRkIGRvdCBhdCBzY3JlZW5cclxuZnVuY3Rpb24gYWRkRG90QXRTY3JlZW4oKSB7XHJcbiAgICAvL2luIGNhc2Ugb2YgYWRkIGRvdCB3aWR0aCByZXN1bHQgYXQgc2NyZWVuIHJlc2V0IHJlc3VsdCB2YXJcclxuICAgIHJlc3VsdFNjcmVlbj1mYWxzZVxyXG4gICAgLy9pZiBkb3QgaXMgZmlyc3Qgc2V0IDAuXHJcbiAgICBpZiAoc2NyZWVuLmlubmVySFRNTCA9PSAnMCcpIHNjcmVlbi5pbm5lckhUTUwgPSAnMC4nXHJcbiAgICAvL2ZvciBhbnkgY2FzZS4uLlxyXG4gICAgbGV0IGN1cnJlbnROdW1cclxuICAgIC8vaW4gY2FzZSBubyB1c2VkIG9wZXJhdG9yIGFzIHlldFxyXG4gICAgaWYgKCFsYXN0T3BlcmF0b3IpIHtcclxuICAgICAgICBjdXJyZW50TnVtID0gc2NyZWVuLmlubmVySFRNTFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvL29yIGdldCBpbmRleCBvZiBsYXN0IG9wZXJhdG9yIGluIHNjcmVlbiBudW1iZXJcclxuICAgICAgICBsZXQgbGFzdE9wZXJhdG9ySW5kZXggPSBzY3JlZW4uaW5uZXJIVE1MLmxhc3RJbmRleE9mKGxhc3RPcGVyYXRvcilcclxuICAgICAgICAvL2dldCBjdXJyZW50IG51bWJlciBhZnRlciBsYXN0IG9wZXJhdG9yXHJcbiAgICAgICAgY3VycmVudE51bSA9IHNjcmVlbi5pbm5lckhUTUwuc2xpY2UobGFzdE9wZXJhdG9ySW5kZXgrMSxzY3JlZW4uaW5uZXJIVE1MLmxlbmd0aClcclxuICAgIH1cclxuICAgIC8vYW5kIGNoZWNrIGF2YWlsYWJpbGl0eSBvZiBkb3QgaW4gaXRcclxuICAgIGlmIChjdXJyZW50TnVtICYmIGN1cnJlbnROdW0uaW5kZXhPZignLicpPT0tMSkge1xyXG4gICAgICAgIC8vYWRkaW5nIGlmIG51bWJlciBkb2VzIG5vdCBoYXZlIGEgZG90XHJcbiAgICAgICAgc2NyZWVuLmlubmVySFRNTCs9Jy4nXHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnROdW0uaW5kZXhPZignLicpPT0tMSkge1xyXG4gICAgICAgIC8vYWRkaW5nIDAuIGlmIGl0IHN0YXJ0IG9yIG5ldyBjdXJyZW50IG5lbWJlclxyXG4gICAgICAgIHNjcmVlbi5pbm5lckhUTUwrPScwLidcclxuICAgIH0gLy9pbiBvdGhlciBjYXNlcywgdGhlIGRvdCBpcyBub3QgcHV0XHJcbn1cclxuXHJcbi8qbGV0IGRlZmF1bHRTaXplID0gMzZcclxuZnVuY3Rpb24gY2hhbmdlU2l6ZShsZW5nKSB7XHJcbiAgICBpZiAobGVuZzwxMykgc2NyZWVuLnN0eWxlLmZvbnRTaXplPSBkZWZhdWx0U2l6ZSArJ3B4J1xyXG4gICAgaWYgKGxlbmc+PTEzKSB7XHJcbiAgICAgICAgZGVmYXVsdFNpemUtPTFcclxuICAgICAgICBzY3JlZW4uc3R5bGUuZm9udFNpemU9ZGVmYXVsdFNpemUgKydweCdcclxuICAgIH1cclxufSovXHJcblxyXG5mdW5jdGlvbiBlcXVhbCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdlcXVhbCcpXHJcbiAgICAvL2dldCBleHByZXNzaW9uIGZyb20gc2NyZWVuXHJcbiAgICBsZXQgaW5wdXRTdHJpbmcgPSBzY3JlZW4uaW5uZXJIVE1MO1xyXG4gICAgLy9tYWtlIGFycmF5IG9mIG51bWJlcnNcclxuICAgIGxldCBudW1iZXJzID0gaW5wdXRTdHJpbmcuc3BsaXQoL1xcK3xcXC18XFwqfFxcLy9nKTtcclxuICAgIC8vY29uc29sZS5sb2cobnVtYmVycylcclxuICAgIC8vZ2V0IG9wZXJhdG9ycyBhcnJheVxyXG4gICAgbGV0IG9wZXJhdG9ycyA9IGlucHV0U3RyaW5nLnJlcGxhY2UoL1swLTldfFxcLi9nLCBcIlwiKS5zcGxpdChcIlwiKTtcclxuICAgIC8vY29uc29sZS5sb2cob3BlcmF0b3JzKVxyXG4gICAgLy9nZXQgaW5kZXggb2YgZGV2aWRlIG9wZXJhdG9yIGluIG9wZXJhdG9ycyBhcnJheVxyXG4gICAgbGV0IGRpdmlkZSA9IG9wZXJhdG9ycy5pbmRleE9mKFwiL1wiKTtcclxuICAgIC8vZGl2aWRlIG9wZXJhdGlvbiBhdCBmaXJzdFxyXG4gICAgd2hpbGUgKGRpdmlkZSAhPSAtMSkge1xyXG4gICAgICAgIC8vd2hpbGUgb3BlcmF0b3JzIGFycmF5IGhhcyBkaXZpZGUgc2lnbi4uLlxyXG4gICAgICAgIC8vcmVwbGFjZSB0d28gb3BlcmFuZHMgd2l0aCByZXN1bHRcclxuICAgICAgICBudW1iZXJzLnNwbGljZShkaXZpZGUsIDIsIG51bWJlcnNbZGl2aWRlXSAvIG51bWJlcnNbZGl2aWRlICsgMV0pO1xyXG4gICAgICAgIC8vcmVtb3ZlIG9wZXJhdG9yIGZyb20gYXJyYXlcclxuICAgICAgICBvcGVyYXRvcnMuc3BsaWNlKGRpdmlkZSwgMSk7XHJcbiAgICAgICAgLy9jaGVjayBhbnkgZGl2aWRlIG9wZXJhdG9yXHJcbiAgICAgICAgZGl2aWRlID0gb3BlcmF0b3JzLmluZGV4T2YoXCIvXCIpO1xyXG4gICAgfVxyXG4gICAgLy90aGUgc2FtZSBvcGVyYXRpb24gZm9yIG11bHRpcGx5XHJcbiAgICBsZXQgbXVsdGlwbHkgPSBvcGVyYXRvcnMuaW5kZXhPZihcIipcIik7XHJcbiAgICB3aGlsZSAobXVsdGlwbHkgIT0gLTEpIHtcclxuICAgICAgICBudW1iZXJzLnNwbGljZShtdWx0aXBseSwgMiwgbnVtYmVyc1ttdWx0aXBseV0gKiBudW1iZXJzW211bHRpcGx5ICsgMV0pO1xyXG4gICAgICAgIG9wZXJhdG9ycy5zcGxpY2UobXVsdGlwbHksIDEpO1xyXG4gICAgICAgIG11bHRpcGx5ID0gb3BlcmF0b3JzLmluZGV4T2YoXCIqXCIpO1xyXG4gICAgfVxyXG4gICAgLy9zdWJzdHJhY3Rpb25cclxuICAgIGxldCBzdWJ0cmFjdCA9IG9wZXJhdG9ycy5pbmRleE9mKFwiLVwiKTtcclxuICAgIHdoaWxlIChzdWJ0cmFjdCAhPSAtMSkge1xyXG4gICAgICAgIG51bWJlcnMuc3BsaWNlKHN1YnRyYWN0LCAyLCBudW1iZXJzW3N1YnRyYWN0XSAtIG51bWJlcnNbc3VidHJhY3QgKyAxXSk7XHJcbiAgICAgICAgb3BlcmF0b3JzLnNwbGljZShzdWJ0cmFjdCwgMSk7XHJcbiAgICAgICAgc3VidHJhY3QgPSBvcGVyYXRvcnMuaW5kZXhPZihcIi1cIik7XHJcbiAgICB9XHJcbiAgICAvL2FkZGl0aW9uXHJcbiAgICBsZXQgYWRkID0gb3BlcmF0b3JzLmluZGV4T2YoXCIrXCIpO1xyXG4gICAgd2hpbGUgKGFkZCAhPSAtMSkge1xyXG4gICAgICAgIC8vdXNpbmcgcGFyc2VGbG9hdCBpcyBuZWNlc3NhcnksIG90aGVyd2lzZSBpdCB3aWxsIHJlc3VsdCBpbiBzdHJpbmcgY29uY2F0ZW5hdGlvblxyXG4gICAgICAgIG51bWJlcnMuc3BsaWNlKGFkZCwgMiwgcGFyc2VGbG9hdChudW1iZXJzW2FkZF0pICsgcGFyc2VGbG9hdChudW1iZXJzW2FkZCArIDFdKSk7XHJcbiAgICAgICAgb3BlcmF0b3JzLnNwbGljZShhZGQsIDEpO1xyXG4gICAgICAgIGFkZCA9IG9wZXJhdG9ycy5pbmRleE9mKFwiK1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JlZW4uaW5uZXJIVE1MID0gbnVtYmVyc1swXTsgLy8gZGlzcGxheWluZyB0aGUgcmVzdWx0ID0gbGFzdCBvbmUgbnVtYmVyIGluIG51bWJlciBhcnJheVxyXG4gICAgcmVzdWx0U2NyZWVuID0gdHJ1ZVxyXG5cclxuICAgIC8vbGV0IHVybCA9ICdodHRwczovL2hleWxvb2thdHRoaXMud2Vic2l0ZSdcclxuICAgIC8vL2ZldGNoKHVybCwge1xyXG4gICAgICAgLy8gbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgLy9ib2R5OiBKU09OLnN0cmluZ2lmeSgndGVzdFRleHQnKVxyXG4gICAgLy99KS50aGVuKHJlcz0+cmVzLmpzb24oKSkudGhlbigocmVzKT0+Y29uc29sZS5sb2cocmVzKSkuY2F0Y2goKGVycik9PmNvbnNvbGUubG9nKGVycikpXHJcbiAgICAvL3Bvc3QgdG8gcGhwXHJcbiAgICAvL2FuZCBjbGVhciBzY3JlZW4uLi5cclxuICAgIC8vc2NyZWVuLmlubmVySFRNTCA9ICcwJ1xyXG4gICAgLy9hbmQgbGFzdCBvcGVyYXRvciB0b29cclxuICAgIGxhc3RPcGVyYXRvcj1udWxsXHJcbn1cclxuLy9hZGQgbGlzdGVuZXIgdG8gZXZlcnkgYnRuXHJcbi8vY2hlY2sgY2xhc3MgYW5kIHNlbGVjdGluZyB0aGUgYXBwcm9wcmlhdGUgZnVuY3Rpb25cclxuZm9yKGxldCBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBidXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4ge1xyXG4gICAgICAgICAgICAvL2NoYW5nZVNpemUoc2NyZWVuLmlubmVySFRNTC5sZW5ndGgpXHJcbiAgICAgICAgICAgIC8vZm9yIGJ0biBoYXMgbnVtYmVyIGNsYXNzXHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ251bWJlcicpKSB7XHJcbiAgICAgICAgICAgICAgICBhZGROdW1BdFNjcmVlbihlKVxyXG4gICAgICAgICAgICAvL2FkZCBvcGVyYXRvciB0byBzY3JlZW5cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZXJhdG9yJykpIHtcclxuICAgICAgICAgICAgICAgIGFkZE9wZXJhdG9yQXRTY3JlZW4oZSlcclxuICAgICAgICAgICAgLy9kb3QgYWRkaW5nXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RvdCcpKSB7XHJcbiAgICAgICAgICAgICAgICBhZGREb3RBdFNjcmVlbigpXHJcbiAgICAgICAgICAgIC8vb3IgZXF1YWwgYnRuIGZvciBmZXRjaCBleHByZXNzaW9uIHRvIHBocFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZXF1YWwoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGUuc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS5zY3NzP2JjM2IiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/style.scss\n");

/***/ })

/******/ });