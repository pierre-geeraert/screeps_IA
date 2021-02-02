/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('human_ressources');
 * mod.thing == 'a thing'; // true
 */

function user_regulation(Room_in,
quota_Harvesters,
quota_builders,
quota_repairs,
quota_warrepairs,
quota_upgraders,
quota_explorer,
quota_miner){

}
function user_counting(room_in){
    number_of_room = (room_in[5])
    console.log('=======================================================');
    var Total = _.filter(Game.creeps, (creep) => creep.memory.spawn_location == room_in);
    console.log('Room '+number_of_room+' : Total: ' + Total.length);
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.spawn_location == room_in);
    console.log('Room '+number_of_room+' : Harvesters: ' + harvesters.length);
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.memory.spawn_location == room_in);
    console.log('Room '+number_of_room+' : builders: ' + builders.length);
    var repairs = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairs' && creep.memory.spawn_location == room_in);
    console.log('Room '+number_of_room+' : repairs: ' + repairs.length);
    var warrepairs = _.filter(Game.creeps, (creep) => creep.memory.role == 'warrepairs' && creep.memory.spawn_location == room_in);
    console.log('Room '+number_of_room+' : warrepairs: ' + warrepairs.length);
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.spawn_location == room_in);
    console.log('Room '+number_of_room+' : upgraders: ' + upgraders.length);
    var explorer = _.filter(Game.creeps, (creep) => creep.memory.role == 'explorer' && creep.memory.spawn_location == room_in);
    console.log('Room '+number_of_room+' : explorer: ' + explorer.length);
    var miner = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner' && creep.memory.spawn_location == room_in);
    console.log('Room '+number_of_room+' : miner: ' + explorer.length);
    console.log('=======================================================');
}
module.exports = {user_counting};