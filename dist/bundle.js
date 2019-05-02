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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("myCanvas");
  canvas.width = 1200;
  canvas.height = 500;
  const ctx = canvas.getContext("2d");

  const game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
  game.startGame();
});


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gamearea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamearea */ "./src/gamearea.js");

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.gamearea = new _gamearea__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
  }
  //get audio
  //   var audio = document.getElementById("audio");
  //   var audio1 = document.getElementById("audio1")
  startGame() {
    this.gamearea.start();
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./src/gamearea.js":
/*!*************************!*\
  !*** ./src/gamearea.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _obstacles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obstacles */ "./src/obstacles.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");



class Gamearea {
  constructor(ctx) {
    // this.canvas = document.getElementById("myCanvas");
    //start is intial actions
    this.context = ctx;
    this.minGap = 200;
    this.maxGap = 500;
    //add Array of obs
    this.myObstacles = [];
    this.gap = this.randGap();
    this.start = this.start.bind(this);
    this.updateGameArea = this.updateGameArea.bind(this);
    this.jump = this.jump.bind(this);
    // this.render = this.render.bind(this);
  }
  start() {
    this.height = 500;
    this.width = 1200;

    // this.context = this.canvas.getContext("2d");
    this.player = new _player__WEBPACK_IMPORTED_MODULE_1__["default"](this.context);
    //frame counts how many times 'update gamearea' is ran
    this.frame = 0;
    //add score count
    // this.score = 0;

    //give inital value of score
    // scoreText.update("Score: 0");
    //execute "updateGameArea" every 5 ms
    this.interval = setInterval(this.updateGameArea, 5);
    // this.render();
    //listener to handle the event of pressing a key in the keyboard
  }
  everyinterval(n) {
    //if frame is a multiple of 'n' we send true
    if (this.frame % n === 0) return true;
    return false;
  }
  updateGameArea() {
    //check for a crash
    for (let i = 0; i < this.myObstacles.length; i++) {
      if (this.player.crashWidth(this.myObstacles[i])) {
        this.stop();
        //exit updateGameArea
        return;
      }
    }
    //clear game area before each new drawings
    this.clear();

    //add more obs
    //After every 150times running 'updateGameArea'
    // this.player.draw();
    if (this.everyinterval(this.gap)) {
      this.myObstacles.push(new _obstacles__WEBPACK_IMPORTED_MODULE_0__["default"](this));
      //update gap after each bew added obs
      this.gap = this.randGap();
      //reset frame value
      this.frame = 0;
    }
    for (let i = 0; i < this.myObstacles.length; i++) {
      //update the obs (x) every time
      this.myObstacles[i].x -= 1;
      this.myObstacles[i].draw();
    }
    this.player.update();
    this.frame += 1;
    //update score
    // this.score += 0.01;
    // scoreText.update("Score: " + Math.floor(gamearea.score));
  }

  jump(e) {
    if (e.code === "Space") {
      e.preventDefault();
      this.player.toggleJump();
    }
  }

  //define everyinterval
  clear() {
    this.context.clearRect(0, 0, this.width, this.height);
    // this.player.draw();
  }
  stop() {
    clearInterval(this.interval);
    alert("Game Over");
    // audio1.play();
  }
  randGap() {
    return Math.floor(
      this.minGap + Math.random() * (this.maxGap - this.minGap + 1)
    );
  }

  // render() {
  //   // debugger;
  //   this.player.draw();
  //   window.requestAnimationFrame(this.render);
  // }
}
/* harmony default export */ __webpack_exports__["default"] = (Gamearea);


/***/ }),

