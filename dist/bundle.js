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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst screen = document.querySelector('.calculator__screen'), // screen\r\n    buttons = document.querySelectorAll('.button'), // buttons\r\n    broom = document.querySelector('.broom') // broom \r\n//used in dot func\r\nlet lastOperator = null,\r\n    resultScreen = false;\r\n\r\n//clear screen...\r\nbroom.addEventListener('click',()=>{\r\n    //...and set default value 0\r\n    screen.innerHTML = '0'\r\n    //last operator clear\r\n    lastOperator = null\r\n    resultScreen=false\r\n})\r\n//add number at screen as string\r\nfunction addNumAtScreen(event) {\r\n    //if screen is empty change zero to first number...\r\n    if (screen.innerHTML === '0') {\r\n        screen.innerHTML = event.target.innerHTML\r\n    } else if (resultScreen){\r\n        console.log('bil result')\r\n        //...in case of result on display replace it by event number\r\n        //but in case of adding operator result stay on screen\r\n        screen.innerHTML = event.target.innerHTML\r\n        //\r\n        resultScreen=false\r\n    } else {\r\n        //just concat\r\n        screen.innerHTML += event.target.innerHTML\r\n    }\r\n}\r\n\r\n//add operators at screen\r\nfunction addOperatorAtScreen(event) {\r\n    resultScreen=false\r\n    if (screen.innerHTML[screen.innerHTML.length-1] != lastOperator) {\r\n        //add operator to screen\r\n        screen.innerHTML += event.target.getAttribute('value')\r\n        //and set it in last operator variable (used in add ddot func)\r\n        lastOperator=event.target.getAttribute('value')\r\n    } else {\r\n        //if needed to change operator\r\n        //slice expression widhout last operator\r\n        screen.innerHTML = screen.innerHTML.slice(0,screen.innerHTML.length-1)\r\n        console.log(screen.innerHTML)\r\n        //set new last operator...\r\n        lastOperator=event.target.getAttribute('value')\r\n        console.log(lastOperator)\r\n        //...and add it at screen expression\r\n        screen.innerHTML+=lastOperator\r\n    }\r\n}\r\n\r\n//add dot at screen\r\nfunction addDotAtScreen() {\r\n    //in case of add dot width result at screen reset result var\r\n    resultScreen=false\r\n    //if dot is first set 0.\r\n    if (screen.innerHTML == '0') screen.innerHTML = '0.'\r\n    //for any case...\r\n    let currentNum\r\n    //in case no used operator as yet\r\n    if (!lastOperator) {\r\n        currentNum = screen.innerHTML\r\n    } else {\r\n        //or get index of last operator in screen number\r\n        let lastOperatorIndex = screen.innerHTML.lastIndexOf(lastOperator)\r\n        //get current number after last operator\r\n        currentNum = screen.innerHTML.slice(lastOperatorIndex+1,screen.innerHTML.length)\r\n    }\r\n    //and check availability of dot in it\r\n    if (currentNum && currentNum.indexOf('.')==-1) {\r\n        //adding if number does not have a dot\r\n        screen.innerHTML+='.'\r\n    } else if (currentNum.indexOf('.')==-1) {\r\n        //adding 0. if it start or new current nember\r\n        screen.innerHTML+='0.'\r\n    } //in other cases, the dot is not put\r\n}\r\n\r\nfunction equal() {\r\n    //take data from screen and make post request to php\r\n    //php make calculate and return result\r\n    //set data variable\r\n    let data = screen.innerHTML;\r\n\r\n    //proxy for corps policy\r\n    let proxyUrl = 'https://cors-anywhere.herokuapp.com/';\r\n    //php url\r\n    let url = 'http://heylookatthis.website/'\r\n    fetch(proxyUrl+url, {\r\n        //set method\r\n        method: 'post',\r\n        //type of send content\r\n        headers: {'content-type': 'application/json'},\r\n        //set data\r\n        body: JSON.stringify(data)\r\n        //convert data from json\r\n    }).then(res=>res.json())\r\n    //assigment result to resilt screen\r\n    .then((res)=>screen.innerHTML=res)\r\n    .then(()=>resultScreen = true)\r\n    //catch and log errors\r\n    .catch((err)=>console.log(err))\r\n    //and clear screen...\r\n    //screen.innerHTML = '0'\r\n    //and last operator too\r\n    lastOperator=null\r\n}\r\n//add listener to every btn\r\n//check class and selecting the appropriate function\r\nfor(let i = 0; i < buttons.length; i++) {\r\n        buttons[i].addEventListener('click',(e) => {\r\n            //changeSize(screen.innerHTML.length)\r\n            //for btn has number class\r\n            if (e.target.classList.contains('number')) {\r\n                addNumAtScreen(e)\r\n            //add operator to screen\r\n            } else if (e.target.classList.contains('operator')) {\r\n                addOperatorAtScreen(e)\r\n            //dot adding\r\n            } else if(e.target.classList.contains('dot')) {\r\n                addDotAtScreen()\r\n            //or equal btn for fetch expression to php\r\n            } else {\r\n                equal()\r\n            }\r\n        })\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBzY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsY3VsYXRvcl9fc2NyZWVuJyksIC8vIHNjcmVlblxyXG4gICAgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24nKSwgLy8gYnV0dG9uc1xyXG4gICAgYnJvb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnJvb20nKSAvLyBicm9vbSBcclxuLy91c2VkIGluIGRvdCBmdW5jXHJcbmxldCBsYXN0T3BlcmF0b3IgPSBudWxsLFxyXG4gICAgcmVzdWx0U2NyZWVuID0gZmFsc2U7XHJcblxyXG4vL2NsZWFyIHNjcmVlbi4uLlxyXG5icm9vbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgIC8vLi4uYW5kIHNldCBkZWZhdWx0IHZhbHVlIDBcclxuICAgIHNjcmVlbi5pbm5lckhUTUwgPSAnMCdcclxuICAgIC8vbGFzdCBvcGVyYXRvciBjbGVhclxyXG4gICAgbGFzdE9wZXJhdG9yID0gbnVsbFxyXG4gICAgcmVzdWx0U2NyZWVuPWZhbHNlXHJcbn0pXHJcbi8vYWRkIG51bWJlciBhdCBzY3JlZW4gYXMgc3RyaW5nXHJcbmZ1bmN0aW9uIGFkZE51bUF0U2NyZWVuKGV2ZW50KSB7XHJcbiAgICAvL2lmIHNjcmVlbiBpcyBlbXB0eSBjaGFuZ2UgemVybyB0byBmaXJzdCBudW1iZXIuLi5cclxuICAgIGlmIChzY3JlZW4uaW5uZXJIVE1MID09PSAnMCcpIHtcclxuICAgICAgICBzY3JlZW4uaW5uZXJIVE1MID0gZXZlbnQudGFyZ2V0LmlubmVySFRNTFxyXG4gICAgfSBlbHNlIGlmIChyZXN1bHRTY3JlZW4pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdiaWwgcmVzdWx0JylcclxuICAgICAgICAvLy4uLmluIGNhc2Ugb2YgcmVzdWx0IG9uIGRpc3BsYXkgcmVwbGFjZSBpdCBieSBldmVudCBudW1iZXJcclxuICAgICAgICAvL2J1dCBpbiBjYXNlIG9mIGFkZGluZyBvcGVyYXRvciByZXN1bHQgc3RheSBvbiBzY3JlZW5cclxuICAgICAgICBzY3JlZW4uaW5uZXJIVE1MID0gZXZlbnQudGFyZ2V0LmlubmVySFRNTFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcmVzdWx0U2NyZWVuPWZhbHNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vanVzdCBjb25jYXRcclxuICAgICAgICBzY3JlZW4uaW5uZXJIVE1MICs9IGV2ZW50LnRhcmdldC5pbm5lckhUTUxcclxuICAgIH1cclxufVxyXG5cclxuLy9hZGQgb3BlcmF0b3JzIGF0IHNjcmVlblxyXG5mdW5jdGlvbiBhZGRPcGVyYXRvckF0U2NyZWVuKGV2ZW50KSB7XHJcbiAgICByZXN1bHRTY3JlZW49ZmFsc2VcclxuICAgIGlmIChzY3JlZW4uaW5uZXJIVE1MW3NjcmVlbi5pbm5lckhUTUwubGVuZ3RoLTFdICE9IGxhc3RPcGVyYXRvcikge1xyXG4gICAgICAgIC8vYWRkIG9wZXJhdG9yIHRvIHNjcmVlblxyXG4gICAgICAgIHNjcmVlbi5pbm5lckhUTUwgKz0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgndmFsdWUnKVxyXG4gICAgICAgIC8vYW5kIHNldCBpdCBpbiBsYXN0IG9wZXJhdG9yIHZhcmlhYmxlICh1c2VkIGluIGFkZCBkZG90IGZ1bmMpXHJcbiAgICAgICAgbGFzdE9wZXJhdG9yPWV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy9pZiBuZWVkZWQgdG8gY2hhbmdlIG9wZXJhdG9yXHJcbiAgICAgICAgLy9zbGljZSBleHByZXNzaW9uIHdpZGhvdXQgbGFzdCBvcGVyYXRvclxyXG4gICAgICAgIHNjcmVlbi5pbm5lckhUTUwgPSBzY3JlZW4uaW5uZXJIVE1MLnNsaWNlKDAsc2NyZWVuLmlubmVySFRNTC5sZW5ndGgtMSlcclxuICAgICAgICBjb25zb2xlLmxvZyhzY3JlZW4uaW5uZXJIVE1MKVxyXG4gICAgICAgIC8vc2V0IG5ldyBsYXN0IG9wZXJhdG9yLi4uXHJcbiAgICAgICAgbGFzdE9wZXJhdG9yPWV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJylcclxuICAgICAgICBjb25zb2xlLmxvZyhsYXN0T3BlcmF0b3IpXHJcbiAgICAgICAgLy8uLi5hbmQgYWRkIGl0IGF0IHNjcmVlbiBleHByZXNzaW9uXHJcbiAgICAgICAgc2NyZWVuLmlubmVySFRNTCs9bGFzdE9wZXJhdG9yXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vYWRkIGRvdCBhdCBzY3JlZW5cclxuZnVuY3Rpb24gYWRkRG90QXRTY3JlZW4oKSB7XHJcbiAgICAvL2luIGNhc2Ugb2YgYWRkIGRvdCB3aWR0aCByZXN1bHQgYXQgc2NyZWVuIHJlc2V0IHJlc3VsdCB2YXJcclxuICAgIHJlc3VsdFNjcmVlbj1mYWxzZVxyXG4gICAgLy9pZiBkb3QgaXMgZmlyc3Qgc2V0IDAuXHJcbiAgICBpZiAoc2NyZWVuLmlubmVySFRNTCA9PSAnMCcpIHNjcmVlbi5pbm5lckhUTUwgPSAnMC4nXHJcbiAgICAvL2ZvciBhbnkgY2FzZS4uLlxyXG4gICAgbGV0IGN1cnJlbnROdW1cclxuICAgIC8vaW4gY2FzZSBubyB1c2VkIG9wZXJhdG9yIGFzIHlldFxyXG4gICAgaWYgKCFsYXN0T3BlcmF0b3IpIHtcclxuICAgICAgICBjdXJyZW50TnVtID0gc2NyZWVuLmlubmVySFRNTFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvL29yIGdldCBpbmRleCBvZiBsYXN0IG9wZXJhdG9yIGluIHNjcmVlbiBudW1iZXJcclxuICAgICAgICBsZXQgbGFzdE9wZXJhdG9ySW5kZXggPSBzY3JlZW4uaW5uZXJIVE1MLmxhc3RJbmRleE9mKGxhc3RPcGVyYXRvcilcclxuICAgICAgICAvL2dldCBjdXJyZW50IG51bWJlciBhZnRlciBsYXN0IG9wZXJhdG9yXHJcbiAgICAgICAgY3VycmVudE51bSA9IHNjcmVlbi5pbm5lckhUTUwuc2xpY2UobGFzdE9wZXJhdG9ySW5kZXgrMSxzY3JlZW4uaW5uZXJIVE1MLmxlbmd0aClcclxuICAgIH1cclxuICAgIC8vYW5kIGNoZWNrIGF2YWlsYWJpbGl0eSBvZiBkb3QgaW4gaXRcclxuICAgIGlmIChjdXJyZW50TnVtICYmIGN1cnJlbnROdW0uaW5kZXhPZignLicpPT0tMSkge1xyXG4gICAgICAgIC8vYWRkaW5nIGlmIG51bWJlciBkb2VzIG5vdCBoYXZlIGEgZG90XHJcbiAgICAgICAgc2NyZWVuLmlubmVySFRNTCs9Jy4nXHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnROdW0uaW5kZXhPZignLicpPT0tMSkge1xyXG4gICAgICAgIC8vYWRkaW5nIDAuIGlmIGl0IHN0YXJ0IG9yIG5ldyBjdXJyZW50IG5lbWJlclxyXG4gICAgICAgIHNjcmVlbi5pbm5lckhUTUwrPScwLidcclxuICAgIH0gLy9pbiBvdGhlciBjYXNlcywgdGhlIGRvdCBpcyBub3QgcHV0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVxdWFsKCkge1xyXG4gICAgLy90YWtlIGRhdGEgZnJvbSBzY3JlZW4gYW5kIG1ha2UgcG9zdCByZXF1ZXN0IHRvIHBocFxyXG4gICAgLy9waHAgbWFrZSBjYWxjdWxhdGUgYW5kIHJldHVybiByZXN1bHRcclxuICAgIC8vc2V0IGRhdGEgdmFyaWFibGVcclxuICAgIGxldCBkYXRhID0gc2NyZWVuLmlubmVySFRNTDtcclxuXHJcbiAgICAvL3Byb3h5IGZvciBjb3JwcyBwb2xpY3lcclxuICAgIGxldCBwcm94eVVybCA9ICdodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS8nO1xyXG4gICAgLy9waHAgdXJsXHJcbiAgICBsZXQgdXJsID0gJ2h0dHA6Ly9oZXlsb29rYXR0aGlzLndlYnNpdGUvJ1xyXG4gICAgZmV0Y2gocHJveHlVcmwrdXJsLCB7XHJcbiAgICAgICAgLy9zZXQgbWV0aG9kXHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgLy90eXBlIG9mIHNlbmQgY29udGVudFxyXG4gICAgICAgIGhlYWRlcnM6IHsnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcclxuICAgICAgICAvL3NldCBkYXRhXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgICAgICAvL2NvbnZlcnQgZGF0YSBmcm9tIGpzb25cclxuICAgIH0pLnRoZW4ocmVzPT5yZXMuanNvbigpKVxyXG4gICAgLy9hc3NpZ21lbnQgcmVzdWx0IHRvIHJlc2lsdCBzY3JlZW5cclxuICAgIC50aGVuKChyZXMpPT5zY3JlZW4uaW5uZXJIVE1MPXJlcylcclxuICAgIC50aGVuKCgpPT5yZXN1bHRTY3JlZW4gPSB0cnVlKVxyXG4gICAgLy9jYXRjaCBhbmQgbG9nIGVycm9yc1xyXG4gICAgLmNhdGNoKChlcnIpPT5jb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgLy9hbmQgY2xlYXIgc2NyZWVuLi4uXHJcbiAgICAvL3NjcmVlbi5pbm5lckhUTUwgPSAnMCdcclxuICAgIC8vYW5kIGxhc3Qgb3BlcmF0b3IgdG9vXHJcbiAgICBsYXN0T3BlcmF0b3I9bnVsbFxyXG59XHJcbi8vYWRkIGxpc3RlbmVyIHRvIGV2ZXJ5IGJ0blxyXG4vL2NoZWNrIGNsYXNzIGFuZCBzZWxlY3RpbmcgdGhlIGFwcHJvcHJpYXRlIGZ1bmN0aW9uXHJcbmZvcihsZXQgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgYnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IHtcclxuICAgICAgICAgICAgLy9jaGFuZ2VTaXplKHNjcmVlbi5pbm5lckhUTUwubGVuZ3RoKVxyXG4gICAgICAgICAgICAvL2ZvciBidG4gaGFzIG51bWJlciBjbGFzc1xyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdudW1iZXInKSkge1xyXG4gICAgICAgICAgICAgICAgYWRkTnVtQXRTY3JlZW4oZSlcclxuICAgICAgICAgICAgLy9hZGQgb3BlcmF0b3IgdG8gc2NyZWVuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVyYXRvcicpKSB7XHJcbiAgICAgICAgICAgICAgICBhZGRPcGVyYXRvckF0U2NyZWVuKGUpXHJcbiAgICAgICAgICAgIC8vZG90IGFkZGluZ1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkb3QnKSkge1xyXG4gICAgICAgICAgICAgICAgYWRkRG90QXRTY3JlZW4oKVxyXG4gICAgICAgICAgICAvL29yIGVxdWFsIGJ0biBmb3IgZmV0Y2ggZXhwcmVzc2lvbiB0byBwaHBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVxdWFsKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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