var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepair = require('role.repair');
var spawner = require('spawner');



module.exports.loop = function () {
    //console.log(spawner.source_id_from_position('alpha'));
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory :', name);
        }
    }
    console.log('=======================================================');
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log('Harvesters: ' + harvesters.length);
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    console.log('builders: ' + builders.length);
    var repairs = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairs');
    console.log('repairs: ' + builders.length);
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    console.log('upgraders: ' + upgraders.length);

    //console.log(_.filter(Game.structure, (structure) => structure.structureType == STRUCTURE_TOWER));

    if(harvesters.length < 5) {
        spawner.creep_spawn("harvester");
    }
    if(upgraders.length < 4 && harvesters.length > 2) {
        spawner.creep_spawn("upgrader");
    }
    if(builders.length < 5 && harvesters.length > 2) {
        spawner.creep_spawn("builder");
    }

    if(repairs.length < 2 && harvesters.length > 2) {
        spawner.creep_spawn("repairs");
    }




    
    if(Game.spawns['Spawn1'].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
        Game.spawns['Spawn1'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Spawn1'].pos.x + 1, 
            Game.spawns['Spawn1'].pos.y, 
            {align: 'left', opacity: 0.8});
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        //console.log(spawner.source_id_from_position(creep.memory.creep_direction));
        //spawner.set_creep_to_list(creep);
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
	    if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'repairs') {
            roleRepair.run(creep);
        }
    }
}
