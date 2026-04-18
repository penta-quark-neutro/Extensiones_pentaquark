(function(Scratch) {'use strict';//por el (pentaquark neutro, penta quark neutro) y neutral auream
if(!vm.runtime.extensionStorage['exps']){vm.runtime.extensionStorage['exps']={};}
var Objglob={},fun=1,dap=1,obs=1,pun=0,blo=1;const AsyncFunction=async function(){}.constructor,GeneratorFunction=function*(){}.constructor,AsyncGeneratorFunction=async function*(){}.constructor;
function ref(){Scratch.vm.extensionManager.refreshBlocks();}
function ExpsCadena(objetivo,vistor){let ff=new Set(vistor);//v1.0.5
try{var gj=JSON.stringify(objetivo)}catch(sec){var gj='000XecjsEiC';}
try{if(gj!='000XecjsEiC'&&!ff.has(objetivo)){if(typeof(objetivo)=="object"){
if(objetivo===null){return '"[null]"'}
if(objetivo instanceof Uint8Array){return '["[ui8a]",['+objetivo.toString()+"]]"}if(objetivo instanceof Uint16Array){return '["[ui16a]",['+objetivo.toString()+"]]"}
if(objetivo instanceof Uint32Array){return '["[ui32a]",['+objetivo.toString()+"]]"}if(objetivo instanceof Uint8ClampedArray){return '["[ui8ca]",['+objetivo.toString()+"]]"}
if(objetivo instanceof Int8Array){return '["[i8a]",['+objetivo.toString()+"]]"}if(objetivo instanceof Int16Array){return '["[i16a]",['+objetivo.toString()+"]]"}
if(objetivo instanceof Int32Array){return '["[i32a]",['+objetivo.toString()+"]]"}if(objetivo instanceof Float16Array){return '["[f16a]",['+objetivo.toString()+"]]"}
if(objetivo instanceof Float32Array){return '["[f32a]",['+objetivo.toString()+"]]"}if(objetivo instanceof Float64Array){return '["[f64a]",['+objetivo.toString()+"]]"}
if(objetivo instanceof Array){return '["[ga]",['+objetivo.map(t=>ExpsCadena(t))+"]]"}if(objetivo instanceof Map){return '["[Mp]",['+Array.from(objetivo).map(t=>ExpsCadena(t))+"]]"}
if(objetivo instanceof Set){return '["[St]",['+Array.from(objetivo).map(t=>ExpsCadena(t))+"]]"}if(objetivo instanceof Date){return '["[dt]",'+'["'+objetivo.toISOString()+'"]'}
if(objetivo instanceof Object){ff.add(objetivo);let cad="{";for(const ENT in objetivo){cad+=","+JSON.stringify(ENT)+":"+ExpsCadena(objetivo[ENT],ff)}return cad.replace(',','')+"}"}
}else{
if(typeof(objetivo)=="function"){if((objetivo.toString()).includes("[native code]")){return '["[EII!]"]'}else{return '["[Fc]",'+JSON.stringify(objetivo.toString())+']'}}
if(typeof(objetivo)=="number"){if(isFinite(objetivo)){return objetivo.toString()}else{if(!isNaN(objetivo)){return '"['+objetivo.toString()+']"'}else{return '"[Na]"'}}}else{
if(typeof(objetivo)=="boolean"){return (objetivo?'true':'false')}else{return JSON.stringify((objetivo?objetivo?.toString():'[Udf]'))}}}}else{return '"DETENCION"'}ff=null;}catch(fail){return gj;console.log(fail)}}
function reconstruccion(arg,func){//v1.0.1
if(arg[0]=="[ui8a]"){return new Uint8Array(arg[1])}if(arg[0]=="[ui16a]"){return new Uint16Array(arg[1])}if(arg[0]=="[ui32a]"){return new Uint32Array(arg[1])}
if(arg[0]=="[ui8ca]"){return new Uint8ClampedArray(arg[1])}if(arg[0]=="[i8a]"){return new Int8Array(arg[1])}if(arg[0]=="[i16a]"){return new Int16Array(arg[1])}
if(arg[0]=="[i32a]"){return new Int32Array(arg[1])}if(arg[0]=="[f16a]"){return new Float16Array(arg[1])}if(arg[0]=="[f32a]"){return new Float32Array(arg[1])}
if(arg[0]=="[f64a]"){return new Float64Array(arg[1])}if(arg[0]=="[ga]"){return arg[1].map(k=>(typeof(k)=='object'?ExpsParseCadena(k,true,func):k))}if(arg[0]=="[Mp]"){return new Map(arg[1].map(k=>(typeof(k)=='object'?ExpsParseCadena(k,true,func):k)))}
if(arg[0]=="[St]"){return new Set(arg[1].map(k=>(typeof(k)=='object'?ExpsParseCadena(k,true,func):k)))}if(arg[0]=="[dt]"){return new Date(arg[1])}if(arg[0]=='[Fc]'){return (func?eval("const h="+arg[1]+";h"):arg[1])}if(true){return arg}}
function ExpsParseCadena(Cadena,omitir,trusted){var cad2=(omitir?Cadena:JSON.parse(Cadena));if(typeof(cad2)=='object'&&!Array.isArray(cad2)){for(const props in cad2){if(Array.isArray(cad2[props])){cad2[props]=reconstruccion(cad2[props],trusted)}else{
if(cad2[props]=='[EII!]'){Reflect.deleteProperty(cad2,props)}if(cad2[props]=='[Infinity]'){cad2[props]=Infinity}if(cad2[props]=='[-Infinity]'){cad2[props]=-Infinity}if(cad2[props]=='[Na]'){cad2[props]=NaN}
if(cad2[props]=='[Udf]'){cad2[props]=undefined}}
}}else{if(Array.isArray(cad2)){cad2=reconstruccion(cad2,trusted)}else{
if(cad2=='[Infinity]'){cad2=Infinity}if(cad2=='[-Infinity]'){cad2=-Infinity}if(cad2=='[Na]'){cad2=NaN}if(cad2=='[Udf]'){cad2=undefined}}}return cad2}
const com0=Scratch.BlockType.COMMAND,vgbb=Scratch.BlockType.BUTTON,str0=Scratch.ArgumentType.STRING,bol=Scratch.BlockType.BOOLEAN,rep=Scratch.BlockType.REPORTER,bol1=Scratch.ArgumentType.BOOLEAN,txt=Scratch.ArgumentType.STRING;
if(!Scratch.extensions.unsandboxed){throw new Error('This extension must run unsandboxed');}
class exps{getInfo(){return {id:'exps',name:'exps',color1:'#984905',color2:'#763613',color3:'#e39668',blocks: [
{func:'herr0',blockType:vgbb,text:'Redes pentaquark'},
{func:'herr1',blockType:vgbb,hideFromPalette:!fun,text:'Mostrar funciones',},{func:'herr2',blockType:vgbb,hideFromPalette:fun,text:'Ocultar funciones'},
{func:'herr3',blockType:vgbb,hideFromPalette:!dap,text:'Mostrar datos y propiedades',},{func:'herr4',blockType:vgbb,hideFromPalette:dap,text:'Ocultar datos y propiedades'},
{func:'herr5',blockType:vgbb,hideFromPalette:!obs,text:'Mostrar Objetos',},{func:'herr6',blockType:vgbb,hideFromPalette:obs,text:'Ocultar Objetos'},
{blockType:"label",text:"Uso de funciones",hideFromPalette:fun},//--------------------------------------------------------------------------------------------------------------------------------
{func:'herr7',blockType:vgbb,hideFromPalette:!pun||fun,text:'Ocultar punto funcion',},{func:'herr8',blockType:vgbb,hideFromPalette:pun||fun,text:'Mostrar punto funcion'},
{func:'herr9',blockType:vgbb,hideFromPalette:!blo||fun,text:'Mostrar forma comando',},{func:'herr10',blockType:vgbb,hideFromPalette:blo||fun,text:'Ocultar forma comando'},
{opcode:'me27',blockType:bol,text:'[a]()',hideFromPalette:(fun||pun)||!blo,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me28',blockType:bol,text:'[a]([b])',hideFromPalette:(fun||pun)||!blo,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me29',blockType:bol,text:'[a](...[b])',hideFromPalette:(fun||pun)||!blo,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me33',blockType:bol,text:'new[a]()',hideFromPalette:(fun||pun)||!blo,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me34',blockType:bol,text:'new[a]([b])',hideFromPalette:(fun||pun)||!blo,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me35',blockType:bol,text:'new[a](...[b])',hideFromPalette:(fun||pun)||!blo,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me48',blockType:bol,text:'[a].[c]()',hideFromPalette:(fun||!pun)||!blo,arguments:{a:{type:txt,defaultValue:''},c:{type:txt,defaultValue:'tr'}}},
{opcode:'me49',blockType:bol,text:'[a].[c]([b])',hideFromPalette:(fun||!pun)||!blo,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''},c:{type:txt,defaultValue:'tr'}}},
{opcode:'me50',blockType:bol,text:'[a].[c](...[b])',hideFromPalette:(fun||!pun)||!blo,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''},c:{type:txt,defaultValue:'tr'}}},
{opcode:'me51',blockType:bol,text:'new[a].[c]()',hideFromPalette:(fun||!pun)||!blo,arguments:{a:{type:txt,defaultValue:''},c:{type:txt,defaultValue:'tr'}}},
{opcode:'me52',blockType:bol,text:'new[a].[c]([b])',hideFromPalette:(fun||!pun)||!blo,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''},c:{type:txt,defaultValue:'tr'}}},
{opcode:'me53',blockType:bol,text:'new[a].[c](...[b])',hideFromPalette:(fun||!pun)||!blo,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''},c:{type:txt,defaultValue:'tr'}}},
{opcode:'me55',blockType:com0,text:'[a]()',hideFromPalette:(fun||pun)||blo,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me56',blockType:com0,text:'[a]([b])',hideFromPalette:(fun||pun)||blo,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me57',blockType:com0,text:'[a](...[b])',hideFromPalette:(fun||pun)||blo,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me58',blockType:com0,text:'new[a]()',hideFromPalette:(fun||pun)||blo,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me59',blockType:com0,text:'new[a]([b])',hideFromPalette:(fun||pun)||blo,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me60',blockType:com0,text:'new[a](...[b])',hideFromPalette:(fun||pun)||blo,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me61',blockType:com0,text:'[a].[c]()',hideFromPalette:(fun||!pun)||blo,arguments:{a:{type:txt,defaultValue:''},c:{type:txt,defaultValue:'tr'}}},
{opcode:'me62',blockType:com0,text:'[a].[c]([b])',hideFromPalette:(fun||!pun)||blo,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''},c:{type:txt,defaultValue:'tr'}}},
{opcode:'me63',blockType:com0,text:'[a].[c](...[b])',hideFromPalette:(fun||!pun)||blo,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''},c:{type:txt,defaultValue:'tr'}}},
{opcode:'me64',blockType:com0,text:'new[a].[c]()',hideFromPalette:(fun||!pun)||blo,arguments:{a:{type:txt,defaultValue:''},c:{type:txt,defaultValue:'tr'}}},
{opcode:'me65',blockType:com0,text:'new[a].[c]([b])',hideFromPalette:(fun||!pun)||blo,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''},c:{type:txt,defaultValue:'tr'}}},
{opcode:'me66',blockType:com0,text:'new[a].[c](...[b])',hideFromPalette:(fun||!pun)||blo,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''},c:{type:txt,defaultValue:'tr'}}},
{opcode:'me37',blockType:rep,text:'try{[a](...[b])}',hideFromPalette:fun||pun,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me98',blockType:rep,text:'try{[a].[b](...[c])}',hideFromPalette:fun||!pun,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'},c:{type:txt,defaultValue:''}}},
{opcode:'me15',blockType:rep,text:'Apply[a][b][c]',hideFromPalette:fun||!blo,arguments:{a:{type:txt,defaultValue:'funcion'},b:{type:txt,defaultValue:'this'},c:{type:txt,defaultValue:'Array'}}},
{opcode:'me70',blockType:com0,text:'Apply[a][b][c]',hideFromPalette:fun||blo,arguments:{a:{type:txt,defaultValue:'funcion'},b:{type:txt,defaultValue:'this'},c:{type:txt,defaultValue:'Array'}}},
{opcode:'me73',blockType:rep,text:'[a].bind(...[b])',hideFromPalette:fun,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me36',blockType:rep,text:'Function(...[a],[b])',hideFromPalette:fun,arguments:{a:{type:txt,defaultValue:'Args'},b:{type:txt,defaultValue:'Estructura'}}},
{opcode:'me40',blockType:rep,text:'AsyncFunction(...[a],[b])',hideFromPalette:fun,arguments:{a:{type:txt,defaultValue:'Args'},b:{type:txt,defaultValue:'Estructura'}}},
{opcode:'me42',blockType:rep,text:'GeneratorFunction(...[a],[b])',hideFromPalette:fun,arguments:{a:{type:txt,defaultValue:'Args'},b:{type:txt,defaultValue:'Estructura'}}},
{opcode:'me43',blockType:rep,text:'AsyncGeneratorFunction(...[a],[b])',hideFromPalette:fun,arguments:{a:{type:txt,defaultValue:'Args'},b:{type:txt,defaultValue:'Estructura'}}},
{opcode:'me44',blockType:rep,text:'[a].next([b])',hideFromPalette:fun,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me45',blockType:rep,text:'[a].return([b])',hideFromPalette:fun,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'0'}}},
{opcode:'me46',blockType:rep,text:'[a].throw([b])',hideFromPalette:fun,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'Error'}}},
{opcode:'me74',blockType:rep,text:'new Worker[a][b]',hideFromPalette:fun,arguments:{a:{type:txt,defaultValue:'scriptURL'},b:{type:txt,defaultValue:'{opciones}'}}},
{opcode:'me75',blockType:rep,text:'JS a scriptURL[a]',hideFromPalette:fun,arguments:{a:{type:txt,defaultValue:'self.addEventListener("message", function(e){const resultado=1+1;self.postMessage(resultado);});'}}},
{opcode:'me91',blockType:com0,text:'revokeObjectURL[a]',hideFromPalette:fun,arguments:{a:{type:txt,defaultValue:''}}},
{blockType:"label",text:"datos y propiedades",hideFromPalette:dap},//----------------------------------------------------------------------------------------------------------------------
{opcode:'me00',blockType:rep,text:'array[a]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:'tr'}}},
{opcode:'me0',blockType:rep,text:'array[a],[b]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:'tr'},b:{type:txt,defaultValue:'45'}}},
{opcode:'me01',blockType:rep,text:'array[a],[b],[c]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:'tr'},b:{type:txt,defaultValue:'45'},c:{type:txt,defaultValue:'jk'}}},
{opcode:'me10',blockType:rep,text:'array[a],[b],[c],[d]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:'1'},b:{type:txt,defaultValue:'2'},c:{type:txt,defaultValue:'3'},d:{type:txt,defaultValue:'4'}}},
{opcode:'me2',blockType:rep,text:'Object.fromEntries[a]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:'Requiere array como [["a",b],["c",d],...]'}}},
{opcode:'me3',blockType:rep,text:'keys[a]',disableMonitor:1,hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me4',blockType:rep,text:'Object.defineProperties[a][b]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'requiere Object como {K:{value:,writable:,...}'}}},
{opcode:'me5',blockType:rep,text:'Descriptor[a]prop[b].[c]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'},c:{type:txt,menu:'pr'}}},
{opcode:'me6',blockType:bol,text:'[a].[b]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'}}},
{opcode:'me16',blockType:bol,text:'[a]?.[b]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'}}},
{opcode:'me93',blockType:bol,text:'[a].[b].[c]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'},c:{type:txt,defaultValue:'pr'}}},
{opcode:'me94',blockType:bol,text:'[a]?.[b]?.[c]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'},c:{type:txt,defaultValue:'pr'}}},
{opcode:'me95',blockType:bol,text:'[a].[b].[c].[d]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'},c:{type:txt,defaultValue:'pr'},d:{type:txt,defaultValue:'kr'}}},
{opcode:'me96',blockType:bol,text:'[a]?.[b]?.[c]?.[d]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'},c:{type:txt,defaultValue:'pr'},d:{type:txt,defaultValue:'kr'}}},
{opcode:'me7_2',blockType:com0,text:'[a].[b]=[c]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'},c:{type:txt,defaultValue:'100'}}},
{opcode:'me76',blockType:com0,text:'[a].[b]+=[c]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'},c:{type:txt,defaultValue:'100'}}},
{opcode:'me77',blockType:com0,text:'[a].[b]-=[c]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'},c:{type:txt,defaultValue:'100'}}},
{opcode:'me78',blockType:com0,text:'[a].[b]/=[c]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'},c:{type:txt,defaultValue:'100'}}},
{opcode:'me79',blockType:com0,text:'[a].[b]*=[c]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'},c:{type:txt,defaultValue:'100'}}},
{opcode:'me80',blockType:com0,text:'[a].[b]**=[c]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'},c:{type:txt,defaultValue:'100'}}},
{opcode:'me81',blockType:com0,text:'[a].[b]%=[c]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'},c:{type:txt,defaultValue:'100'}}},
{opcode:'me82',blockType:com0,text:'[a].[b]<<=[c]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'},c:{type:txt,defaultValue:'100'}}},
{opcode:'me83',blockType:com0,text:'[a].[b]>>=[c]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'},c:{type:txt,defaultValue:'100'}}},
{opcode:'me84',blockType:com0,text:'[a].[b]>>>=[c]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'},c:{type:txt,defaultValue:'100'}}},
{opcode:'me85',blockType:com0,text:'[a].[b]&=[c]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'},c:{type:txt,defaultValue:'100'}}},
{opcode:'me86',blockType:com0,text:'[a].[b]|=[c]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'},c:{type:txt,defaultValue:'100'}}},
{opcode:'me87',blockType:com0,text:'[a].[b]^=[c]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'},c:{type:txt,defaultValue:'100'}}},
{opcode:'me88',blockType:com0,text:'[a].[b]||=[c]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'},c:{type:txt,defaultValue:'100'}}},
{opcode:'me89',blockType:com0,text:'[a].[b]&&=[c]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'},c:{type:txt,defaultValue:'100'}}},
{opcode:'me90',blockType:com0,text:'[a].[b]??=[c]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'},c:{type:txt,defaultValue:'100'}}},
{opcode:'me8',blockType:bol,text:'[a]in[b]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:'tr'},b:{type:txt,defaultValue:''}}},
{opcode:'me14',blockType:bol,text:'Object.is[a][b]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me32',blockType:rep,text:'getPrototypeOf[a]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me47',blockType:rep,text:'setPrototypeOf[a][b]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me9',blockType:rep,text:'[a]deleteProperty[b]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'}}},
{opcode:'me9_2',blockType:com0,text:'[a]deleteProperty[b]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'tr'}}},
{opcode:'me11',blockType:rep,text:'stringify[a]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me13',blockType:rep,text:'parse[a]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:'{"valor1":false, "valor2":100}'}}},
{opcode:'me68',blockType:rep,text:'ExpsCadena[a]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me69',blockType:rep,text:'ExpsParseCadena[a]functioneval[b]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:'{"valor1":"[Na]","valor2":["[ui8a]",[0,255]]}'},b:{type:txt,defaultValue:'0'}}},
{opcode:'me17',blockType:rep,text:'values[a]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me18',blockType:rep,text:'entries[a]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me19',blockType:rep,text:'assign[a][b]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me21',blockType:rep,text:'frezze[a]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me21_2',blockType:com0,text:'frezze[a]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me22',blockType:bol,text:'isFrozen[a]?',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me30',blockType:rep,text:'seal[a]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me31',blockType:bol,text:'isSealed[a]?',hideFromPalette:dap,hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me23',blockType:rep,text:'create[a]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me99',blockType:rep,text:'construct([a],[b],[c])',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''},c:{type:txt,defaultValue:''}}},
{opcode:'me24',blockType:com0,text:'toStringTag[a]=[b]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'PersObj'}}},
{opcode:'me67',blockType:rep,text:'structuredClone[a]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me97',blockType:rep,text:'Object.groupBy[a][b]',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me100',blockType:rep,text:'Object.assign([a],...[b])',hideFromPalette:dap,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{blockType:"label",text:"Objetos y utiles",hideFromPalette:obs},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'me1',blockType:rep,text:'Nuevo Objeto vacio',hideFromPalette:obs,disableMonitor:1},
{opcode:'me38',blockType:bol,text:'[a]',hideFromPalette:obs,disableMonitor:1,arguments:{a:{type:txt,menu:'vals'}}},
{opcode:'me12',blockType:rep,text:'interno[a]',hideFromPalette:obs,disableMonitor:1,arguments:{a:{type:txt,menu:'in'}}},
{opcode:'me20',blockType:rep,text:'Objeto Global',hideFromPalette:obs,disableMonitor:1},
{opcode:'me25',blockType:rep,text:'Objeto Global Permanente',hideFromPalette:obs,disableMonitor:1},
{opcode:'me26',blockType:com0,text:'Vaciar Objeto Global Permanente',hideFromPalette:obs,disableMonitor:1},
{opcode:'me92',blockType:bol,text:'[a]?[b]:[c]',hideFromPalette:obs,arguments:{a:{type:bol1,defaultValue:''},b:{type:txt,defaultValue:'1'},c:{type:txt,defaultValue:'0'}}},
{opcode:'me39',blockType:rep,text:'typeof[a]',hideFromPalette:obs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me54',blockType:bol,text:'[a]instanceof[b]',hideFromPalette:obs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'me41',blockType:com0,text:'[a]',hideFromPalette:obs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'me71',blockType:rep,text:'Referencia variable[a]',hideFromPalette:obs,arguments:{a:{type:txt,defaultValue:'mi variable'}}},
{opcode:'me72',blockType:rep,text:'Referencia lista[a]',hideFromPalette:obs,arguments:{a:{type:txt,defaultValue:'lista-1'}}},
{opcode:'me101',blockType:Scratch.BlockType.HAT,text:'Si[a]',hideFromPalette:obs,isEdgeActivated:true,arguments:{a:{type:txt,defaultValue:''}}},

],menus:{pr:{acceptReporters:0,items:['value','writable','enumerable','configurable']},in:{acceptReporters:0,items:['vm','target','util','Scratch','Math','Atomics','Object','Symbol','Array','String','window','crypto','Map','Set','twgl','gl','Proxy','navigator']},vals:{acceptReporters:0,items:['true','false','Undefined','NaN','null','Infinity']}}
};}
herr0(){Scratch.openWindow('https://linktr.ee/Penta_quark_neutro');}
herr1(){fun=0;ref();}herr2(){fun=1;ref();}herr3(){dap=0;ref();}herr4(){dap=1;ref();}
herr5(){obs=0;ref();}herr6(){obs=1;ref();}herr7(){pun=0;ref();}herr8(){pun=1;ref();}
herr9(){blo=0;ref();}herr10(){blo=1;ref();}
me00({a}){return [a];}me0({a,b}){return [a,b];}me01({a,b,c}){return [a,b,c];}me10({a,b,c,d}){return [a,b,c,d];}
me1(){return {};}
me2(ar){return Object.fromEntries(ar.a);}
me3(ar){return Object.getOwnPropertyNames(ar.a);}
me4(ar){return Object.defineProperties(ar.a,ar.b)}
me5(ar){var t=Reflect.getOwnPropertyDescriptor(ar.a,ar.b);switch(ar.c){case'value':return t.value;break;case'writable':return t.writable;break;case'enumerable':return t.enumerable;break;case'configurable':return t.configurable;break;}}
me6(ar){return ar.a[ar.b]}
me7_2({a,b,c}){a[b]=c}
me8(ar){return ar.a in ar.b;}
me9(ar){Reflect.deleteProperty(ar.a,ar.b);return ar.a;}me9_2(ar){Reflect.deleteProperty(ar.a,ar.b);}
me11(ar){return JSON.stringify(ar.a);}
me12(ar,util){switch(ar.a){case'vm':return Scratch.vm;case'target':return util.target;case'util':return util;case'Scratch':return Scratch;case'Math':return Math;case'Atomics':return Atomics;case'Object':return Object;case'Symbol':return Symbol;case'Array':return Array;case'String':return String;case'window':return window;case'crypto':return crypto;case'Map':return Map;case'Set':return Set;case'twgl':return vm.renderer.exports.twgl;case'gl':return vm.renderer._gl;case'Proxy':return Proxy;case'navigator':return navigator;}}
me13(ar){return JSON.parse(ar.a);}
me14(ar){return Object.is(ar.a,ar.b);}
me15({a,b,c}){return Reflect.apply(a,b,c);}me70({a,b,c}){Reflect.apply(a,b,c);}
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
me37({a,b}){try{return a(...b)}catch(c){return c;}}
me38(ar){switch(ar.a){case'true':return true;case'false':return false;case'NaN':return NaN;case'Undefined':return ;case'null':return null;case'Infinity':return Infinity;}}
me39(ar){return typeof(ar.a)}me41(){}me42(ar){return GeneratorFunction(...ar.a,ar.b)}me43(ar){return AsyncGeneratorFunction(...ar.a,ar.b)}me44(ar){return ar.a.next(ar.b)}
me45(ar){return ar.a.return(ar.b)}me46(ar){return ar.a.throw(new Error(ar.b))}
me48({a,c}){return a[c]();}me51({a,c}){return new a[c]();}
me49({a,b,c}){return a[c](b);}me52({a,b,c}){return new a[c](b);}
me50({a,b,c}){return a[c](...b);}me53({a,b,c}){return new a[c](...b);}
me54({a,b}){return (a instanceof b)}
me55({a}){return a();}me58({a}){return new a();}
me56({a,b}){return a(b);}me59({a,b}){return new a(b);}
me57({a,b}){return a(...b);}me60({a,b}){return new a(...b);}
me61({a,c}){return a[c]();}me64({a,c}){return new a[c]();}
me62({a,b,c}){return a[c](b);}me65({a,b,c}){return new a[c](b);}
me63({a,b,c}){return a[c](...b);}me66({a,b,c}){return new a[c](...b);}
me67(ar){return structuredClone(ar.a)}
me68(ar){return ExpsCadena(ar.a)}
me69(ar){return ExpsParseCadena(ar.a,false,ar.b)}
me71(ar,util){return util.target.lookupVariableByNameAndType(ar.a+'','')}
me72(ar,util){return util.target.lookupVariableByNameAndType(ar.a+'','list')}
me73(ar){return ar.a.bind(...ar.b)}
me74(ar){return (new Worker(ar.a,ar.b))}
me75(ar){return URL.createObjectURL(new Blob([ar.a],{type:'text/javascript'}))}
me76({a,b,c}){a[b]+=c}me77({a,b,c}){a[b]-=c}me78({a,b,c}){a[b]/=c}me79({a,b,c}){a[b]*=c}me80({a,b,c}){a[b]**=c}me81({a,b,c}){a[b]%=c}me82({a,b,c}){a[b]<<=c}me83({a,b,c}){a[b]>>=c}me84({a,b,c}){a[b]>>>=c}
me85({a,b,c}){a[b]&=c}me86({a,b,c}){a[b]|=c}me87({a,b,c}){a[b]^=c}me88({a,b,c}){a[b]||=c}me89({a,b,c}){a[b]&&=c}me90({a,b,c}){a[b]??=c}
me91(ar){URL.revokeObjectURL(ar.a)}
me92(ar){return (ar.a?ar.b:ar.c)}
me93(ar){return ar.a[ar.b][ar.c]}
me94(ar){return ar.a?.[ar.b]?.[ar.c]}
me95(ar){return ar.a[ar.b][ar.c][ar.d]}
me96(ar){return ar.a?.[ar.b]?.[ar.c]?.[ar.d]}
me97(ar){return Object.groupBy(ar.a,ar.b)}
me98({a,b,c}){try{return a[b](...c)}catch(d){return d;}}
me99(ar){return Reflect.construct(ar.a,ar.b,ar.c)}
me100(ar){return Object.assign(ar.a,...ar.b)}
me101(ar){return ar.a}
}Scratch.extensions.register(new exps());})(Scratch);