var spawner = require('spawner');

var roleRepair = {

    /** @param {Creep} creep **/
    run: function(creep) {

	    if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.building = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
	        creep.memory.building = true;
	        creep.say('🚧 build');
	    }

	    if(creep.memory.building) {
	        //var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
	        //var targets_structures = creep.room.find(FIND_STRUCTURES);
	        var targets = creep.pos.findClosestByPath(creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_RAMPART || structure.structureType == STRUCTURE_WALL|| structure.structureType == STRUCTURE_CONTAINER|| structure.structureType == STRUCTURE_TOWER) && structure.hits < (structure.hitsMax*0,1)
                    }
            }));
            if(!targets){
                console.log('here')
                var targets = creep.pos.findClosestByPath(creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_RAMPART || structure.structureType == STRUCTURE_WALL|| structure.structureType == STRUCTURE_CONTAINER)&& structure.hits < (structure.hitsMax)
                    }
                }));
            }
            //shunt for extension
	        //var targets_extension = Game.getObjectById('d145135d8be7eff');
            if(targets) {
                if(creep.repair(targets) == ERR_NOT_IN_RANGE || creep.repair(targets) == 0) {
                    creep.moveTo(targets, {visualizePathStyle: {stroke: '#ffffff'}});
                    creep.say('💣 repair')
                    creep.repair(targets);
                }
            }
            
            else{
                creep.say('💣⛔ ')
                //creep.memory.role = 'harvester';
            }
	    }
	    else {
	        var sources = creep.room.find(FIND_SOURCES);
            var sources_memory = Game.getObjectById(spawner.source_id_from_position(creep.memory.creep_direction))
            //var Source_down = Game.getObjectById('504d0775111fdb7');
            if(creep.harvest(sources_memory) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources_memory, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
	    }
	}
};

module.exports = roleRepair;