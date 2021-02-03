var spawner = require('spawner');
var roleUpgrader = require('role.upgrader');
var function_all = require('function_all');
var functionMiner = require('function.miner');


var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        //functionMiner.harvest_lab(creep,'3adf3c5565621fa')
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
                        return (structure.structureType == STRUCTURE_STORAGE) &&
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
            }));
            var miner_container = Game.getObjectById('e24f0b9dfc2c819');
            //console.log(creep.pos.findClosestByPath(targets));
            if(targets) {
                //console.log(creep.transfer(targets, RESOURCE_ENERGY))
                if(creep.transfer(targets, creep.memory.mineralType) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets, {visualizePathStyle: {stroke: '#ff00f7'}});
                    creep.say('⚡ 🔜');
                }
            }
            else{
                creep.say('⚡ ⛔ ')
                roleUpgrader.run(creep)
                //creep.memory.role = 'upgrader';
            }
	    }
	    else {
	        functionMiner.find_mineral_and_take_energy(creep);
	    }
	}
};

module.exports = roleHarvester;