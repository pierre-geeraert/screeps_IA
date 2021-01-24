var spawner = require('spawner');

var roleBuilder = {

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
	        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
	        var targets_structures = creep.room.find(FIND_STRUCTURES);
            //shunt for extension
	        //var targets_extension = Game.getObjectById('d145135d8be7eff');
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
            else if(targets_structures.length) {
                if(creep.repair(targets_structures[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets_structures[0], {visualizePathStyle: {stroke: '#ffffff'}});
                    creep.say('repair');
                }
            }
            else{
                //creep.memory.role = 'harvester';
            }
	    }
	    else {
	        var sources = creep.room.find(FIND_SOURCES);
            var sources_memory = spawner.source_id_from_position(creep.memory.creep_direction)
            //var Source_down = Game.getObjectById('504d0775111fdb7');
            if(creep.harvest(sources_memory) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources_memory, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
	    }
	}
};

module.exports = roleBuilder;