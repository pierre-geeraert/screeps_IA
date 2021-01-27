function defendRoom(roomName,towers) {
    var towers = Game.rooms[roomName].find(
            FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
            
    //console.log(towers[0])
    var targets = (Game.rooms[roomName].find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_RAMPART || structure.structureType == STRUCTURE_WALL|| structure.structureType == STRUCTURE_CONTAINER)
                    }
            }))
    //console.log(targets)
    towers.forEach(tower => tower.repair(targets));
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
