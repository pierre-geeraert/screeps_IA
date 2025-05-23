function defendRoom(roomName,block_repair) {
    //Game.notify('coucou')
    var towers = Game.rooms[roomName].find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});

    //console.log(towers)
    var targets = (Game.rooms[roomName].find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_ROAD ||structure.structureType == STRUCTURE_WALL ||structure.structureType == STRUCTURE_RAMPART ) && structure.hits < (structure.hitsMax*0.1)
                    }
            }))

    // sort with the lowest hit number
    targets.sort((a,b) => a.hits - b.hits);

    for(tower of towers){
        //console.log(tower.store[RESOURCE_ENERGY])
        if(targets && tower.store[RESOURCE_ENERGY] > 700 && !block_repair){
            tower.repair(targets[0])
            Game.notify('Repair')
    }
    }

    var hostiles = Game.rooms[roomName].find(FIND_HOSTILE_CREEPS);
    if(hostiles.length > 0) {
        console.log('hostile')
        var username = hostiles[0].owner.username;
        Game.notify(`User ${username} spotted in room ${roomName}`);
        
        towers.forEach(tower => tower.attack(hostiles[0]));
    }
}
module.exports = {defendRoom};
