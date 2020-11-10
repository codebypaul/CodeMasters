const body = document.querySelector('body')
//game screens
const startScreen = document.querySelector('#start-screen')
const battleScreen = document.querySelector('#battle-screen')
const mainGame = document.querySelector('#main-game')
const rules = document.querySelector('#rules')
//menu button
const menuBtn = document.querySelector('#menu-btn')
//playmap
const playarea = document.querySelector('#playarea')
const character = document.querySelector("#main-character");
const enemySprite = document.querySelector('#enemy_sprite')
//healthbars
const enemyHealthBar = document.querySelector('#enemy-bar')
const playerHealthBar = document.querySelector('#player-bar')
//attack buttons
const attacks = document.querySelectorAll('.attack')
let bugAttack = Math.floor(Math.random() * 99)
const playerNameBattle = document.querySelector('#player-name-battle')
const enemyName = document.querySelector('#enemy-name-battle')
const attackMoves = [25,bugAttack,10,40]
const attackNames = ['malware','Bug','404 error','while loop']
//battle options
const rageQuit = document.querySelector('#rage-quit')
const fixKit = document.querySelector('#fix-kit')

const resetMenu = document.querySelector('.reset-game')
const battleInfo = document.querySelector('#battle-info')
//
const computedStyle = getComputedStyle(mainGame)
const height = computedStyle.height
const width = computedStyle.width
mainGame.height = height.replace('px','')
mainGame.width = width.replace('px','')

const startNew = document.querySelector('#start-new-game')
const returnToGame = document.querySelector('#return-to-game')
//functions
class Player{
    constructor(){
        this.alive = true
        this.name = name
        this.health = 100
        this.myTurn = true
    }
    
}
const newElementC = (tagType, classes) => {
    const element = document.createElement(tagType)
    for (let i = 0; i < classes.length; i++){
        element.classList.add(classes[i])
    }
    return element
}

//create element with and id
const newElementI = (tagType, ID) => {
    const element = document.createElement(tagType)
    element.setAttribute('id',ID)
    return element
}

//functions

const beginGame =(Player) =>{
    startScreen.style.zIndex = 1
    mainGame.style.zIndex = 0
    battleScreen.style.zIndex = 0
    document.querySelector('#enter-your-name').addEventListener('click',()=>{
        Player.name = (document.querySelector('#your-name').value)
        playerNameBattle.textContent = `${Player.name}` 
        startScreen.style.zIndex = 0
        mainGame.style.zIndex = 1
        battleScreen.style.zIndex = 0
        // console.log(Player);
    })
}
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
const resetHealth =(Player,enemyHealth)=>{
    setTimeout(()=>{
        enemyHealth = 100
        Player.health = 100
        enemyHealthBar.style.width = `${enemyHealth}%`
        playerHealthBar.style.width = `${Player.health}%`
        battleInfo.textContent = ''
        return enemyHealth, Player
    },5000)
}
const switchToMain = (enemyHealth) =>{
    setTimeout(()=>{
        startScreen.style.zIndex = 0
        mainGame.style.zIndex = 1
        battleScreen.style.zIndex = 0
        enemyHealthBar.style.width = `${enemyHealth}%`
        playerHealthBar.style.width = '100%'
    },2500)
}
//check the health of players
const checkHealth = (enemyHealth,Player) =>{

    if (enemyHealth <= 0 || Player.health <= 0){
    if (Player.health <=0){
        Player.health = 0
        resetHealth(Player,enemyHealth)
        battleInfo.textContent = 'Enemy Wins'
        switchToMain(enemyHealth)
        
    } else if (enemyHealth <= 0){
        enemyHealth = 0
        resetHealth(Player,enemyHealth)
        battleInfo.textContent = `${Player.name} wins`
        switchToMain(enemyHealth)
    }
    
    }
}

//restore health with fix kit button
const restoreHealth = (Player) =>{
    fixKit.addEventListener('click',()=>{
        // Player.health += 25
        Player.health = Player.health + 25
        playerHealthBar.style.width = `${Player.health}%`
    })
}
//rage quit
const leaveBattle = (Player,enemyHealth) =>{
    rageQuit.addEventListener('click',()=>{
        startScreen.style.zIndex = 0
        // rules.style.zIndex = 0
        mainGame.style.zIndex = 1
        battleScreen.style.zIndex = 0

        resetHealth(Player,enemyHealth)
    })
}
//enemy attacks
const enemyAttack = (Player) =>{
    let enemyChoice = Math.floor(Math.random() * 4)
    Player.health = Player.health - attackMoves[enemyChoice]
    setTimeout(()=>{
        playerHealthBar.style.width = `${Player.health}%`
        battleInfo.textContent = `Enemy uses ${attackNames[enemyChoice]} it deals ${attackMoves[enemyChoice]} damage`
    },3000)
}

