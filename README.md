# CodeMasters
CodeMasters i s game based of Pokemon and Danger Crew, the purpose of the game is to defeat all other developers on the field in battles which will reduce their HP, inturn frying their laptop.

## Location
The website to play CodeMasters is:

https://codebypaul.github.io/CodeMasters/


## Support
For support or questions about the game please send a message through https://pwprojectworks.com 

## Code Citation
Code used:
https://codepen.io/punkydrewster713/pen/WNrXPrb
Author: Drew Conley


### HTML Elements

###### Reset game div
This div opens to give the ooption to reset or continue game
```HTML
<div class="reset-game">
            <p class="reset-text">Would you like to start a new game?</p>
            <div class="mx-3 py-2">
                <a href="https://codebypaul.github.io/CodeMasters/" class="btn bg-light reset-option" id="start-new-game">Yes</a>
                <a class="btn bg-light reset-option" id="return-to-game">No</a>
            </div>
        </div>
```
###### Enter your name to begin
```HTML
<div class="game-screen" id="start-screen">
            <div id="game-art">
                <h1 class="game-name">CodeMasters</h1>
            </div>

            <input type="text" id="your-name">
            <button id="enter-your-name">Begin Game</button>
        </div>
```

### CSS Styling

###### Root
Sets standard pixel size, and grid size for player movement on screen
```CSS
:root{
    --lightGrey: rgba(100,100,100,1);
    --pixel-size: 2px;
    --grid-cell: calc(var(--pixel-size) * 16)
}
```

###### Enemy pictures
Class for each colored character in game
```CSS
.enemy_red{
    position: absolute;
    background: url('images/enemy_red.png');
    background-size: 100%;
    width: calc( var(--grid-cell)* 16 );
    height: calc( var(--grid-cell)* 16 );
}
.enemy_blue{
    position: absolute;
    background: url('images/enemy_blue.png');
    background-size: 100%;
    width: calc( var(--grid-cell)* 16 );
    height: calc( var(--grid-cell)* 16 );
}
.enemy_green{
    position: absolute;
    background: url('images/enemy_green.png');
    background-size: 100%;
    width: calc( var(--grid-cell)* 16 );
    height: calc( var(--grid-cell)* 16 );
}
.enemy_purple{
    position: absolute;
    background: url('images/enemy_purple.png');
    background-size: 100%;
    width: calc( var(--grid-cell)* 16 );
    height: calc( var(--grid-cell)* 16 );
}
```
###### Your player in in battle
Displays your player in battle from the rear using the same sprite sheet during the main part of the game
```CSS
.battle-player {
    width: calc( var(--grid-cell)* 4 );
    height: calc( var(--grid-cell)* 4 );
    position: absolute;
    overflow:hidden;
    bottom: 35%;
    left: 50%;
    transform: translateX(-50%);
}
.player_sprite{
    background: url('images/main_codemaster.png')no-repeat no-repeat;
    position: absolute;
    background-size: 100%;
    width: calc( var(--grid-cell)* 16 );
    height: calc( var(--grid-cell)* 16 );

    top: -200%;
}
```
###### Main character
Displays only the frame we want to see
```CSS
.character {
    width: calc( var(--grid-cell)* 2 );
    height: calc( var(--grid-cell)* 2 );
    position: absolute;
    overflow:hidden;

}
.character_spritesheet {
    position: absolute;
    background: url("images/main_codemaster.png") no-repeat no-repeat;
    background-size: 100%;
    width: calc( var(--grid-cell)* 8 );
    height: calc( var(--grid-cell)* 8 );
}
```

###### Facing
Changes the sprite sheets current position to display a facing directions.
```CSS
.character[facing="right"] .character_spritesheet {
background-position-y: calc( var(--pixel-size) * -32 );
}
.character[facing="up"] .character_spritesheet {
background-position-y: calc( var(--pixel-size) * -64 );
}
.character[facing="left"] .character_spritesheet {
background-position-y: calc( var(--pixel-size) * -96 );
}
.character[walking="true"] .character_spritesheet {
animation: walkAnimation 0.6s steps(4) infinite; 
}
```
###### Enemies
Displays all enemies to the screen
```CSS
.enemy_red_spritesheet{
    position: absolute;
    background: url("images/enemy_red.png") no-repeat no-repeat;
    background-size: 100%;
    width: calc( var(--grid-cell)* 8 );
    height: calc( var(--grid-cell)* 8 );
}
#enemy-red{
    position: absolute;
    top: 30%;
    left: 4.5%;
}
#enemy_blue_spritesheet{
    position: absolute;
    background: url("images/enemy_blue.png") no-repeat no-repeat;
    background-size: 100%;
    width: calc( var(--grid-cell)* 8 );
    height: calc( var(--grid-cell)* 8 );
}
#enemy-blue{
    position: absolute;
    top: 60%;
    left: 19.5%;
}
#enemy_green_spritesheet{
    position: absolute;
    background: url("images/enemy_green.png") no-repeat no-repeat;
    background-size: 100%;
    width: calc( var(--grid-cell)* 8 );
    height: calc( var(--grid-cell)* 8 );
}
#enemy-green{
    position: absolute;
    top: 20%;
    left: 73.5%;
}
#enemy_purple_spritesheet{
    position: absolute;
    background: url("images/enemy_purple.png") no-repeat no-repeat;
    background-size: 100%;
    width: calc( var(--grid-cell)* 8 );
    height: calc( var(--grid-cell)* 8 );
}
#enemy-purple{
    position: absolute;
    top: 70%;
    left: 65.75%;
}
```

