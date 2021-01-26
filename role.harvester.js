var spawner = require('spawner');

var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {

	    if(creep.memory.harvesting && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.harvesting = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.harvesting && creep.store.getFreeCapacity() == 0) {
	        creep.memory.harvesting = true;
	        creep.say('🚧 transfer');
	    }

	    if(creep.memory.harvesting) {
	        //creep.say('find structure');
            //var targets_tower = Game.getObjectById('15369d146d8be78');
            var targets = creep.pos.findClosestByPath(creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_TOWER) &&
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
            }));
            console.log(creep.pos.findClosestByPath(targets));
            if(targets) {
                if(creep.transfer(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets, {visualizePathStyle: {stroke: '#ff00f7'}});
                    creep.say('⚡ 🔜');
                }
            }
            else{
                creep.memory.role = 'upgrader';
            }
	    }
	    else {
	        var sources = creep.room.find(FIND_SOURCES);
	        var sources_memory = creep.pos.findClosestByPath(FIND_SOURCES);
	        //function to select a source from his memory
            //var sources_memory = Game.getObjectById(spawner.source_id_from_position(creep.memory.creep_direction))
            //var Source_down = Game.getObjectById('504d0775111fdb7');
            if(creep.harvest(sources_memory) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources_memory, {visualizePathStyle: {stroke: '#ffaa00'}});
                creep.say('⚡ 🔙');
            }
	    }
	}
};

module.exports = roleHarvester;