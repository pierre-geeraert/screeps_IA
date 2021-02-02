//var roleBuilder = require('role.builder');
var function_all = require('function_all');


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
	        var targets = creep.pos.findClosestByPath(creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_ROAD || structure.structureType == STRUCTURE_EXTENSION  ||  structure.structureType == STRUCTURE_CONTAINER|| structure.structureType == STRUCTURE_SPAWN) && structure.hits < (structure.hitsMax)
                    }
            }));
            //console.log(creep.id + targets)
            if(!targets){
               //console.log('here')
                var targets = creep.pos.findClosestByPath(creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_ROAD ||  structure.structureType == STRUCTURE_EXTENSION ||  structure.structureType == STRUCTURE_CONTAINER|| structure.structureType == STRUCTURE_SPAWN) && structure.hits < (structure.hitsMax)
                    }
                }));
            }

	        
	        //var targets_structures = creep.pos.findClosestByPath(creep.room.find(FIND_STRUCTURES));
	        
	        //console.log(targets[0]);
            //shunt for extension
	        //var targets_shunt = Game.getObjectById('d4f2fd16311a069');
            if(targets) {
                //console.log(creep.repair(targets))
                if(creep.repair(targets) == ERR_NOT_IN_RANGE) {
                    //console.log("bot")
                    creep.moveTo(targets, {visualizePathStyle: {stroke: '#ffffff'}});
                    creep.say('🚧repair');
                }
            }
            
            else{
                creep.say('🚧⛔ ')
                //roleBuilder.run(creep);

                //creep.memory.role = 'harvester';
            }
	    }
	    else {
	        function_all.find_sources_and_take_energy(creep);
	    }
	}
};

module.exports = roleRepair;