### JavaScript

###### Player can regenerate their health during battle
Using the fix kit button, the player can return 25 health points back to their overall health during battle.
```JavaScript
const restoreHealth = (Player) =>{
    fixKit.addEventListener('click',()=>{
        // Player.health += 25
        Player.health = Player.health + 25
        playerHealthBar.style.width = `${Player.health}%`
    })
}
```

###### Reset the battle state
After completion or flee from battle all health values will be reset.
```Javascript
const resetHealth =(Player,enemyHealth)=>{
    setTimeout(()=>{
        enemyHealth = 100
        Player.health = 100
        enemyHealthBar.style.width = `${enemyHealth}%`
        playerHealthBar.style.width = `${Player.health}%`
        return enemyHealth, Player
    },5000)
}
```

###### Attacks
On click of an attack, a corresponding value will be take from the enemies health, before player can attack a second time the enemy will launch their attack. Every use of an attack the gaem checks for both players health status.
```JavaScript
const attackButtons = (Player,enemyHealth) =>{
    for (let i = 0; i < attacks.length; i++){
        attacks[i].addEventListener('click',()=>{
            enemyHealth = enemyHealth - attackMoves[i]
            if (Player.health <= 0){
                Player.health = 0
                setTimeout(()=>{
                    Player.health = 100
                    enemyHealth = 100
                },3000)
            }
            if (enemyHealth <= 0){
                enemyHealth = 0
                setTimeout(()=>{
                    Player.health = 100
                    enemyHealth = 100
                },3000)
            }
            // console.log(`enemy health is ${enemyHealth}`);
            // console.log(`player health is ${Player.health}`);
            battleInfo.textContent = `Player uses ${attackNames[i]} it deals ${attackMoves[i]} damage`
            setTimeout(()=>{
                battleInfo.textContent = ''
            },2500)
            enemyHealthBar.style.width = `${enemyHealth}%`
            checkHealth(enemyHealth,Player)
            attacks[0].disabled = true
            attacks[1].disabled = true
            attacks[2].disabled = true
            attacks[3].disabled = true

            setTimeout(()=>{
                attacks[0].disabled = false
                attacks[1].disabled = false
                attacks[2].disabled = false
                attacks[3].disabled = false
            },3500)
            enemyAttack(Player)
            
        })
        
    }
}
```

###### Enemy attack
To create a very basic AI that will decide and launch an attack, a random number is chosen from 0-3 which corresponds with an attack in the attacks array.
```JavaSCript
const enemyAttack = (Player) =>{
    let enemyChoice = Math.floor(Math.random() * 4)
    Player.health = Player.health - attackMoves[enemyChoice]
    setTimeout(()=>{
        playerHealthBar.style.width = `${Player.health}%`
        battleInfo.textContent = `Enemy uses ${attackNames[enemyChoice]} it deals ${attackMoves[enemyChoice]} damage`
    },3000)
}
```
###### Collision detection
Detects collision with each character, then sets their name and picture in the battle screen.
```JavaScript
const collideRed = () =>{
    if ((x > -4 && x < 24)&&(y > 30 && y < 66)){
        enemyName.textContent = 'Red'
        enemySprite.className = ''
        enemySprite.classList.add('enemy_red')
        battleBegin()
        setTimeout(()=>{
            x = 9
            y = 66
            character.setAttribute('facing','up')
        },500)
    }
    
}
const collideGreen = () =>{
    if ((x > 140 && x < 168)&&(y < 50)){
        enemyName.textContent = 'Green'
        enemySprite.className = ''
        enemySprite.classList.add('enemy_green')
        battleBegin()
        setTimeout(()=>{
            x = 154
            y = 50
            character.setAttribute('facing','up')
        },500)
    }
    
}
const collideBlue = () =>{
    if ((x > 27 && x < 55)&&(y > 78 && y < 111)){
        enemyName.textContent = 'Blue'
        enemySprite.className = ''
        enemySprite.classList.add('enemy_blue')
        battleBegin()
        setTimeout(()=>{
            x = 41
            y = 112
            character.setAttribute('facing','up')
        },500)
    }
}
const collidePurple = () =>{
    if ((x > 124 && x < 153)&&(y > 95)){
        enemyName.textContent = 'Purple'
        enemySprite.className = ''
        enemySprite.classList.add('enemy_purple')
        battleBegin()
        setTimeout(()=>{
            x = 138
            y = 94
            character.setAttribute('facing','down')
        },500)
    }
}
```

###### Battle Logic
Displays the health values of the players, call on the attacks for use, health restoration ability and allows fleeing from battle.
```JavaScript
const battleLogic = (Player,enemyHealth) =>{
    enemyHealthBar.style.width = `${enemyHealth}%`
    playerHealthBar.style.width = `${Player.health}%`

    leaveBattle(Player,enemyHealth)
    attackButtons(Player,enemyHealth)
    restoreHealth(Player)
    
    
}
```
###### Game initialization
Begins game to, creates the main character, and initializes the enemy's health value.
```JavaScript
const game = () =>{
    let enemyHealth = 100
    const mainCharacter = new Player
    beginGame(mainCharacter)
    
    battleLogic(mainCharacter,enemyHealth)
    // mapMovement(playarea)
        
        
}
```