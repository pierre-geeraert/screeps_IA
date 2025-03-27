var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepair = require('role.repair');
var roleWarRepair = require('role.war.repair');
var roleTower = require('role.tower');
var roleExplorer = require('role.explorer');
var roleMiner = require('role.miner');
var spawner = require('spawner');
var function_all = require('function_all');
var humanRessources = require('human_ressources');




module.exports.loop = function () {
    //clear non existing creep memory
    function_all.Clearing_non_existing_creep_memory();
 
    humanRessources.user_counting("Spawn1",display_in_console=1);
    //humanRessources.user_counting("Spawn2",display_in_console=1);
    
    humanRessources.user_regulation(
        Room_in="Spawn1",
        quota_Harvesters=2,
        quota_super_Harvesters=1,
        quota_builders=4,
        quota_repairs=1,
        quota_warrepairs=0,
        quota_upgraders=2,
        quota_explorer=0,
        quota_miner=0)
    
    //humanRessources.user_regulation(
    //    Room_in="Spawn2",
    //    quota_Harvesters=5,
    //    quota_builders=2,
    //    quota_repairs=3,
    //    quota_warrepairs=2,
    //    quota_upgraders=5,
    //    quota_explorer=0,
    //    quota_miner=1)
    //    //
    
    if(0){
        //room 1
        console.log('=======================================================');
        var Total = _.filter(Game.creeps, (creep) => creep.memory.spawn_location == "Spawn1");
        console.log('Rooms 1: Total: ' + Total.length);
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.spawn_location == "Spawn1");
        console.log('Rooms 1: Harvesters: ' + harvesters.length);
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.memory.spawn_location == "Spawn1");
        console.log('Rooms 1: builders: ' + builders.length);
        var repairs = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairs' && creep.memory.spawn_location == "Spawn1");
        console.log('Rooms 1: repairs: ' + repairs.length);
        var warrepairs = _.filter(Game.creeps, (creep) => creep.memory.role == 'warrepairs' && creep.memory.spawn_location == "Spawn1");
        console.log('Rooms 1: warrepairs: ' + warrepairs.length);
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.spawn_location == "Spawn1");
        console.log('Rooms 1: upgraders: ' + upgraders.length);
        var explorer = _.filter(Game.creeps, (creep) => creep.memory.role == 'explorer' && creep.memory.spawn_location == "Spawn1");
        console.log('Rooms 1: explorer: ' + explorer.length);
        var miner = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner' && creep.memory.spawn_location == "Spawn1");
        console.log('Rooms 1: miner: ' + explorer.length);
        console.log('=======================================================');
    
        //console.log(Game.creeps[0]);
        if(0){
            if(Total.length <= 1){
                spawner.creep_spawn("rescue","Spawn1");
            }
            if(harvesters.length < 5) {
                console.log('inferior to 5')
                spawner.creep_spawn("harvester","Spawn1");
            }
            if(upgraders.length < 4 && harvesters.length > 2) {
                spawner.creep_spawn(type="upgrader",spawn="Spawn1");
            }
            if(builders.length < 1 && harvesters.length > 2 && upgraders.length > 2) {
                spawner.creep_spawn("builder","Spawn1");
            }
        
            if(repairs.length < 3 && harvesters.length > 2 && upgraders.length > 2) {
                spawner.creep_spawn("repairs","Spawn1");
            }
        
            if(warrepairs.length < 2 && harvesters.length > 2 && upgraders.length > 2) {
                spawner.creep_spawn("warrepairs","Spawn1");
            }
            if(explorer.length < 1 && harvesters.length > 2 && upgraders.length > 2) {
                spawner.creep_spawn("explorer","Spawn1");
            }
            if(miner.length < 1 && harvesters.length > 2 && upgraders.length > 2) {
                spawner.creep_spawn("miner","Spawn1");
            }
        }
    }    
    if(0){
        //room 2
        console.log('=======================================================');
        var Total = _.filter(Game.creeps, (creep) => creep.memory.spawn_location == "Spawn2");
        console.log('Rooms 2: Total: ' + Total.length);
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.spawn_location == "Spawn2");
        console.log('Rooms 2 Harvesters: ' + harvesters.length);
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.memory.spawn_location == "Spawn2");
        console.log('Rooms 2: builders: ' + builders.length);
        var repairs = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairs' && creep.memory.spawn_location == "Spawn2");
        console.log('Rooms 2: repairs: ' + repairs.length);
        var warrepairs = _.filter(Game.creeps, (creep) => creep.memory.role == 'warrepairs' && creep.memory.spawn_location == "Spawn2");
        console.log('Rooms 2: warrepairs: ' + warrepairs.length);
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.spawn_location == "Spawn2");
        console.log('Rooms 2: upgraders: ' + upgraders.length);
        var explorer = _.filter(Game.creeps, (creep) => creep.memory.role == 'explorer' && creep.memory.spawn_location == "Spawn2");
        console.log('Rooms 2: explorer: ' + explorer.length);
        var miner = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner' && creep.memory.spawn_location == "Spawn2");
        console.log('Rooms 2: miner: ' + explorer.length);
        console.log('=======================================================');
    
        //console.log(_.filter(Game.structure, (structure) => structure.structureType == STRUCTURE_TOWER));
    
        if(Total.length <= 1){
            spawner.creep_spawn("rescue","Spawn2");
        }
        if(harvesters.length < 7) {
            spawner.creep_spawn("harvester","Spawn2");
        }
        if(upgraders.length < 5 && harvesters.length > 1) {
            spawner.creep_spawn("upgrader","Spawn2");
        }
        if(builders.length < 2 && harvesters.length > 1 && upgraders.length > 2) {
            spawner.creep_spawn("builder","Spawn2");
        }
    
        if(repairs.length < 3 && harvesters.length > 1 && upgraders.length > 2) {
            spawner.creep_spawn("repairs","Spawn2");
        }
    
        if(warrepairs.length < 2 && harvesters.length > 1 && upgraders.length > 2) {
            spawner.creep_spawn("warrepairs","Spawn2");
        }
        if(explorer.length < 3 && harvesters.length > 1 && upgraders.length > 2) {
            //spawner.creep_spawn("explorer","Spawn2");
        }
        if(miner.length < 1 && harvesters.length > 2 && upgraders.length > 2) {
            spawner.creep_spawn("miner","Spawn2");
        }
    }
    

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        //function_all.retrieve_from_tombstone(creep)
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
        if(creep.memory.role == 'miner') {
            roleMiner.run(creep);
        }
    }   
    
    // tower power
    roleTower.defendRoom('W7N2',block_repair=0);
    //roleTower.defendRoom('W2N2',block_repair=1);
}
