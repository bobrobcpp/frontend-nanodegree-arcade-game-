
var Gem = function(x,y){
    this.sprite = 'images/gem-green.png';
    this.x = x;
    this.y = y;
};
Gem.prototype.randX= function(){
        return Math.floor(Math.random() * 485 + 0);
};
Gem.prototype.randY= function(){
        return Math.floor(Math.random() * 250+70);
};
Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y,70,100);
};


// Enemies our player must avoid
var Enemy = function(x,y) {
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


//Random coordinate
Enemy.prototype.randX = function(){
    return Math.floor(Math.random() * 505);
};

Enemy.prototype.randY= function(){
    var boardPosition = [60,142,229];
    this.y = boardPosition[Math.floor(Math.random() * ((2 - 0) + 1)) + 0];
    return this.y;
};


var Player = function(x,y){
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y= y;
}

Player.prototype.reset = function(){
    this.sprite = 'images/char-boy.png';
    this.x = 201;
    this.y= 405;
    gems= 0;
};

Player.prototype.update = function(dt) {
    Player.prototype.handleInput() * dt;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
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

    case 'p': if(PAUSE===false){
        PAUSE= true;
    }
        else if(PAUSE===true){
        PAUSE = false;
        }
    break;

    default: return;
    break;
    }

    // Player wins!
    if(player.y ===-10){
        setTimeout(function () {
            winner = true;
        }, 500);
    }
};

//review
// Player.prototype.constructor = Player;
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


var allEnemies= [new Enemy(Enemy.prototype.randX(),Enemy.prototype.randY()),new Enemy(Enemy.prototype.randX(),Enemy.prototype.randY()),new Enemy(Enemy.prototype.randX(),Enemy.prototype.randY())];

currentGem = new Gem(Gem.prototype.randX(),Gem.prototype.randY());
player = new Player(201,405);

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
