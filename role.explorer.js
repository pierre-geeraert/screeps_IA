var roleBuilder = require('role.builder');
var function_all = require('function_all');


function Move_to_target(explorer,flag) {
    const path = explorer.pos.findPathTo(44,31, 'W7N1');
    //const path = explorer.pos.findPathTo(23, 31, 'W1N7');
    
    explorer.moveTo(new RoomPosition(44,31, 'W7N1'));
    //explorer.moveTo(new RoomPosition(16, 28, 'W7N8'));
    
    if(path.length > 0) {
        explorer.move(path[0].direction);
    }
    if(path.length < 2) {
        //claim_controller(explorer)
        explorer.say('in')
        explorer.memory.role = 'harvester';
        explorer.memory.spawn_location = "spawn2";
        //roleBuilder.run(explorer);

    }
   
}


function claim_controller(explorer){
    if(explorer.room.controller) {
        if(explorer.claimController(explorer.room.controller) == ERR_NOT_IN_RANGE) {
            explorer.moveTo(explorer.room.controller);
        }
        else{
            explorer.memory.role = 'builder'
        }
    }    
}





module.exports = {Move_to_target,claim_controller};