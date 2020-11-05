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

const attackMoves = [
    {malware:25},
    {Bug: bugAttack},
    {'404 error':10},
    {'while loop': 70}
]

class Player{
    constructor(){
        this.name = name
        this.health = 100
        this.alive = true
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

const beginGame =() =>{
    const paul = new Player
    startScreen.style.zIndex = 1
    rules.style.zIndex = 0
    mainGame.style.zIndex = 0
    battleScreen.style.zIndex = 0
    document.querySelector('#enter-your-name').addEventListener('click',()=>{
        paul.name = (document.querySelector('#your-name').value)
        startScreen.style.zIndex = 0
        rules.style.zIndex = 0
        mainGame.style.zIndex = 1
        battleScreen.style.zIndex = 0
        console.log(paul);
        return paul
    })
}



const zIndex = [startScreen,mainGame,battleScreen,rules]

const battleLogic = (Player) =>{
    enemyHealthBar.style.width = `${100}%`
    playerHealthBar.style.width = `${Player.health}%`
    for (let i = 0; i < attacks.length; i++){
        attacks[i].addEventListener('click',()=>{
            console.log(attackMoves[i]);
        })
    }
}

    

    // console.log(`rules z index${rules.style.zIndex}\nstart screen z index${startScreen.style.zIndex}\nmainGame z index${mainGame.style.zIndex}\nbattle screen z index ${battleScreen.style.zIndex}`);

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
menuBtn.addEventListener('click',()=>{
    rules.style.zIndex = 1
    startScreen.style.zIndex = 0
    mainGame.style.zIndex = 0
    battleScreen.style.zIndex = 0
    console.log(`rules z index${rules.style.zIndex}\nstart screen z index${startScreen.style.zIndex}\nmainGame z index${mainGame.style.zIndex}\nbattle screen z index ${battleScreen.style.zIndex}`);
})
const game = () =>{
    const paul = beginGame()
    battleLogic(paul)
    // mapMovement(playarea)
        
        
}
game()