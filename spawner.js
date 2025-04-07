/** @param {Creep} creep **/
function creep_spawn(type,spawn) {
    var newName = spawn+"_"+ type + Game.time;
    console.log('Spawning new '+type+': ' + newName);

    
    var testIfCanSpawnLevel3 = Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], 'Worker1', { dryRun: true });
    var testIfCanSpawnLevel2 = Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], 'Worker1', { dryRun: true });
    var testIfCanSpawnLevel1 = Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], 'Worker1', { dryRun: true });
    
    if (testIfCanSpawnLevel3 == 0){
        console.log('il est -6')
        Game.spawns[spawn].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], newName, 
            {memory: {role: type,spawn_location:spawn,priority:1}});
    }else if(testIfCanSpawnLevel3 != 0 && testIfCanSpawnLevel2 == 0){
        Game.spawns[spawn].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], newName, 
            {memory: {role: type,spawn_location:spawn,priority:1}});
    }else if(testIfCanSpawnLevel3 != 0 && testIfCanSpawnLevel2 != 0 && testIfCanSpawnLevel1 == 0){
        Game.spawns[spawn].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: type,spawn_location:spawn,priority:1}});}


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