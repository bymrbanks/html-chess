import ChessBoard from "./board.js"
import ChessPiece  from "./chess-piece.js"
import { gameData } from "./game-data.js"
import GameController from "./game-controller.js"


window.addEventListener("load",()=>{

    const CHESS_BOARD = document.querySelector("#board")
    const board = new ChessBoard()
    board.createBoard(CHESS_BOARD)

    createPiece(player1.chessPieces,"white")
    createPiece(player2.chessPieces,"black")

    const CHESS_PIECE = document.querySelectorAll(".chess-piece-con")

    for (let i = 0; i < CHESS_PIECE.length; i++) {
        const piece = CHESS_PIECE[i];
        const  init = new ChessPiece(piece)
        init.currentTile()
    }

    startGame.startGame()
})


const player1 = gameData.players.player1
const player2 = gameData.players.player2
const startGame = new GameController(player1,player2)


const createPiece = (pieces,color)=>{
    pieces.forEach(piece=> {
        let generatedId  = piece.type + Math.floor( Date.now()) + piece.position[0] + piece.position[1]
        piece.id = generatedId
        document.body.innerHTML +=  `<div id="${piece.id}" class="chess-piece-con" data-type="${color}" data-pos-x="${piece.position[0]}" data-pos-y="${piece.position[1]}">${piece.type}</div>`
    });
}



