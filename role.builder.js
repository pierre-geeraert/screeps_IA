var spawner = require('spawner');
var roleHarvester = require('role.harvester');
var roleRepair = require('role.repair');
var function_all = require('function_all');



var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

	    if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.building = false;
            creep.say('🛠 🔄 harvest');
	    }
	    if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
	        creep.memory.building = true;
	        creep.say('🛠 🚧 build');
	    }

	    if(creep.memory.building) {
	        //var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
	        var targets = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
	        //console.log(targets)
            //shunt for extension
	        //var targets_extension = Game.getObjectById('db456a1d6fdcfe0');
            //console.log(targets.length);
            //creep.moveTo(targets);
            if(targets) {
                //console.log("targets length exist")
                if(creep.build(targets) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
            else{
                creep.say('🛠 ⛔  ');
                //creep.memory.role = 'repairs';
                roleRepair.run(creep)
            }
	    }
	    else {
	        function_all.find_sources_and_take_energy(creep);
	    }
	}
};

module.exports = roleBuilder;