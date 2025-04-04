var spawner = require('spawner');
var function_all = require('function_all');
var functionHarvester = require('function.harvester');

var roleRepair = {

    /** @param {Creep} creep **/
    run: function(creep) {
        //creep.say('e')
        var targets_hostiles = function_all.find_hostile_in_room(creep)
        if(targets_hostiles){
            function_all.attack_hostile(creep,targets_hostiles);
	    }
	    else{
        if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.building = false;
            creep.say('💣🔄 harvest');
	    }
	    if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
	        creep.memory.building = true;
	        creep.say('💣🚧 build');
	    }
	    
	    //harvest the tower
        var targets_tower = creep.pos.findClosestByPath(creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_TOWER) &&
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
            }));
        
        

	    if(creep.memory.building && !(targets_tower)) {
	                        creep.say('here?')
	        //var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
	        //var targets_structures = creep.room.find(FIND_STRUCTURES);
	        var targets = creep.pos.findClosestByPath(creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_RAMPART || !(structure.structureType == STRUCTURE_WALL)|| structure.structureType == STRUCTURE_TOWER) && structure.hits < (structure.hitsMax*0.001)
                    }
            }));
            if(!targets){
                //console.log('here')
                var targets = creep.pos.findClosestByPath(creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_RAMPART || structure.structureType == STRUCTURE_WALL|| structure.structureType == STRUCTURE_TOWER) && structure.hits < (structure.hitsMax)
                    }
                }));
            }
            //shunt for extension
	        //var targets_extension = Game.getObjectById('d145135d8be7eff');
            if(targets) {
                if(creep.repair(targets) == ERR_NOT_IN_RANGE || creep.repair(targets) == 0) {
                    creep.moveTo(targets, {visualizePathStyle: {stroke: '#ffffff'}});
                    creep.say('💣 repair')
                    creep.repair(targets);
                }
            }
            
            else{
                creep.say('💣⛔ ')
                //creep.memory.role = 'harvester';
            }
	    }
	    else if(targets_tower && !(creep.store.getFreeCapacity() > 0) ) {
            functionHarvester.move_to_and_transfer(creep,targets_tower);
            
            }
	    else {
	        function_all.find_sources_and_take_energy(creep,1);
	    }
	}}
};

module.exports = roleRepair;