// const resetHealth = () =>{
    
// }
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
const battleLogic = (Player,enemyHealth) =>{
    enemyHealthBar.style.width = `${enemyHealth}%`
    playerHealthBar.style.width = `${Player.health}%`

    leaveBattle(Player,enemyHealth)
    attackButtons(Player,enemyHealth)
    restoreHealth(Player)
    
    
}

const battleBegin = () =>{
    setTimeout(()=>{
        startScreen.style.zIndex = 0
        mainGame.style.zIndex = 0
        battleScreen.style.zIndex = 1
    },500)
}

document.addEventListener('keydown',(evt)=>{
    if (evt.key === '0'){
        // rules.style.zIndex = 1
        startScreen.style.zIndex = 0
        mainGame.style.zIndex = 0
        battleScreen.style.zIndex = 1
        console.log('battleScreen');
    }else if(evt.key === '9'){
        // rules.style.zIndex = 0
        startScreen.style.zIndex = 0
        mainGame.style.zIndex = 1
        battleScreen.style.zIndex = 0
        console.log('mainGame');
    }
    
})
const menuButton = () =>{
    let menuOpen = false
    returnToGame.addEventListener('click',()=>{
        menuOpen = false
        resetMenu.classList.remove('open') 
    })
    menuBtn.addEventListener('click',()=>{
        if (menuOpen === false){
            menuOpen = true
            resetMenu.classList.add('open')
            rules.classList.add('open')
            console.log(menuOpen);
        }else{
            menuOpen = false
            resetMenu.classList.remove('open')
            rules.classList.remove('open')
        }
    })
}

let x = 90;
let y = 34;
let held_directions = []; //State of which arrow keys we are holding down
let speed = 1; //How fast the character moves in pixels per frame

const placeCharacter = () => {
    
    let pixelSize = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
    );
    
    const held_direction = held_directions[0];
    if (held_direction) {
        if (held_direction === directions.right) {x += speed;}
        if (held_direction === directions.left) {x -= speed;}
        if (held_direction === directions.down) {y += speed;}
        if (held_direction === directions.up) {y -= speed;}
        character.setAttribute("facing", held_direction);
    }
    character.setAttribute("walking", held_direction ? "true" : "false");
    
    //Limits (gives the illusion of walls)
    let leftLimit = -8;
    let rightLimit = (16 * 11)+8;
    let topLimit = -8 + 32;
    let bottomLimit = (16 * 7);
    if (x < leftLimit) { x = leftLimit; }
    if (x > rightLimit) { x = rightLimit; }
    if (y < topLimit) { y = topLimit; }
    if (y > bottomLimit) { y = bottomLimit; }
    collideRed()
    collideBlue()
    collideGreen()
    collidePurple()
    
    let camera_left = pixelSize * 100;
    let camera_top = pixelSize * 60;
    
    playarea.style.transform = `translate3d( ${-x*pixelSize+camera_left}px, ${-y*pixelSize+camera_top}px, 0 )`;
    character.style.transform = `translate3d( ${x*pixelSize}px, ${y*pixelSize}px, 0 )`; 
}
const placeEnemies = () => {
    
    let pixelSize = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
    );
    
    
    
    let camera_left = pixelSize * 100;
    let camera_top = pixelSize * 60;
    
    playarea.style.transform = `translate3d( ${-x*pixelSize+camera_left}px, ${-y*pixelSize+camera_top}px, 0 )`;
    enemyRed.style.transform = `translate3d( ${x*pixelSize}px, ${y*pixelSize}px, 0 )`;  
}
const step = () => {
    placeCharacter();
    window.requestAnimationFrame(() => {
    step();
    })
}
step(); 
// placeEnemies()

    /* Direction key state */
    const directions = {
        up: "up",
        down: "down",
        left: "left",
        right: "right",
    }
    const keys = {
        38: directions.up,
        37: directions.left,
        39: directions.right,
        40: directions.down,
    }
    document.addEventListener("keydown", (e) => {
        var dir = keys[e.which];
        if (dir && held_directions.indexOf(dir) === -1) {
        held_directions.unshift(dir)
        }
    })
    
    document.addEventListener("keyup", (e) => {
        var dir = keys[e.which];
        var index = held_directions.indexOf(dir);
        if (index > -1) {
        held_directions.splice(index, 1)
    }
});

const game = () =>{
    let enemyHealth = 100
    const mainCharacter = new Player
    beginGame(mainCharacter)
    
    battleLogic(mainCharacter,enemyHealth)
    // mapMovement(playarea)
        
        
}
game()
menuButton()