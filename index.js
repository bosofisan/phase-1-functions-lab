// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    const headquartersLocation = 42;
    const distance = Math.abs (pickupLocation - headquartersLocation);
    return distance;
}

function distanceFromHqInFeet (blocks){
    const feetPerBlock = 264;
    const distance = distanceFromHqInBlocks (blocks) * feetPerBlock
    return distance;
}

function distanceTravelledInFeet (startBlock, destinationBlock){
    const feetPerBlock = 264
    const blocksTravelled = Math.abs (destinationBlock - startBlock)
    const feetTravelled = blocksTravelled * feetPerBlock
    return feetTravelled;
}

function calculatesFarePrice (startBlock, destinationBlock){
    const distance = distanceTravelledInFeet(startBlock, destinationBlock);
    if (distance <= 400) {
        return 0;
    }
    else if (distance > 400 && distance <= 2000){
        const fare = (distance - 400) * 0.02;
        return fare
    }
    else if (distance > 2000 && distance <= 2500){
        return 25;
    }
    else if (distance > 2500){
        return 'cannot travel that far'
    }
}