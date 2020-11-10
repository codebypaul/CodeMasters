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

## Table of Contents
|HTML


### HTML Elements


### CSS Styling

### JavaScript

###### Create an element with classes
```JavaScript
const newElementC = (tagType, classes) => {
    const element = document.createElement(tagType)
    for (let i = 0; i < classes.length; i++){
        element.classList.add(classes[i])
    }
    return element
}
```

###### Create an element with an ID
```JavaScript
const newElementI = (tagType, ID) => {
    const element = document.createElement(tagType)
    element.setAttribute('id',ID)
    return element
}
```

###### Reset the battle state
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

###### 
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
            enemyHealthBar.style.width = `${enemyHealth}%`
            checkHealth(enemyHealth,Player)
            enemyAttack(Player)
            
        })
        
    }
}
```