(function(Scratch) {'use strict';//por el (pentaquark neutro, penta quark neutro) y neutral auream
if(!vm.runtime.extensionStorage['exps']){vm.runtime.extensionStorage['exps']={};}
var Objglob={},fun=1,dap=1,obs=1,pun=0;const AsyncFunction=async function(){}.constructor,GeneratorFunction=function*(){}.constructor,AsyncGeneratorFunction=async function*(){}.constructor;
function ref(){Scratch.vm.extensionManager.refreshBlocks();}
const com0=Scratch.BlockType.COMMAND,vgbb=Scratch.BlockType.BUTTON,str0=Scratch.ArgumentType.STRING,bol=Scratch.BlockType.BOOLEAN,rep=Scratch.BlockType.REPORTER,bol1=Scratch.ArgumentType.BOOLEAN,txt=Scratch.ArgumentType.STRING;
if(!Scratch.extensions.unsandboxed){throw new Error('This extension must run unsandboxed');}
class exps{getInfo(){return {id:'exps',name:'exps',color1:'#984905',color2:'#763613',color3:'#e39668',blocks: [
{func:'herr0',blockType:vgbb,text:'Redes pentaquark'},
{func:'herr1',blockType:vgbb,hideFromPalette:!fun,text:'Mostrar funciones',},{func:'herr2',blockType:vgbb,hideFromPalette:fun,text:'Ocultar funciones'},
{func:'herr3',blockType:vgbb,hideFromPalette:!dap,text:'Mostrar datos y propiedades',},{func:'herr4',blockType:vgbb,hideFromPalette:dap,text:'Ocultar datos y propiedades'},
{func:'herr5',blockType:vgbb,hideFromPalette:!obs,text:'Mostrar Objetos',},{func:'herr6',blockType:vgbb,hideFromPalette:obs,text:'Ocultar Objetos'},
{blockType:"label",text:"Uso de funciones",hideFromPalette:fun},//--------------------------------------------------------------------------------------------------------------------------------
{func:'herr7',blockType:vgbb,hideFromPalette:!pun||fun,text:'Ocultar punto funcion',},{func:'herr8',blockType:vgbb,hideFromPalette:pun||fun,text:'Mostrar punto funcion'},
{opcode:'me27',blockType:rep,text:'[a]()',hideFromPalette:fun||pun,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me28',blockType:rep,text:'[a]([b])',hideFromPalette:fun||pun,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me29',blockType:rep,text:'[a](...[b])',hideFromPalette:fun||pun,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me33',blockType:rep,text:'new[a]()',hideFromPalette:fun||pun,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me34',blockType:rep,text:'new[a]([b])',hideFromPalette:fun||pun,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me35',blockType:rep,text:'new[a](...[b])',hideFromPalette:fun||pun,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me48',blockType:rep,text:'[a].[c]()',hideFromPalette:fun||!pun,arguments:{a:{type:txt,defaultValue:''},c:{type:txt,defaultValue:'tr'}}},
{opcode:'me49',blockType:rep,text:'[a].[c]([b])',hideFromPalette:fun||!pun,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''},c:{type:txt,defaultValue:'tr'}}},
{opcode:'me50',blockType:rep,text:'[a].[c](...[b])',hideFromPalette:fun||!pun,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''},c:{type:txt,defaultValue:'tr'}}},
{opcode:'me51',blockType:rep,text:'new[a].[c]()',hideFromPalette:fun||!pun,arguments:{a:{type:txt,defaultValue:''},c:{type:txt,defaultValue:'tr'}}},
{opcode:'me52',blockType:rep,text:'new[a].[c]([b])',hideFromPalette:fun||!pun,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''},c:{type:txt,defaultValue:'tr'}}},
{opcode:'me53',blockType:rep,text:'new[a].[c](...[b])',hideFromPalette:fun||!pun,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''},c:{type:txt,defaultValue:'tr'}}},
{opcode:'me37',blockType:rep,text:'try{[a](...[b])}',hideFromPalette:fun,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me15',blockType:rep,text:'Apply[a][b][c]',hideFromPalette:fun,arguments:{a:{type:txt,defaultValue:'funcion'},b:{type:txt,defaultValue:'this'},c:{type:txt,defaultValue:'Array'}}},
{opcode:'me36',blockType:rep,text:'Function(...[a],[b])',hideFromPalette:fun,arguments:{a:{type:txt,defaultValue:'Args'},b:{type:txt,defaultValue:'Estructura'}}},
{opcode:'me40',blockType:rep,text:'AsyncFunction(...[a],[b])',hideFromPalette:fun,arguments:{a:{type:txt,defaultValue:'Args'},b:{type:txt,defaultValue:'Estructura'}}},
{opcode:'me42',blockType:rep,text:'GeneratorFunction(...[a],[b])',hideFromPalette:fun,arguments:{a:{type:txt,defaultValue:'Args'},b:{type:txt,defaultValue:'Estructura'}}},
{opcode:'me43',blockType:rep,text:'AsyncGeneratorFunction(...[a],[b])',hideFromPalette:fun,arguments:{a:{type:txt,defaultValue:'Args'},b:{type:txt,defaultValue:'Estructura'}}},
{opcode:'me44',blockType:rep,text:'[a].next([b])',hideFromPalette:fun,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me45',blockType:rep,text:'[a].return([b])',hideFromPalette:fun,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'0'}}},
{opcode:'me46',blockType:rep,text:'[a].trow([b])',hideFromPalette:fun,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'Error'}}},
{blockType:"label",text:"datos y propiedades",hideFromPalette:dap},//----------------------------------------------------------------------------------------------------------------------
{opcode:'me00',blockType:rep,text:'array[a]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:'tr'}}},
{opcode:'me0',blockType:rep,text:'array[a],[b]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:'tr'},b:{type:txt,defaultValue:'45'}}},
{opcode:'me01',blockType:rep,text:'array[a],[b],[c]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:'tr'},b:{type:txt,defaultValue:'45'},c:{type:txt,defaultValue:'jk'}}},
{opcode:'me10',blockType:rep,text:'array[a],[b],[c],[d]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:'1'},b:{type:txt,defaultValue:'2'},c:{type:txt,defaultValue:'3'},d:{type:txt,defaultValue:'4'}}},
{opcode:'me2',blockType:rep,text:'Nuevo objeto de arr[a]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:'Requiere array como [["a",b],["c",d],...]'}}},
{opcode:'me3',blockType:rep,text:'keys[a]',disableMonitor:1,hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me4',blockType:rep,text:'nueva propiedad a[a]es[b]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'requiere Object como {K:{value:,writable:,...}'}}},
{opcode:'me5',blockType:rep,text:'Descriptor[a]prop[b].[c]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'},c:{type:txt,menu:'pr'}}},
{opcode:'me6',blockType:rep,text:'[a].[b]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'}}},
{opcode:'me16',blockType:rep,text:'[a]?.[b]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'}}},
{opcode:'me7',blockType:bol,text:'[a].[b]=[c]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'},c:{type:txt,defaultValue:'100'}}},
{opcode:'me7_2',blockType:com0,text:'[a].[b]=[c]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'},c:{type:txt,defaultValue:'100'}}},
{opcode:'me8',blockType:bol,text:'[a]in[b]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:'tr'},b:{type:txt,defaultValue:''}}},
{opcode:'me14',blockType:bol,text:'[a]¿es?[b]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me32',blockType:rep,text:'getPrototypeOf[a]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me47',blockType:rep,text:'setPrototypeOf[a][b]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me9',blockType:rep,text:'[a]borrar[b]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'}}},
{opcode:'me9_2',blockType:com0,text:'[a]borrar[b]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'}}},
{opcode:'me11',blockType:rep,text:'stringify[a]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me13',blockType:rep,text:'parse[a]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:'{"valor1":false, "valor2":100}'}}},
{opcode:'me17',blockType:rep,text:'values[a]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me18',blockType:rep,text:'entries[a]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me19',blockType:rep,text:'assign[a][b]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me21',blockType:rep,text:'frezze[a]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me21_2',blockType:com0,text:'frezze[a]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me22',blockType:bol,text:'isFrozen[a]?',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me30',blockType:rep,text:'seal[a]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me31',blockType:bol,text:'isSealed[a]?',hideFromPalette:dap,hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me23',blockType:rep,text:'create[a]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me24',blockType:com0,text:'toStringTag[a]=[b]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'PersObj'}}},
{blockType:"label",text:"Objetos y utiles",hideFromPalette:obs},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'me1',blockType:rep,text:'Nuevo Objeto vacio',hideFromPalette:obs,disableMonitor:1},
{opcode:'me38',blockType:bol,text:'[a]',hideFromPalette:obs,disableMonitor:1,arguments:{a:{type:txt,menu:'vals'}}},
{opcode:'me12',blockType:rep,text:'interno[a]',hideFromPalette:obs,disableMonitor:1,arguments:{a:{type:txt,menu:'in'}}},
{opcode:'me20',blockType:rep,text:'Objeto Global',hideFromPalette:obs,disableMonitor:1},
{opcode:'me25',blockType:rep,text:'Objeto Global Permanente',hideFromPalette:obs,disableMonitor:1},
{opcode:'me26',blockType:com0,text:'Vaciar Objeto Global Permanente',hideFromPalette:obs,disableMonitor:1},
{opcode:'me39',blockType:rep,text:'typeof[a]',hideFromPalette:obs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me54',blockType:rep,text:'[a]instanceof[b]',hideFromPalette:obs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me41',blockType:com0,text:'[a]',hideFromPalette:obs,arguments:{a:{type:txt,defaultValue:''}}},

],menus:{pr:{acceptReporters:0,items:['value','writable','enumerable','configurable']},in:{acceptReporters:0,items:['vm','target','util','Scratch','Math','Atomics','Object','Symbol','Array','String','window','Crypto','Map','Set']},vals:{acceptReporters:0,items:['true','false','Undefined','NaN','null','Infinity']}}
};}
herr0(){Scratch.openWindow('https://linktr.ee/Penta_quark_neutro');}
herr1(){fun=0;ref();}herr2(){fun=1;ref();}herr3(){dap=0;ref();}herr4(){dap=1;ref();}
herr5(){obs=0;ref();}herr6(){obs=1;ref();}herr7(){pun=0;ref();}herr8(){pun=1;ref();}
me00({a}){return [a];}me0({a,b}){return [a,b];}me01({a,b,c}){return [a,b,c];}me10({a,b,c,d}){return [a,b,c,d];}
me1(){return {};}me2(ar){return Object.fromEntries(ar.a);}
me3(ar){return Object.getOwnPropertyNames(ar.a);}
me4(ar){return Object.defineProperties(ar.a,ar.b)}
me5(ar){var t=Reflect.getOwnPropertyDescriptor(ar.a,ar.b);switch(ar.c){case'value':return t.value;break;case'writable':return t.writable;break;case'enumerable':return t.enumerable;break;case'configurable':return t.configurable;break;}}
me6(ar){return ar.a[ar.b]}
me7({a,b,c}){return Reflect.set(a,b,c);}me7_2({a,b,c}){a[b]=c}
me8(ar){return ar.a in ar.b;}
me9(ar){Reflect.deleteProperty(ar.a,ar.b);return ar.a;}me9_2(ar){Reflect.deleteProperty(ar.a,ar.b);}
me11(ar){return JSON.stringify(ar.a);}
me12(ar,util){switch(ar.a){case'vm':return Scratch.vm;case'target':return util.target;case'util':return util;case'Scratch':return Scratch;case'Math':return Math;case'Atomics':return Atomics;case'Object':return Object;case'Symbol':return Symbol;case'Array':return Array;case'String':return String;case'window':return window;case'Crypto':return Crypto;case'Map':return Map;case'Set':return Set;}}
me13(ar){return JSON.parse(ar.a);}
me14(ar){return Object.is(ar.a,ar.b);}
me15({a,b,c}){return Reflect.apply(a,b,c);}
me16({a,b}){return a?.[b]}
me17(ar){return Object.values(ar.a);}
me18(ar){return Object.entries(ar.a);}
me19(ar){return Object.assign(ar.a,ar.b);}
me20(){return Objglob;}
me21(ar){return Object.freeze(ar.a)}me21_2(ar){Object.freeze(ar.a)}
me22(ar){return Object.isFrozen(ar.a)}
me23(ar){return Object.create(ar.a);}
me24(ar){ar.a[Symbol.toStringTag]=ar.b.toString();}
me25(ar){return vm.runtime.extensionStorage['exps'];}
me26(ar){vm.runtime.extensionStorage['exps']={};}
me27({a}){return a();}me33({a}){return new a();}
me28({a,b}){return a(b);}me34({a,b}){return new a(b);}
me29({a,b}){return a(...b);}me35({a,b}){return new a(...b);}
me30(ar){return Object.seal(ar.a);}
me31(ar){return Object.isSealed(ar.a);}
me32(ar){return Object.getPrototypeOf(ar.a)}me47(ar){return Object.setPrototypeOf(ar.a,ar.b)}
me36(ar){return Function(...ar.a,ar.b)}me40(ar){return AsyncFunction(...ar.a,ar.b)}
me37({a,b}){try{return a(...b)}catch(a){return a;}}
me38(ar){switch(ar.a){case'true':return true;case'false':return false;case'NaN':return NaN;case'Undefined':return ;case'null':return null;case'Infinity':return Infinity;}}
me39(ar){return typeof(ar.a)}me41(){}me42(ar){return GeneratorFunction(...ar.a,ar.b)}me43(ar){return AsyncGeneratorFunction(...ar.a,ar.b)}me44(ar){return ar.a.next(ar.b)}
me45(ar){return ar.a.return(ar.b)}me46(ar){return ar.a.trow(new Error(ar.b))}
me48({a,c}){return a[c]();}me51({a,c}){return new a[c]();}
me49({a,b,c}){return a[c](b);}me52({a,b,c}){return new a[c](b);}
me50({a,b,c}){return a[c](...b);}me53({a,b,c}){return new a[c](...b);}
me54({a,b}){return (a instanceof b)}
}Scratch.extensions.register(new exps());})(Scratch);