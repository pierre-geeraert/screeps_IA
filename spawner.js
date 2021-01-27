/** @param {Creep} creep **/
function creep_spawn(type) {
    var newName = type + Game.time;
    console.log('Spawning new '+type+': ' + newName);
    //set_creep_to_list(newName);
    var sources_random = set_creep_to_list();
    if(type=='upgrader'){
        var sources_random = 'alpha';  
    }
    if(type=='harvesterX'){//if number of harvester = 0 
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: type, creep_direction: sources_random}});
    }
    else{
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], newName, 
            {memory: {role: type, creep_direction: sources_random}});
    }
}

function say_hello(type){
    switch (type){
        case 'harvester':
            console.log("🔄 new harvester");
        break;
        case 'builder':
            console.log("🚧 new builder");
        break;
        case 'upgrader':
            console.log(":top: new upgrader");
        break;
        case 'repairs':
            console.log(":top: new repairs");
        break;
        
    }
    //console.log('I want to say '+type+': ' + type);
}

function init_list(){
    if(!Memory.liste_alpha || !Memory.liste_beta){
        Memory.liste_alpha = 0;
        Memory.liste_beta = 0;
        }
    }


//this function need to return a list alpha or beta randomly

    

function set_creep_to_list(creep_name){
    //Game.getObjectById(Game.creeps[name].memory.targetID)
    //var creep_test = Game.creeps.builder538588.id;
    //console.log(creep_test);
    
    //Game.creeps.creep_name.say('e');
    //var creep_desired = Game.creeps.id;
    
    if(Math.floor(Math.random()*2)){
        //creep.memory.sources = 'alpha' 
       //creep_name.memory.list = "liste_alpha";
       //Game.creeps.creep_name.memory.rola = 'alpha';
       //console.log('Set : ' + creep + ' in liste_alpha');
       return 'alpha';
    }
    else{
        //creep.memory.sources = 'beta' 
       //Game.creeps.creep_name.memory.rola = 'beta';
       //creep_name.Memory.list = "liste_beta";
       //console.log('Set : ' + creep + ' in liste_beta');
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



module.exports = {say_hello,creep_spawn,init_list,set_creep_to_list,source_id_from_position};
//module.exports = spawner;