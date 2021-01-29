function defendRoom(roomName,towers) {
    Game.notify('coucou')
    var towers = Game.rooms[roomName].find(
            FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
            
    //console.log(towers)
    var targets = (Game.rooms[roomName].find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_RAMPART || structure.structureType == STRUCTURE_CONTAINER || structure.structureType == STRUCTURE_ROAD) && structure.hits < (structure.hitsMax*0.1)
                    }
            }))
            
            
    var towers_repair = Game.getObjectById('6b06fce8cd0881d')
    var upgrade_target = Game.getObjectById('f4ecbdb494b06b4')
    //console.log()
    if(targets && towers_repair.store[RESOURCE_ENERGY] > 500){
        //console.log("here")
        towers_repair.heal(upgrade_target)
        towers_repair.repair(targets[0])
        //towers.forEach(tower => tower.repair(targets[0]))
        Game.notify('Repair')
    }
    var roomName = 'W1N1'
    var hostiles = Game.rooms[roomName].find(FIND_HOSTILE_CREEPS);
    //shunt to test
    //var hostiles = Game.rooms[roomName].find(FIND_CREEPS);
    if(hostiles.length > 0) {
        var username = hostiles[0].owner.username;
        Game.notify(`User ${username} spotted in room ${roomName}`);
        
        towers.forEach(tower => tower.attack(hostiles[0]));
    }
}
module.exports = {defendRoom};
