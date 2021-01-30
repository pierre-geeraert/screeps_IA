var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepair = require('role.repair');
var roleWarRepair = require('role.war.repair');
var roleTower = require('role.tower');
var roleExplorer = require('role.explorer');
var spawner = require('spawner');




module.exports.loop = function () {
    


    
    //var testeur = Game.getObjectById('dd573375c5f2165')
    //var nbr = parseInt(testeur.memory.creep_direction_flag[4])
    //console.log(nbr+1)
    
    //var pompeur = Game.getObjectById('9143af68bd0ff5a')
    //var sources_pompeur = Game.getObjectById('89b807750b171d8')
    //pompeur.say('e')
    
    //if(pompeur.harvest(sources_pompeur) == ERR_NOT_IN_RANGE) {
    //            pompeur.moveTo((sources_pompeur), {visualizePathStyle: {stroke: '#ffaa00'}});
    //            pompeur.say('⚡ 🔙');
    //        }
    
    
    
    
    
    //console.log(Game.spawns['Spawn1'].energy)
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
    console.log('repairs: ' + repairs.length);
    var warrepairs = _.filter(Game.creeps, (creep) => creep.memory.role == 'warrepairs');
    console.log('warrepairs: ' + warrepairs.length);
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    console.log('upgraders: ' + upgraders.length);
    var explorer = _.filter(Game.creeps, (creep) => creep.memory.role == 'explorer');
    console.log('explorer: ' + explorer.length);


    //console.log(_.filter(Game.structure, (structure) => structure.structureType == STRUCTURE_TOWER));

    if(harvesters.length < 5) {
        spawner.creep_spawn("harvester");
    }
    if(upgraders.length < 4 && harvesters.length > 2) {
        spawner.creep_spawn("upgrader");
    }
    if(builders.length < 2 && harvesters.length > 2 && upgraders.length > 2) {
        spawner.creep_spawn("builder");
    }

    if(repairs.length < 4 && harvesters.length > 2 && upgraders.length > 2) {
        spawner.creep_spawn("repairs");
    }

    if(warrepairs.length < 2 && harvesters.length > 2 && upgraders.length > 2) {
        spawner.creep_spawn("warrepairs");
    }
    if(explorer.length < 1) {
        spawner.creep_spawn("explorer");
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
