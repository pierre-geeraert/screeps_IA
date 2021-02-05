function defendRoom(roomName,towers) {
    //Game.notify('coucou')
    var towers = Game.rooms[roomName].find(
            FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
            
    //console.log(towers)
    var targets = (Game.rooms[roomName].find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_WALL ||structure.structureType == STRUCTURE_RAMPART || structure.structureType == STRUCTURE_CONTAINER || structure.structureType == STRUCTURE_ROAD) && structure.hits < (structure.hitsMax*0.1)
                    }
            }))
    //shunt to target just the rempart
    //var targets = (Game.rooms[roomName].find(FIND_STRUCTURES, {
    //                filter: (structure) => {
    //                    return (structure.structureType == STRUCTURE_RAMPART) && structure.hits < (structure.hitsMax*0.1)
    //                }
    //        }))
    
            
            
    //var towers_repair = Game.getObjectById('6b06fce8cd0881d')
    for(tower of towers){
        //console.log(tower.store[RESOURCE_ENERGY])
        if(targets && tower.store[RESOURCE_ENERGY] > 700){
            tower.repair(targets[0])
            Game.notify('Repair')
    }
    }
    //var upgrade_target = Game.getObjectById('f4ecbdb494b06b4')
    //console.log()
    
    var hostiles = Game.rooms[roomName].find(FIND_HOSTILE_CREEPS);
    //shunt to test
    //var hostiles = Game.rooms[roomName].find(FIND_CREEPS);
    if(hostiles.length > 0) {
        console.log('hostile')
        var username = hostiles[0].owner.username;
        Game.notify(`User ${username} spotted in room ${roomName}`);
        
        towers.forEach(tower => tower.attack(hostiles[0]));
    }
}
module.exports = {defendRoom};
