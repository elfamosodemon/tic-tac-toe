// player factory function
const createPlayer = (name, marker) => {
    return {name, marker};
}

// gameboard object
const gameBoard = (() => {

    let board = [];
    for (i = 0; i < 9; i++) {
        board.push('');
    }

    let squares = document.querySelector('.squares');

    board.forEach((item, index) => {
        const square = document.createElement('div');
        square.className = 'square';
        squares.appendChild(square);
    })

    Array.from(squares.children).forEach((square, index) => {
        square.addEventListener('click' ,  () => { 
            console.log('clicou')
            square.classList.add(game.playerOne.marker)
        })
    })

    return {
        board
    };
})();

const game = (() => {
    const playerOne = createPlayer('Player 1', 'squarex');
    const playerTwo = createPlayer('Player 2', 'squareo');

    return {
        playerOne,
        playerTwo
    }
})();

