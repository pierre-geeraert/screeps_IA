var spawner = require('spawner');

var roleRepair = {

    /** @param {Creep} creep **/
    run: function(creep) {

	    if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.building = false;
            creep.say('🚧 🔄 harvest');
	    }
	    if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
	        creep.memory.building = true;
	        creep.say('🚧 build');
	    }

	    if(creep.memory.building) {
	        var targets_structures = creep.room.find(FIND_STRUCTURES, {
	           filter: (structure) => {
	               return structure.hits < (structure.hitsMax*0.1) }
	            
	        });

	        
	        //var targets_structures = creep.pos.findClosestByPath(creep.room.find(FIND_STRUCTURES));
	        
	        //console.log(targets[0]);
            //shunt for extension
	        //var targets_shunt = Game.getObjectById('d4f2fd16311a069');
            if(targets_structures) {
                if(creep.repair(targets_structures[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets_structures[0], {visualizePathStyle: {stroke: '#ffffff'}});
                    creep.say('🚧repair');
                }
            }
            
            else{
                creep.say('🚧⛔ ')
                //creep.memory.role = 'harvester';
            }
	    }
	    else {
	        var sources = creep.room.find(FIND_SOURCES);
	        var sources_memory = creep.pos.findClosestByPath(FIND_SOURCES);
            //var sources_memory = Game.getObjectById(spawner.source_id_from_position(creep.memory.creep_direction))
            //var Source_down = Game.getObjectById('504d0775111fdb7');
            if(creep.harvest(sources_memory) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources_memory, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
	    }
	}
};

module.exports = roleRepair;