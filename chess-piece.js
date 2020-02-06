export default class ChessPiece  {
    constructor(element){
        this.element = element
        this.posX = this.element.getAttribute("data-pos-x")
        this.posY = this.element.getAttribute("data-pos-y")
        this.tiles = document.querySelectorAll(".tile")
    }
    movePiece = (piece,tile)=>{
        let rect = tile.getBoundingClientRect();
        piece.style.top = rect.top + "px"
        piece.style.left = rect.left + "px"
    }
    currentTile = ()=>{
        for (let i = 0; i < this.tiles.length; i++) {
            const tile = this.tiles[i];
            if(tile.getAttribute("data-pos-x") == this.posX && tile.getAttribute("data-pos-y") == this.posY ){
                this.movePiece(this.element,tile)
            }
        }
        
    }
}

export class Pawn extends ChessPiece {
    constructor(element){
        super(element)
    }
    moveTo = (tile)=>{
        if(tile[0] == this.posX){
            this.element.setAttribute("data-pos-x", tile[0] )
            this.element.setAttribute("data-pos-y", tile[1] )
            let  posX  = this.element.getAttribute("data-pos-x")
            let  posY  = this.element.getAttribute("data-pos-y")

            for (let i = 0; i < this.tiles.length; i++) {
                const tile = this.tiles[i];
                if(tile.getAttribute("data-pos-x") == posX && tile.getAttribute("data-pos-y") == posY ){
                    this.movePiece(this.element,tile)
                }
            }
        }else{
            return console.log("invalid move")
        }
    }
    
  }