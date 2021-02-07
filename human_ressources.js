var spawner = require('spawner');

function user_regulation(Room_in,
quota_Harvesters,
quota_builders,
quota_repairs,
quota_warrepairs,
quota_upgraders,
quota_explorer,
quota_miner){
    
const [Total,harvesters,builders,repairs,warrepairs,upgraders,explorer,miner,rescue,fighter] = user_counting(room_in=Room_in,display_in_console=0);
    if(Total.length <= 1){spawner.creep_spawn("rescue",Room_in);}
    //group 1
    if(harvesters.length < quota_Harvesters) {
        console.log('inferior to '+quota_Harvesters)
        spawner.creep_spawn("harvester",Room_in);
    }
    if(harvesters.length >= quota_Harvesters){
        //group2
        if(upgraders.length < quota_upgraders) {spawner.creep_spawn(type="upgrader",spawn=Room_in);}
        
        if(upgraders.length >= quota_upgraders){
            //group 3
            if(builders.length < quota_builders) {spawner.creep_spawn("builder",Room_in);}
            if(repairs.length < quota_repairs) {spawner.creep_spawn("repairs",Room_in);}
            
            if(builders.length >= quota_builders && repairs.length >= quota_repairs){
                if(warrepairs.length < quota_warrepairs) {spawner.creep_spawn("warrepairs",Room_in);}
                if(explorer.length < quota_explorer) {spawner.creep_spawn("explorer",Room_in);}
                if(miner.length < quota_miner) {spawner.creep_spawn("miner",Room_in);}
            }
        }
    }
 
}

function user_counting(room_in,display_in_console){
    number_of_room = (room_in[5])
    var Total = _.filter(Game.creeps, (creep) => creep.memory.spawn_location == room_in);
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.spawn_location == room_in);
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.memory.spawn_location == room_in);
    var repairs = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairs' && creep.memory.spawn_location == room_in);
    var warrepairs = _.filter(Game.creeps, (creep) => creep.memory.role == 'warrepairs' && creep.memory.spawn_location == room_in);
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.spawn_location == room_in);
    var explorer = _.filter(Game.creeps, (creep) => creep.memory.role == 'explorer' && creep.memory.spawn_location == room_in);
    var miner = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner' && creep.memory.spawn_location == room_in);
    var rescue = _.filter(Game.creeps, (creep) => creep.memory.role == 'rescue' && creep.memory.spawn_location == room_in);
    var fighter = _.filter(Game.creeps, (creep) => creep.memory.role == 'fighter' && creep.memory.spawn_location == room_in);
        
        if(display_in_console){
            console.log('=======================================================');
            console.log('Room '+number_of_room+' : Total: ' + Total.length);
            console.log('Room '+number_of_room+' : Harvesters: ' + harvesters.length);
            console.log('Room '+number_of_room+' : builders: ' + builders.length);
            console.log('Room '+number_of_room+' : repairs: ' + repairs.length);
            console.log('Room '+number_of_room+' : warrepairs: ' + warrepairs.length);
            console.log('Room '+number_of_room+' : upgraders: ' + upgraders.length);
            console.log('Room '+number_of_room+' : explorer: ' + explorer.length);
            console.log('Room '+number_of_room+' : miner: ' + explorer.length);
            console.log('Room '+number_of_room+' : rescue: ' + rescue.length);
            console.log('Room '+number_of_room+' : fighter: ' + fighter.length);
            console.log('=======================================================');
        }
    
    return [Total,harvesters,builders,repairs,warrepairs,upgraders,explorer,miner,rescue,fighter]
            
    }
module.exports = {user_counting,user_regulation};