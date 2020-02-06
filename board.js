export default class ChessBoard  {
    constructor(square){
        this.object = square
    }
    createCellData = ()=>{
        let CHESS_SQUARES = []
        for (let i = 1; i <= 8; i++) {
            for (let x = 1; x <= 8; x++) {
                let type 
                if( i % 2 == 0 ){
                    if (x % 2 == 0  ) {
                        type = "black"
                   }else{
                        type = "white"
                   }
                }
                else if(i  % 2 == 1&& x % 2 == 0 ){
                        type = "white"
                   }else{
                        type = "black"
                   }
                CHESS_SQUARES.push(
                    {
                        posX: i,
                        posY: x,
                        type: type
                    }
                )
            }  
        }
        return CHESS_SQUARES
    }
    squareHtmlTemplate = (squareData)=> {
        return `<div data-type="${squareData.type}" data-pos-x="${squareData.posY}" data-pos-y="${squareData.posX}" class="tile">${squareData.posY} - ${squareData.posX}</div>`
    }
    createBoard = (board)=>{  
        let  cells = this.createCellData()
        for (let i = 0; i < cells.length; i++) {
            const  cell = cells[i];
            board.innerHTML += this.squareHtmlTemplate(cell)
        }
    }
}
