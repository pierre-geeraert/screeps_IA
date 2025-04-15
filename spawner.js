var function_all = require('function_all');
/** @param {Creep} creep **/
function creep_spawn(type,spawn) {
//if(!(Game.spawns['Spawn1'].energy < 300)){
    var newName = spawn+"_"+ type + Game.time;
    console.log('Spawning new '+type+': ' + newName);

    array_body = [CARRY,MOVE,WORK]
    energy_available = Game.rooms["W7N2"].energyAvailable; 
    body_parts_number = energy_available/50;
    trunc_body_parts_number = Math.trunc(body_parts_number);
    console.log("trunc_body_parts_number: "+trunc_body_parts_number)
    let final_array = array_body; 
    
    //adding -2 to trunc_body_parts_number because WORK needs 100 instead of 50
    //while (final_array.length < trunc_body_parts_number-3){
    //    final_array.push(array_body[Math.floor(Math.random() * 2)]);
        //console.log(final_array)
        
    //}

   let bodyParts = function_all.generateBalancedBody(energy_available);
    console.log(bodyParts)
    const totalCost = bodyParts.reduce((sum, part) => {
    return sum + BODYPART_COST[part];
}, 0);
console.log("Total cost:", totalCost, "Energy available:", energy_available);
    var testIfCanSpawn = Game.spawns['Spawn1'].spawnCreep(bodyParts, 'Worker1', { dryRun: true });
  //  console.log("body cost: "+function_all.bodyCost(final_array))
    
    if(testIfCanSpawn==0){
        console.log("can spawn: "+bodyParts)
        console.log(Game.spawns[spawn].spawnCreep(bodyParts, newName, 
            {memory: {role: type,spawn_location:spawn,priority:1,level:final_array.length}}));
    }else{
        console.log("can I spawn? "+testIfCanSpawn)
    
    }
//}else{
//    console.log("Waiting controller to be fully charged")
//}


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
