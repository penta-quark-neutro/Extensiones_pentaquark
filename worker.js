(function(Scratch) {'use strict';//por el (pentaquark neutro, penta quark neutro) y neutral auream
const com=Scratch.BlockType.COMMAND,str=Scratch.ArgumentType.STRING,bol=Scratch.BlockType.BOOLEAN,rep=Scratch.BlockType.REPORTER;
let regWork=Object.create(null);
class Workers{getInfo(){return {id:'Workers',name:'Workers',color1:'#0faa0f',color2:'#0f0f40',color3:'#aaff00',blocks:[
{opcode:'wr0',blockType:com,text:'new worker[a] registro[b]',arguments:{a:{type:str,defaultValue:'codigoURL'},b:{type:str,defaultValue:'worker_1'}}},
{opcode:'wr1',blockType:rep,text:'scriptURL[a]',arguments:{a:{type:str,defaultValue:'JS'}}},
{opcode:'wr2',blockType:com,text:'[a]onmessage=(k)=>{[b]}',arguments:{a:{type:str,defaultValue:'worker_1'},b:{type:str,defaultValue:'JS'}}},
{opcode:'wr3',blockType:com,text:'[a]postMessage([b])',arguments:{a:{type:str,defaultValue:'worker_1'},b:{type:str,defaultValue:'0'}}},
{opcode:'wr4',blockType:com,text:'revokeURL[a]',arguments:{a:{type:str,defaultValue:'scriptURL'}}},
{opcode:'wr5',blockType:com,text:'[a]terminate',arguments:{a:{type:str,defaultValue:'worker_1'}}},
{opcode:'wr6',blockType:rep,text:'workers',disableMonitor:1},
{opcode:'wr7',blockType:rep,text:'{}',disableMonitor:1},
{opcode:'wr8',blockType:rep,text:'〚〛',disableMonitor:1},
{opcode:'wr9',blockType:rep,text:'[a]〚[b]〛',arguments:{a:{type:str},b:{type:str}}},
{opcode:'wr10',blockType:rep,text:'[a]〚[b]〛=[c]',arguments:{a:{type:str},b:{type:str},c:{type:str}}},

],};}
wr0(ar){regWork[ar.b]=(new Worker(ar.a))}
wr1(ar){return URL.createObjectURL(new Blob([ar.a],{type:'text/javascript'}))}
wr2(ar){if(regWork[ar.a]){regWork[ar.a].onmessage=Function('return (k)=>'+ar.b)()}}
wr3(ar){if(regWork[ar.a]){regWork[ar.a].postMessage(ar.b)}}
wr4(ar){URL.revokeObjectURL(ar.a)}
wr5(ar){if(regWork[ar.a]){regWork[ar.a].terminate();Reflect.deleteProperty(regWork,ar.a);}}
wr6(ar){return Reflect.ownKeys(regWork).toString()}
wr7(ar){return {}}
wr8(ar){return []}
wr9(ar){return ar.a[ar.b]}
wr10(ar){return ar.a[ar.b]=ar.c}

}Scratch.extensions.register(new Workers());})(Scratch);