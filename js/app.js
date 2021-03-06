// Gem class definition and prototype methods
var Gem = function(x, y) {
    this.sprite = 'images/gem-green.png';
    this.x = x;
    this.y = y;
};
Gem.prototype.randX = function() {
    return Math.floor(Math.random() * 485 + 0);
};
Gem.prototype.randY = function() {
    return Math.floor(Math.random() * 250 + 70);
};
Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y, 70, 100);
};


// Enemies class definition and prototype methods
var Enemy = function(x, y) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = Math.floor(Math.random() * (80)) + 40;
};

Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Random coordinates for x and y
Enemy.prototype.randX = function() {
    return Math.floor(Math.random() * 505);
};

Enemy.prototype.randY = function() {
    var boardPosition = [60, 142, 229];
    this.y = boardPosition[Math.floor(Math.random() * ((2 - 0) + 1)) + 0];
    return this.y;
};



//Player class definition and prototype methods
var Player = function(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
}

Player.prototype.reset = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 201;
    this.y = 405;
    gems = 0;
    document.addEventListener('keyup', input);
};

Player.prototype.update = function(dt) {
    Player.prototype.handleInput() * dt;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//Handle keyboard input to move player/pause game
Player.prototype.handleInput = function(input) {
    if (PAUSE === false) {
        switch (input) {
            case 'left':
                if (this.x > 0)
                    this.x -= 102;
                break;

            case 'right':
                if (this.x < 405)
                    this.x += 102;
                break;

            case 'down':
                if (this.y < 405)
                    this.y += 83;
                break;

            case 'up':
                if (this.y > 60) {
                    this.y -= 83;
                }
                break;

            case 'q':
                player.reset();
                break;


            case 'p':
                PAUSE = true;
                break;

            default:
                return;
        }
    } else if (PAUSE === true) {
        switch (input) {
            case 'p':
                PAUSE = false;
                break;

            default:
                return;
        }
    }
    // Player wins!
    if (player.y === -10) {
        setTimeout(function() {
            winner = true;
        }, 500);
    }
};


//Instantiation of game objects

var allEnemies = [new Enemy(Enemy.prototype.randX(), Enemy.prototype.randY()), new Enemy(Enemy.prototype.randX(), Enemy.prototype.randY()), new Enemy(Enemy.prototype.randX(), Enemy.prototype.randY())];

currentGem = new Gem(Gem.prototype.randX(), Gem.prototype.randY());
player = new Player(201, 405);

var input = function(e) {
    "use strict";
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        80: 'p',
        81: 'q',
        68: 'd'
    };
    player.handleInput(allowedKeys[e.keyCode]);
}

document.addEventListener('keyup', input);