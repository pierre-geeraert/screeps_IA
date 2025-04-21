//var roleBuilder = require('role.builder');
var function_all = require('function_all');
var roleWarRepair = require('role.war.repair');



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
            var targets = (Game.rooms['W7N2'].find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_ROAD || structure.structureType == STRUCTURE_EXTENSION  ||  structure.structureType == STRUCTURE_CONTAINER|| structure.structureType == STRUCTURE_SPAWN) && structure.hits < (structure.hitsMax)
                    }
            }));
            // sort with the lowest hit number
            targets.sort((a,b) => a.hits - b.hits);

            if(!targets){
               //console.log('here')
                var targets = creep.pos.findClosestByPath(creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_ROAD ||  structure.structureType == STRUCTURE_EXTENSION ||  structure.structureType == STRUCTURE_CONTAINER|| structure.structureType == STRUCTURE_SPAWN) && structure.hits < (structure.hitsMax)
                    }
                }));
            }

	        
            if(targets) {
                
                //console.log(creep.repair(targets))
                if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                    //console.log("bot")
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                    creep.say('🚧repair');
                }
            }
            
            else{
                creep.say('🚧⛔ ')
                roleWarRepair.run(creep);
            }
	    }
	    else {
	        function_all.find_sources_and_take_energy(creep,1);
	    }
	}
};

module.exports = roleRepair;