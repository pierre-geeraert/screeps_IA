var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepair = require('role.repair');
var roleWarRepair = require('role.war.repair');
var roleTower = require('role.tower');
var roleExplorer = require('role.explorer');
var spawner = require('spawner');




module.exports.loop = function () {
 
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory :', name);
        }
    }
    //room 1
    console.log('=======================================================');
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.spawn_location == "Spawn1");
    console.log('Room 1: Harvesters: ' + harvesters.length);
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.memory.spawn_location == "Spawn1");
    console.log('Room 1: builders: ' + builders.length);
    var repairs = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairs' && creep.memory.spawn_location == "Spawn1");
    console.log('Room 1: repairs: ' + repairs.length);
    var warrepairs = _.filter(Game.creeps, (creep) => creep.memory.role == 'warrepairs' && creep.memory.spawn_location == "Spawn1");
    console.log('Room 1: warrepairs: ' + warrepairs.length);
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.spawn_location == "Spawn1");
    console.log('Room 1: upgraders: ' + upgraders.length);
    var explorer = _.filter(Game.creeps, (creep) => creep.memory.role == 'explorer' && creep.memory.spawn_location == "Spawn1");
    console.log('Room 1: explorer: ' + explorer.length);
    console.log('=======================================================');

    //console.log(_.filter(Game.structure, (structure) => structure.structureType == STRUCTURE_TOWER));

    if(harvesters.length < 5) {
        spawner.creep_spawn("harvester","Spawn1");
    }
    if(upgraders.length < 4 && harvesters.length > 2) {
        spawner.creep_spawn("upgrader","Spawn1");
    }
    if(builders.length < 2 && harvesters.length > 2 && upgraders.length > 2) {
        spawner.creep_spawn("builder","Spawn1");
    }

    if(repairs.length < 4 && harvesters.length > 2 && upgraders.length > 2) {
        spawner.creep_spawn("repairs","Spawn1");
    }

    if(warrepairs.length < 2 && harvesters.length > 2 && upgraders.length > 2) {
        spawner.creep_spawn("warrepairs","Spawn1");
    }
    if(explorer.length < 3 && harvesters.length > 2 && upgraders.length > 2) {
        spawner.creep_spawn("explorer","Spawn1");
    }

    //room 2
    console.log('=======================================================');
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.spawn_location == "Spawn2");
    console.log('Room 2 Harvesters: ' + harvesters.length);
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.memory.spawn_location == "Spawn2");
    console.log('Room 2: builders: ' + builders.length);
    var repairs = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairs' && creep.memory.spawn_location == "Spawn2");
    console.log('Room 2: repairs: ' + repairs.length);
    var warrepairs = _.filter(Game.creeps, (creep) => creep.memory.role == 'warrepairs' && creep.memory.spawn_location == "Spawn2");
    console.log('Room 2: warrepairs: ' + warrepairs.length);
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.spawn_location == "Spawn2");
    console.log('Room 2: upgraders: ' + upgraders.length);
    var explorer = _.filter(Game.creeps, (creep) => creep.memory.role == 'explorer' && creep.memory.spawn_location == "Spawn2");
    console.log('Room 2: explorer: ' + explorer.length);
    console.log('=======================================================');

    //console.log(_.filter(Game.structure, (structure) => structure.structureType == STRUCTURE_TOWER));

    if(harvesters.length < 5) {
        spawner.creep_spawn("harvester","Spawn2");
    }
    if(upgraders.length < 4 && harvesters.length > 2) {
        spawner.creep_spawn("upgrader","Spawn2");
    }
    if(builders.length < 2 && harvesters.length > 2 && upgraders.length > 2) {
        spawner.creep_spawn("builder","Spawn2");
    }

    if(repairs.length < 4 && harvesters.length > 2 && upgraders.length > 2) {
        spawner.creep_spawn("repairs","Spawn2");
    }

    if(warrepairs.length < 2 && harvesters.length > 2 && upgraders.length > 2) {
        spawner.creep_spawn("warrepairs","Spawn2");
    }
    if(explorer.length < 3 && harvesters.length > 2 && upgraders.length > 2) {
        spawner.creep_spawn("explorer","Spawn2");
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
        if(creep.memory.role == 'warrepairs') {
            roleWarRepair.run(creep);
        }
        if(creep.memory.role == 'explorer') {
            roleExplorer.Move_to_target(creep);
        }
    }
    
    // tower power
    //var towers = Game.rooms['W1N1'].find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
    //console.log(towers);
    roleTower.defendRoom('W1N1');
    
}
