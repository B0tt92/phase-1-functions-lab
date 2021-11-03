// Code your solution in this file!
function distanceFromHqInBlocks (blocks) {
const hq =42

    if (blocks >= hq) {
            return blocks - hq
    }else  {
        return hq - blocks
    }
    
};

const dist = 264
function distanceFromHqInFeet(blocks) {
 return distanceFromHqInBlocks(blocks) * dist 

};

function  distanceTravelledInFeet(start, dest) {
    if (start >= dest) { 
        return (start - dest) * 264
    } else { 
            return (dest - start) * 264
    }
}

function calculatesFarePrice(start, destination) {
    let d = distanceTravelledInFeet(start, destination)
    if (d <= 400) {
        return 0
    }else if (d <=2000) {
        return (d - 400)  * .02
    }else if (d < 2500) {
        return 25
    }else return 'cannot travel that far' 
};
