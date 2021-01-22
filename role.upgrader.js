var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
         if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.building = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
	        creep.memory.building = true;
	        creep.say('🚧 upgrade');
	    }

	    if(creep.memory.building) {
	        var sources_controller_object = creep.room.controller;
            if(creep.upgradeController(sources_controller_object, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources_controller_object);
            }
	    }
	    else {
	        var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
	    }
	}
};

module.exports = roleUpgrader;