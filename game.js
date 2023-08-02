console.log('Welcome to Tic-Tac-Toe! Enjoy!')

let gameOver = false
let resetter = document.querySelector('#reset')
let turnCounter = 1
let totalCount = 0
const turnTable = document.querySelector('#subtitle')
const warning = document.querySelector('#invalid')
const allGrid = document.querySelectorAll('.grid')
const pieces = document.getElementsByTagName('img')
const winCon = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
]

function winRar(condidtions) {
  for (let i = 0; i < condidtions.length; i++) {
    let xCount = 0
    let oCount = 0
    for (let k = 0; k < condidtions[i].length; k++) {
      if (allGrid[condidtions[i][k] - 1].matches('.xVal')) {
        xCount++
      } else if (allGrid[condidtions[i][k] - 1].matches('.oVal')) {
        oCount++
      }
    }
    if (xCount >= 3) {
      turnTable.textContent = 'Team Jacob Wins!! Great Work!'
      gameOver = true
      return
    } else if (oCount >= 3) {
      turnTable.textContent = 'Team Edward Wins!! Great Work!'
      gameOver = true
      return
    }
  }
  if (totalCount >= 9) {
    turnTable.textContent =
      'Stalemate. An immovable object meets and unstoppable force'
  }
}

function movePlayed() {
  let child = this.children
  if (gameOver == false) {
    if (
      turnCounter == 1 &&
      child[0].classList.contains('invis') &&
      child[1].classList.contains('invis')
    ) {
      child[0].classList.toggle('invis')
      this.classList.add('xVal')
      turnCounter = 2
      warning.textContent = ''
      turnTable.textContent = "It is Edwards's turn."
      totalCount++
    } else if (
      turnCounter == 2 &&
      child[0].classList.contains('invis') &&
      child[1].classList.contains('invis')
    ) {
      this.classList.add('oVal')
      child[1].classList.toggle('invis')
      turnCounter = 1
      warning.textContent = ''
      turnTable.textContent = "It is Jacobs's turn."
      totalCount++
    } else if (
      (turnCounter == 1 &&
        child[0].classList.contains('exes') &&
        child[0].classList.contains('invis') == false) ||
      (turnCounter == 2 &&
        child[1].classList.contains('ohes') &&
        child[1].classList.contains('invis') == false)
    ) {
      warning.textContent = 'You already own that tile! No need to double up.'
    }
    // (turnCounter == 2 && child[0].classList.contains('invis') == false) ||
    // (turnCounter == 1 && child[1].classList.contains('invis') == false)
    else {
      warning.textContent = "You can't attack the opponent directly!"
    }

    winRar(winCon)
  }
}

for (let i = 0; i < allGrid.length; i++) {
  allGrid[i].addEventListener('click', movePlayed)
}

function hardReset() {
  for (let i = 0; i < allGrid.length; i++) {
    allGrid[i].classList.remove('oVal')
    allGrid[i].classList.remove('xVal')
  }

  for (let j = 0; j < pieces.length; j++) {
    pieces[j].classList.add('invis')
  }

  turnTable.textContent = 'Click on a cell to start! P.S. Team Jacob starts.'
  warning.textContent = ''

  turnCounter = 1
  gameOver = false
  totalCount = 0
}

resetter.onclick = hardReset
