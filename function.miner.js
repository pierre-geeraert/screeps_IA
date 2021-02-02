var function_all = require('function_all');
var functionHarvester = require('function.harvester');


function find_mineral_and_take_energy(creep_in){
    var sources_memory = creep_in.pos.findClosestByPath(FIND_MINERALS);
	if(creep_in.harvest(sources_memory) == ERR_NOT_IN_RANGE) {
        creep_in.moveTo(sources_memory, {visualizePathStyle: {stroke: '#ffaa00'}});
        creep_in.say('🛠🛠️');
    }
}
function harvest_lab(creep_in,lab_id){
    function_all.find_sources_and_take_energy(creep_in)
    var lab = Game.getObjectById(lab_id);
    functionHarvester.move_to_and_transfer(creep_in,lab)
}
module.exports = {find_mineral_and_take_energy,harvest_lab};