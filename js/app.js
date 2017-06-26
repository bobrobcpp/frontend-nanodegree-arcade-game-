    var boardPosition = [60,142,229];
    var win = false;


// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = Math.floor(Math.random() * (80))+40;


};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
            this.x+=this.speed * dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.enemyX = function(){
    return Math.floor(Math.random() * 505);
};

Enemy.prototype.enemyY= function(){
    this.y = boardPosition[Math.floor(Math.random() * ((2 - 0) + 1)) + 0];
    return this.y;
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y){
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y= y;
}

Player.prototype.reset = function(){
    this.x = 201;
    this.y= 405;
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    Player.prototype.handleInput() * dt;
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    if (win ===true){
        ctx.font = '84px serif';
        ctx.fillStyle = 'red';
        ctx.fillText("VICTORY!",60,300);
        setTimeout(function () {
        win = false;
        return;
        }, 1000);

    }
};

Player.prototype.handleInput = function(input){
    switch(input){
    case 'left': if(this.x > 0)
    this.x -=102;
    break;

    case 'right': if(this.x  < 405)
    this.x +=102;
    break;

    case 'down': if(this.y < 405)
    this.y +=83;
    break;

    case 'up': if(this.y > 60)
        {
            this.y -=83;
        }
        break;

    case 'q': player.reset();
    break;

    case 'p': if(go===true){
        go = false;
    }
        else if(go===false){
        go ===true;
        }
    break;

    default: return;
    break;
    }

    // Player wins!
    if(player.y ===-10){
        setTimeout(function () {
            player.reset();
            win = true;
        }, 500);
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


var allEnemies= [new Enemy(Enemy.prototype.enemyX(),Enemy.prototype.enemyY()),new Enemy(Enemy.prototype.enemyX(),Enemy.prototype.enemyY()),new Enemy(Enemy.prototype.enemyX(),Enemy.prototype.enemyY())];


player1 = new Player(201,405);
var player  = player1;

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
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
});
