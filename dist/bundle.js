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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// var ballRadius = 10;

// var x = canvas.width / 2;
// var y = canvas.height - 20;
// // add value to x and y after every frame
// var dx = 2;
// var dy = -2;

// var paddleHeight = 10;
// var paddleWidth = 75;
// var paddleX = (canvas.width - paddleWidth) / 2;

// var rightPressed = false;
// var leftPressed = false;

// var brickRowCount = 3;
// var brickColumnCount = 5;
// var brickWidth = 75;
// var brickHeight = 20;
// var brickPadding = 10;
// var brickOffsetTop = 30;
// var brickOffsetLeft = 30;

// var score = 0;

// var bricks = [];
// for (var c = 0; c < brickColumnCount; c++) {
//   bricks[c] = [];
//   for (var r = 0; r < brickRowCount; r++) {
//     bricks[c][r] = { x: 0, y: 0, status: 1 };
//   }
// }

// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);
// document.addEventListener("mousemove", mouseMoveHandler, false);

// function keyDownHandler(e) {
//   if (e.key == "Right" || e.key == "ArrowRight") {
//     rightPressed = true;
//   } else if (e.key == "Left" || e.key == "ArrowLeft") {
//     leftPressed = true;
//   }
// }

// function keyUpHandler(e) {
//   if (e.key == "Right" || e.key == "ArrowRight") {
//     rightPressed = false;
//   } else if (e.key == "Left" || e.key == "ArrowLeft") {
//     leftPressed = false;
//   }
// }

// function mouseMoveHandler(e) {
//   var relativeX = e.clientX - canvas.offsetLeft;
//   if (relativeX > 0 && relativeX < canvas.width) {
//     paddleX = relativeX - paddleWidth / 2;
//   }
// }

// function collisionDetection() {
//   for (var c = 0; c < brickColumnCount; c++) {
//     for (var r = 0; r < brickRowCount; r++) {
//       var b = bricks[c][r];
//       if (b.status == 1) {
//         if (
//           x > b.x &&
//           x < b.x + brickWidth &&
//           y > b.y &&
//           y < b.y + brickHeight
//         ) {
//           dy = -dy;
//           b.status = 0;
//           score++;
//           if (score == brickRowCount * brickColumnCount) {
//             alert("YOU WIN, CONGRATULATIONS!");
//             document.location.reload();
//             //   clearInterval(interval);
//           }
//         }
//       }
//     }
//   }
// }

// function drawBall() {
//   ctx.beginPath();
//   ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
//   ctx.fillStyle = "#0095DD";
//   ctx.fill();
//   ctx.closePath();
// }

// function drawPaddle() {
//   ctx.beginPath();
//   ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
//   ctx.fillStyle = "#0095DD";
//   ctx.fill();
//   ctx.closePath();
// }
// function drawBricks() {
//   for (var c = 0; c < brickColumnCount; c++) {
//     for (var r = 0; r < brickRowCount; r++) {
//       if (bricks[c][r].status == 1) {
//         var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
//         var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
//         bricks[c][r].x = brickX;
//         bricks[c][r].y = brickY;
//         ctx.beginPath();
//         ctx.rect(brickX, brickY, brickWidth, brickHeight);
//         ctx.fillStyle = "#0095DD";
//         ctx.fill();
//         ctx.closePath();
//       }
//     }
//   }
// }

// function drawScore() {
//   ctx.font = "16px Arial";
//   ctx.fillStyle = "#0095DD";
//   ctx.fillText("Score: " + score, 8, 20);
// }

// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawBricks();
//   drawBall();
//   drawPaddle();
//   collisionDetection();
//   drawScore();

//   if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
//     dx = -dx;
//   }

//   if (y + dy < ballRadius) {
//     dy = -dy;
//   } else if (y + dy > canvas.height - ballRadius) {
//     if (x > paddleX && x < paddleX + paddleWidth) {
//       dy = -dy;
//     } else {
//       alert("GAME OVER");
//       document.location.reload();
//       // clearInterval(interval); //needed from Chrome to end game
//     }
//   }

//   if (rightPressed && paddleX < canvas.width - paddleWidth) {
//     paddleX += 7;
//   } else if (leftPressed && paddleX > 0) {
//     paddleX -= 7;
//   }

//   x += dx;
//   y += dy;
//   //   requestAnimationFrame(draw);
// }

// //   setInterval(draw, 7);
// //   const interval = setInterval(draw, 10);
// draw();

function startGame() {}

const gamearea = {};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map