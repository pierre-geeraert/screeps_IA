var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.store.getFreeCapacity() > 99) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
                //console.log('Upgrader: ' + creep.name + ' will move to source');
            }
        }
        else {
            var sources_controller_object = creep.room.controller;
            if(creep.upgradeController(sources_controller_object, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources_controller_object);
                //console.log('Upgrader: ' + creep.name + ' will move to controller');
            }
        }
	}
};

module.exports = roleUpgrader;