(function(Scratch) {'use strict';//por el (pentaquark neutro, penta quark neutro) y neutral auream
const com0=Scratch.BlockType.COMMAND;const str0=Scratch.ArgumentType.STRING;
const bol0=Scratch.BlockType.BOOLEAN;const rep0=Scratch.BlockType.REPORTER;
const bol1=Scratch.ArgumentType.BOOLEAN;const vm=Scratch.vm;const runtime=vm.runtime;
const renderer=vm.renderer;const gl=renderer._gl;const twgl=renderer.exports.twgl;
const canvas=renderer.canvas;
if(!Scratch.extensions.unsandboxed){throw new Error('This extension must run unsandboxed');}
class Interfacepent{getInfo(){return {id:'Interfacepent',name:'Interface 1',color1:'#444444',color2:'#ff0000',color3:'#ffff00',blocks: [
{opcode:'informacion',blockType:com0,text:'msg[string]',arguments:{string:{type:str0,defaultValue: 'info'}}},
{opcode:'entrada_de_datos',blockType:rep0,text:'Entrada(msg)[STRING]',disableMonitor:true,arguments:{STRING:{type:str0,defaultValue: 'Entrada de informacion'}}},
{opcode:'Confirmar',blockType:bol0,text:'confirmar(msg)[STRING]',arguments:{STRING:{type:str0,defaultValue:'¿si?'}}},
{opcode:'cerrar',blockType:com0,text:'Cerrar ventana'},
{opcode:'romper',blockType:com0,text:'romper ventana'},
{opcode:'nada',blockType:com0,text:'[x]',arguments:{x:{type:str0,defaultValue:''}}},
{opcode:'ifabc',blockType:rep0,text:'if[A][B][C]',arguments:{A:{type:bol1,defaultValue:''},B:{type:str0,defaultValue:''},C:{type:str0,defaultValue:''}}},
{opcode:'greenFlag',blockType:com0,text:'Reinicio'},
{opcode:'clon',blockType:bol0,text:'clon?',filter:[Scratch.TargetType.SPRITE],disableMonitor:true},
{opcode:'sieve',blockType:Scratch.BlockType.HAT,text:'Si [INPUT]',isEdgeActivated:true,arguments:{INPUT:{type:bol1,defaultValue:''}}},
{opcode:'eve',blockType:rep0,text:'eval[a]',arguments:{a:{type:str0,defaultValue:'alert()'}}},
{opcode:'eve2',blockType:rep0,text:'eval[a]x=[b]',arguments:{a:{type:str0,defaultValue:'alert()'},b:{type:str0,defaultValue:'100'}}},
{opcode:'eve3',blockType:rep0,text:'eval?.[a]',arguments:{a:{type:str0,defaultValue:'alert()'}}},
{opcode:'tgid',blockType:rep0,text:'ID',filter:[Scratch.TargetType.SPRITE],disableMonitor:true},
{opcode:'drawID',blockType:rep0,text:'drawID',filter:[Scratch.TargetType.SPRITE],disableMonitor:true},
{opcode:'func1',blockType:rep0,text:'getBounds',filter:[Scratch.TargetType.SPRITE],disableMonitor:true},
{opcode:'to',blockType:rep0,text:'typeof[a]',arguments:{a:{type:str0,defaultValue:'txt'}}},
{opcode:'tr',blockType:bol0,text:'true',disableMonitor:true},
{opcode:'fa',blockType:bol0,text:'false',disableMonitor:true},
{opcode:'nu',blockType:rep0,text:'null',disableMonitor:true},
{opcode:'nlc',blockType:rep0,text:'Nlinea',disableMonitor:true},
{opcode:'un',blockType:rep0,text:'Undefined',disableMonitor:true},
{opcode:'NAN',blockType:rep0,text:'NaN',disableMonitor:true},
{opcode:'itw',blockType:bol0,text:'isTouchingDrawables[a][b]',arguments:{a:{type:str0,defaultValue:'drawID'},b:{type:str0,defaultValue:'vector de drawId a detectar'}}},
{opcode:'cdt',blockType:rep0,text:'candidatesTouching[a][b]',arguments:{a:{type:str0,defaultValue:'drawID'},b:{type:str0,defaultValue:'vector de drawId a detectar'}}},
{opcode:'func0',blockType:rep0,text:'drawableTouching[a][b][c][d][e]',arguments:{a:{type:str0,defaultValue:'drawID'},b:{type:str0,defaultValue:'10'},c:{type:str0,defaultValue:'10'},d:{type:str0,defaultValue:'0'},e:{type:str0,defaultValue:'0'}}},
{opcode:'perm1',blockType:com0,text:'Datos persistentes=[a]',arguments:{a:{type:str0,defaultValue:'txt'}}},
{opcode:'perm2',blockType:rep0,text:'Datos persistentes',disableMonitor:true},
{opcode:'perm3',blockType:com0,text:'Para target,Dato persistente=[b]',arguments:{b:{type:str0,defaultValue:'datos'}}},
{opcode:'perm4',blockType:rep0,text:'Dato persistente de target',disableMonitor:true},
{opcode:'proy',blockType:com0,text:'_projection[a]update',arguments:{a:{type:str0,defaultValue:'vector de 16 parametros'}}},
{opcode:'proy2',blockType:rep0,text:'_projection',disableMonitor:true},
],};}
informacion(args){alert(args.string);}
entrada_de_datos(args){return prompt(args.STRING);}
Confirmar(args){return confirm(args.STRING);}
cerrar(){window.close();}
romper(){while(true){}}
ifabc(ar){if(ar.A){return ar.B;}else{return ar.C;}}
greenFlag(ar,util){util.runtime.greenFlag();}
nada(){}
clon(args, util){if(util.target.isOriginal){return 0;}else{return 1;}}
sieve(ar){return ar.INPUT}
eve(ar,util){const wa=eval(ar.a);return wa;}
eve2(ar,util){var x=ar.b;const wa=eval(ar.a);return wa;}
eve3(ar,util){const wa=eval?.(ar.a);return wa;}
tgid(ar,util){return util.target.id;}
drawID(ar,util){return util.target.drawableID;}
to(ar){return typeof(ar.a);}
tr(){return true;}
fa(){return false;}
nu(){return null;}
un(){return ;}
nlc(){return '\n';}
NAN(){return NaN;}
itw(ar,util){return vm.renderer.isTouchingDrawables(ar.a,ar.b);}
cdt(ar,util){return vm.renderer._candidatesTouching(ar.a,ar.b);}
perm1(ar){vm.runtime.extensionStorage['Interfacepent']=ar.a}
perm2(ar){return vm.runtime.extensionStorage['Interfacepent']}
perm3(ar,util){util.target.extensionStorage.Interfacepent=ar.b}
perm4(ar,util){return util.target.extensionStorage.Interfacepent}
proy({a}){vm.renderer._projection=[a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]];vm.renderer.dirty=true}
proy2(){return vm.renderer._projection}
func0(ar){return vm.renderer.drawableTouching(ar.a,ar.b,ar.c,ar.d,ar.e)}
func1(ar,util){return util.target.getBounds()}
}Scratch.extensions.register(new Interfacepent());})(Scratch);