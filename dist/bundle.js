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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst screen = document.querySelector('.calculator__screen'), // screen\r\n    buttons = document.querySelectorAll('.button'), // buttons\r\n    result = document.querySelector('.result'),// equal button\r\n    broom = document.querySelector('.broom') // broom \r\n//used in dot func\r\nlet lastOperator = null\r\n\r\n//clear screen...\r\nbroom.addEventListener('click',()=>{\r\n    //...and set default value 0\r\n    screen.innerHTML = '0'\r\n    //last operator clear\r\n    lastOperator = null\r\n})\r\n//add number at screen as string\r\nfunction addNumAtScreen(event) {\r\n    //if screen is empty change zero to first number...\r\n    if (screen.innerHTML === '0') {\r\n        screen.innerHTML = event.target.innerHTML\r\n    } else {\r\n        //...or concat number\r\n        screen.innerHTML += event.target.innerHTML\r\n    }\r\n}\r\n\r\n//add operators at screen\r\nfunction addOperatorAtScreen(event) {\r\n    if (screen.innerHTML[screen.innerHTML.length-1] != lastOperator) {\r\n        //add operator to screen\r\n        screen.innerHTML += event.target.getAttribute('value')\r\n        //and set it in last operator variable (used in add ddot func)\r\n        lastOperator=event.target.getAttribute('value')\r\n    } else {\r\n        //if needed to change operator\r\n        //slice expression widhout last operator\r\n        screen.innerHTML = screen.innerHTML.slice(0,screen.innerHTML.length-1)\r\n        console.log(screen.innerHTML)\r\n        //set new last operator...\r\n        lastOperator=event.target.getAttribute('value')\r\n        console.log(lastOperator)\r\n        //...and add it at screen expression\r\n        screen.innerHTML+=lastOperator\r\n    }\r\n}\r\n\r\n//add dot at screen\r\nfunction addDotAtScreen() {\r\n    //if dot is first set 0.\r\n    if (screen.innerHTML == '0') screen.innerHTML = '0.'\r\n    //for any case...\r\n    let currentNum\r\n    //in case no used operator as yet\r\n    if (!lastOperator) {\r\n        currentNum = screen.innerHTML\r\n    } else {\r\n        //or get index of last operator in screen number\r\n        let lastOperatorIndex = screen.innerHTML.lastIndexOf(lastOperator)\r\n        //get current number after last operator\r\n        currentNum = screen.innerHTML.slice(lastOperatorIndex+1,screen.innerHTML.length)\r\n    }\r\n    //and check availability of dot in it\r\n    if (currentNum && currentNum.indexOf('.')==-1) {\r\n        //adding if number does not have a dot\r\n        screen.innerHTML+='.'\r\n    } else if (currentNum.indexOf('.')==-1) {\r\n        //adding 0. if it start or new current nember\r\n        screen.innerHTML+='0.'\r\n    } //in other cases, the dot is not put\r\n}\r\n\r\n/*let defaultSize = 36\r\nfunction changeSize(leng) {\r\n    if (leng<13) screen.style.fontSize= defaultSize +'px'\r\n    if (leng>=13) {\r\n        defaultSize-=1\r\n        screen.style.fontSize=defaultSize +'px'\r\n    }\r\n}*/\r\n\r\nfunction equal() {\r\n    console.log('equal')\r\n    //let url = 'https://heylookatthis.website'\r\n    //fetch(url, {\r\n    //    method: 'POST',\r\n        //body: JSON.stringify('testText')\r\n    //}).then(res=>res.json()).then((res)=>console.log(res)).catch((err)=>console.log(err))\r\n    //post to php\r\n    //and clear screen...\r\n    screen.innerHTML = '5'\r\n    //and last operator too\r\n    lastOperator=null\r\n}\r\n//add listener to every btn\r\n//check class and selecting the appropriate function\r\nfor(let i = 0; i < buttons.length; i++) {\r\n        buttons[i].addEventListener('click',(e) => {\r\n            //changeSize(screen.innerHTML.length)\r\n            //for btn has number class\r\n            if (e.target.classList.contains('number')) {\r\n                addNumAtScreen(e)\r\n            //add operator to screen\r\n            } else if (e.target.classList.contains('operator')) {\r\n                addOperatorAtScreen(e)\r\n            //dot adding\r\n            } else if(e.target.classList.contains('dot')) {\r\n                addDotAtScreen()\r\n            //or equal btn for fetch expression to php\r\n            } else {\r\n                equal()\r\n            }\r\n        })\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBzY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsY3VsYXRvcl9fc2NyZWVuJyksIC8vIHNjcmVlblxyXG4gICAgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24nKSwgLy8gYnV0dG9uc1xyXG4gICAgcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdCcpLC8vIGVxdWFsIGJ1dHRvblxyXG4gICAgYnJvb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnJvb20nKSAvLyBicm9vbSBcclxuLy91c2VkIGluIGRvdCBmdW5jXHJcbmxldCBsYXN0T3BlcmF0b3IgPSBudWxsXHJcblxyXG4vL2NsZWFyIHNjcmVlbi4uLlxyXG5icm9vbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgIC8vLi4uYW5kIHNldCBkZWZhdWx0IHZhbHVlIDBcclxuICAgIHNjcmVlbi5pbm5lckhUTUwgPSAnMCdcclxuICAgIC8vbGFzdCBvcGVyYXRvciBjbGVhclxyXG4gICAgbGFzdE9wZXJhdG9yID0gbnVsbFxyXG59KVxyXG4vL2FkZCBudW1iZXIgYXQgc2NyZWVuIGFzIHN0cmluZ1xyXG5mdW5jdGlvbiBhZGROdW1BdFNjcmVlbihldmVudCkge1xyXG4gICAgLy9pZiBzY3JlZW4gaXMgZW1wdHkgY2hhbmdlIHplcm8gdG8gZmlyc3QgbnVtYmVyLi4uXHJcbiAgICBpZiAoc2NyZWVuLmlubmVySFRNTCA9PT0gJzAnKSB7XHJcbiAgICAgICAgc2NyZWVuLmlubmVySFRNTCA9IGV2ZW50LnRhcmdldC5pbm5lckhUTUxcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8uLi5vciBjb25jYXQgbnVtYmVyXHJcbiAgICAgICAgc2NyZWVuLmlubmVySFRNTCArPSBldmVudC50YXJnZXQuaW5uZXJIVE1MXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vYWRkIG9wZXJhdG9ycyBhdCBzY3JlZW5cclxuZnVuY3Rpb24gYWRkT3BlcmF0b3JBdFNjcmVlbihldmVudCkge1xyXG4gICAgaWYgKHNjcmVlbi5pbm5lckhUTUxbc2NyZWVuLmlubmVySFRNTC5sZW5ndGgtMV0gIT0gbGFzdE9wZXJhdG9yKSB7XHJcbiAgICAgICAgLy9hZGQgb3BlcmF0b3IgdG8gc2NyZWVuXHJcbiAgICAgICAgc2NyZWVuLmlubmVySFRNTCArPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpXHJcbiAgICAgICAgLy9hbmQgc2V0IGl0IGluIGxhc3Qgb3BlcmF0b3IgdmFyaWFibGUgKHVzZWQgaW4gYWRkIGRkb3QgZnVuYylcclxuICAgICAgICBsYXN0T3BlcmF0b3I9ZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgndmFsdWUnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvL2lmIG5lZWRlZCB0byBjaGFuZ2Ugb3BlcmF0b3JcclxuICAgICAgICAvL3NsaWNlIGV4cHJlc3Npb24gd2lkaG91dCBsYXN0IG9wZXJhdG9yXHJcbiAgICAgICAgc2NyZWVuLmlubmVySFRNTCA9IHNjcmVlbi5pbm5lckhUTUwuc2xpY2UoMCxzY3JlZW4uaW5uZXJIVE1MLmxlbmd0aC0xKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHNjcmVlbi5pbm5lckhUTUwpXHJcbiAgICAgICAgLy9zZXQgbmV3IGxhc3Qgb3BlcmF0b3IuLi5cclxuICAgICAgICBsYXN0T3BlcmF0b3I9ZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgndmFsdWUnKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGxhc3RPcGVyYXRvcilcclxuICAgICAgICAvLy4uLmFuZCBhZGQgaXQgYXQgc2NyZWVuIGV4cHJlc3Npb25cclxuICAgICAgICBzY3JlZW4uaW5uZXJIVE1MKz1sYXN0T3BlcmF0b3JcclxuICAgIH1cclxufVxyXG5cclxuLy9hZGQgZG90IGF0IHNjcmVlblxyXG5mdW5jdGlvbiBhZGREb3RBdFNjcmVlbigpIHtcclxuICAgIC8vaWYgZG90IGlzIGZpcnN0IHNldCAwLlxyXG4gICAgaWYgKHNjcmVlbi5pbm5lckhUTUwgPT0gJzAnKSBzY3JlZW4uaW5uZXJIVE1MID0gJzAuJ1xyXG4gICAgLy9mb3IgYW55IGNhc2UuLi5cclxuICAgIGxldCBjdXJyZW50TnVtXHJcbiAgICAvL2luIGNhc2Ugbm8gdXNlZCBvcGVyYXRvciBhcyB5ZXRcclxuICAgIGlmICghbGFzdE9wZXJhdG9yKSB7XHJcbiAgICAgICAgY3VycmVudE51bSA9IHNjcmVlbi5pbm5lckhUTUxcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy9vciBnZXQgaW5kZXggb2YgbGFzdCBvcGVyYXRvciBpbiBzY3JlZW4gbnVtYmVyXHJcbiAgICAgICAgbGV0IGxhc3RPcGVyYXRvckluZGV4ID0gc2NyZWVuLmlubmVySFRNTC5sYXN0SW5kZXhPZihsYXN0T3BlcmF0b3IpXHJcbiAgICAgICAgLy9nZXQgY3VycmVudCBudW1iZXIgYWZ0ZXIgbGFzdCBvcGVyYXRvclxyXG4gICAgICAgIGN1cnJlbnROdW0gPSBzY3JlZW4uaW5uZXJIVE1MLnNsaWNlKGxhc3RPcGVyYXRvckluZGV4KzEsc2NyZWVuLmlubmVySFRNTC5sZW5ndGgpXHJcbiAgICB9XHJcbiAgICAvL2FuZCBjaGVjayBhdmFpbGFiaWxpdHkgb2YgZG90IGluIGl0XHJcbiAgICBpZiAoY3VycmVudE51bSAmJiBjdXJyZW50TnVtLmluZGV4T2YoJy4nKT09LTEpIHtcclxuICAgICAgICAvL2FkZGluZyBpZiBudW1iZXIgZG9lcyBub3QgaGF2ZSBhIGRvdFxyXG4gICAgICAgIHNjcmVlbi5pbm5lckhUTUwrPScuJ1xyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50TnVtLmluZGV4T2YoJy4nKT09LTEpIHtcclxuICAgICAgICAvL2FkZGluZyAwLiBpZiBpdCBzdGFydCBvciBuZXcgY3VycmVudCBuZW1iZXJcclxuICAgICAgICBzY3JlZW4uaW5uZXJIVE1MKz0nMC4nXHJcbiAgICB9IC8vaW4gb3RoZXIgY2FzZXMsIHRoZSBkb3QgaXMgbm90IHB1dFxyXG59XHJcblxyXG4vKmxldCBkZWZhdWx0U2l6ZSA9IDM2XHJcbmZ1bmN0aW9uIGNoYW5nZVNpemUobGVuZykge1xyXG4gICAgaWYgKGxlbmc8MTMpIHNjcmVlbi5zdHlsZS5mb250U2l6ZT0gZGVmYXVsdFNpemUgKydweCdcclxuICAgIGlmIChsZW5nPj0xMykge1xyXG4gICAgICAgIGRlZmF1bHRTaXplLT0xXHJcbiAgICAgICAgc2NyZWVuLnN0eWxlLmZvbnRTaXplPWRlZmF1bHRTaXplICsncHgnXHJcbiAgICB9XHJcbn0qL1xyXG5cclxuZnVuY3Rpb24gZXF1YWwoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnZXF1YWwnKVxyXG4gICAgLy9sZXQgdXJsID0gJ2h0dHBzOi8vaGV5bG9va2F0dGhpcy53ZWJzaXRlJ1xyXG4gICAgLy9mZXRjaCh1cmwsIHtcclxuICAgIC8vICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIC8vYm9keTogSlNPTi5zdHJpbmdpZnkoJ3Rlc3RUZXh0JylcclxuICAgIC8vfSkudGhlbihyZXM9PnJlcy5qc29uKCkpLnRoZW4oKHJlcyk9PmNvbnNvbGUubG9nKHJlcykpLmNhdGNoKChlcnIpPT5jb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgLy9wb3N0IHRvIHBocFxyXG4gICAgLy9hbmQgY2xlYXIgc2NyZWVuLi4uXHJcbiAgICBzY3JlZW4uaW5uZXJIVE1MID0gJzUnXHJcbiAgICAvL2FuZCBsYXN0IG9wZXJhdG9yIHRvb1xyXG4gICAgbGFzdE9wZXJhdG9yPW51bGxcclxufVxyXG4vL2FkZCBsaXN0ZW5lciB0byBldmVyeSBidG5cclxuLy9jaGVjayBjbGFzcyBhbmQgc2VsZWN0aW5nIHRoZSBhcHByb3ByaWF0ZSBmdW5jdGlvblxyXG5mb3IobGV0IGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vY2hhbmdlU2l6ZShzY3JlZW4uaW5uZXJIVE1MLmxlbmd0aClcclxuICAgICAgICAgICAgLy9mb3IgYnRuIGhhcyBudW1iZXIgY2xhc3NcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbnVtYmVyJykpIHtcclxuICAgICAgICAgICAgICAgIGFkZE51bUF0U2NyZWVuKGUpXHJcbiAgICAgICAgICAgIC8vYWRkIG9wZXJhdG9yIHRvIHNjcmVlblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnb3BlcmF0b3InKSkge1xyXG4gICAgICAgICAgICAgICAgYWRkT3BlcmF0b3JBdFNjcmVlbihlKVxyXG4gICAgICAgICAgICAvL2RvdCBhZGRpbmdcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZG90JykpIHtcclxuICAgICAgICAgICAgICAgIGFkZERvdEF0U2NyZWVuKClcclxuICAgICAgICAgICAgLy9vciBlcXVhbCBidG4gZm9yIGZldGNoIGV4cHJlc3Npb24gdG8gcGhwXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlcXVhbCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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