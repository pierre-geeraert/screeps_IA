function defendRoom(roomName,towers) {
    var towers = Game.rooms[roomName].find(
            FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
            
    //console.log(towers[0])
    var targets = (Game.rooms[roomName].find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_RAMPART || structure.structureType == STRUCTURE_WALL|| structure.structureType == STRUCTURE_CONTAINER) && structure.hits < (structure.hitsMax*0.1)
                    }
            }))
            
            
    
    //console.log(targets)
    if(targets){
        towers.forEach(tower => tower.repair(targets[0]))
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
