var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
         if(creep.memory.upgrading && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.upgrading = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.upgrading && creep.store.getFreeCapacity() == 0) {
	        creep.memory.upgrading = true;
	        creep.say('🚧 upgrade');
	    }

	    if(creep.memory.upgrading) {
	        var sources_controller_object = creep.room.controller;
            if(creep.upgradeController(sources_controller_object, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources_controller_object);
            }
	    }
	    else {
	        var sources = creep.room.find(FIND_SOURCES);
            var Source_up = Game.getObjectById('1d190775111f525');
            if(creep.harvest(Source_up) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Source_up, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
	    }
	}
};

module.exports = roleUpgrader;