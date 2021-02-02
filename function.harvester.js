function move_to_and_transfer(creep_in,targets_in){
    if(creep_in.transfer(targets_in, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        creep_in.moveTo(targets_in, {visualizePathStyle: {stroke: '#ff00f7'}});
        creep_in.say('⚡ 🔜');
    }
}

module.exports = {move_to_and_transfer};