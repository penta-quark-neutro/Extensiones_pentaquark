(function(Scratch) {'use strict';//por el (pentaquark neutro, penta quark neutro) y neutral auream
const com0=Scratch.BlockType.COMMAND;const str0=Scratch.ArgumentType.STRING;
const bol0=Scratch.BlockType.BOOLEAN;const rep0=Scratch.BlockType.REPORTER;
class SYMBOL{getInfo(){return {id:'Symbol',name:'Symbol',color1:'#ff0000',color2:'#30c0c0',color3:'#aa00aa',blocks:[
{opcode:'sym0',blockType:rep0,text:'Symbol[a]',arguments:{a:{type:str0,defaultValue:'txt'}}},
{opcode:'sym1',blockType:rep0,text:'Symbol.for[a]',arguments:{a:{type:str0,defaultValue:'txt'}}},
{opcode:'sym2',blockType:rep0,text:'Symbol.keyFor[a]',arguments:{a:{type:str0,defaultValue:'Symbol'}}},
{opcode:'sym3',blockType:rep0,text:'[a]〚Symbol.[b]()〛',arguments:{a:{type:str0,defaultValue:''},b:{type:str0,defaultValue:'iterator'}}},
{opcode:'sym4',blockType:rep0,text:'[a]〚Symbol.[b]〛=[c]',arguments:{a:{type:str0,defaultValue:''},b:{type:str0,defaultValue:'toStringTag'},c:{type:str0,defaultValue:'txt'}}},
{opcode:'sym5',blockType:rep0,text:'Symbol.[a]',arguments:{a:{type:str0,defaultValue:'dispose'}}},
{opcode:'sym6',blockType:bol0,text:'[a]==[b]',arguments:{a:{type:str0,defaultValue:'5'},b:{type:str0,defaultValue:'5'}}},
{opcode:'sym7',blockType:bol0,text:'[a]===[b]',arguments:{a:{type:str0,defaultValue:'5'},b:{type:str0,defaultValue:'5'}}},
{opcode:'sym8',blockType:rep0,text:'[a]description',arguments:{a:{type:str0,defaultValue:'Symbol'}}},
{opcode:'sym9',blockType:rep0,text:'getOwnPropertySymbols[a]',arguments:{a:{type:str0,defaultValue:'Object'}}},
{opcode:'sym10',blockType:rep0,text:'{}',disableMonitor:1},
{opcode:'sym11',blockType:rep0,text:'〚〛',disableMonitor:1},
{opcode:'sym14',blockType:bol0,text:'[a]〚[b]〛',arguments:{a:{type:str0,defaultValue:''},b:{type:str0,defaultValue:''}}},
{opcode:'sym12',blockType:rep0,text:'[a]〚[b]〛=[c]',arguments:{a:{type:str0,defaultValue:''},b:{type:str0,defaultValue:''},c:{type:str0,defaultValue:''}}},
{opcode:'sym13',blockType:com0,text:'[a]〚[b]〛=[c]',arguments:{a:{type:str0,defaultValue:''},b:{type:str0,defaultValue:''},c:{type:str0,defaultValue:''}}},


],};}
sym0(ar){return Symbol(ar.a)}
sym1(ar){return Symbol.for(ar.a)}
sym2(ar){return Symbol.keyFor(ar.a)}
sym3(ar){return ar.a[Symbol[ar.b]]()}
sym4(ar){return ar.a[Symbol[ar.b]]=ar.c}
sym5(ar){return Symbol[ar.a]}
sym6(ar){return (ar.a==ar.b)}
sym7(ar){return (ar.a===ar.b)}
sym8(ar){return ar.a.description}
sym9(ar){return Object.getOwnPropertySymbols(ar.a)}
sym10(){return {}}
sym11(){return []}
sym12(ar){return ar.a[ar.b]=ar.c}
sym13(ar){ar.a[ar.b]=ar.c}
sym14(ar){return ar.a[ar.b]}


}Scratch.extensions.register(new SYMBOL());})(Scratch);