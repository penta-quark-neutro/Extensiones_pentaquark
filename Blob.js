(function(Scratch) {'use strict';//por el (pentaquark neutro, penta quark neutro) y neutral auream
const com=Scratch.BlockType.COMMAND,str=Scratch.ArgumentType.STRING,bol=Scratch.BlockType.BOOLEAN,rep=Scratch.BlockType.REPORTER;
let regWork=Object.create(null),regSWork=Object.create(null),regMc=Object.create(null);
class Blobs{getInfo(){return {id:'Blob',name:'Blob',color1:'#600680',color2:'#4f0f00',color3:'#992299',blocks:[
{opcode:'bl0',blockType:rep,text:'new Blob[a]',arguments:{a:{type:str,defaultValue:'[datos]'}}},
{opcode:'bl1',blockType:rep,text:'new Blob[a][b]',arguments:{a:{type:str,defaultValue:'[datos]'},b:{type:str,defaultValue:'{opciones}'}}},
{opcode:'bl2',blockType:rep,text:'[a].size',arguments:{a:{type:str,defaultValue:'blob'}}},
{opcode:'bl3',blockType:rep,text:'[a].type',arguments:{a:{type:str,defaultValue:'blob'}}},
{opcode:'bl4',blockType:rep,text:'[a].[me]()',arguments:{a:{type:str,defaultValue:'blob'},me:{type:str,menu:'mets'}}},
{opcode:'bl5',blockType:rep,text:'[a].slice[b]',arguments:{a:{type:str,defaultValue:'blob'},b:{type:str}}},
{opcode:'bl6',blockType:rep,text:'[a].slice[b][c]',arguments:{a:{type:str,defaultValue:'blob'},b:{type:str},c:{type:str}}},
{opcode:'bl7',blockType:rep,text:'[a].slice[b][c][d]',arguments:{a:{type:str,defaultValue:'blob'},b:{type:str},c:{type:str},d:{type:str}}},
{opcode:'bl8',blockType:bol,text:'¿[a]esBlob?',arguments:{a:{type:str,defaultValue:''}}},

],menus:{
mets:{acceptReporters:0,items:['arrayBuffer','bytes','stream','text']}}
};}
bl0(ar){return new Blob(ar.a)}
bl1(ar){return new Blob(ar.a,ar.b)}
bl2(ar){return ar.a.size}
bl3(ar){return ar.a.type}
async bl4(ar){return await ar.a[ar.me]()}
bl5(ar){return ar.slice(ar.b)}
bl6(ar){return ar.slice(ar.b,ar.c)}
bl7(ar){return ar.slice(ar.b,ar.c,ar.d)}
bl8(ar){return ar.a instanceof Blob}

}Scratch.extensions.register(new Blobs());})(Scratch);