/***/ "./src/obstacles.js":
/*!**************************!*\
  !*** ./src/obstacles.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Obstacles {
  constructor(gamearea) {
    this.gamearea = gamearea;
    this.minHeight = 20;
    this.maxHeight = 100;
    this.minWidth = 10;
    this.maxWidth = 20;
    this.colors = [
      "black",
      "red",
      "green",
      "yellow",
      "gray",
      "pink",
      "purple",
      "chocolate"
    ];
    this.height = Math.floor(
      this.minHeight + Math.random() * (this.maxHeight - this.minHeight + 1)
    );
    this.width = Math.floor(
      this.minWidth + Math.random() * (this.maxWidth - this.minWidth + 1)
    );
    this.x = 1200;
    this.y = this.gamearea.height - this.height;
    //generate random index
    this.index = Math.floor(Math.random() * this.colors.length);
    //now we get the random color
    this.color = this.colors[this.index];
    //draw the obstacles
  }

  draw() {
    // this.ctx.clearRect(this.x, this.y, this.width, this.height);
    this.gamearea.context.fillStyle = this.color;
    this.gamearea.context.fillRect(this.x, this.y, this.width, this.height);
  }
}
//drawing obstacles with random height, width, and coordinates
//obs height and width is random value btw minHeight and maxHeight/ minWidth and maxWidth
//gap btw 2 obs are random value btw minGap and maxGap

/* harmony default export */ __webpack_exports__["default"] = (Obstacles);


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Player {
  constructor(context) {
    this.ctx = context;
    this.x = 0;
    this.y = 441;
    this.jumping = false;
    this.runSprite = new Image();
    this.runSprite.src = "./assets/images/run.png";
    this.frameCount = 19;
    this.runWidth = 1425 / this.frameCount;
    this.runHeight = 59;
    this.jumpSprite = new Image();
    this.jumpSprite.src = "./assets/images/jump.png";
    this.jumpWidth = 48 / this.frameCount;
    this.jumpHeight = 80;
    this.vel = 0;
    this.currentFrame = 0;
    //make it jump
    this.draw = this.draw.bind(this);
    this.startAnimating();
    this.update = this.update.bind(this);
    document.addEventListener("keydown", this.jump.bind(this));
  }

  //  let srcX;
  // let xrcY;

  jump() {
    if (this.jumping === false) {
      this.jumping = true;
      const id = setInterval(() => {
        if (this.y >= 280) {
          this.y -= 1;
        } else {
          const id2 = setInterval(() => {
            if (this.y <= 441) {
              this.y += 1;
            } else {
              clearInterval(id2);
              this.jumping = false;
            }
          });
          clearInterval(id);
        }
      }, 1);

      // debugger;
      // const gravity = 0.25;
      // const bottomY = 280;
      // if (!this.jumping) {
      //   if (this.y <= bottomY) {
      //     this.vel += gravity;
      //     this.y += this.vel;
      //   } else {
      //     this.y = bottomY;
      //     this.vel = 0;
      //     this.jumping = false;
      //   }
      // }
    }
  }

  toggleJump() {
    if (!this.jumping) {
      this.jumping = true;
      this.vel = -8;
    }
  }
  update() {
    this.currentFrame = ++this.currentFrame % this.frameCount;
    this.srcX = this.currentFrame * this.runWidth;
    this.srcY = 0;
  }

  draw() {
    const now = Date.now();
    const elapsed = now - this.then;

    if (elapsed > this.fpsInterval) {
      this.update();
      this.ctx.clearRect(this.x, 0, this.runWidth, 1000);
      this.then = now - (elapsed % this.fpsInterval);
      this.ctx.drawImage(
        this.runSprite,
        this.srcX,
        this.srcY,
        this.runWidth,
        this.runHeight,
        this.x,
        this.y,
        this.runWidth,
        this.runHeight
      );
    }
    window.requestAnimationFrame(this.draw);
  }

  startAnimating() {
    this.fpsInterval = 1000 / 10;
    this.then = Date.now();
    this.startTime = this.then;
    this.draw();
  }

  //crash happens when the coordinates of the player and the obs overlap

  crashWidth(obs) {
    if (
      this.x + 30 > obs.x &&
      this.x < obs.x + obs.width &&
      this.y + 30 > obs.y
    ) {
      return true;
    }
    return false;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Player);

// class dk {
//   constructor(ctx) {
//     this.ctx = ctx;
//     this.image = new Image();
//     this.image.src = "../assets/images/dkrun.png";
//     this.sprite = new Sprite(this.image, sx, sy, sw, sh, dx, dy, dw, dh);
//     // remember to update your dy as your object moves up and down
//     this.frameTimer = 0;
//     this.animationSpeed = 30;
//     // frameTimer and animationSpeed controls frames per second
//     this.currentFrame = 0;
//   }

//   update(dy) {}

//   draw() {
//     this.frameTimer++;
//     // increments every time you run requestAnimationFrame
//     if (this.frameTimer % this.animationSpeed === 0) {
//       this.currentFrame = (this.currentFrame + 1) % 20;
//     }
//     // will go to next sprite when true

//     this.ctx.drawImage(
//       this.image,
//       sx * this.currentFrame,
//       sy,
//       sw,
//       sh,
//       dx,
//       dy,
//       dw,
//       dh
//     );
//   }
// }


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map