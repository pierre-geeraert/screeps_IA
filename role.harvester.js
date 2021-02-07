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
	    }
	    if(!creep.memory.harvesting && creep.store.getFreeCapacity() == 0) {
	        creep.memory.harvesting = true;
	        creep.say('⚡ transfer');
	    }

	    if(creep.memory.harvesting) {
	        //creep.say('find structure');
            //var targets_tower = Game.getObjectById('15369d146d8be78');
            var targets = creep.pos.findClosestByPath(creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||structure.structureType == STRUCTURE_LINK|| structure.structureType == STRUCTURE_SPAWN|| structure.structureType == STRUCTURE_TOWER|| structure.structureType == STRUCTURE_LAB|| structure.structureType == STRUCTURE_CONTAINER) &&
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
            }));
            var targets_storage = creep.pos.findClosestByPath(creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_STORAGE ) &&
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
            }));
            //console.log(targets_storage)
            //console.log(creep.pos.findClosestByPath(targets));
            if(targets) {
                functionHarvester.move_to_and_transfer(creep,targets);
                
            }
            else{
                functionHarvester.move_to_and_transfer(creep,targets_storage);
                
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