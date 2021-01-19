/** @param {Creep} creep **/
function creep_spawn(type) {
    var newName = type + Game.time;
    console.log('Spawning new '+type+': ' + newName);
    //set_creep_to_list(newName);
    Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,CARRY,MOVE], newName, 
        {memory: {role: type}});
    
   
}

function say_hello(type){
    console.log('I want to say '+type+': ' + type);
}

function init_list(){
    if(!Memory.liste_alpha || !Memory.liste_beta){
        Memory.liste_alpha = 0;
        Memory.liste_beta = 0;
        }
    }


//this function need to return a list alpha or beta randomly
function set_creep_to_list(creep_name){
    if(Math.floor(Math.random()*2)){
       //creep_name.memory.list = "liste_alpha";
       Game.creeps.creep_name.memory.rola = 'alpha';
       console.log('Set : ' + creep_name + ' in liste_alpha');
    }
    else{
       Game.creeps.creep_name.memory.rola = 'beta';
       //creep_name.Memory.list = "liste_beta";
       console.log('Set : ' + creep_name + ' in liste_beta');
    }
}




module.exports = {say_hello,creep_spawn,init_list,set_creep_to_list};
//module.exports = spawner;