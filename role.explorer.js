var roleBuilder = require('role.builder');
var function_all = require('function_all');


function Move_to_target(explorer,flag) {
    const path = explorer.pos.findPathTo(19,24, 'W2N2');
    
    explorer.moveTo(new RoomPosition(19, 24, 'W2N2'));
    
    if(path.length > 0) {
        //explorer.move(path[0].direction);
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