/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('function_all');
 * mod.thing == 'a thing'; // true
 */

function retrieve_from_tombstone(creep){
    const targets = creep.room.find(FIND_DROPPED_RESOURCES);
    if(targets.length) {
        creep.moveTo(targets[0]);
        creep.pickup(targets[0]);
    }
}


function find_sources_and_take_energy(creep_in,custom_sources){
    var sources_memory = creep_in.pos.findClosestByPath(FIND_SOURCES);
    if(custom_sources){
         var sources_memory = creep_in.pos.findClosestByPath(creep_in.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_CONTAINER ||structure.structureType == STRUCTURE_STORAGE || structure.structureType == STRUCTURE_LINK)&&
                            structure.store.getUsedCapacity(RESOURCE_ENERGY) > 0;;
                    }
            }));
        if(sources_memory){
            if(creep_in.withdraw(sources_memory,RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep_in.moveTo(sources_memory, {visualizePathStyle: {stroke: '#ffaa00'}});
                creep_in.say('⚡ 🔙C');
            }
        }
    }
    //creep_in.say(creep_in.harvest(sources_memory))
    if(!custom_sources){
    	if(creep_in.harvest(sources_memory) == ERR_NOT_IN_RANGE) {
            creep_in.moveTo(sources_memory, {visualizePathStyle: {stroke: '#ffaa00'}});
            creep_in.say('⚡ 🔙');
        }
    }
}
function Clearing_non_existing_creep_memory(){
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory :', name);
            }
    }
}
function find_hostile_in_room(creep_in){
    const target = creep_in.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    return target
}

function attack_hostile(creep_in,target){
    if(target) {
        creep_in.say('🗡 targets')
        if(creep_in.attack(target) == ERR_NOT_IN_RANGE) {
            creep_in.moveTo(target);
        }
    }
}

function random(){
    if(Math.floor(Math.random()*2)){
        return 'alpha';
    }
    else{
       return 'beta';
    }
}
function bodyCost(body) {
    return body.reduce(function (cost, part) {
        return cost + BODYPART_COST[part];
    }, 0);
}
function generateBalancedBody(energyAvailable) {
    const pattern = [WORK, CARRY, MOVE]; // Balanced loop
    const body = [];
    let cost = 0;
    let i = 0;

    // Add minimum one of each
    for (const part of pattern) {
        const partCost = BODYPART_COST[part]; // Correct way to access the cost

        //console.log("part: " + part + " | BODYPART_COST[part]: " + partCost); // Log the cost of each part

        if (cost + partCost > energyAvailable) {
            return []; // not enough energy for minimum viable creep
        }
        body.push(part);
        cost += partCost;
    }

    // Loop and add more in round-robin pattern
    while (body.length < 50) {
        const part = pattern[i % pattern.length];
        const partCost = BODYPART_COST[part]; // Correct way to access the cost

        //console.log("part: " + part + " | BODYPART_COST[part]: " + partCost); // More debugging to check cost and part

        if (cost + partCost > energyAvailable) {
            break; // can't afford more
        }

        body.push(part);
        cost += partCost;
        i++;
    }

    return body;
}


module.exports = {bodyCost,retrieve_from_tombstone,find_sources_and_take_energy,Clearing_non_existing_creep_memory,attack_hostile,find_hostile_in_room,generateBalancedBody,random};