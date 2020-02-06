import {Pawn} from "./chess-piece.js"

export default class GameController {
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2
    }
    startGame = ()=>{
        this.player1.playerTurn =  true
        let playerStart = [this.player1,this.player2]
        let playerPieces = document.querySelectorAll(".chess-piece-con")
        playerPieces.forEach(piece => {
            piece.addEventListener("click",(e)=>{
                playerStart.forEach(player => {
                    if(player.playerTurn == true){
                        if (piece.getAttribute("data-type") == player.playerColor) {
                                this.movePiece(e.target, player)

                                this.player1.playerTurn = true
                                this.player2.playerTurn = true
                                player.playerTurn = false
                                console.log(this.player1,this.player2)
                        }
                    }
                })
            })
        })
    }


    movePiece = (piece, player)=>{
        player.chessPieces.forEach(pieceData => {
            if(piece.id == pieceData.id){
                if (pieceData.type == "pawn") {
                    let pawn = new Pawn(piece)
                    pawn.moveTo([2,4])
                }
            }
        });
    }


    endGame = ()=>{
        this.player1.playerTurn =  true
        this.player2.playerTurn =  false
    }
}