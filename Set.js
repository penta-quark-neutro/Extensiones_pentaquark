(function(Scratch) {'use strict';
const com0=Scratch.BlockType.COMMAND;const str0=Scratch.ArgumentType.STRING;
const bol0=Scratch.BlockType.BOOLEAN;const rep0=Scratch.BlockType.REPORTER;
const vm=Scratch.vm;
if(!vm.runtime.extensionStorage['SET']){vm.runtime.extensionStorage['SET']=new Set()}
if(!Scratch.extensions.unsandboxed){throw new Error('unsandboxed');}
class SET{getInfo(){return {id:'SET',name:'SET',color1:'#0092a0',color2:'#b3680f',color3:'#90c144',blocks: [
{opcode:'a0',blockType:rep0,text:'new Set[a]',arguments:{a:{type:str0,defaultValue:''}}},
{opcode:'a1',blockType:bol0,text:'¿[a]tiene[b]?',arguments:{a:{type:str0,defaultValue:''},b:{type:str0,defaultValue:'txt'}}},
{opcode:'a2',blockType:rep0,text:'[a]añadir[b]',arguments:{a:{type:str0,defaultValue:''},b:{type:str0,defaultValue:'txt'}}},
{opcode:'a2_2',blockType:com0,text:'[a]añadir[b]',arguments:{a:{type:str0,defaultValue:''},b:{type:str0,defaultValue:'txt'}}},
{opcode:'a3',blockType:com0,text:'vaciar[a]',arguments:{a:{type:str0,defaultValue:''}}},
{opcode:'a4_2',blockType:bol0,text:'[a]eliminar[b]',arguments:{a:{type:str0,defaultValue:''},b:{type:str0,defaultValue:'txt'}}},
{opcode:'a4',blockType:com0,text:'[a]eliminar[b]',arguments:{a:{type:str0,defaultValue:''},b:{type:str0,defaultValue:'txt'}}},
{opcode:'a5',blockType:rep0,text:'[a]diferencia[b]A∖B',arguments:{a:{type:str0,defaultValue:''},b:{type:str0,defaultValue:''}}},
{opcode:'a6',blockType:rep0,text:'entradas[a]',arguments:{a:{type:str0,defaultValue:''}}},
{opcode:'a7',blockType:rep0,text:'[a]interseccion[b]A∩B',arguments:{a:{type:str0,defaultValue:''},b:{type:str0,defaultValue:''}}},
{opcode:'a8',blockType:bol0,text:'[a]es disjunto[b]',arguments:{a:{type:str0,defaultValue:''},b:{type:str0,defaultValue:''}}},
{opcode:'a9',blockType:bol0,text:'[a]es Subconjunto de[b]A⊆B',arguments:{a:{type:str0,defaultValue:''},b:{type:str0,defaultValue:''}}},
{opcode:'a10',blockType:bol0,text:'[a]contiene[b]A⊇B',arguments:{a:{type:str0,defaultValue:''},b:{type:str0,defaultValue:''}}},
{opcode:'a11',blockType:rep0,text:'[a]diferencia[b]A⊖B',arguments:{a:{type:str0,defaultValue:''},b:{type:str0,defaultValue:''}}},
{opcode:'a12',blockType:rep0,text:'[a]union[b]A∪B',arguments:{a:{type:str0,defaultValue:''},b:{type:str0,defaultValue:''}}},
{opcode:'a13',blockType:rep0,text:'tamaño de[a]',arguments:{a:{type:str0,defaultValue:''}}},
{opcode:'a14',blockType:com0,text:'añadir a etiqueta[a]',arguments:{a:{type:str0,defaultValue:'coli'}}},
{opcode:'a17',blockType:com0,text:'eliminar de etiqueta[a]',arguments:{a:{type:str0,defaultValue:'coli'}}},
{opcode:'a20',blockType:rep0,text:'¿tiene etiqueta[a]?',arguments:{a:{type:str0,defaultValue:'coli'}}},
{opcode:'a18',blockType:com0,text:'limpiar etiqueta'},
{opcode:'a15',blockType:rep0,text:'tocando objeto con etiqueta[a]',arguments:{a:{type:str0,defaultValue:'coli'}}},
{opcode:'a16',blockType:rep0,text:'tocando objeto con etiqueta[a]de lista[b]',arguments:{a:{type:str0,defaultValue:'coli'},b:{type:str0,defaultValue:''}}},
{opcode:'a19',blockType:rep0,text:'etiqueta',disableMonitor:1},
{opcode:'a21',blockType:rep0,text:'SET global persistente',disableMonitor:1},
],};}
a0(ar){return new Set(ar.a);}
a1(ar){return ar.a.has(ar.b);}
a2(ar){return ar.a.add(ar.b);}
a2_2(ar){ar.a.add(ar.b);}
a3(ar){ar.a.clear()}
a4(ar){ar.a.delete(ar.b);}
a4_2(ar){return ar.a.delete(ar.b);}
a5(ar){return ar.a.difference(ar.b);}
a6(ar){var j=[];for(const entry of ar.a.entries()){j.push(entry[0]);}return j;}
a7(ar){return ar.a.intersection(ar.b);}
a8(ar){return ar.a.isDisjointFrom(ar.b);}
a9(ar){return ar.a.isSubsetOf(ar.b);}
a10(ar){return ar.a.isSupersetOf(ar.b);}
a11(ar){return ar.a.symmetricDifference(ar.b);}
a12(ar){return ar.a.union(ar.b);}
a13(ar){return ar.a.size;}
a14(ar,util){if(!util.target.tag2){util.target.tag2=new Set()}util.target.tag2.add(ar.a);}
a15(ar,util){return vm.renderer.isTouchingDrawables(util.target.drawableID,vm.runtime.targets.filter(dat=>(dat.tag2 && dat.tag2.has(ar.a))).map(dat=>dat.drawableID));}
a16(ar,util){return vm.renderer.isTouchingDrawables(util.target.drawableID,ar.b.filter(dat=>(dat.tag2 && dat.tag2.has(ar.a))).map(dat=>dat.drawableID));}
a17(ar,util){if(util.target.tag2){util.target.tag2.delete(ar.a);}}
a18(ar,util){if(util.target.tag2){util.target.tag2.clear();}}
a19(ar,util){if(util.target.tag2){var j=[];for(const entry of util.target.tag2.entries()){j.push(entry[0]);}return j;}}
a20(ar,util){if(util.target.tag2){return util.target.tag2.has(ar.a);}}
a21(ar){return vm.runtime.extensionStorage['SET']}
}Scratch.extensions.register(new SET());})(Scratch);
