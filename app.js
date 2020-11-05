const body = document.querySelector('body')
//game screens
const startScreen = document.querySelector('#start-screen')
const battleScreen = document.querySelector('#battle-screen')
const mainGame = document.querySelector('#main-game')
const ctx = mainGame.getContext('2d')
const rules = document.querySelector('#rules')
//menu button
const menuBtn = document.querySelector('#menu-btn')
//playmap
const playarea = document.querySelector('#playarea')
//healthbars
const enemyHealthBar = document.querySelector('#enemy-bar')
const playerHealthBar = document.querySelector('#player-bar')
//attack buttons
const attacks = document.querySelectorAll('.attack')
let bugAttack = Math.floor(Math.random() * 99)
const playerNameBattle = document.querySelector('#player-name-battle')
const attackMoves = [25,bugAttack,10,40]
//battle options
const rageQuit = document.querySelector('#rage-quit')
const fixKit = document.querySelector('#fix-kit')

//
const computedStyle = getComputedStyle(mainGame)
const height = computedStyle.height
const width = computedStyle.width
mainGame.height = height.replace('px','')
mainGame.width = width.replace('px','')

//functions
class Player{
    constructor(x,y,color,width,height){
        this.x = x
        this.y = y
        this.color = color
        this.width =width
        this.height = height
        this.alive = true
        this.name = name
        this.health = 100
        this.myTurn = true
    }
    render(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
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

//moves the map to create illusion
// const mapMovement = (playarea) =>{

//     let negX = 0
//     let negY = 0
//     let posX = 0
//     let posY = 0

//     document.addEventListener('keydown',(evt)=>{
//         if (evt.key === 'w'){
//             //move up
//             posY += 2
//             negY -= 2
//             playarea.style.margin = `${posY}% ${posX}% ${negY}% ${negX}% `
//         }else if(evt.key === 'd'){
//             //move right
//             posX += 2
//             negX -= 2
//             playarea.style.margin = `${posY}% ${posX}% ${negY}% ${negX}% `
//         }else if(evt.key === 's'){
//             //move down
//             negY += 2
//             posY -=2
//             playarea.style.margin = `${posY}% ${posX}% ${negY}% ${negX}% `
//         }else if(evt.key === 'a'){
//             //move left
//             negX += 2
//             posX -= 2
//             playarea.style.margin = `${posY}% ${posX}% ${negY}% ${negX}% `
//         }
//     })
// }

const beginGame =(Player) =>{
    startScreen.style.zIndex = 1
    rules.style.zIndex = 0
    mainGame.style.zIndex = 0
    battleScreen.style.zIndex = 0
    document.querySelector('#enter-your-name').addEventListener('click',()=>{
        Player.name = (document.querySelector('#your-name').value)
        playerNameBattle.textContent = `${Player.name}` 
        startScreen.style.zIndex = 0
        rules.style.zIndex = 0
        mainGame.style.zIndex = 1
        battleScreen.style.zIndex = 0
        // console.log(Player);
    })
}

const onCanvas = () =>{
    
}
//check the health of players
const checkHealth = (enemyHealth,Player) =>{
    console.log(enemyHealth);
    console.log(Player.health);
    if (enemyHealth <= 0 || Player.health <= 0){
        if (Player.Health <=0){
            console.log('enemy wins');
        } else if (enemyHealth <= 0){

            console.log(`${Player.name} wins`);
        }
        setTimeout(()=>{
            startScreen.style.zIndex = 0
            rules.style.zIndex = 0
            mainGame.style.zIndex = 1
            battleScreen.style.zIndex = 0
        },2000)
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
const leaveBattle = () =>{
    rageQuit.addEventListener('click',()=>{
        startScreen.style.zIndex = 0
        rules.style.zIndex = 0
        mainGame.style.zIndex = 1
        battleScreen.style.zIndex = 0
    })
}
//enemy attacks
const enemyAttack = (Player) =>{
    let enemyChoice = Math.floor(Math.random() * 4)
    Player.health = Player.health - attackMoves[enemyChoice]
    setTimeout(()=>{
        playerHealthBar.style.width = `${Player.health}%`
    },2000)
}
const attackButtons = (enemyHealth,Player) =>{
    for (let i = 0; i < attacks.length; i++){
        attacks[i].addEventListener('click',()=>{
            enemyHealth = enemyHealth - attackMoves[i]
            if (Player.health <= 0){
                Player.health = 0
            }
            if (enemyHealth <= 0){
                enemyHealth = 0
            }
            enemyHealthBar.style.width = `${enemyHealth}%`
            checkHealth(enemyHealth,Player)
            enemyAttack(Player)
        })
    }
}
const battleLogic = (Player) =>{
    let enemyHealth = 0
    enemyHealth += 100
    enemyHealthBar.style.width = `${enemyHealth}%`
    playerHealthBar.style.width = `${Player.health}%`
    leaveBattle()
    attackButtons(enemyHealth, Player)
    restoreHealth(Player)
    setTimeout(()=>{
        enemyHealth += 25
        enemyHealthBar.style.width = `${enemyHealth}%`
    },20000)
}

    



// console.log(`rules z index${rules.style.zIndex}\nstart screen z index${startScreen.style.zIndex}\nmainGame z index${mainGame.style.zIndex}\nbattle screen z index ${battleScreen.style.zIndex}`);

document.addEventListener('keydown',(evt)=>{
    if (evt.key === '0'){
        rules.style.zIndex = 1
        startScreen.style.zIndex = 0
        mainGame.style.zIndex = 0
        battleScreen.style.zIndex = 0
        console.log('rules');
    }else if(evt.key === '9'){
        rules.style.zIndex = 0
        startScreen.style.zIndex = 0
        mainGame.style.zIndex = 1
        battleScreen.style.zIndex = 0
        console.log('mainGame');
    }else if(evt.key === '8'){
        rules.style.zIndex = 0
        startScreen.style.zIndex = 0
        mainGame.style.zIndex = 0
        battleScreen.style.zIndex = 1
        console.log('battle');
    }
})
const menuButton = () =>{
    menuBtn.addEventListener('click',()=>{
        rules.style.zIndex = 1
        startScreen.style.zIndex = 0
        mainGame.style.zIndex = 0
        battleScreen.style.zIndex = 0
        console.log(`rules z index${rules.style.zIndex}\nstart screen z index${startScreen.style.zIndex}\nmainGame z index${mainGame.style.zIndex}\nbattle screen z index ${battleScreen.style.zIndex}`);
    })
}
const game = () =>{
    const mainCharacter = new Player
    beginGame(mainCharacter)
    
    battleLogic(mainCharacter)
    // mapMovement(playarea)
        
        
}
game()
menuButton()