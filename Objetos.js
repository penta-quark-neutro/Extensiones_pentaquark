(function(Scratch) {'use strict';
if(!vm.runtime.extensionStorage['exps']){vm.runtime.extensionStorage['exps']={};}
var Objglob={},fun=1,dap=1,ops=1,obs=1;
function ref(){Scratch.vm.extensionManager.refreshBlocks();}
const com0=Scratch.BlockType.COMMAND,vgbb=Scratch.BlockType.BUTTON,str0=Scratch.ArgumentType.STRING;
const bol=Scratch.BlockType.BOOLEAN;const rep=Scratch.BlockType.REPORTER;
const bol1=Scratch.ArgumentType.BOOLEAN;const txt=Scratch.ArgumentType.STRING;
if(!Scratch.extensions.unsandboxed){throw new Error('This extension must run unsandboxed');}
class exps{getInfo(){return {id:'exps',name:'exps',color1:'#783305',color2:'#462613',color3:'#a32648',blocks: [
{func:'herr0',blockType:vgbb,text:'Redes pentaquark'},
{func:'herr1',blockType:vgbb,hideFromPalette:!fun,text:'Mostrar funciones',},{func:'herr2',blockType:vgbb,hideFromPalette:fun,text:'Ocultar funciones'},
{func:'herr3',blockType:vgbb,hideFromPalette:!dap,text:'Mostrar datos y propiedades',},{func:'herr4',blockType:vgbb,hideFromPalette:dap,text:'Ocultar datos y propiedades'},
{func:'herr5',blockType:vgbb,hideFromPalette:!ops,text:'Mostrar Operadores de objetos',},{func:'herr6',blockType:vgbb,hideFromPalette:ops,text:'Ocultar Operadores de objetos'},
{func:'herr7',blockType:vgbb,hideFromPalette:!obs,text:'Mostrar Objetos',},{func:'herr8',blockType:vgbb,hideFromPalette:obs,text:'Ocultar Objetos'},
{blockType:"label",text:"Uso de funciones",hideFromPalette:fun},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'me27',blockType:rep,text:'[a]()',hideFromPalette:fun,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me28',blockType:rep,text:'[a]([b])',hideFromPalette:fun,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me29',blockType:rep,text:'[a](...[b])',hideFromPalette:fun,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me33',blockType:rep,text:'new[a]()',hideFromPalette:fun,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me34',blockType:rep,text:'new[a]([b])',hideFromPalette:fun,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me35',blockType:rep,text:'new[a](...[b])',hideFromPalette:fun,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me15',blockType:rep,text:'Apply[a][b][c]',hideFromPalette:fun,arguments:{a:{type:txt,defaultValue:'funcion'},b:{type:txt,defaultValue:'this'},c:{type:txt,defaultValue:'Array'}}},
{opcode:'me36',blockType:rep,text:'Function(...[a],[b])',hideFromPalette:fun,arguments:{a:{type:txt,defaultValue:'Args'},b:{type:txt,defaultValue:'Estructura'}}},
{opcode:'me37',blockType:rep,text:'try{[a](...[b])}',hideFromPalette:fun,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
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
{opcode:'me8',blockType:bol,text:'[a]¿tiene?[b]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'}}},
{opcode:'me14',blockType:bol,text:'[a]¿es?[b]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me32',blockType:rep,text:'getPrototypeOf[a]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''}}},
{blockType:"label",text:"Operadores de objetos",hideFromPalette:ops},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'me9',blockType:rep,text:'[a]borrar[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'}}},
{opcode:'me9_2',blockType:com0,text:'[a]borrar[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'}}},
{opcode:'me11',blockType:rep,text:'stringify[a]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me13',blockType:rep,text:'parse[a]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:'{"valor1":false, "valor2":100}'}}},
{opcode:'me17',blockType:rep,text:'values[a]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me18',blockType:rep,text:'entries[a]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me19',blockType:rep,text:'assign[a][b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me21',blockType:rep,text:'frezze[a]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me21_2',blockType:com0,text:'frezze[a]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me22',blockType:bol,text:'isFrozen[a]?',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me30',blockType:rep,text:'seal[a]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me31',blockType:bol,text:'isSealed[a]?',hideFromPalette:ops,hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me23',blockType:rep,text:'create[a]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me24',blockType:com0,text:'toStringTag[a]=[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'PersObj'}}},
{blockType:"label",text:"Objetos y utiles",hideFromPalette:obs},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'me1',blockType:rep,text:'Nuevo Objeto vacio',hideFromPalette:obs,disableMonitor:1},
{opcode:'me38',blockType:bol,text:'[a]',hideFromPalette:obs,disableMonitor:1,arguments:{a:{type:txt,menu:'vals'}}},
{opcode:'me12',blockType:rep,text:'interno[a]',hideFromPalette:obs,disableMonitor:1,arguments:{a:{type:txt,menu:'in'}}},
{opcode:'me20',blockType:rep,text:'Objeto Global',hideFromPalette:obs,disableMonitor:1},
{opcode:'me25',blockType:rep,text:'Objeto Global Permanente',hideFromPalette:obs,disableMonitor:1},
{opcode:'me26',blockType:com0,text:'Vaciar Objeto Global Permanente',hideFromPalette:obs,disableMonitor:1},

],menus:{pr:{acceptReporters:0,items:['value','writable','enumerable','configurable']},in:{acceptReporters:0,items:['vm','target','util','Scratch','Math','Atomics','Object','Symbol','Array','String','window','Crypto']},vals:{acceptReporters:0,items:['true','false','Undefined','NaN']}}
};}
herr0(){Scratch.openWindow('https://linktr.ee/Penta_quark_neutro');}
herr1(){fun=0;ref();}herr2(){fun=1;ref();}herr3(){dap=0;ref();}herr4(){dap=1;ref();}
herr5(){ops=0;ref();}herr6(){ops=1;ref();}herr7(){obs=0;ref();}herr8(){obs=1;ref();}
me00(ar){return [ar.a];}
me0(ar){return [ar.a,ar.b];}
me01(ar){return [ar.a,ar.b,ar.c];}
me10(ar){return [ar.a,ar.b,ar.c,ar.d];}
me1(){return {};}
me2(ar){return Object.fromEntries(ar.a);}
me3(ar){return Object.getOwnPropertyNames(ar.a);}
me4(ar){return Object.defineProperties(ar.a,ar.b)}
me5(ar){var t=Reflect.getOwnPropertyDescriptor(ar.a,ar.b);switch(ar.c){case'value':return t.value;break;case'writable':return t.writable;break;case'enumerable':return t.enumerable;break;case'configurable':return t.configurable;break;}}
me6(ar){return Reflect.get(ar.a,ar.b);}
me7(ar){return Reflect.set(ar.a,ar.b,ar.c);}
me7_2(ar){Reflect.set(ar.a,ar.b,ar.c);}
me8(ar){return Reflect.has(ar.a,ar.b);}
me9(ar){var h=ar.a;Reflect.deleteProperty(h,ar.b);return h;}
me9_2(ar){Reflect.deleteProperty(ar.a,ar.b);}
me11(ar){return JSON.stringify(ar.a);}
me12(ar,util){switch(ar.a){case'vm':return Scratch.vm;case'target':return util.target;case'util':return util;case'Scratch':return Scratch;case'Math':return Math;case'Atomics':return Atomics;case'Object':return Object;case'Symbol':return Symbol;case'Array':return Array;case'String':return String;case'window':return window;case'Crypto':return Crypto;}}
me13(ar){return JSON.parse(ar.a);}
me14(ar){return Object.is(ar.a,ar.b);}
me15(ar){return Reflect.apply(ar.a,ar.b,ar.c);}
me16(ar){return ar.a?.[ar.b]}
me17(ar){return Object.values(ar.a);}
me18(ar){return Object.entries(ar.a);}
me19(ar){return Object.assign(ar.a,ar.b);}
me20(){return Objglob;}
me21(ar){return Object.freeze(ar.a)}
me21_2(ar){Object.freeze(ar.a)}
me22(ar){return Object.isFrozen(ar.a)}
me23(ar){return Object.create(ar.a);}
me24(ar){ar.a[Symbol.toStringTag]=ar.b.toString();}
me25(ar){return vm.runtime.extensionStorage['exps'];}
me26(ar){vm.runtime.extensionStorage['exps']={};}
me27(ar){return ar.a();}me33(ar){return new ar.a();}
me28(ar){return ar.a(ar.b);}me34(ar){return new ar.a(ar.b);}
me29(ar){return ar.a(...ar.b);}me35(ar){return new ar.a(...ar.b);}
me30(ar){return Object.seal(ar.a);}
me31(ar){return Object.isSealed(ar.a);}
me32(ar){return Object.getPrototypeOf(ar.a)}
me36(ar){return Function(...ar.a,ar.b)}
me37(ar){try{return ar.a(...ar.b)}catch(a){return a;}}
me38(ar){switch(ar.a){case'true':return true;case'false':return false;case'NaN':return NaN;case'Undefined':return ;}}
}Scratch.extensions.register(new exps());})(Scratch);