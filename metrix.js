    let metrix = [
        [0,1,2,3],
        [4,5,6,7],
        [8,9,10,11],
        [12,13,14,15]
    ]
    let x = 0;
    let y = 0;
function set(move){

    if(!isUnreached(move)){
        switch(move){
            case 'RIGHT':
                x++;
                break;
            case 'LEFT':
                x--;
                break;
            case 'TOP':
                y--
                break;
            case 'DOWN':
                y++
                break;
                
        }
    }

    return metrix[y][x];
    function isUnreached(next_move){
        switch(next_move){
            case 'RIGHT':
                if(x+1 >= metrix[x].length){
                    return true
                }
                break;
            case 'LEFT':
                if(x-1 < 0){
                    return true
                }
                break;
            case 'TOP':
                if(y == 0){
                    return true
                }
                break;
            case 'DOWN':
                if(y+1 >= metrix.length){
                    return true
                }
                break;
                default:
                    return false;
                    break;
        }
    }
}
console.log(set("RIGHT"))
console.log(set("DOWN"))
console.log(set("LEFT"))
console.log(set("DOWN"))
console.log(set("LEFT"))
