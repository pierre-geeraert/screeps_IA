var spawner = require('spawner');
var roleHarvester = require('role.harvester');
var roleRepair = require('role.repair');



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
	        var sources = creep.room.find(FIND_SOURCES);
	        var sources_memory = creep.pos.findClosestByPath(FIND_SOURCES);
	        //function to select a source from his memory
            //var sources_memory = Game.getObjectById(spawner.source_id_from_position(creep.memory.creep_direction))
            //var Source_down = Game.getObjectById('504d0775111fdb7');
            if(creep.harvest(sources_memory) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources_memory, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
	    }
	}
};

module.exports = roleBuilder;