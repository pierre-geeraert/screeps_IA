function Move_to_target(explorer) {
    //var explorer = Game.getObjectById('3688e98f0ccbc32')
    //creep_direction_flag
    
    
    //var nbr = parseInt(testeur.memory.creep_direction_flag[4])
    //console.log(nbr+1)
    
        //var copain = Game.getObjectById('2e9745e03c40c8a')
    //copain.moveTo(Game.flags.Flag100);
    //const path = copain.pos.findPathTo(Game.flags.Flag100);
    //console.log(path.length);

    var distant_flag = "Game.flags."+explorer.memory.creep_direction_flag;
    console.log(distant_flag);
    const path = explorer.pos.findPathTo(distant_flag);
    console.log(path.length);

    if(path.length > 2) {
        explorer.moveTo(explorer.pos.findPathTo(explorer.memory.creep_direction_flag));
        explorer.say('he')
    }
    else if(path.length <= 2) {
        var flag_number = parseInt(explorer.memory.creep_direction_flag[4])
        explorer.memory.creep_direction_flag = "flag"+(flag_number+1)
    }
    
    
    //explorer.moveTo(Game.flags.Flag6);
    
    
    //if(explorer.room.controller) {
    //if(explorer.claimController(explorer.room.controller) == ERR_NOT_IN_RANGE) {
    //    explorer.moveTo(explorer.room.controller);
    //}
    //}
    //explorer.Memory.role = 'harvester';

}
module.exports = {Move_to_target};