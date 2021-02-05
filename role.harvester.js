var spawner = require('spawner');
var roleUpgrader = require('role.upgrader');
var functionHarvester = require('function.harvester');
var function_all = require('function_all');



var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.memory.harvesting && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.harvesting = false;
            creep.say('⚡ harvest');
            //creep.memory.priority++;
            
	    }
	    if(!creep.memory.harvesting && creep.store.getFreeCapacity() == 0) {
	        creep.memory.harvesting = true;
	        creep.say('⚡ transfer');
	    }

	    if(creep.memory.harvesting) {
	        if( creep.memory.priority == 1){
                var targets = creep.pos.findClosestByPath(creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_SPAWN) &&
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
                }));
            }
            if( creep.memory.priority == 2){
                var targets = creep.pos.findClosestByPath(creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_EXTENSION ) &&
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
                }));
            }
            if( creep.memory.priority == 3){
                var targets = creep.pos.findClosestByPath(creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_CONTAINER||structure.structureType == STRUCTURE_LINK|| structure.structureType == STRUCTURE_TOWER) &&
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
                }));
            }
            if( creep.memory.priority == 4){
                var targets = creep.pos.findClosestByPath(creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_CONTAINER||structure.structureType == STRUCTURE_LINK|| structure.structureType == STRUCTURE_TOWER || structure.structureType == STRUCTURE_LAB) &&
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
                }));
            }
            if( creep.memory.priority == 5){
                if(function_all.random){
                    var targets = creep.pos.findClosestByPath(creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) => {
                            return (structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_CONTAINER||structure.structureType == STRUCTURE_LINK|| structure.structureType == STRUCTURE_TOWER || structure.structureType == STRUCTURE_LAB||structure.structureType == STRUCTURE_STORAGE ) &&
                                structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                        }
                    }));
                    creep.memory.priority = 1;
                }
                else{
                    creep.memory.priority=1;
                }
            }
            if(targets) {
                functionHarvester.move_to_and_transfer(creep,targets);
            }
            else{
                creep.memory.priority++;
                creep.say('⚡ ⛔ ')
                roleUpgrader.run(creep)
                //creep.memory.role = 'upgrader';
            }
	    }
	    else {
	        function_all.find_sources_and_take_energy(creep);
	    }
	}
};

module.exports = roleHarvester;