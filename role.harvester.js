var spawner = require('spawner');

var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.store.getFreeCapacity() > 0) {
            var sources = creep.room.find(FIND_SOURCES);
            var sources_memory = spawner.source_id_from_position(creep.memory.creep_direction)
            //var Source_down = Game.getObjectById('504d0775111fdb7');
            if(creep.harvest(sources_memory) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources_memory, {visualizePathStyle: {stroke: '#ffaa00'}});
                creep.say('harvest');
            }
        }
        else {
            creep.say('find structure');
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ff00f7'}});
                    creep.say('to target');
                }
            }
        }
	}
};

module.exports = roleHarvester;