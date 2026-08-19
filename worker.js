(function(Scratch) {'use strict';//por el (pentaquark neutro, penta quark neutro) y neutral auream
const com=Scratch.BlockType.COMMAND,str=Scratch.ArgumentType.STRING,bol=Scratch.BlockType.BOOLEAN,rep=Scratch.BlockType.REPORTER;
let regWork=Object.create(null),regSWork=Object.create(null),regMc=Object.create(null);
class Workers{getInfo(){return {id:'Workers',name:'Workers',color1:'#0faa0f',color2:'#0f0f40',color3:'#aaff00',blocks:[
{opcode:'wr0',blockType:com,text:'new Worker[a] registro[b]',arguments:{a:{type:str,defaultValue:'codigoURL'},b:{type:str,defaultValue:'worker_1'}}},
{opcode:'wr11',blockType:com,text:'new Worker[a][c] registro[b]',arguments:{a:{type:str,defaultValue:'codigoURL'},b:{type:str,defaultValue:'worker_1'},c:{type:str,defaultValue:'{opciones}'}}},
{opcode:'wr1',blockType:rep,text:'scriptURL[a]',arguments:{a:{type:str,defaultValue:'JS'}}},
{opcode:'wr2',blockType:com,text:'[a]onmessage=(k)=>{[b]}',arguments:{a:{type:str,defaultValue:'worker_1'},b:{type:str,defaultValue:'JS'}}},
{opcode:'wr12',blockType:com,text:'[a]onerror=(k)=>{[b]}',arguments:{a:{type:str,defaultValue:'worker_1'},b:{type:str,defaultValue:'JS'}}},
{opcode:'wr3',blockType:com,text:'[a]postMessage([b])',arguments:{a:{type:str,defaultValue:'worker_1'},b:{type:str,defaultValue:'0'}}},
{opcode:'wr26',blockType:com,text:'[a]postMessage([b],[c])',arguments:{a:{type:str,defaultValue:'worker_1'},b:{type:str,defaultValue:'0'},c:{type:str,defaultValue:'[transferibles]'}}},
{opcode:'wr13',blockType:com,text:'[a]onmessage variable[b]=k',arguments:{a:{type:str,defaultValue:'worker_1'},b:{type:str,defaultValue:'var_1'}}},
{opcode:'wr14',blockType:com,text:'[a]onerror variable[b]=k',arguments:{a:{type:str,defaultValue:'worker_1'},b:{type:str,defaultValue:'var_1'}}},
{opcode:'wr4',blockType:com,text:'revokeURL[a]',arguments:{a:{type:str,defaultValue:'scriptURL'}}},
{opcode:'wr5',blockType:com,text:'[a]terminate',arguments:{a:{type:str,defaultValue:'worker_1'}}},
{opcode:'wr6',blockType:rep,text:'workers',disableMonitor:1},
{opcode:'wr7',blockType:rep,text:'{}',disableMonitor:1},
{opcode:'wr8',blockType:rep,text:'〚〛',disableMonitor:1},
{opcode:'wr9',blockType:rep,text:'[a]〚[b]〛',arguments:{a:{type:str},b:{type:str}}},
{opcode:'wr10',blockType:com,text:'[a]〚[b]〛=[c]',arguments:{a:{type:str},b:{type:str},c:{type:str}}},
{opcode:'wr30',blockType:com,text:'[a]〚[b]〛()',arguments:{a:{type:str},b:{type:str}}},
{opcode:'wr31',blockType:com,text:'[a]〚[b]〛([c])',arguments:{a:{type:str},b:{type:str},c:{type:str}}},
{opcode:'wr33',blockType:rep,text:'[a]〚[b]〛()',arguments:{a:{type:str},b:{type:str}}},
{opcode:'wr34',blockType:rep,text:'[a]〚[b]〛([c])',arguments:{a:{type:str},b:{type:str},c:{type:str}}},
{opcode:'wr15',blockType:com,text:'new SharedWorker[a] registro[b]',arguments:{a:{type:str,defaultValue:'codigoURL'},b:{type:str,defaultValue:'worker_1'}}},
{opcode:'wr16',blockType:com,text:'new SharedWorker[a][c] registro[b]',arguments:{a:{type:str,defaultValue:'codigoURL'},b:{type:str,defaultValue:'worker_1'},c:{type:str,defaultValue:'{opciones}/nombre'}}},
{opcode:'wr18',blockType:com,text:'[a]port.start()',arguments:{a:{type:str,defaultValue:'worker_1'}}},
{opcode:'wr19',blockType:com,text:'[a]port.onmessage=(k)=>{[b]}',arguments:{a:{type:str,defaultValue:'worker_1'},b:{type:str,defaultValue:'JS'}}},
{opcode:'wr20',blockType:com,text:'[a]port.onerror=(k)=>{[b]}',arguments:{a:{type:str,defaultValue:'worker_1'},b:{type:str,defaultValue:'JS'}}},
{opcode:'wr24',blockType:com,text:'[a]port.onconnect=(k)=>{[b]}',arguments:{a:{type:str,defaultValue:'worker_1'},b:{type:str,defaultValue:'JS'}}},
{opcode:'wr21',blockType:com,text:'[a]port.postMessage([b])',arguments:{a:{type:str,defaultValue:'worker_1'},b:{type:str,defaultValue:'0'}}},
{opcode:'wr27',blockType:com,text:'[a]port.postMessage([b],[c])',arguments:{a:{type:str,defaultValue:'worker_1'},b:{type:str,defaultValue:'0'},c:{type:str,defaultValue:'[transferibles]'}}},
{opcode:'wr22',blockType:com,text:'[a]port.onmessage variable[b]=k',arguments:{a:{type:str,defaultValue:'worker_1'},b:{type:str,defaultValue:'var_1'}}},
{opcode:'wr23',blockType:com,text:'[a]port.onerror variable[b]=k',arguments:{a:{type:str,defaultValue:'worker_1'},b:{type:str,defaultValue:'var_1'}}},
{opcode:'wr25',blockType:com,text:'[a]port.onconnect variable[b]=k',arguments:{a:{type:str,defaultValue:'worker_1'},b:{type:str,defaultValue:'var_1'}}},
{opcode:'wr17',blockType:rep,text:'sharedworkers',disableMonitor:1},
{opcode:'wr28',blockType:com,text:'new MessageChannel registro[a]',arguments:{a:{type:str,defaultValue:'Mech_1'}}},
{opcode:'wr29',blockType:rep,text:'MessageChannel[a]',arguments:{a:{type:str,defaultValue:'Mech_1'}}},
{opcode:'wr32',blockType:rep,text:'MessageChannels',disableMonitor:1},

],};}
wr0(ar){if(regWork[ar.b]){return ;}regWork[ar.b]=(new Worker(ar.a))}
wr1(ar){return URL.createObjectURL(new Blob([ar.a],{type:'text/javascript'}))}
wr2(ar){if(regWork[ar.a]){regWork[ar.a].onmessage=Function('return (k)=>'+ar.b)()}}
wr3(ar){if(regWork[ar.a]){regWork[ar.a].postMessage(ar.b)}}
wr4(ar){URL.revokeObjectURL(ar.a)}
wr5(ar){if(regWork[ar.a]){regWork[ar.a].terminate();Reflect.deleteProperty(regWork,ar.a);}}
wr6(ar){return Reflect.ownKeys(regWork).toString()}
wr7(ar){return {}}
wr8(ar){return []}
wr9(ar){return ar.a[ar.b]}
wr10(ar){ar.a[ar.b]=ar.c}
wr11(ar){if(regWork[ar.b]){return ;}regWork[ar.b]=(new Worker(ar.a,ar.c))}
wr12(ar){if(regWork[ar.a]){regWork[ar.a].onerror=Function('return (k)=>'+ar.b)()}}
wr13(ar,util){if(regWork[ar.a]){regWork[ar.a].onmessage=(k)=>util.target.lookupVariableByNameAndType(ar.b+'','').value=k;}}
wr14(ar,util){if(regWork[ar.a]){regWork[ar.a].onerror=(k)=>util.target.lookupVariableByNameAndType(ar.b+'','').value=k;}}
wr15(ar){if(regSWork[ar.b]){return ;}regSWork[ar.b]=(new SharedWorker(ar.a))}
wr16(ar){if(regSWork[ar.b]){return ;}regSWork[ar.b]=(new SharedWorker(ar.a,ar.b))}
wr17(ar){return Reflect.ownKeys(regSWork).toString()}
wr18(ar){if(regSWork[ar.a]){regSWork[ar.a].port.start()}}
wr19(ar){if(regSWork[ar.a]){regSWork[ar.a].port.onmessage=Function('return (k)=>'+ar.b)()}}
wr20(ar){if(regSWork[ar.a]){regSWork[ar.a].port.onerror=Function('return (k)=>'+ar.b)()}}
wr21(ar){if(regSWork[ar.a]){regSWork[ar.a].port.postMessage(ar.b)}}
wr22(ar,util){if(regSWork[ar.a]){regSWork[ar.a].port.onmessage=(k)=>util.target.lookupVariableByNameAndType(ar.b+'','').value=k;}}
wr23(ar,util){if(regSWork[ar.a]){regSWork[ar.a].port.onerror=(k)=>util.target.lookupVariableByNameAndType(ar.b+'','').value=k;}}
wr24(ar){if(regSWork[ar.a]){regSWork[ar.a].port.onconnect=Function('return (k)=>'+ar.b)()}}
wr25(ar,util){if(regSWork[ar.a]){regSWork[ar.a].port.onconnect=(k)=>util.target.lookupVariableByNameAndType(ar.b+'','').value=k;}}
wr26(ar){if(regWork[ar.a]){regWork[ar.a].postMessage(ar.b,ar.c)}}
wr27(ar){if(regSWork[ar.a]){regSWork[ar.a].port.postMessage(ar.b,ar.c)}}
wr28(ar){if(regMc[ar.a]){return ;}regMc[ar.a]=new MessageChannel()}
wr29(ar){if(regMc[ar.a]){return regMc[ar.a]}}
wr30(ar){ar.a[ar.b]()}
wr31(ar){ar.a[ar.b](ar.c)}
wr32(ar){return Reflect.ownKeys(regMc).toString()}
wr33(ar){return ar.a[ar.b]()}
wr34(ar){return ar.a[ar.b](ar.c)}

}Scratch.extensions.register(new Workers());})(Scratch);