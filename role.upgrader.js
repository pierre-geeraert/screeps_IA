var spawner = require('spawner');
var function_all = require('function_all');


var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
        //console.log('Im here1')
         if(creep.memory.upgrading && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.upgrading = false;
            creep.say('🆙 🔄 harvest');
	    }
	    if(!creep.memory.upgrading && creep.store.getFreeCapacity() == 0) {
	        creep.memory.upgrading = true;
	        creep.say('🆙 upgrade');
	    }

	    if(creep.memory.upgrading) {
	        var sources_controller_object = creep.room.controller;
            if(creep.upgradeController(sources_controller_object, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources_controller_object);
            }
	    }
	    else {
	        function_all.find_sources_and_take_energy(creep,1);
	    }
	}
};

module.exports = roleUpgrader;