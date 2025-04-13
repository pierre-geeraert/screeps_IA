var function_all = require('function_all');
/** @param {Creep} creep **/
function creep_spawn(type,spawn) {
    var newName = spawn+"_"+ type + Game.time;
    console.log('Spawning new '+type+': ' + newName);

    array_body = [WORK,CARRY,MOVE]
    energy_available = Game.rooms["W7N2"].energyAvailable; 
    body_parts_number = energy_available/50;
    trunc_body_parts_number = Math.trunc(body_parts_number);
    console.log("trunc_body_parts_number: "+trunc_body_parts_number)
    let final_array = array_body; 
    
    while (final_array.length < trunc_body_parts_number){
        final_array.push(array_body[Math.floor(Math.random() * 2)]);
        console.log(final_array)
        
    }
    var testIfCanSpawn = Game.spawns['Spawn1'].spawnCreep(final_array, 'Worker1', { dryRun: true });
    console.log("body cost: "+function_all.bodyCost(final_array))
    console.log("can I spawn? "+testIfCanSpawn)

    if(testIfCanSpawn==0){
        console.log("can spawn: "+final_array)
        console.log(Game.spawns[spawn].spawnCreep(final_array, newName, 
            {memory: {role: type,spawn_location:spawn,priority:1,level:final_array.length}}));
    }
    if(testIfCanSpawn==-6 && final_array.length > 3){
        final_array.pop()
        console.log("final_array popped")
        console.log("can spawn: "+final_array)
        console.log(Game.spawns[spawn].spawnCreep(final_array, newName, 
            {memory: {role: type,spawn_location:spawn,priority:1,level:final_array.length}}));
    }

    var testIfCanSpawnLevel4 = Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], 'Worker1', { dryRun: true });
    var testIfCanSpawnLevel3 = Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], 'Worker1', { dryRun: true });
    var testIfCanSpawnLevel2 = Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], 'Worker1', { dryRun: true });
    var testIfCanSpawnLevel1_5 = Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE], 'Worker1', { dryRun: true });
    var testIfCanSpawnLevel1 = Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], 'Worker1', { dryRun: true });
    
if(0){    
    if (testIfCanSpawnLevel4 == 0){
        Game.spawns[spawn].spawnCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: type,spawn_location:spawn,priority:1,level:'level4'}});
    }else if (testIfCanSpawnLevel3 == 0 && testIfCanSpawnLevel4 != 0){
        Game.spawns[spawn].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], newName, 
            {memory: {role: type,spawn_location:spawn,priority:1,level:'level3'}});
    }else if(testIfCanSpawnLevel2 == 0 && testIfCanSpawnLevel3 != 0 && testIfCanSpawnLevel4 != 0){
        Game.spawns[spawn].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], newName, 
            {memory: {role: type,spawn_location:spawn,priority:1,level:'level2'}});
    }else if(testIfCanSpawnLevel1_5 == 0 && testIfCanSpawnLevel2 != 0 && testIfCanSpawnLevel3 != 0 && testIfCanSpawnLevel4 != 0){
        Game.spawns[spawn].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: type,spawn_location:spawn,priority:1,level:'level1'}});
    }else if(testIfCanSpawnLevel1 == 0 && testIfCanSpawnLevel1_5 != 0 && testIfCanSpawnLevel2 != 0 && testIfCanSpawnLevel3 != 0 && testIfCanSpawnLevel4 != 0){
        Game.spawns[spawn].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: type,spawn_location:spawn,priority:1,level:'level1'}});}

}
if(0){    if(type=='upgrader'){
        //var sources_random = 'alpha';  
    }
    if(type=="rescue"){//if number of harvester = 0 
        Game.spawns[spawn].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: 'rescue',spawn_location:spawn,priority:1}});
    }
    if(type=='warrepairs'&&spawn=="explorer"){ 
        Game.spawns[spawn].spawnCreep([WORK,CARRY,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: type,spawn_location:spawn,priority:1}});
    }
    else if(type=='warrepairs'&& spawn=="Spawn1"){ 
        Game.spawns[spawn].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,ATTACK], newName, 
            {memory: {role: type,spawn_location:spawn,priority:1}});
    }
    else if(type=='warrepairs' && spawn=="Spawn2"){ 
        console.log(Game.spawns[spawn].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,ATTACK], newName, 
            {memory: {role: type,spawn_location:spawn,priority:1}}));
    }
    else if(type=='repair' && spawn=="Spawn1"){ 
        console.log(Game.spawns[spawn].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE], newName, 
            {memory: {role: type,spawn_location:spawn,priority:1}}));
    }
    else if(type=='builder' && spawn=="Spawn1"){ 
        console.log(Game.spawns[spawn].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE], newName, 
            {memory: {role: type,spawn_location:spawn,priority:1}}));
    }
    else if(type=='SHUNTharvester' && spawn=="Spawn1"){ 
        console.log(Game.spawns[spawn].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE], newName, 
            {memory: {role: type,spawn_location:spawn,priority:1}}));
    }

    else{
        Game.spawns[spawn].spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE], newName, 
            {memory: {role: type,spawn_location:spawn,priority:1}});
    }}
    
//🗡
    if(Game.spawns[spawn].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns[spawn].spawning.name];
        Game.spawns[spawn].room.visual.text(
            '🚼🍼️' + spawningCreep.memory.role,
            Game.spawns[spawn].pos.x + 1, 
            Game.spawns[spawn].pos.y, 
            {align: 'left', opacity: 0.8});
    }
    
    
}






//this function need to return a list alpha or beta randomly

    


function DISABLEsource_id_from_position(position){
    if(position=='alpha'){
        return '1d190775111f525';
    }
    else if(position=='beta'){
        return '504d0775111fdb7';
    }
    else{
        return '1d190775111f525';
    }
}



module.exports = {creep_spawn,DISABLEsource_id_from_position};
//module.exports = spawner;