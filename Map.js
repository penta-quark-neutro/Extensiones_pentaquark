(function(Scratch) {'use strict';//por el (pentaquark neutro, penta quark neutro) y neutral auream
const com0=Scratch.BlockType.COMMAND;const str0=Scratch.ArgumentType.STRING;
const bol0=Scratch.BlockType.BOOLEAN;const rep0=Scratch.BlockType.REPORTER;
class MAP{getInfo(){return {id:'MAP',name:'MAP',color1:'#d1a199',color2:'#30c0c0',color3:'#13a377',blocks:[
{opcode:'mp0',blockType:rep0,text:'new Map[a]',arguments:{a:{type:str0,defaultValue:''}}},
{opcode:'mp13',blockType:rep0,text:'new WeakMap[a]',arguments:{a:{type:str0,defaultValue:''}}},
{opcode:'mp1',blockType:rep0,text:'[map].set[a][b]',arguments:{a:{type:str0,defaultValue:'0'},b:{type:str0,defaultValue:'cosa'},map:{type:str0,defaultValue:''}}},
{opcode:'mp1_2',blockType:com0,text:'[map].set[a][b]',arguments:{a:{type:str0,defaultValue:'0'},b:{type:str0,defaultValue:'cosa'},map:{type:str0,defaultValue:''}}},
{opcode:'mp2',blockType:bol0,text:'[map].has[a]',arguments:{a:{type:str0,defaultValue:'0'},map:{type:str0,defaultValue:''}}},
{opcode:'mp3',blockType:rep0,text:'[map].get[a]',arguments:{a:{type:str0,defaultValue:'0'},map:{type:str0,defaultValue:''}}},
{opcode:'mp4',blockType:bol0,text:'[map].delete[a]',arguments:{a:{type:str0,defaultValue:'0'},map:{type:str0,defaultValue:''}}},
{opcode:'mp4_2',blockType:com0,text:'[map].delete[a]',arguments:{a:{type:str0,defaultValue:'0'},map:{type:str0,defaultValue:''}}},
{opcode:'mp5',blockType:com0,text:'[map].clear',arguments:{map:{type:str0,defaultValue:''}}},
{opcode:'mp6',blockType:rep0,text:'[map].entries',arguments:{map:{type:str0,defaultValue:''}}},
{opcode:'mp7',blockType:rep0,text:'[map].getOrInsert[a][b]',arguments:{a:{type:str0,defaultValue:'0'},b:{type:str0,defaultValue:'default'},map:{type:str0,defaultValue:''}}},
{opcode:'mp14',blockType:rep0,text:'[map].getOrInsertComputed[a][b]',arguments:{a:{type:str0,defaultValue:'0'},b:{type:str0,defaultValue:'default'},map:{type:str0,defaultValue:''}}},
{opcode:'mp8',blockType:rep0,text:'[map].keys',arguments:{map:{type:str0,defaultValue:''}}},
{opcode:'mp9',blockType:rep0,text:'[map].values',arguments:{map:{type:str0,defaultValue:''}}},
{opcode:'mp10',blockType:rep0,text:'[map].size',arguments:{map:{type:str0,defaultValue:''}}},
{opcode:'mp11',blockType:rep0,text:'[map] StringifyMap',arguments:{map:{type:str0,defaultValue:''}}},
{opcode:'mp12',blockType:rep0,text:'[map] parseMap',arguments:{map:{type:str0,defaultValue:'[[0,"cosa"],[1,"otro"]]'}}}
],};}
mp0(ar){return new Map(ar.a)}
mp13(ar){return new WeakMap(ar.a)}
mp1(ar){return ar.map.set(ar.a,ar.b)}
mp1_2(ar){ar.map.set(ar.a,ar.b)}
mp2(ar){return ar.map.has(ar.a)}
mp3(ar){return ar.map.get(ar.a)}
mp4(ar){return ar.map.delete(ar.a)}
mp4_2(ar){ar.map.delete(ar.a)}
mp5(ar){ar.map.clear()}
mp6(ar){return Array.from(ar.map.entries())}
mp7(ar){return ar.map.getOrInsert(ar.a,ar.b)}//if(map.has(a)){return map.get(a)}else{map.set(a,b);return b}
mp8(ar){return Array.from(ar.map.keys())}
mp9(ar){return Array.from(ar.map.values())}
mp10(ar){return ar.map.size}
mp11(ar){return JSON.stringify(Array.from(ar.map))}
mp12(ar){return new Map(JSON.parse(ar.map))}
mp14(ar){return ar.map.getOrInsertComputed(ar.a,ar.b)}
}Scratch.extensions.register(new MAP());})(Scratch);