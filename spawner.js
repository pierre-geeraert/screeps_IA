/** @param {Creep} creep **/
function creep_spawn(type,spawn) {
    //var spawn = 'Spawn1'
    var newName = spawn+"_"+ type + Game.time;
    console.log('Spawning new '+type+': ' + newName);
    //set_creep_to_list(newName);
    var sources_random = set_creep_to_list();
    if(type=='upgrader'){
        var sources_random = 'alpha';  
    }
    if(type=="rescue"){//if number of harvester = 0 
        Game.spawns[spawn].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: 'harvester',spawn_location:spawn, creep_direction: sources_random}});
    }
    if(spawn=="SHUNTSpawn2"){//if number of harvester = 0 
        Game.spawns[spawn].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: type,spawn_location:spawn, creep_direction: sources_random}});
    }
    else if(type=='warrepairs'&& spawn=="Spawn1"){ 
        Game.spawns[spawn].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,ATTACK], newName, 
            {memory: {role: type,spawn_location:spawn}});
    }
    else if(type=='warrepairs' && spawn=="Spawn2"){ 
        console.log(Game.spawns[spawn].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,ATTACK], newName, 
            {memory: {role: type,spawn_location:spawn}}));
    }
    else{
        Game.spawns[spawn].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], newName, 
            {memory: {role: type,spawn_location:spawn, creep_direction: sources_random}});
    }
    
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

    

function set_creep_to_list(creep_name){
    if(Math.floor(Math.random()*2)){
        return 'alpha';
    }
    else{
       return 'beta';
    }
}
function source_id_from_position(position){
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



module.exports = {creep_spawn,set_creep_to_list,source_id_from_position};
//module.exports = spawner;