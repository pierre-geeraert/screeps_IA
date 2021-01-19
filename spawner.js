var spawner = {

    /** @param {Creep} creep **/
    run: function(type) {
        var newName = type + Game.time;
        console.log('Spawning new '+type+': ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: type}});
       
	}
};

module.exports = spawner;