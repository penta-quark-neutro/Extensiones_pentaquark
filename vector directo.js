(function(Scratch) {'use strict';//por el (pentaquark neutro, penta quark neutro) y neutral auream
const txt=Scratch.ArgumentType.STRING,rep=Scratch.BlockType.REPORTER,num=Scratch.ArgumentType.NUMBER,vgbb=Scratch.BlockType.BUTTON,evaluador=Scratch.BlockType.BOOLEAN,com=Scratch.BlockType.COMMAND;
const vm=Scratch.vm,runtime=vm.runtime,grrad=Math.PI/180,iv=[1,0,0],jv=[0,1,0],kv=[0,0,1];let Gvec=[],ops=1,vecs=1,prop=1,glo=1,cc=1,cuat=1,oct=1,sed=1,geo=1;
function ref(){Scratch.vm.extensionManager.refreshBlocks();}
if(!vm.runtime.extensionStorage['vectorr']){vm.runtime.extensionStorage['vectorr']=[]}
if(!Scratch.extensions.unsandboxed){throw new Error('unsandboxed');}
class vectorr{getInfo(){return{id:'vectorr',name:'vectorr',color1:'#a4a4a4',color2:'#ff00ff',color3:'#00ff00',blocks:[
{func:'herr0',blockType:vgbb,text:'Redes pentaquark',},
{func:'herr1',blockType:vgbb,hideFromPalette:!ops,text:'Mostrar operadores matematicos',},{func:'herr2',blockType:vgbb,hideFromPalette:ops,text:'Ocultar operadores matematicos',},
{func:'herr3',blockType:vgbb,hideFromPalette:!vecs,text:'Mostrar vectores',},{func:'herr4',blockType:vgbb,hideFromPalette:vecs,text:'Ocultar vectores',},
{func:'herr5',blockType:vgbb,hideFromPalette:!prop,text:'Mostrar Obj.vec',},{func:'herr6',blockType:vgbb,hideFromPalette:prop,text:'Ocultar Obj.vec',},
{func:'herr7',blockType:vgbb,hideFromPalette:!glo,text:'Mostrar global',},{func:'herr8',blockType:vgbb,hideFromPalette:glo,text:'Ocultar global',},
{func:'herr9',blockType:vgbb,hideFromPalette:!cc,text:'Mostrar Complejos',},{func:'herr10',blockType:vgbb,hideFromPalette:cc,text:'Ocultar Complejos',},
{func:'herr11',blockType:vgbb,hideFromPalette:!cuat,text:'Mostrar Cuaterniones',},{func:'herr12',blockType:vgbb,hideFromPalette:cuat,text:'Ocultar Cuaterniones',},
{func:'herr13',blockType:vgbb,hideFromPalette:!oct,text:'Mostrar Octoniones',},{func:'herr14',blockType:vgbb,hideFromPalette:oct,text:'Ocultar Octoniones',},
{func:'herr15',blockType:vgbb,hideFromPalette:!sed,text:'Mostrar Sedeniones',},{func:'herr16',blockType:vgbb,hideFromPalette:sed,text:'Ocultar Sedeniones',},
{func:'herr17',blockType:vgbb,hideFromPalette:!geo,text:'Mostrar Detectores Geometricos',},{func:'herr18',blockType:vgbb,hideFromPalette:geo,text:'Ocultar Detectores Geometricos',},
{blockType:"label",text:"Operadores matematicos",hideFromPalette:ops},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'m',blockType:rep,text:'[a]+[b]',hideFromPalette:ops,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'r',blockType:rep,text:'[a]-[b]',hideFromPalette:ops,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'muVE',blockType:rep,text:'[a]*[b]',hideFromPalette:ops,arguments:{a:{type:txt},b:{type:num,defaultValue:'5'}}},
{opcode:'prod',blockType:rep,text:'[a]•[b]',hideFromPalette:ops,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'cruz',blockType:rep,text:'3D[a]X[b]',hideFromPalette:ops,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'Hadamard',blockType:rep,text:'[a]⊙[b]',hideFromPalette:ops,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'invemul',blockType:rep,text:'[a]^-1',hideFromPalette:ops,arguments:{a:{type:txt}}},
{opcode:'negvec',blockType:rep,text:'-[a]',hideFromPalette:ops,arguments:{a:{type:txt}}},
{opcode:'Kr',blockType:rep,text:'[a]⊗[b]',hideFromPalette:ops,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'dsit',blockType:rep,text:'[a]dist[b]',hideFromPalette:ops,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'dsit2',blockType:rep,text:'2D[a]dist[b]lista',hideFromPalette:ops,arguments:{a:{type:txt},b:{type:txt,defaultValue:'[[],[]...]'}}},
{opcode:'dsit3',blockType:rep,text:'punto[a]dist[b][c]linea',hideFromPalette:ops,arguments:{a:{type:txt},b:{type:txt},c:{type:txt}}},
{opcode:'pmedio',blockType:rep,text:'[a]punto medio[b]',hideFromPalette:ops,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'pmedioN',blockType:rep,text:'punto medio[a]N puntos',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:'[[],[]...]'}}},
{opcode:'lerp',blockType:rep,text:'IterpoLineal[a][b]alpha[c]',hideFromPalette:ops,arguments:{a:{type:txt},b:{type:txt},c:{type:num,defaultValue:'0.5'}}},
{opcode:'smdr',blockType:rep,text:'Σ[a]',hideFromPalette:ops,arguments:{a:{type:txt}}},
{opcode:'prto',blockType:rep,text:'∏[a]',hideFromPalette:ops,arguments:{a:{type:txt}}},
{opcode:'med1',blockType:rep,text:'media aritmetica[a]',hideFromPalette:ops,arguments:{a:{type:txt}}},
{opcode:'med2',blockType:rep,text:'media geometrica[a]',hideFromPalette:ops,arguments:{a:{type:txt}}},
{opcode:'med3',blockType:rep,text:'media armonica[a]',hideFromPalette:ops,arguments:{a:{type:txt}}},
{opcode:'med4',blockType:rep,text:'media cuadratica[a]',hideFromPalette:ops,arguments:{a:{type:txt}}},
{opcode:'med5',blockType:rep,text:'desviacion tipica[a]',hideFromPalette:ops,arguments:{a:{type:txt}}},
{opcode:'nor',blockType:rep,text:'||[a]||',hideFromPalette:ops,arguments:{a:{type:txt}}},
{opcode:'unit',blockType:rep,text:'versor[a]',hideFromPalette:ops,arguments:{a:{type:txt}}},
{opcode:'angu',blockType:rep,text:'Θ°[a]',hideFromPalette:ops||1,arguments:{a:{type:txt}}},
{opcode:'Refj',blockType:rep,text:'Reflexion[a]normal[b]',hideFromPalette:ops,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'proyvec',blockType:rep,text:'Proyeccion vectorial[a][b]',hideFromPalette:ops,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'proyesc',blockType:rep,text:'Proyeccion escalar[a][b]',hideFromPalette:ops,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'Rotacion',blockType:rep,text:'3DRotar[a]en eje[b][c]grados',hideFromPalette:ops,arguments:{a:{type:txt},b:{type:num},c:{type:num,defaultValue:'45'}}},
{opcode:'Rotacion2',blockType:rep,text:'3DRotar lista[a]en eje[b][c]grados',hideFromPalette:ops,arguments:{a:{type:txt},b:{type:num},c:{type:num,defaultValue:'45'}}},
{blockType:"label",text:"vectores",hideFromPalette:vecs},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'pt',blockType:rep,text:'[a]〚[b]〛',hideFromPalette:vecs,arguments:{a:{type:txt},b:{type:txt,defaultValue:'2'}}},
{opcode:'att',blockType:rep,text:'[a].at[b]',hideFromPalette:vecs,arguments:{a:{type:txt},b:{type:txt,defaultValue:'2'}}},
{opcode:'withh',blockType:rep,text:'[a].with[b][c]',hideFromPalette:vecs,arguments:{a:{type:txt},b:{type:txt,defaultValue:'0'},c:{type:txt,defaultValue:'2'}}},
{opcode:'arr',blockType:rep,text:'arr[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:'1,5,8'}}},
{opcode:'arrf',blockType:rep,text:'Array.from[a]',hideFromPalette:vecs,arguments:{a:{type:txt}}},
{opcode:'le',blockType:rep,text:'length[a]',hideFromPalette:vecs,arguments:{a:{type:txt}}},
{opcode:'rpt',blockType:rep,text:'[a]〚[b]〛=[c]',hideFromPalette:vecs,arguments:{a:{type:txt},b:{type:txt,defaultValue:'0'},c:{type:txt,defaultValue:'10'}}},
{opcode:'rpt2',blockType:com,text:'[a]〚[b]〛=[c]',hideFromPalette:vecs,arguments:{a:{type:txt},b:{type:txt,defaultValue:'0'},c:{type:txt,defaultValue:'10'}}},
{opcode:'rpt3',blockType:com,text:'[a]〚[b]〛[tip][c]',hideFromPalette:vecs,arguments:{a:{type:txt},b:{type:txt,defaultValue:'0'},c:{type:txt,defaultValue:'10'},tip:{type:txt,menu:'Asig'}}},
{opcode:'gen',blockType:rep,text:'Array[a]B[b]',hideFromPalette:vecs,arguments:{a:{type:num,defaultValue:'12'},b:{type:num,defaultValue:'3'}}},
{opcode:'gen2',blockType:rep,text:'Array[a]rand B[b]C[c]',hideFromPalette:vecs,arguments:{a:{type:num,defaultValue:'12'},b:{type:num,defaultValue:'70'},c:{type:num,defaultValue:'10'}}},
{opcode:'arentries',blockType:rep,text:'[a].entries',hideFromPalette:vecs,arguments:{a:{type:txt}}},
{opcode:'aritera',blockType:rep,text:'[a]〚Symbol.iterator〛()',hideFromPalette:vecs,arguments:{a:{type:txt}}},
{opcode:'arnex',blockType:rep,text:'[a].next',hideFromPalette:vecs,arguments:{a:{type:txt}}},
{opcode:'pu',blockType:com,text:'[a].push[b]',hideFromPalette:vecs,arguments:{a:{type:txt},b:{type:txt,defaultValue:'9'}}},
{opcode:'unsh',blockType:com,text:'[a].unshift[b]',hideFromPalette:vecs,arguments:{a:{type:txt},b:{type:txt,defaultValue:'9'}}},
{opcode:'sh',blockType:rep,text:'shift[a]',hideFromPalette:vecs,arguments:{a:{type:txt}}},
{opcode:'po',blockType:rep,text:'pop[a]',hideFromPalette:vecs,arguments:{a:{type:txt}}},
{opcode:'fl',blockType:rep,text:'[a].flat[b]',hideFromPalette:vecs,arguments:{a:{type:txt},b:{type:txt,defaultValue:'5'}}},
{opcode:'fill',blockType:rep,text:'[a].fill[b]',hideFromPalette:vecs,arguments:{a:{type:txt},b:{type:txt,defaultValue:'5'}}},
{opcode:'sl',blockType:rep,text:'[a].splice[b][c]',hideFromPalette:vecs,arguments:{a:{type:txt},b:{type:num,defaultValue:'1'},c:{type:num,defaultValue:'1'}}},
{opcode:'sl2',blockType:com,text:'[a].splice[b][c]',hideFromPalette:vecs,arguments:{a:{type:txt},b:{type:num,defaultValue:'1'},c:{type:num,defaultValue:'1'}}},
{opcode:'sli',blockType:rep,text:'[a].slice[b][c]',hideFromPalette:vecs,arguments:{a:{type:txt},b:{type:num,defaultValue:'1'},c:{type:num,defaultValue:'1'}}},
{opcode:'in',blockType:rep,text:'[c].indexOf[a][b]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:'K'},b:{type:num,defaultValue:'0'},c:{type:txt}}},
{opcode:'lain',blockType:rep,text:'[c].lastIndexOf[a][b]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:'K'},b:{type:num,defaultValue:'-1'},c:{type:txt}}},
{opcode:'arrcopy',blockType:rep,text:'[a].copyWithin[b][c][d]',hideFromPalette:vecs,arguments:{a:{type:txt},b:{type:num,defaultValue:'1'},c:{type:num,defaultValue:'1'},d:{type:num,defaultValue:'1'}}},
{opcode:'ma',blockType:rep,text:'[a].map[ou][b]',hideFromPalette:vecs,arguments:{a:{type:txt},ou:{type:txt,menu:'outs'},b:{type:txt,defaultValue:'3'}}},
{opcode:'fore',blockType:com,text:'[a].forEach[ou][b]',hideFromPalette:vecs,arguments:{a:{type:txt},ou:{type:txt,menu:'outs2'},b:{type:txt,defaultValue:'3'}}},
{opcode:'Fil',blockType:rep,text:'[a].filter[ou][b]',hideFromPalette:vecs,arguments:{a:{type:txt},ou:{type:txt,menu:'Filt'},b:{type:txt,defaultValue:'3'}}},
{opcode:'reduc',blockType:rep,text:'[a].reduce[ou][b]',hideFromPalette:vecs,arguments:{a:{type:txt},ou:{type:txt,menu:'redu'},b:{type:txt,defaultValue:'0'}}},
{opcode:'some',blockType:rep,text:'[a].some[ou][b]',hideFromPalette:vecs,arguments:{a:{type:txt},ou:{type:txt,menu:'Filt'},b:{type:txt,defaultValue:'3'}}},
{opcode:'every',blockType:rep,text:'[a].every[ou][b]',hideFromPalette:vecs,arguments:{a:{type:txt},ou:{type:txt,menu:'Filt'},b:{type:txt,defaultValue:'3'}}},
{opcode:'find',blockType:rep,text:'[a].find[ou][b]',hideFromPalette:vecs,arguments:{a:{type:txt},ou:{type:txt,menu:'Filt'},b:{type:txt,defaultValue:'3'}}},
{opcode:'findIndex',blockType:rep,text:'[a].findIndex[ou][b]',hideFromPalette:vecs,arguments:{a:{type:txt},ou:{type:txt,menu:'Filt'},b:{type:txt,defaultValue:'3'}}},
{opcode:'findlast',blockType:rep,text:'[a].findLast[ou][b]',hideFromPalette:vecs,arguments:{a:{type:txt},ou:{type:txt,menu:'Filt'},b:{type:txt,defaultValue:'3'}}},
{opcode:'findlastindex',blockType:rep,text:'[a].findLastIndex[ou][b]',hideFromPalette:vecs,arguments:{a:{type:txt},ou:{type:txt,menu:'Filt'},b:{type:txt,defaultValue:'3'}}},
{opcode:'co',blockType:rep,text:'[a].concat[b]',hideFromPalette:vecs,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'incl',blockType:rep,text:'[a].includes[b]',hideFromPalette:vecs,arguments:{a:{type:txt},b:{type:txt,defaultValue:'5'}}},
{opcode:'rev',blockType:rep,text:'[a].reverse',hideFromPalette:vecs,arguments:{a:{type:txt}}},
{opcode:'torev',blockType:rep,text:'[a].toReversed',hideFromPalette:vecs,arguments:{a:{type:txt}}},
{opcode:'join',blockType:rep,text:'[a].join[b]',hideFromPalette:vecs,arguments:{a:{type:txt},b:{type:txt,defaultValue:'-'}}},
{opcode:'sort',blockType:rep,text:'[a].sort',hideFromPalette:vecs,arguments:{a:{type:txt}}},
{opcode:'tosort',blockType:rep,text:'[a].toSorted',hideFromPalette:vecs,arguments:{a:{type:txt}}},
{opcode:'esarr',blockType:evaluador,text:'isArray[a]',hideFromPalette:vecs,arguments:{a:{type:txt}}},
{opcode:'uin1',blockType:rep,text:'new Uint8Array[a]',hideFromPalette:vecs,arguments:{a:{type:txt}}},
{opcode:'uin10',blockType:rep,text:'new Uint8ClampedArray[a]',hideFromPalette:vecs,arguments:{a:{type:txt}}},
{opcode:'uin2',blockType:rep,text:'new Uint16Array[a]',hideFromPalette:vecs,arguments:{a:{type:txt}}},
{opcode:'uin3',blockType:rep,text:'new Uint32Array[a]',hideFromPalette:vecs,arguments:{a:{type:txt}}},
{opcode:'uin4',blockType:rep,text:'new int8Array[a]',hideFromPalette:vecs,arguments:{a:{type:txt}}},
{opcode:'uin5',blockType:rep,text:'new int16Array[a]',hideFromPalette:vecs,arguments:{a:{type:txt}}},
{opcode:'uin6',blockType:rep,text:'new int32Array[a]',hideFromPalette:vecs,arguments:{a:{type:txt}}},
{opcode:'uin7',blockType:rep,text:'new Float16Array[a]',hideFromPalette:vecs,arguments:{a:{type:txt}}},
{opcode:'uin8',blockType:rep,text:'new Float32Array[a]',hideFromPalette:vecs,arguments:{a:{type:txt}}},
{opcode:'uin9',blockType:rep,text:'new Float64Array[a]',hideFromPalette:vecs,arguments:{a:{type:txt}}},
{opcode:'uin11',blockType:rep,text:'new BigInt64Array[a]',hideFromPalette:vecs,arguments:{a:{type:txt}}},
{opcode:'uin12',blockType:rep,text:'new BigUint64Array[a]',hideFromPalette:vecs,arguments:{a:{type:txt}}},
{blockType:"label",text:"vectores-tuplas y accesores",hideFromPalette:vecs},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'cu_i',blockType:rep,text:'i',hideFromPalette:vecs,disableMonitor:1},
{opcode:'cu_j',blockType:rep,text:'j',hideFromPalette:vecs,disableMonitor:1},
{opcode:'cu_k',blockType:rep,text:'k',hideFromPalette:vecs,disableMonitor:1},
{opcode:'cu',blockType:rep,text:'[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:'5'}}},
{opcode:'cu2',blockType:rep,text:'[a][b]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:'5'},b:{type:txt,defaultValue:'2'}}},
{opcode:'cu3',blockType:rep,text:'[a][b][c]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:'5'},b:{type:txt,defaultValue:'2'},c:{type:txt,defaultValue:'-1'}}},
{opcode:'cu4',blockType:rep,text:'[a][b][c][d]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:'5'},b:{type:txt,defaultValue:'2'},c:{type:txt,defaultValue:'-1'},d:{type:txt,defaultValue:'-4'}}},
{opcode:'cu6',blockType:rep,text:'[a][b][c][d][e]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:'5'},b:{type:txt,defaultValue:'2'},c:{type:txt,defaultValue:'-1'},d:{type:txt,defaultValue:'-4'},e:{type:txt,defaultValue:'-9'}}},
{opcode:'cu7',blockType:rep,text:'[a][b][c][d][e][f]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:'5'},b:{type:txt,defaultValue:'2'},c:{type:txt,defaultValue:'-1'},d:{type:txt,defaultValue:'-4'},e:{type:txt,defaultValue:'-9'},f:{type:txt,defaultValue:'7'}}},
{opcode:'cu8',blockType:rep,text:'[a][b][c][d][e][f][g]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:'5'},b:{type:txt,defaultValue:'2'},c:{type:txt,defaultValue:'-1'},d:{type:txt,defaultValue:'-4'},e:{type:txt,defaultValue:'-9'},f:{type:txt,defaultValue:'7'},g:{type:txt,defaultValue:'0'}}},
{opcode:'cu5',blockType:rep,text:'[a][b][c][d][e][f][g][h]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:'5'},b:{type:txt,defaultValue:'2'},c:{type:txt,defaultValue:'-1'},d:{type:txt,defaultValue:'-4'},e:{type:txt,defaultValue:'-9'},f:{type:txt,defaultValue:'7'},g:{type:txt,defaultValue:'0'},h:{type:txt,defaultValue:'8'}}},
{opcode:'pt2',blockType:rep,text:'[a]〚[b]〛〚[c]〛',hideFromPalette:vecs,arguments:{a:{type:txt},b:{type:txt,defaultValue:'2'},c:{type:txt,defaultValue:'0'}}},
{opcode:'pt3',blockType:rep,text:'[a]〚[b]〛〚[c]〛〚[d]〛',hideFromPalette:vecs,arguments:{a:{type:txt},b:{type:txt,defaultValue:'2'},c:{type:txt,defaultValue:'0'},d:{type:txt,defaultValue:'3'}}},
{opcode:'pt4',blockType:rep,text:'[a]〚[b]〛〚[c]〛〚[d]〛〚[e]〛',hideFromPalette:vecs,arguments:{a:{type:txt},b:{type:txt,defaultValue:'2'},c:{type:txt,defaultValue:'0'},d:{type:txt,defaultValue:'3'},e:{type:txt,defaultValue:'7'}}},
{opcode:'rpt4',blockType:com,text:'[a]〚[b]〛=[c],〚[d]〛=[e]',hideFromPalette:vecs,arguments:{a:{type:txt},b:{type:txt,defaultValue:'2'},c:{type:txt,defaultValue:'0'},d:{type:txt,defaultValue:'1'},e:{type:txt,defaultValue:'255'}}},
{opcode:'rpt5',blockType:com,text:'[a]〚[b]〛=[c],〚[d]〛=[e],〚[f]〛=[g]',hideFromPalette:vecs,arguments:{a:{type:txt},b:{type:txt,defaultValue:'2'},c:{type:txt,defaultValue:'0'},d:{type:txt,defaultValue:'1'},e:{type:txt,defaultValue:'255'},f:{type:txt,defaultValue:'0'},g:{type:txt,defaultValue:'7'}}},
{opcode:'rpt6',blockType:com,text:'[a]〚[b]〛=[c],〚[d]〛=[e],〚[f]〛=[g],〚[h]〛=[i]',hideFromPalette:vecs,arguments:{a:{type:txt},b:{type:txt,defaultValue:'2'},c:{type:txt,defaultValue:'0'},d:{type:txt,defaultValue:'1'},e:{type:txt,defaultValue:'255'},f:{type:txt,defaultValue:'0'},g:{type:txt,defaultValue:'7'},h:{type:txt,defaultValue:'3'},i:{type:txt,defaultValue:'-10'}}},
{opcode:'rpt7',blockType:com,text:'〚...[a]〛=〚...[b]〛',hideFromPalette:vecs,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'rpt8',blockType:rep,text:'++[a]〚[b]〛',hideFromPalette:vecs,arguments:{a:{type:txt},b:{type:txt,defaultValue:'0'}}},
{opcode:'rpt9',blockType:rep,text:'--[a]〚[b]〛',hideFromPalette:vecs,arguments:{a:{type:txt},b:{type:txt,defaultValue:'0'}}},
{opcode:'rpt10',blockType:rep,text:'[a]〚[b]〛++',hideFromPalette:vecs,arguments:{a:{type:txt},b:{type:txt,defaultValue:'0'}}},
{opcode:'rpt11',blockType:rep,text:'[a]〚[b]〛--',hideFromPalette:vecs,arguments:{a:{type:txt},b:{type:txt,defaultValue:'0'}}},
{blockType:"label",text:"Obj.vec o propiedad",hideFromPalette:prop},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'tagtp1m',blockType:com,text:'añadir[t]tp1 NR',hideFromPalette:prop,arguments:{t:{type:txt,defaultValue:'K'}}},
{opcode:'tagtp1mc',blockType:com,text:'añadir[t]tp1',hideFromPalette:prop,arguments:{t:{type:txt,defaultValue:'K'}}},
{opcode:'tagtp1',blockType:rep,text:'tp1',hideFromPalette:prop,disableMonitor:1},
{opcode:'tagtp1ig',blockType:com,text:'tp1=[t]',hideFromPalette:prop,arguments:{t:{type:txt}}},
{opcode:'tagtp1c',blockType:evaluador,text:'contiene?[t]tp1',hideFromPalette:prop,arguments:{t:{type:txt}}},
{opcode:'s1',blockType:rep,text:'ID',hideFromPalette:prop,disableMonitor:1},
{opcode:'s2',blockType:rep,text:'DRAWID',hideFromPalette:prop,disableMonitor:1},
{opcode:'s12',blockType:rep,text:'Referencia object',hideFromPalette:prop,disableMonitor:1},
{opcode:'s3',blockType:rep,text:'Obj.filter(ID)[a].tp1',hideFromPalette:prop,arguments:{a:{type:txt}}},
{opcode:'s4',blockType:evaluador,text:'tocando Obj.tp1.includes[a]?',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:'K'}}},
{opcode:'s9',blockType:evaluador,text:'tocando Obj.tp1.includes[a]?de lista[targets]',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:'K'},targets:{type:txt,defaultValue:'[DrawID,...]'}}},
{opcode:'s5',blockType:rep,text:'tp1 de toda cosa tocada',hideFromPalette:prop,disableMonitor:1},
{opcode:'s6',blockType:rep,text:'coordenadas',hideFromPalette:prop,disableMonitor:1},
{opcode:'s7',blockType:com,text:'Ir a[a]',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:'[]'}}},
{opcode:'s8',blockType:com,text:'mover[a]',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:'[]'}}},
{opcode:'s28',blockType:com,text:'apuntar a[a]',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:'[]'}}},
{blockType:"label",text:"Control de referencias",hideFromPalette:prop},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'s29',blockType:evaluador,text:'tocando [a]?',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:'referencia'}}},
{opcode:'s30',blockType:rep,text:'tocando de lista[a]',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:'[referencia,...]'}}},
{opcode:'s10',blockType:com,text:'Ir multiples[b]a XY[a]',hideFromPalette:prop,arguments:{a:{type:txt},b:{type:txt,defaultValue:'[referencia,...]'}}},
{opcode:'s11',blockType:com,text:'mover multiples[b] XY[a]',hideFromPalette:prop,arguments:{a:{type:txt},b:{type:txt,defaultValue:'[referencia,...]'}}},
{opcode:'s16',blockType:com,text:'Ir a coord[a]',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:'referencia'}}},
{opcode:'s19',blockType:com,text:'[a]ir a coord[b]',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:'referencia'},b:{type:txt,defaultValue:'[]'}}},
{opcode:'s31',blockType:com,text:'[a]ir a[b]',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:'referencia'},b:{type:txt,defaultValue:'referencia'}}},
{opcode:'s13',blockType:rep,text:'distancia a[a]',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:'referencia'}}},
{opcode:'s14',blockType:rep,text:'distancia lista[a]',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:'[referencia,...]'}}},
{opcode:'s15',blockType:rep,text:'distancia entre[a][b]',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:'referencia'},b:{type:txt,defaultValue:'referencia'}}},
{opcode:'s17',blockType:rep,text:'punto medio[a][b]',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:'referencia'},b:{type:txt,defaultValue:'referencia'}}},
{opcode:'s18',blockType:rep,text:'punto medio[a]N ref',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:'[referencia,...]'}}},
{opcode:'s20',blockType:com,text:'dar direccion[b]a[a]',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:'referencia'},b:{type:txt,defaultValue:'90'}}},
{opcode:'s21',blockType:com,text:'apuntar a[a]',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:'referencia'}}},
{opcode:'s22',blockType:com,text:'dar direccion de[a]',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:'referencia'}}},
{opcode:'s25',blockType:com,text:'dar direccion y posicion de[a]',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:'referencia'}}},
{opcode:'s23',blockType:com,text:'[b]apuntar a[a]',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:'referencia'},b:{type:txt,defaultValue:'referencia'}}},
{opcode:'s24',blockType:com,text:'Eliminar[a](clon)',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:'referencia'}}},
{opcode:'s26',blockType:com,text:'mostrar[a]',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:'referencia'}}},
{opcode:'s27',blockType:com,text:'esconder[a]',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:'referencia'}}},
{blockType:"label",text:"Global",hideFromPalette:glo},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'Gv1',blockType:com,text:'push[t]Gv',hideFromPalette:glo,arguments:{t:{type:txt,defaultValue:'L'}}},
{opcode:'Gv4',blockType:com,text:'concat[t]Gv',hideFromPalette:glo,arguments:{t:{type:txt,defaultValue:'L'}}},
{opcode:'Gv2',blockType:rep,text:'Gv',hideFromPalette:glo,disableMonitor:1},
{opcode:'Gv3',blockType:com,text:'Gv=[t]',hideFromPalette:glo,arguments:{t:{type:txt}}},
{opcode:'Gv5',blockType:rep,text:'runtime Targets',hideFromPalette:glo,disableMonitor:1},
{blockType:"label",text:"Vector global persistente",hideFromPalette:glo},//---------------------------------------------------------------------------------------------------------
{opcode:'Gv6',blockType:com,text:'push[t]VGP',hideFromPalette:glo,arguments:{t:{type:txt,defaultValue:'L'}}},
{opcode:'Gv8',blockType:rep,text:'VGP',hideFromPalette:glo,disableMonitor:1},
{opcode:'Gv9',blockType:com,text:'VGP=[t]',hideFromPalette:glo,arguments:{t:{type:txt}}},
{blockType:"label",text:"Complejos",hideFromPalette:cc},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'cc1',blockType:rep,text:'ℂ[a]+[b]',hideFromPalette:cc,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'cc2',blockType:rep,text:'ℂ[a]-[b]',hideFromPalette:cc,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'cc3',blockType:rep,text:'ℂ[a]*[b]',hideFromPalette:cc,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'cc4',blockType:rep,text:'ℂ[a]/[b]',hideFromPalette:cc,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'cc6',blockType:rep,text:'ℂ conj[a]',hideFromPalette:cc,arguments:{a:{type:txt}}},
{opcode:'cc7',blockType:rep,text:'ℂ LN[a]',hideFromPalette:cc,arguments:{a:{type:txt}}},
{opcode:'cc8',blockType:rep,text:'ℂ e^[a]',hideFromPalette:cc,arguments:{a:{type:txt}}},
{opcode:'cc9',blockType:rep,text:'ℂ arg[a]',hideFromPalette:cc,arguments:{a:{type:txt}}},
{opcode:'cc11',blockType:rep,text:'ℂ ||[a]||',hideFromPalette:cc,arguments:{a:{type:txt}}},
{opcode:'cc10',blockType:evaluador,text:'¿[a]es ℂ?',hideFromPalette:cc,arguments:{a:{type:txt}}},
{opcode:'cc12',blockType:com,text:'ℂ[a]+[b]_salida[c]',hideFromPalette:cc,arguments:{a:{type:txt},b:{type:txt},c:{type:txt}}},
{opcode:'cc13',blockType:com,text:'ℂ[a]-[b]_salida[c]',hideFromPalette:cc,arguments:{a:{type:txt},b:{type:txt},c:{type:txt}}},
{opcode:'cc14',blockType:com,text:'ℂ[a]*[b]_salida[c]',hideFromPalette:cc,arguments:{a:{type:txt},b:{type:txt},c:{type:txt}}},
{opcode:'cc15',blockType:com,text:'ℂ[a]/[b]_salida[c]',hideFromPalette:cc,arguments:{a:{type:txt},b:{type:txt},c:{type:txt}}},
{opcode:'cc16',blockType:com,text:'ℂ conj[a]_salida[c]',hideFromPalette:cc,arguments:{a:{type:txt},c:{type:txt}}},
{opcode:'cc17',blockType:com,text:'ℂ LN[a]_salida[c]',hideFromPalette:cc,arguments:{a:{type:txt},c:{type:txt}}},
{opcode:'cc18',blockType:com,text:'ℂ e^[a]_salida[c]',hideFromPalette:cc,arguments:{a:{type:txt},c:{type:txt}}},
{blockType:"label",text:"Cuaterniones",hideFromPalette:cuat},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'cua1',blockType:rep,text:'ℍ[a]+[b]',hideFromPalette:cuat,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'cua2',blockType:rep,text:'ℍ[a]-[b]',hideFromPalette:cuat,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'cua3',blockType:rep,text:'ℍ[v1]*[v2]',hideFromPalette:cuat,arguments:{v1:{type:txt},v2:{type:txt}}},
{opcode:'cua4',blockType:rep,text:'ℍ[v1]/[v2]',hideFromPalette:cuat,arguments:{v1:{type:txt},v2:{type:txt}}},
{opcode:'cua6',blockType:rep,text:'ℍ conj[a]',hideFromPalette:cuat,arguments:{a:{type:txt}}},
{opcode:'cua7',blockType:rep,text:'ℍ LN[V]',hideFromPalette:cuat,arguments:{V:{type:txt}}},
{opcode:'cua8',blockType:rep,text:'ℍ e^[V]',hideFromPalette:cuat,arguments:{V:{type:txt}}},
{opcode:'cua10',blockType:rep,text:'ℍ ||[V]||',hideFromPalette:cuat,arguments:{V:{type:txt}}},
{opcode:'cua9',blockType:evaluador,text:'¿[a]es ℍ?',hideFromPalette:cuat,arguments:{a:{type:txt}}},
{opcode:'cua11',blockType:com,text:'ℍ[a]+[b]_salida[c]',hideFromPalette:cuat,arguments:{a:{type:txt},b:{type:txt},c:{type:txt}}},
{opcode:'cua12',blockType:com,text:'ℍ[a]-[b]_salida[c]',hideFromPalette:cuat,arguments:{a:{type:txt},b:{type:txt},c:{type:txt}}},
{opcode:'cua13',blockType:com,text:'ℍ[v1]*[v2]_salida[c]',hideFromPalette:cuat,arguments:{v1:{type:txt},v2:{type:txt},c:{type:txt}}},
{opcode:'cua14',blockType:com,text:'ℍ[v1]/[v2]_salida[c]',hideFromPalette:cuat,arguments:{v1:{type:txt},v2:{type:txt},c:{type:txt}}},
{opcode:'cua15',blockType:com,text:'ℍ conj[a]_salida[c]',hideFromPalette:cuat,arguments:{a:{type:txt},c:{type:txt}}},
{opcode:'cua16',blockType:com,text:'ℍ LN[V]_salida[k]',hideFromPalette:cuat,arguments:{V:{type:txt},k:{type:txt}}},
{opcode:'cua17',blockType:com,text:'ℍ e^[V]_salida[c]',hideFromPalette:cuat,arguments:{V:{type:txt},c:{type:txt}}},
{blockType:"label",text:"Octoniones",hideFromPalette:oct},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'octa1',blockType:rep,text:'𝕆[a]+[b]',hideFromPalette:oct,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'octa2',blockType:rep,text:'𝕆[a]-[b]',hideFromPalette:oct,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'octa3',blockType:rep,text:'𝕆[v1]*[v2]',hideFromPalette:oct,arguments:{v1:{type:txt},v2:{type:txt}}},
{opcode:'octa4',blockType:rep,text:'𝕆[v1]/[v2]',hideFromPalette:oct,arguments:{v1:{type:txt},v2:{type:txt}}},
{opcode:'octa6',blockType:rep,text:'𝕆 conj[a]',hideFromPalette:oct,arguments:{a:{type:txt}}},
{opcode:'octa10',blockType:rep,text:'𝕆 LN[V]',hideFromPalette:oct,arguments:{V:{type:txt}}},
{opcode:'octa8',blockType:rep,text:'𝕆 e^[v]',hideFromPalette:oct,arguments:{v:{type:txt}}},
{opcode:'octa9',blockType:rep,text:'𝕆 ||[v]||',hideFromPalette:oct,arguments:{v:{type:txt}}},
{opcode:'octa7',blockType:evaluador,text:'¿[a]es 𝕆?',hideFromPalette:oct,arguments:{a:{type:txt}}},
{opcode:'octa11',blockType:com,text:'𝕆[a]+[b]_salida[c]',hideFromPalette:oct,arguments:{a:{type:txt},b:{type:txt},c:{type:txt}}},
{opcode:'octa12',blockType:com,text:'𝕆[a]-[b]_salida[c]',hideFromPalette:oct,arguments:{a:{type:txt},b:{type:txt},c:{type:txt}}},
{opcode:'octa13',blockType:com,text:'𝕆[v1]*[v2]_salida[c]',hideFromPalette:oct,arguments:{v1:{type:txt},v2:{type:txt},c:{type:txt}}},
{opcode:'octa14',blockType:com,text:'𝕆[v1]/[v2]_salida[c]',hideFromPalette:oct,arguments:{v1:{type:txt},v2:{type:txt},c:{type:txt}}},
{opcode:'octa15',blockType:com,text:'𝕆 conj[a]_salida[c]',hideFromPalette:oct,arguments:{a:{type:txt},c:{type:txt}}},
{opcode:'octa16',blockType:com,text:'𝕆 LN[V]_salida[c]',hideFromPalette:oct,arguments:{V:{type:txt},c:{type:txt}}},
{opcode:'octa17',blockType:com,text:'𝕆 e^[v]_salida[k]',hideFromPalette:oct,arguments:{v:{type:txt},k:{type:txt}}},
{blockType:"label",text:"Sedeniones",hideFromPalette:sed},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'sed1',blockType:rep,text:'𝕊[v]+[w]',hideFromPalette:sed,arguments:{v:{type:txt},w:{type:txt}}},
{opcode:'sed2',blockType:rep,text:'𝕊[v]-[w]',hideFromPalette:sed,arguments:{v:{type:txt},w:{type:txt}}},
{opcode:'sed5',blockType:rep,text:'𝕊[v]*[k]',hideFromPalette:sed,arguments:{v:{type:txt},k:{type:txt}}},
{opcode:'sed3',blockType:rep,text:'𝕊 conj[v]',hideFromPalette:sed,arguments:{v:{type:txt}}},
{opcode:'sed4',blockType:evaluador,text:'¿[a]es 𝕊?',hideFromPalette:sed,arguments:{a:{type:txt}}},
{opcode:'sed6',blockType:com,text:'𝕊[v]+[w]_salida[c]',hideFromPalette:sed,arguments:{v:{type:txt},w:{type:txt},c:{type:txt}}},
{opcode:'sed7',blockType:com,text:'𝕊[v]-[w]_salida[c]',hideFromPalette:sed,arguments:{v:{type:txt},w:{type:txt},c:{type:txt}}},
{opcode:'sed8',blockType:com,text:'𝕊[v]*[k]_salida[c]',hideFromPalette:sed,arguments:{v:{type:txt},k:{type:txt},c:{type:txt}}},
{opcode:'sed9',blockType:com,text:'𝕊 conj[v]_salida[c]',hideFromPalette:sed,arguments:{v:{type:txt},c:{type:txt}}},
{blockType:"label",text:"Deteccion Geometrica",hideFromPalette:geo},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'ppoli',blockType:rep,text:'¿punto[P]en[polygon]poligono?',hideFromPalette:geo,arguments:{P:{type:txt},polygon:{type:txt,defaultValue:'[[],[]...]'}}},
{opcode:'geo0',blockType:evaluador,text:'¿punto[a]en(x,y,r[b]circulo)?',hideFromPalette:geo,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'geo1',blockType:evaluador,text:'¿punto[a]en(x,y,an,al[b]rectangulo)?',hideFromPalette:geo,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'geo4',blockType:evaluador,text:'¿punto[a]en(x,y,l[b]cuadrado)?',hideFromPalette:geo,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'geo2',blockType:evaluador,text:'¿punto[a]en(x,y,z,r[b]esfera)?',hideFromPalette:geo,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'geo3',blockType:evaluador,text:'¿punto[a]en(x,y,z,an,al,pr[b]ortoedro)?',hideFromPalette:geo,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'geo5',blockType:evaluador,text:'¿punto[a]en(x,y,z,l[b]cubo)?',hideFromPalette:geo,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'geo6',blockType:evaluador,text:'punto[a]normal contra(x,y[b]circulo)',hideFromPalette:geo,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'geo7',blockType:evaluador,text:'punto[a]normal contra(x,y,an,al[b]rectangulo)?',hideFromPalette:geo,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'geo8',blockType:evaluador,text:'punto[a]normal contra(x,y,l[b]cuadrado)?',hideFromPalette:geo,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'geo9',blockType:evaluador,text:'¿circulo[a]en[b]circulo (x,y,r)?',hideFromPalette:geo,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'geo10',blockType:evaluador,text:'¿rectangulo[cu]en[du]rectangulo (x,y,an,al)?',hideFromPalette:geo,arguments:{cu:{type:txt},du:{type:txt}}},
{opcode:'geo11',blockType:evaluador,text:'¿cuadrado[cu]en[du]cuadrado (x,y,l)?',hideFromPalette:geo,arguments:{cu:{type:txt},du:{type:txt}}},
{opcode:'geo12',blockType:evaluador,text:'¿circulo[a]en[b]rectangulo?',hideFromPalette:geo,arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'geo13',blockType:evaluador,text:'¿circulo[a]en[b]cuadrado?',hideFromPalette:geo,arguments:{a:{type:txt},b:{type:txt}}},

],menus:{
outs:{acceptReporters:0,items:['+','-','*','/','**','%','LogB','sen','cos','tan','sign','abs','rampa','lim+','lim-','int','arcsen','arccos','arctan','e^','Ln','Log10','Log2','|','&','^','~','<<','>>','>>>','tofixed','[x]','function->','parse','stringify','senh','cosh','tanh','asenh','acosh','atanh','min','max','fround','f16round','round','trunc']},
outs2:{acceptReporters:0,items:['+','-','*','/','**','%','LogB','sen','cos','tan','sign','abs','rampa','lim+','lim-','int','arcsen','arccos','arctan','e^','Ln','Log10','Log2','|','&','^','~','<<','>>','>>>','tofixed','function->','senh','cosh','tanh','asenh','acosh','atanh']},
Filt:{acceptReporters:0,items:['==','===','<','>','>=','<=','!=','includes','!includes','Reflect.has','!Reflect.has','typeof','!isNaN','isNaN','[x]','function->']},
Asig:{acceptReporters:1,items:['=','+=','-=','/=','*=','**=','<<=','??=','%=','>>=','>>>=','|=','&=','^=','||=','&&=']},
redu:{acceptReporters:1,items:['+','-','*','/','**','|','&','^','max','min']}}
};}
sed1({v,w}){return [v[0]*1+w[0]*1,v[1]*1+w[1]*1,v[2]*1+w[2]*1,v[3]*1+w[3]*1,v[4]*1+w[4]*1,v[5]*1+w[5]*1,v[6]*1+w[6]*1,v[7]*1+w[7]*1,v[8]*1+w[8]*1,v[9]*1+w[9]*1,v[10]*1+w[10]*1,v[11]*1+w[11]*1,v[12]*1+w[12]*1,v[13]*1+w[13]*1,v[14]*1+w[14]*1,v[15]*1+w[15]*1]}
sed2({v,w}){return [v[0]-w[0],v[1]-w[1],v[2]-w[2],v[3]-w[3],v[4]-w[4],v[5]-w[5],v[6]-w[6],v[7]-w[7],v[8]-w[8],v[9]-w[9],v[10]-w[10],v[11]-w[11],v[12]-w[12],v[13]-w[13],v[14]-w[14],v[15]-w[15]]}
sed3({v}){return [v[0],-v[1],-v[2],-v[3],-v[4],-v[5],-v[6],-v[7],-v[8],-v[9],-v[10],-v[11],-v[12],-v[13],-v[14],-v[15]]}
sed4({a}){return (a.every((r)=>!isNaN(Number(r)))&&a.length==16)}
sed5({v,k}){return [
(v[0]*k[0])-(v[1]*k[1])-(v[2]*k[2])-(v[3]*k[3])-(v[4]*k[4])-(v[5]*k[5])-(v[6]*k[6])-(v[7]*k[7])-(v[8]*k[8])-(v[9]*k[9])-(v[10]*k[10])-(v[11]*k[11])-(v[12]*k[12])-(v[13]*k[13])-(v[14]*k[14])-(v[15]*k[15])
,(v[0]*k[1])+(v[1]*k[0])+(v[2]*k[3])-(v[3]*k[2])+(v[4]*k[5])-(v[5]*k[4])-(v[6]*k[7])+(v[7]*k[6])+(v[8]*k[9])-(v[9]*k[8])-(v[10]*k[11])+(v[11]*k[10])-(v[12]*k[13])+(v[13]*k[12])+(v[14]*k[15])-(v[15]*k[14])
,(v[0]*k[2])-(v[1]*k[3])+(v[2]*k[0])+(v[3]*k[1])+(v[4]*k[6])+(v[5]*k[7])-(v[6]*k[4])-(v[7]*k[5])+(v[8]*k[10])+(v[9]*k[11])-(v[10]*k[8])-(v[11]*k[9])-(v[12]*k[14])-(v[13]*k[15])+(v[14]*k[12])+(v[15]*k[13])
,(v[0]*k[3])+(v[1]*k[2])-(v[2]*k[1])+(v[3]*k[0])+(v[4]*k[7])-(v[5]*k[6])+(v[6]*k[5])-(v[7]*k[4])+(v[8]*k[11])-(v[9]*k[10])+(v[10]*k[9])-(v[11]*k[8])-(v[12]*k[15])+(v[13]*k[14])-(v[14]*k[13])+(v[15]*k[12])
,(v[0]*k[4])-(v[1]*k[5])-(v[2]*k[6])-(v[3]*k[7])+(v[4]*k[0])+(v[5]*k[1])+(v[6]*k[2])+(v[7]*k[3])+(v[8]*k[12])+(v[9]*k[13])+(v[10]*k[14])+(v[11]*k[15])-(v[12]*k[8])-(v[13]*k[9])-(v[14]*k[10])-(v[15]*k[11])
,(v[0]*k[5])+(v[1]*k[4])-(v[2]*k[7])+(v[3]*k[6])-(v[4]*k[1])+(v[5]*k[0])-(v[6]*k[3])+(v[7]*k[2])+(v[8]*k[13])-(v[9]*k[12])+(v[10]*k[15])-(v[11]*k[14])+(v[12]*k[9])-(v[13]*k[8])+(v[14]*k[11])-(v[15]*k[10])
,(v[0]*k[6])+(v[1]*k[7])+(v[2]*k[4])-(v[3]*k[5])-(v[4]*k[2])+(v[5]*k[3])+(v[6]*k[0])-(v[7]*k[1])+(v[8]*k[14])-(v[9]*k[15])-(v[10]*k[12])+(v[11]*k[13])+(v[12]*k[10])-(v[13]*k[11])-(v[14]*k[8])+(v[15]*k[9])
,(v[0]*k[7])-(v[1]*k[6])+(v[2]*k[5])+(v[3]*k[4])-(v[4]*k[3])-(v[5]*k[2])+(v[6]*k[1])+(v[7]*k[0])+(v[8]*k[15])+(v[9]*k[14])-(v[10]*k[13])-(v[11]*k[12])+(v[12]*k[11])+(v[13]*k[10])-(v[14]*k[9])-(v[15]*k[8])
,(v[0]*k[8])-(v[1]*k[9])-(v[2]*k[10])-(v[3]*k[11])-(v[4]*k[12])-(v[5]*k[13])-(v[6]*k[14])-(v[7]*k[15])+(v[8]*k[0])+(v[9]*k[1])+(v[10]*k[2])+(v[11]*k[3])+(v[12]*k[4])+(v[13]*k[5])+(v[14]*k[6])+(v[15]*k[7])
,(v[0]*k[9])+(v[1]*k[8])-(v[2]*k[11])+(v[3]*k[10])-(v[4]*k[13])+(v[5]*k[12])+(v[6]*k[15])-(v[7]*k[14])-(v[8]*k[1])+(v[9]*k[0])-(v[10]*k[3])+(v[11]*k[2])-(v[12]*k[5])+(v[13]*k[4])+(v[14]*k[7])-(v[15]*k[6])
,(v[0]*k[10])+(v[1]*k[11])+(v[2]*k[8])-(v[3]*k[9])-(v[4]*k[14])-(v[5]*k[15])+(v[6]*k[12])+(v[7]*k[13])-(v[8]*k[2])+(v[9]*k[3])+(v[10]*k[0])-(v[11]*k[1])-(v[12]*k[6])-(v[13]*k[7])+(v[14]*k[4])+(v[15]*k[5])
,(v[0]*k[11])-(v[1]*k[10])+(v[2]*k[9])+(v[3]*k[8])-(v[4]*k[15])+(v[5]*k[14])-(v[6]*k[13])+(v[7]*k[12])-(v[8]*k[3])-(v[9]*k[2])+(v[10]*k[1])+(v[11]*k[0])-(v[12]*k[7])+(v[13]*k[6])-(v[14]*k[5])+(v[15]*k[4])
,(v[0]*k[12])+(v[1]*k[13])+(v[2]*k[14])+(v[3]*k[15])+(v[4]*k[8])-(v[5]*k[9])-(v[6]*k[10])-(v[7]*k[11])-(v[8]*k[4])+(v[9]*k[5])+(v[10]*k[6])+(v[11]*k[7])+(v[12]*k[0])-(v[13]*k[1])-(v[14]*k[2])-(v[15]*k[3])
,(v[0]*k[13])-(v[1]*k[12])+(v[2]*k[15])-(v[3]*k[14])+(v[4]*k[9])+(v[5]*k[8])+(v[6]*k[11])-(v[7]*k[10])-(v[8]*k[5])-(v[9]*k[4])+(v[10]*k[7])-(v[11]*k[6])+(v[12]*k[1])+(v[13]*k[0])+(v[14]*k[3])-(v[15]*k[2])
,(v[0]*k[14])-(v[1]*k[15])-(v[2]*k[12])+(v[3]*k[13])+(v[4]*k[10])-(v[5]*k[11])+(v[6]*k[8])+(v[7]*k[9])-(v[8]*k[6])-(v[9]*k[7])-(v[10]*k[4])+(v[11]*k[5])+(v[12]*k[2])-(v[13]*k[3])+(v[14]*k[0])+(v[15]*k[1])
,(v[0]*k[15])+(v[1]*k[14])-(v[2]*k[13])-(v[3]*k[12])+(v[4]*k[11])+(v[5]*k[10])-(v[6]*k[9])+(v[7]*k[8])-(v[8]*k[7])+(v[9]*k[6])-(v[10]*k[5])-(v[11]*k[4])+(v[12]*k[3])+(v[13]*k[2])-(v[14]*k[1])+(v[15]*k[0])
]}
sed6({v,w,c}){c[0]=v[0]*1+w[0]*1,c[1]=v[1]*1+w[1]*1,c[2]=v[2]*1+w[2]*1,c[3]=v[3]*1+w[3]*1,c[4]=v[4]*1+w[4]*1,c[5]=v[5]*1+w[5]*1,c[6]=v[6]*1+w[6]*1,c[7]=v[7]*1+w[7]*1,c[8]=v[8]*1+w[8]*1,c[9]=v[9]*1+w[9]*1,c[10]=v[10]*1+w[10]*1,c[11]=v[11]*1+w[11]*1,c[12]=v[12]*1+w[12]*1,c[13]=v[13]*1+w[13]*1,c[14]=v[14]*1+w[14]*1,c[15]=v[15]*1+w[15]*1}
sed7({v,w,c}){c[0]=v[0]-w[0],c[1]=v[1]-w[1],c[2]=v[2]-w[2],c[3]=v[3]-w[3],c[4]=v[4]-w[4],c[5]=v[5]-w[5],c[6]=v[6]-w[6],c[7]=v[7]-w[7],c[8]=v[8]-w[8],c[9]=v[9]-w[9],c[10]=v[10]-w[10],c[11]=v[11]-w[11],c[12]=v[12]-w[12],c[13]=v[13]-w[13],c[14]=v[14]-w[14],c[15]=v[15]-w[15]}
sed9({v,c}){c[0]=v[0],c[1]=-v[1],c[2]=-v[2],c[3]=-v[3],c[4]=-v[4],c[5]=-v[5],c[6]=-v[6],c[7]=-v[7],c[8]=-v[8],c[9]=-v[9],c[10]=-v[10],c[11]=-v[11],c[12]=-v[12],c[13]=-v[13],c[14]=-v[14],c[15]=-v[15]}
sed8({v,k,c}){
c[0]=(v[0]*k[0])-(v[1]*k[1])-(v[2]*k[2])-(v[3]*k[3])-(v[4]*k[4])-(v[5]*k[5])-(v[6]*k[6])-(v[7]*k[7])-(v[8]*k[8])-(v[9]*k[9])-(v[10]*k[10])-(v[11]*k[11])-(v[12]*k[12])-(v[13]*k[13])-(v[14]*k[14])-(v[15]*k[15])
,c[1]=(v[0]*k[1])+(v[1]*k[0])+(v[2]*k[3])-(v[3]*k[2])+(v[4]*k[5])-(v[5]*k[4])-(v[6]*k[7])+(v[7]*k[6])+(v[8]*k[9])-(v[9]*k[8])-(v[10]*k[11])+(v[11]*k[10])-(v[12]*k[13])+(v[13]*k[12])+(v[14]*k[15])-(v[15]*k[14])
,c[2]=(v[0]*k[2])-(v[1]*k[3])+(v[2]*k[0])+(v[3]*k[1])+(v[4]*k[6])+(v[5]*k[7])-(v[6]*k[4])-(v[7]*k[5])+(v[8]*k[10])+(v[9]*k[11])-(v[10]*k[8])-(v[11]*k[9])-(v[12]*k[14])-(v[13]*k[15])+(v[14]*k[12])+(v[15]*k[13])
,c[3]=(v[0]*k[3])+(v[1]*k[2])-(v[2]*k[1])+(v[3]*k[0])+(v[4]*k[7])-(v[5]*k[6])+(v[6]*k[5])-(v[7]*k[4])+(v[8]*k[11])-(v[9]*k[10])+(v[10]*k[9])-(v[11]*k[8])-(v[12]*k[15])+(v[13]*k[14])-(v[14]*k[13])+(v[15]*k[12])
,c[4]=(v[0]*k[4])-(v[1]*k[5])-(v[2]*k[6])-(v[3]*k[7])+(v[4]*k[0])+(v[5]*k[1])+(v[6]*k[2])+(v[7]*k[3])+(v[8]*k[12])+(v[9]*k[13])+(v[10]*k[14])+(v[11]*k[15])-(v[12]*k[8])-(v[13]*k[9])-(v[14]*k[10])-(v[15]*k[11])
,c[5]=(v[0]*k[5])+(v[1]*k[4])-(v[2]*k[7])+(v[3]*k[6])-(v[4]*k[1])+(v[5]*k[0])-(v[6]*k[3])+(v[7]*k[2])+(v[8]*k[13])-(v[9]*k[12])+(v[10]*k[15])-(v[11]*k[14])+(v[12]*k[9])-(v[13]*k[8])+(v[14]*k[11])-(v[15]*k[10])
,c[6]=(v[0]*k[6])+(v[1]*k[7])+(v[2]*k[4])-(v[3]*k[5])-(v[4]*k[2])+(v[5]*k[3])+(v[6]*k[0])-(v[7]*k[1])+(v[8]*k[14])-(v[9]*k[15])-(v[10]*k[12])+(v[11]*k[13])+(v[12]*k[10])-(v[13]*k[11])-(v[14]*k[8])+(v[15]*k[9])
,c[7]=(v[0]*k[7])-(v[1]*k[6])+(v[2]*k[5])+(v[3]*k[4])-(v[4]*k[3])-(v[5]*k[2])+(v[6]*k[1])+(v[7]*k[0])+(v[8]*k[15])+(v[9]*k[14])-(v[10]*k[13])-(v[11]*k[12])+(v[12]*k[11])+(v[13]*k[10])-(v[14]*k[9])-(v[15]*k[8])
,c[8]=(v[0]*k[8])-(v[1]*k[9])-(v[2]*k[10])-(v[3]*k[11])-(v[4]*k[12])-(v[5]*k[13])-(v[6]*k[14])-(v[7]*k[15])+(v[8]*k[0])+(v[9]*k[1])+(v[10]*k[2])+(v[11]*k[3])+(v[12]*k[4])+(v[13]*k[5])+(v[14]*k[6])+(v[15]*k[7])
,c[9]=(v[0]*k[9])+(v[1]*k[8])-(v[2]*k[11])+(v[3]*k[10])-(v[4]*k[13])+(v[5]*k[12])+(v[6]*k[15])-(v[7]*k[14])-(v[8]*k[1])+(v[9]*k[0])-(v[10]*k[3])+(v[11]*k[2])-(v[12]*k[5])+(v[13]*k[4])+(v[14]*k[7])-(v[15]*k[6])
,c[10]=(v[0]*k[10])+(v[1]*k[11])+(v[2]*k[8])-(v[3]*k[9])-(v[4]*k[14])-(v[5]*k[15])+(v[6]*k[12])+(v[7]*k[13])-(v[8]*k[2])+(v[9]*k[3])+(v[10]*k[0])-(v[11]*k[1])-(v[12]*k[6])-(v[13]*k[7])+(v[14]*k[4])+(v[15]*k[5])
,c[11]=(v[0]*k[11])-(v[1]*k[10])+(v[2]*k[9])+(v[3]*k[8])-(v[4]*k[15])+(v[5]*k[14])-(v[6]*k[13])+(v[7]*k[12])-(v[8]*k[3])-(v[9]*k[2])+(v[10]*k[1])+(v[11]*k[0])-(v[12]*k[7])+(v[13]*k[6])-(v[14]*k[5])+(v[15]*k[4])
,c[12]=(v[0]*k[12])+(v[1]*k[13])+(v[2]*k[14])+(v[3]*k[15])+(v[4]*k[8])-(v[5]*k[9])-(v[6]*k[10])-(v[7]*k[11])-(v[8]*k[4])+(v[9]*k[5])+(v[10]*k[6])+(v[11]*k[7])+(v[12]*k[0])-(v[13]*k[1])-(v[14]*k[2])-(v[15]*k[3])
,c[13]=(v[0]*k[13])-(v[1]*k[12])+(v[2]*k[15])-(v[3]*k[14])+(v[4]*k[9])+(v[5]*k[8])+(v[6]*k[11])-(v[7]*k[10])-(v[8]*k[5])-(v[9]*k[4])+(v[10]*k[7])-(v[11]*k[6])+(v[12]*k[1])+(v[13]*k[0])+(v[14]*k[3])-(v[15]*k[2])
,c[14]=(v[0]*k[14])-(v[1]*k[15])-(v[2]*k[12])+(v[3]*k[13])+(v[4]*k[10])-(v[5]*k[11])+(v[6]*k[8])+(v[7]*k[9])-(v[8]*k[6])-(v[9]*k[7])-(v[10]*k[4])+(v[11]*k[5])+(v[12]*k[2])-(v[13]*k[3])+(v[14]*k[0])+(v[15]*k[1])
,c[15]=(v[0]*k[15])+(v[1]*k[14])-(v[2]*k[13])-(v[3]*k[12])+(v[4]*k[11])+(v[5]*k[10])-(v[6]*k[9])+(v[7]*k[8])-(v[8]*k[7])+(v[9]*k[6])-(v[10]*k[5])-(v[11]*k[4])+(v[12]*k[3])+(v[13]*k[2])-(v[14]*k[1])+(v[15]*k[0])}
octa1({a,b}){return [a[0]*1+1*b[0],a[1]*1+b[1]*1,a[2]*1+b[2]*1,a[3]*1+b[3]*1,a[4]*1+b[4]*1,a[5]*1+b[5]*1,a[6]*1+b[6]*1,a[7]*1+b[7]*1]}
octa2({a,b}){return [a[0]-b[0],a[1]-b[1],a[2]-b[2],a[3]-b[3],a[4]-b[4],a[5]-b[5],a[6]-b[6],a[7]-b[7]]}
octa3({v1,v2}){return [
(v1[0]*v2[0])-(v1[1]*v2[1])-(v1[2]*v2[2])-(v1[3]*v2[3])-(v1[4]*v2[4])-(v1[5]*v2[5])-(v1[6]*v2[6])-(v1[7]*v2[7]),
(v1[0]*v2[1])+(v1[1]*v2[0])-(v1[2]*v2[3])+(v1[3]*v2[2])-(v1[4]*v2[5])+(v1[5]*v2[4])+(v1[6]*v2[7])-(v1[7]*v2[6]),
(v1[0]*v2[2])+(v1[1]*v2[3])+(v1[2]*v2[0])-(v1[3]*v2[1])-(v1[4]*v2[6])-(v1[5]*v2[7])+(v1[6]*v2[4])+(v1[7]*v2[5]),
(v1[0]*v2[3])-(v1[1]*v2[2])+(v1[2]*v2[1])+(v1[3]*v2[0])-(v1[4]*v2[7])+(v1[5]*v2[6])-(v1[6]*v2[5])+(v1[7]*v2[4]),
(v1[0]*v2[4])+(v1[1]*v2[5])+(v1[2]*v2[6])+(v1[3]*v2[7])+(v1[4]*v2[0])-(v1[5]*v2[1])-(v1[6]*v2[2])-(v1[7]*v2[3]),
(v1[0]*v2[5])-(v1[1]*v2[4])+(v1[2]*v2[7])-(v1[3]*v2[6])+(v1[4]*v2[1])+(v1[5]*v2[0])+(v1[6]*v2[3])-(v1[7]*v2[2]),
(v1[0]*v2[6])-(v1[1]*v2[7])-(v1[2]*v2[4])+(v1[3]*v2[5])+(v1[4]*v2[2])-(v1[5]*v2[3])+(v1[6]*v2[0])+(v1[7]*v2[1]),
(v1[0]*v2[7])+(v1[1]*v2[6])-(v1[2]*v2[5])-(v1[3]*v2[4])+(v1[4]*v2[3])+(v1[5]*v2[2])-(v1[6]*v2[1])+(v1[7]*v2[0])]}
octa4({v1,v2}){const v3=(v2[0]**2)+(v2[1]**2)+(v2[2]**2)+(v2[3]**2)+(v2[4]**2)+(v2[5]**2)+(v2[6]**2)+(v2[7]**2);return [
((v1[0]*v2[0])-(v1[1]*-v2[1])-(v1[2]*-v2[2])-(v1[3]*-v2[3])-(v1[4]*-v2[4])-(v1[5]*-v2[5])-(v1[6]*-v2[6])-(v1[7]*-v2[7]))/v3,
((v1[0]*-v2[1])+(v1[1]*v2[0])-(v1[2]*-v2[3])+(v1[3]*-v2[2])-(v1[4]*-v2[5])+(v1[5]*-v2[4])+(v1[6]*-v2[7])-(v1[7]*-v2[6]))/v3,
((v1[0]*-v2[2])+(v1[1]*-v2[3])+(v1[2]*v2[0])-(v1[3]*-v2[1])-(v1[4]*-v2[6])-(v1[5]*-v2[7])+(v1[6]*-v2[4])+(v1[7]*-v2[5]))/v3,
((v1[0]*-v2[3])-(v1[1]*-v2[2])+(v1[2]*-v2[1])+(v1[3]*v2[0])-(v1[4]*-v2[7])+(v1[5]*-v2[6])-(v1[6]*-v2[5])+(v1[7]*-v2[4]))/v3,
((v1[0]*-v2[4])+(v1[1]*-v2[5])+(v1[2]*-v2[6])+(v1[3]*-v2[7])+(v1[4]*v2[0])-(v1[5]*-v2[1])-(v1[6]*-v2[2])-(v1[7]*-v2[3]))/v3,
((v1[0]*-v2[5])-(v1[1]*-v2[4])+(v1[2]*-v2[7])-(v1[3]*-v2[6])+(v1[4]*-v2[1])+(v1[5]*v2[0])+(v1[6]*-v2[3])-(v1[7]*-v2[2]))/v3,
((v1[0]*-v2[6])-(v1[1]*-v2[7])-(v1[2]*-v2[4])+(v1[3]*-v2[5])+(v1[4]*-v2[2])-(v1[5]*-v2[3])+(v1[6]*v2[0])+(v1[7]*-v2[1]))/v3,
((v1[0]*-v2[7])+(v1[1]*-v2[6])-(v1[2]*-v2[5])-(v1[3]*-v2[4])+(v1[4]*-v2[3])+(v1[5]*-v2[2])-(v1[6]*-v2[1])+(v1[7]*v2[0]))/v3]}
octa6({a}){return [a[0],-a[1],-a[2],-a[3],-a[4],-a[5],-a[6],-a[7]]}
octa7({a}){return (a.length==8&&!isNaN(Number(a[0]))&&!isNaN(Number(a[1]))&&!isNaN(Number(a[2]))&&!isNaN(Number(a[3]))&&!isNaN(Number(a[4]))&&!isNaN(Number(a[5]))&&!isNaN(Number(a[6]))&&!isNaN(Number(a[7])))}
octa8({v}){const mo=Math.hypot(v[1],v[2],v[3],v[4],v[5],v[6],v[7]),s=Math.sin(mo)*Math.exp(v[0]);return [Math.cos(mo)*Math.exp(v[0]),s*v[1]/mo,s*v[2]/mo,s*v[3]/mo,s*v[4]/mo,s*v[5]/mo,s*v[6]/mo,s*v[7]/mo]}
octa9({v}){return (v[0]**2+v[1]**2+v[2]**2+v[3]**2+v[4]**2+v[5]**2+v[6]**2+v[7]**2)**0.5}
octa10({V}){const M=((V[1]**2)+(V[2]**2)+(V[3]**2)+(V[4]**2)+(V[5]**2)+(V[6]**2)+(V[7]**2))**0.5,c=Math.acos(V[0]/Math.hypot(...V));return [Math.log(Math.hypot(...V)),(V[1]/M*c),(V[2]/M*c),(V[3]/M*c),(V[4]/M*c),(V[5]/M*c),(V[6]/M*c),(V[7]/M*c)]}
octa11({a,b,c}){c[0]=a[0]*1+1*b[0],c[1]=a[1]*1+b[1]*1,c[2]=a[2]*1+b[2]*1,c[3]=a[3]*1+b[3]*1,c[4]=a[4]*1+b[4]*1,c[5]=a[5]*1+b[5]*1,c[6]=a[6]*1+b[6]*1,c[7]=a[7]*1+b[7]*1;}
octa12({a,b,c}){c[0]=a[0]-b[0],c[1]=a[1]-b[1],c[2]=a[2]-b[2],c[3]=a[3]-b[3],c[4]=a[4]-b[4],c[5]=a[5]-b[5],c[6]=a[6]-b[6],c[7]=a[7]-b[7];}
octa13({v1,v2,c}){
c[0]=(v1[0]*v2[0])-(v1[1]*v2[1])-(v1[2]*v2[2])-(v1[3]*v2[3])-(v1[4]*v2[4])-(v1[5]*v2[5])-(v1[6]*v2[6])-(v1[7]*v2[7]),
c[1]=(v1[0]*v2[1])+(v1[1]*v2[0])-(v1[2]*v2[3])+(v1[3]*v2[2])-(v1[4]*v2[5])+(v1[5]*v2[4])+(v1[6]*v2[7])-(v1[7]*v2[6]),
c[2]=(v1[0]*v2[2])+(v1[1]*v2[3])+(v1[2]*v2[0])-(v1[3]*v2[1])-(v1[4]*v2[6])-(v1[5]*v2[7])+(v1[6]*v2[4])+(v1[7]*v2[5]),
c[3]=(v1[0]*v2[3])-(v1[1]*v2[2])+(v1[2]*v2[1])+(v1[3]*v2[0])-(v1[4]*v2[7])+(v1[5]*v2[6])-(v1[6]*v2[5])+(v1[7]*v2[4]),
c[4]=(v1[0]*v2[4])+(v1[1]*v2[5])+(v1[2]*v2[6])+(v1[3]*v2[7])+(v1[4]*v2[0])-(v1[5]*v2[1])-(v1[6]*v2[2])-(v1[7]*v2[3]),
c[5]=(v1[0]*v2[5])-(v1[1]*v2[4])+(v1[2]*v2[7])-(v1[3]*v2[6])+(v1[4]*v2[1])+(v1[5]*v2[0])+(v1[6]*v2[3])-(v1[7]*v2[2]),
c[6]=(v1[0]*v2[6])-(v1[1]*v2[7])-(v1[2]*v2[4])+(v1[3]*v2[5])+(v1[4]*v2[2])-(v1[5]*v2[3])+(v1[6]*v2[0])+(v1[7]*v2[1]),
c[7]=(v1[0]*v2[7])+(v1[1]*v2[6])-(v1[2]*v2[5])-(v1[3]*v2[4])+(v1[4]*v2[3])+(v1[5]*v2[2])-(v1[6]*v2[1])+(v1[7]*v2[0]);}
octa14({v1,v2,c}){const v3=(v2[0]**2)+(v2[1]**2)+(v2[2]**2)+(v2[3]**2)+(v2[4]**2)+(v2[5]**2)+(v2[6]**2)+(v2[7]**2);
c[0]=((v1[0]*v2[0])-(v1[1]*-v2[1])-(v1[2]*-v2[2])-(v1[3]*-v2[3])-(v1[4]*-v2[4])-(v1[5]*-v2[5])-(v1[6]*-v2[6])-(v1[7]*-v2[7]))/v3,
c[1]=((v1[0]*-v2[1])+(v1[1]*v2[0])-(v1[2]*-v2[3])+(v1[3]*-v2[2])-(v1[4]*-v2[5])+(v1[5]*-v2[4])+(v1[6]*-v2[7])-(v1[7]*-v2[6]))/v3,
c[2]=((v1[0]*-v2[2])+(v1[1]*-v2[3])+(v1[2]*v2[0])-(v1[3]*-v2[1])-(v1[4]*-v2[6])-(v1[5]*-v2[7])+(v1[6]*-v2[4])+(v1[7]*-v2[5]))/v3,
c[3]=((v1[0]*-v2[3])-(v1[1]*-v2[2])+(v1[2]*-v2[1])+(v1[3]*v2[0])-(v1[4]*-v2[7])+(v1[5]*-v2[6])-(v1[6]*-v2[5])+(v1[7]*-v2[4]))/v3,
c[4]=((v1[0]*-v2[4])+(v1[1]*-v2[5])+(v1[2]*-v2[6])+(v1[3]*-v2[7])+(v1[4]*v2[0])-(v1[5]*-v2[1])-(v1[6]*-v2[2])-(v1[7]*-v2[3]))/v3,
c[5]=((v1[0]*-v2[5])-(v1[1]*-v2[4])+(v1[2]*-v2[7])-(v1[3]*-v2[6])+(v1[4]*-v2[1])+(v1[5]*v2[0])+(v1[6]*-v2[3])-(v1[7]*-v2[2]))/v3,
c[6]=((v1[0]*-v2[6])-(v1[1]*-v2[7])-(v1[2]*-v2[4])+(v1[3]*-v2[5])+(v1[4]*-v2[2])-(v1[5]*-v2[3])+(v1[6]*v2[0])+(v1[7]*-v2[1]))/v3,
c[7]=((v1[0]*-v2[7])+(v1[1]*-v2[6])-(v1[2]*-v2[5])-(v1[3]*-v2[4])+(v1[4]*-v2[3])+(v1[5]*-v2[2])-(v1[6]*-v2[1])+(v1[7]*v2[0]))/v3;}
octa15({a,c}){c[0]=a[0],c[1]=-a[1],c[2]=-a[2],c[3]=-a[3],c[4]=-a[4],c[5]=-a[5],c[6]=-a[6],c[7]=-a[7]}
octa17({v,c}){const mo=Math.hypot(v[1],v[2],v[3],v[4],v[5],v[6],v[7]),s=Math.sin(mo)*Math.exp(v[0]);c[0]=Math.cos(mo)*Math.exp(v[0]),c[1]=s*v[1]/mo,c[2]=s*v[2]/mo,c[3]=s*v[3]/mo,c[4]=s*v[4]/mo,c[5]=s*v[5]/mo,c[6]=s*v[6]/mo,c[7]=s*v[7]/mo}
octa16({V,k}){const M=((V[1]**2)+(V[2]**2)+(V[3]**2)+(V[4]**2)+(V[5]**2)+(V[6]**2)+(V[7]**2))**0.5,c=Math.acos(V[0]/Math.hypot(...V));k[0]=Math.log(Math.hypot(...V)),k[1]=(V[1]/M*c),k[2]=(V[2]/M*c),k[3]=(V[3]/M*c),k[4]=(V[4]/M*c),k[5]=(V[5]/M*c),k[6]=(V[6]/M*c),k[7]=(V[7]/M*c)}
cua1({a,b}){return [a[0]*1+1*b[0],a[1]*1+b[1]*1,a[2]*1+b[2]*1,a[3]*1+b[3]*1]}
cua2({a,b}){return [a[0]-b[0],a[1]-b[1],a[2]-b[2],a[3]-b[3]]}
cua3({v1,v2}){return [
((v1[0]*v2[0])-(v1[1]*v2[1])-(v1[2]*v2[2])-(v1[3]*v2[3])),
((v1[0]*v2[1])+(v1[1]*v2[0])+(v1[2]*v2[3])-(v1[3]*v2[2])),
((v1[0]*v2[2])-(v1[1]*v2[3])+(v1[2]*v2[0])+(v1[3]*v2[1])),
((v1[0]*v2[3])+(v1[1]*v2[2])-(v1[2]*v2[1])+(v1[3]*v2[0]))];}
cua4({v1,v2}){const mo=(v2[0]**2)+(v2[1]**2)+(v2[2]**2)+(v2[3]**2);return [
((v1[0]*v2[0])-(v1[1]*-v2[1])-(v1[2]*-v2[2])-(v1[3]*-v2[3]))/mo,
((v1[0]*-v2[1])+(v1[1]*v2[0])+(v1[2]*-v2[3])-(v1[3]*-v2[2]))/mo,
((v1[0]*-v2[2])-(v1[1]*-v2[3])+(v1[2]*v2[0])+(v1[3]*-v2[1]))/mo,
((v1[0]*-v2[3])+(v1[1]*-v2[2])-(v1[2]*-v2[1])+(v1[3]*v2[0]))/mo];}
cua6({a}){return [a[0],-a[1],-a[2],-a[3]]}
cua7({V}){const M=((V[1]**2)+(V[2]**2)+(V[3]**2))**0.5,c=Math.acos(V[0]/Math.hypot(...V));return [Math.log(Math.hypot(...V)),(V[1]/M*c),(V[2]/M*c),(V[3]/M*c)]}
cua8({V}){const r=((V[1]**2)+(V[2]**2)+(V[3]**2))**0.5,srad=Math.sin(r)/r*Math.exp(V[0]);return [(Math.exp(V[0])*Math.cos(r)),srad*V[1],srad*V[2],srad*V[3]]}
cua9({a}){return (a.length==4&&!isNaN(Number(a[0]))&&!isNaN(Number(a[1]))&&!isNaN(Number(a[2]))&&!isNaN(Number(a[3])))}
cua10({V}){return (V[0]**2+V[1]**2+V[2]**2+V[3]**2)**0.5}
cua11({a,b,c}){c[0]=a[0]*1+1*b[0],c[1]=a[1]*1+b[1]*1,c[2]=a[2]*1+b[2]*1,c[3]=a[3]*1+b[3]*1;}
cua12({a,b,c}){c[0]=a[0]-b[0],c[1]=a[1]-b[1],c[2]=a[2]-b[2],c[3]=a[3]-b[3]}
cua13({v1,v2,c}){
c[0]=((v1[0]*v2[0])-(v1[1]*v2[1])-(v1[2]*v2[2])-(v1[3]*v2[3])),
c[1]=((v1[0]*v2[1])+(v1[1]*v2[0])+(v1[2]*v2[3])-(v1[3]*v2[2])),
c[2]=((v1[0]*v2[2])-(v1[1]*v2[3])+(v1[2]*v2[0])+(v1[3]*v2[1])),
c[3]=((v1[0]*v2[3])+(v1[1]*v2[2])-(v1[2]*v2[1])+(v1[3]*v2[0]));}
cua14({v1,v2,c}){const mo=(v2[0]**2)+(v2[1]**2)+(v2[2]**2)+(v2[3]**2);
c[0]=((v1[0]*v2[0])-(v1[1]*-v2[1])-(v1[2]*-v2[2])-(v1[3]*-v2[3]))/mo,
c[1]=((v1[0]*-v2[1])+(v1[1]*v2[0])+(v1[2]*-v2[3])-(v1[3]*-v2[2]))/mo,
c[2]=((v1[0]*-v2[2])-(v1[1]*-v2[3])+(v1[2]*v2[0])+(v1[3]*-v2[1]))/mo,
c[3]=((v1[0]*-v2[3])+(v1[1]*-v2[2])-(v1[2]*-v2[1])+(v1[3]*v2[0]))/mo;}
cua15({a,c}){c[0]=a[0],c[1]=-a[1],c[2]=-a[2],c[3]=-a[3]}
cua16({V,k}){const M=((V[1]**2)+(V[2]**2)+(V[3]**2))**0.5,c=Math.acos(V[0]/Math.hypot(...V));k[0]=Math.log(Math.hypot(...V)),k[1]=(V[1]/M*c),k[2]=(V[2]/M*c),k[3]=(V[3]/M*c)}
cua17({V,c}){const r=((V[1]**2)+(V[2]**2)+(V[3]**2))**0.5,srad=Math.sin(r)/r*Math.exp(V[0]);c[0]=(Math.exp(V[0])*Math.cos(r)),c[1]=srad*V[1],c[2]=srad*V[2],c[3]=srad*V[3]}
cc1(ar){return [ar.a[0]*1+1*ar.b[0],ar.a[1]*1+ar.b[1]*1]}
cc2(ar){return [ar.a[0]-ar.b[0],ar.a[1]-ar.b[1]]}
cc3(ar){return [(ar.a[0]*ar.b[0])-ar.a[1]*ar.b[1],ar.a[0]*ar.b[1]+ar.b[0]*ar.a[1]]}
cc4({a,b}){const G=(b[0]**2)+(b[1]**2);return [((a[0]*b[0])+a[1]*b[1])/G,(b[0]*a[1]-a[0]*b[1])/G]}
cc6(ar){return [ar.a[0],-ar.a[1]]}
cc7(ar){return [Math.log(Math.hypot(...ar.a)),Math.atan2(ar.a[1],ar.a[0])]}
cc8(ar){const pa=Math.exp(ar.a[0]);return [(Math.cos(ar.a[1])*pa),(Math.sin(ar.a[1])*pa)]}
cc9(ar){return Math.atan2(ar.a[1],ar.a[0]);}
cc10(ar){return (ar.a.length==2&&!isNaN(Number(ar.a[0]))&&!isNaN(Number(ar.a[1])))}
cc11(ar){return (ar.a[0]**2+ar.a[1]**2)**0.5}
cc12(ar){ar.c[0]=ar.a[0]*1+1*ar.b[0],ar.c[1]=ar.a[1]*1+ar.b[1]*1;}
cc13(ar){ar.c[0]=ar.a[0]-ar.b[0],ar.c[1]=ar.a[1]-ar.b[1];}
cc14(ar){ar.c[0]=(ar.a[0]*ar.b[0])-ar.a[1]*ar.b[1],ar.c[1]=ar.a[0]*ar.b[1]+ar.b[0]*ar.a[1];}
cc15({a,b,c}){const G=(b[0]**2)+(b[1]**2);c[0]=((a[0]*b[0])+a[1]*b[1])/G,c[1]=(b[0]*a[1]-a[0]*b[1])/G;}
cc16(ar){ar.c[0]=ar.a[0],ar.c[1]=-ar.a[1];}
cc17(ar){ar.c[0]=Math.log(Math.hypot(...ar.a)),ar.c[1]=Math.atan2(ar.a[1],ar.a[0]);}
cc18(ar){const pa=Math.exp(ar.a[0]);ar.c[0]=(Math.cos(ar.a[1])*pa),ar.c[1]=(Math.sin(ar.a[1])*pa);}
ma(ar){switch(ar.ou){
case'+':return ar.a.map(k=>k*1+ar.b*1);case'-':return ar.a.map(k=>k-ar.b);case'*':return ar.a.map(k=>k*ar.b);case'/':return ar.a.map(k=>k/ar.b);
case'**':return ar.a.map(k=>k**ar.b);case'%':return ar.a.map(k=>k%ar.b);case'LogB':return ar.a.map(k=>Math.log(k)/Math.log(ar.b));case'sen':return ar.a.map(Math.sin);case'cos':return ar.a.map(Math.cos);
case'tan':return ar.a.map(Math.tan);case'sign':return ar.a.map(Math.sign);case'abs':return ar.a.map(Math.abs);case'rampa':return ar.a.map(k=>(k>0 ? k:0));case'lim+':return ar.a.map(k=>(k>ar.b ? ar.b:k));
case'lim-':return ar.a.map(k=>(k<ar.b ? ar.b:k));case'int':return ar.a.map(Math.trunc);case'arcsen':return ar.a.map(Math.asin);case'arccos':return ar.a.map(Math.acos);
case'arctan':return ar.a.map(Math.atan);case'e^':return ar.a.map(Math.exp);case'Ln':return ar.a.map(Math.log);case'Log10':return ar.a.map(Math.log10);case'|':return ar.a.map(k=>k|ar.b);case'&':return ar.a.map(k=>k&ar.b);
case'^':return ar.a.map(k=>k^ar.b);case'~':return ar.a.map(k=>~k);case'<<':return ar.a.map(k=>k<<ar.b);case'>>':return ar.a.map(k=>k>>ar.b);case'>>>':return ar.a.map(k=>k>>>ar.b);
case'tofixed':return ar.a.map(k=>k.toFixed(ar.b));case'function->':return ar.a.map(ar.b);case'[x]':return ar.a.map(x=>x[ar.b]);case'parse':return ar.a.map(x=>JSON.parse(x));case'stringify':return ar.a.map(x=>JSON.stringify(x));
case'senh':return ar.a.map(Math.sinh);case'cosh':return ar.a.map(Math.cosh);case'tanh':return ar.a.map(Math.tanh);case'asenh':return ar.a.map(Math.asinh);case'acosh':return ar.a.map(Math.acosh);case'atanh':return ar.a.map(Math.atanh);
case'Log2':return ar.a.map(Math.log2);case'min':return ar.a.map(k=>Math.min(...k));case'max':return ar.a.map(k=>Math.max(...k));case'fround':return ar.a.map(k=>Math.fround(k));case'f16round':return ar.a.map(k=>Math.f16round(k));
case'round':return ar.a.map(k=>Math.round(k));case'trunc':return ar.a.map(k=>Math.trunc(k));
}}
fore(ar){switch(ar.ou){
case'+':ar.a.forEach((j,k,l)=>l[k]+=ar.b*1);break;case'-':ar.a.forEach((j,k,l)=>l[k]-=ar.b);break;case'*':ar.a.forEach((j,k,l)=>l[k]*=ar.b);break;case'/':ar.a.forEach((j,k,l)=>l[k]/=ar.b);break;
case'**':ar.a.forEach((j,k,l)=>l[k]**=ar.b);case'%':ar.a.forEach((j,k,l)=>l[k]%=ar.b);break;case'LogB':ar.a.forEach((j,k,l)=>l[k]=Math.log(j)/Math.log(ar.b));break;case'sen':ar.a.forEach((j,k,l)=>l[k]=Math.sin(j));break;case'cos':ar.a.forEach((j,k,l)=>l[k]=Math.cos(j));break;
case'tan':ar.a.forEach((j,k,l)=>l[k]=Math.tan(j));break;case'sign':ar.a.forEach((j,k,l)=>l[k]=Math.sign(j));break;case'abs':ar.a.forEach((j,k,l)=>l[k]=Math.abs(j));break;case'rampa':ar.a.forEach((j,k,l)=>l[k]=(j>0 ? j:0));break;
case'lim+':ar.a.forEach((j,k,l)=>l[k]=(j>ar.b ? ar.b:j));break;case'lim-':ar.a.forEach((j,k,l)=>l[k]=(j<ar.b ? ar.b:j));break;case'int':ar.a.forEach((j,k,l)=>l[k]=Math.trunc(j));break;case'arcsen':ar.a.forEach((j,k,l)=>l[k]=Math.asin(j));break;
case'arccos':ar.a.forEach((j,k,l)=>l[k]=Math.acos(j));break;case'arctan':ar.a.forEach((j,k,l)=>l[k]=Math.atan(j));break;case'e^':ar.a.forEach((j,k,l)=>l[k]=Math.exp(j));break;case'Ln':ar.a.forEach((j,k,l)=>l[k]=Math.log(j));break;
case'Log10':ar.a.forEach((j,k,l)=>l[k]=Math.log10(j));break;case'|':ar.a.forEach((j,k,l)=>l[k]|=ar.b);break;case'&':ar.a.forEach((j,k,l)=>l[k]&=ar.b);break;case'^':ar.a.forEach((j,k,l)=>l[k]^=ar.b);break;
case'~':ar.a.forEach((j,k,l)=>l[k]=~j);break;case'<<':ar.a.forEach((j,k,l)=>l[k]<<=ar.b);break;case'>>':ar.a.forEach((j,k,l)=>l[k]>>=ar.b);break;case'>>>':ar.a.forEach((j,k,l)=>l[k]>>>=ar.b);break;
case'tofixed':ar.a.forEach((j,k,l)=>l[k]=j.toFixed(ar.b));break;case'function->':ar.a.forEach(ar.b);break;case'senh':ar.a.forEach((j,k,l)=>l[k]=Math.sinh(j));break;case'cosh':ar.a.forEach((j,k,l)=>l[k]=Math.cosh(j));break;
case'tanh':ar.a.forEach((j,k,l)=>l[k]=Math.tanh(j));break;case'asenh':ar.a.forEach((j,k,l)=>l[k]=Math.asinh(j));break;case'acosh':ar.a.forEach((j,k,l)=>l[k]=Math.acosh(j));break;case'atanh':ar.a.forEach((j,k,l)=>l[k]=Math.atanh(j));break;
case'Log2':ar.a.forEach((j,k,l)=>l[k]=Math.Log2(j));break;
}}
Fil(ar){switch(ar.ou){
case'==':return ar.a.filter(dat=>(dat==ar.b ? 1:0));case'===':return ar.a.filter(dat=>(dat===ar.b ? 1:0));case'isNaN':return ar.a.filter(k=>isNaN(k));
case'<':return ar.a.filter(dat=>(dat<ar.b ? 1:0));case'>':return ar.a.filter(dat=>(dat>ar.b ? 1:0));case'>=':return ar.a.filter(dat=>(dat>=ar.b ? 1:0));case'<=':return ar.a.filter(dat=>(dat<=ar.b ? 1:0));
case'!=':return ar.a.filter(dat=>(dat!=ar.b ? 1:0));case'includes':return ar.a.filter(dat=>dat.toString().includes(ar.b));case'!includes':return ar.a.filter(dat=>!(dat.toString().includes(ar.b)));case'Reflect.has':return ar.a.filter(dat=>Reflect.has(dat,ar.b));
case'!Reflect.has':return ar.a.filter(dat=>!(Reflect.has(dat,ar.b)));case'typeof':return ar.a.filter(dat=>typeof(dat)==ar.b);case'!isNaN':return ar.a.filter(k=>!isNaN(k));case'function->':return ar.a.filter(ar.b);case'[x]':return ar.a.filter(k=>(k[ar.b]?true:false));
}}
reduc(ar){switch(ar.ou){
case'+':return ar.a.reduce((ac,an)=>ac+an,ar.b);case'-':return ar.a.reduce((ac,an)=>ac-an,ar.b);case'*':return ar.a.reduce((ac,an)=>ac*an,ar.b);case'/':return ar.a.reduce((ac,an)=>ac/an,ar.b);
case'**':return ar.a.reduce((ac,an)=>ac**an,ar.b);case'|':return ar.a.reduce((ac,an)=>ac|an,ar.b);case'&':return ar.a.reduce((ac,an)=>ac&an,ar.b);case'^':return ar.a.reduce((ac,an)=>ac^an,ar.b);
case'max':return ar.a.reduce((ac,an)=>Math.max(ac,an),-Infinity);case'min':return ar.a.reduce((ac,an)=>Math.min(ac,an),Infinity);default:return ar.a.reduce(ar.ou,ar.b);}}
herr0(){Scratch.openWindow('https://linktr.ee/Penta_quark_neutro');}
herr1(){ops=0;ref();}herr2(){ops=1;ref();}herr3(){vecs=0;ref();}herr4(){vecs=1;ref();}herr5(){prop=0;ref();}herr6(){prop=1;ref();}herr7(){glo=0;ref();}herr8(){glo=1;ref();}
herr9(){cc=0;ref();}herr10(){cc=1;ref();}herr11(){cuat=0;ref();}herr12(){cuat=1;ref();}herr13(){oct=0;ref();}herr14(){oct=1;ref();}herr15(){sed=0;ref();}herr16(){sed=1;ref();}herr17(){geo=0;ref();}herr18(){geo=1;ref();}
arr(ar){return Array.from(ar.a.split(','));}
le(ar){return ar.a.length;}
nor(ar){var i=0,b=0;while(i<ar.a.length){b+=ar.a[i++]**2}return b**0.5}
unit(ar){var i=0,b=0;while(i<ar.a.length){b+=ar.a[i++]**2}b**=0.5;return ar.a.map(g=>g/b)}
pt(ar){return ar.a[ar.b];}pt2(ar){return ar.a[ar.b][ar.c]}pt3(ar){return ar.a[ar.b][ar.c][ar.d]}pt4(ar){return ar.a[ar.b][ar.c][ar.d][ar.e]}
prod(ar){var i=0,fin=0;while(i<(ar.a.length)){fin+=((ar.a[i])*(ar.b[i++]));}return fin;}rpt(ar){ar.a[ar.b]=ar.c;return ar.a;}rpt2(ar){ar.a[ar.b]=ar.c;}
rpt3(ar){switch(ar.tip){case'=':ar.a[ar.b]=ar.c;break;case'+=':ar.a[ar.b]+=ar.c;break;case'-=':ar.a[ar.b]-=ar.c;break;case'/=':ar.a[ar.b]/=ar.c;break;case'&&=':ar.a[ar.b]&&=ar.c;break;
case'*=':ar.a[ar.b]*=ar.c;break;case'**=':ar.a[ar.b]**=ar.c;break;case'<<=':ar.a[ar.b]<<=ar.c;break;case'>>=':ar.a[ar.b]>>=ar.c;break;case'^=':ar.a[ar.b]^=ar.c;break;case'||=':ar.a[ar.b]||=ar.c;break;
case'>>>=':ar.a[ar.b]>>>=ar.c;break;case'??=':ar.a[ar.b]??=ar.c;break;case'%=':ar.a[ar.b]%=ar.c;break;case'|=':ar.a[ar.b]|=ar.c;break;case'&=':ar.a[ar.b]&=ar.c;break;
}}
some(ar){switch(ar.ou){
case'==':return ar.a.some(dat=>(dat==ar.b ? 1:0));case'===':return ar.a.some(dat=>(dat===ar.b ? 1:0));case'isNaN':return ar.a.some(k=>isNaN(k));
case'<':return ar.a.some(dat=>(dat<ar.b ? 1:0));case'>':return ar.a.some(dat=>(dat>ar.b ? 1:0));
case'>=':return ar.a.some(dat=>(dat>=ar.b ? 1:0));case'<=':return ar.a.some(dat=>(dat<=ar.b ? 1:0));
case'!=':return ar.a.some(dat=>(dat!=ar.b ? 1:0));case'includes':return ar.a.some(dat=>dat.toString().includes(ar.b));
case'!includes':return ar.a.some(dat=>!(dat.toString().includes(ar.b)));case'Reflect.has':return ar.a.some(dat=>Reflect.has(dat,ar.b));
case'!Reflect.has':return ar.a.some(dat=>!(Reflect.has(dat,ar.b)));case'typeof':return ar.a.some(dat=>typeof(dat)==ar.b);case'!isNaN':return ar.a.some(k=>!isNaN(k));
case'function->':return ar.a.some(ar.b);case'[x]':return ar.a.some(k=>(k[ar.b]?true:false));
}}
every(ar){switch(ar.ou){
case'==':return ar.a.every(dat=>(dat==ar.b ? 1:0));case'===':return ar.a.every(dat=>(dat===ar.b ? 1:0));case'isNaN':return ar.a.every(k=>isNaN(k));
case'<':return ar.a.every(dat=>(dat<ar.b ? 1:0));case'>':return ar.a.every(dat=>(dat>ar.b ? 1:0));
case'>=':return ar.a.every(dat=>(dat>=ar.b ? 1:0));case'<=':return ar.a.every(dat=>(dat<=ar.b ? 1:0));
case'!=':return ar.a.every(dat=>(dat!=ar.b ? 1:0));case'includes':return ar.a.every(dat=>dat.toString().includes(ar.b));
case'!includes':return ar.a.every(dat=>!(dat.toString().includes(ar.b)));case'Reflect.has':return ar.a.every(dat=>Reflect.has(dat,ar.b));
case'!Reflect.has':return ar.a.every(dat=>!(Reflect.has(dat,ar.b)));case'typeof':return ar.a.every(dat=>typeof(dat)==ar.b);case'!isNaN':return ar.a.every(k=>!isNaN(k));
case'function->':return ar.a.every(ar.b);case'[x]':return ar.a.every(k=>(k[ar.b]?true:false));
}}
find(ar){switch(ar.ou){
case'==':return ar.a.find(dat=>(dat==ar.b ? 1:0));case'===':return ar.a.find(dat=>(dat===ar.b ? 1:0));case'isNaN':return ar.a.find(k=>isNaN(k));
case'<':return ar.a.find(dat=>(dat<ar.b ? 1:0));case'>':return ar.a.find(dat=>(dat>ar.b ? 1:0));
case'>=':return ar.a.find(dat=>(dat>=ar.b ? 1:0));case'<=':return ar.a.find(dat=>(dat<=ar.b ? 1:0));
case'!=':return ar.a.find(dat=>(dat!=ar.b ? 1:0));case'includes':return ar.a.find(dat=>dat.toString().includes(ar.b));
case'!includes':return ar.a.find(dat=>!(dat.toString().includes(ar.b)));case'Reflect.has':return ar.a.find(dat=>Reflect.has(dat,ar.b));
case'!Reflect.has':return ar.a.find(dat=>!(Reflect.has(dat,ar.b)));case'typeof':return ar.a.find(dat=>typeof(dat)==ar.b);case'!isNaN':return ar.a.find(k=>!isNaN(k));
case'function->':return ar.a.find(ar.b);case'[x]':return ar.a.find(k=>(k[ar.b]?true:false));
}}
findIndex(ar){switch(ar.ou){
case'==':return ar.a.findIndex(dat=>(dat==ar.b ? 1:0));case'===':return ar.a.findIndex(dat=>(dat===ar.b ? 1:0));case'isNaN':return ar.a.findIndex(k=>isNaN(k));
case'<':return ar.a.findIndex(dat=>(dat<ar.b ? 1:0));case'>':return ar.a.findIndex(dat=>(dat>ar.b ? 1:0));
case'>=':return ar.a.findIndex(dat=>(dat>=ar.b ? 1:0));case'<=':return ar.a.findIndex(dat=>(dat<=ar.b ? 1:0));
case'!=':return ar.a.findIndex(dat=>(dat!=ar.b ? 1:0));case'includes':return ar.a.findIndex(dat=>dat.toString().includes(ar.b));
case'!includes':return ar.a.findIndex(dat=>!(dat.toString().includes(ar.b)));case'Reflect.has':return ar.a.findIndex(dat=>Reflect.has(dat,ar.b));
case'!Reflect.has':return ar.a.findIndex(dat=>!(Reflect.has(dat,ar.b)));case'typeof':return ar.a.findIndex(dat=>typeof(dat)==ar.b);case'!isNaN':return ar.a.findIndex(k=>!isNaN(k));
case'function->':return ar.a.findIndex(ar.b);case'[x]':return ar.a.findIndex(k=>(k[ar.b]?true:false));
}}
findlast(ar){switch(ar.ou){
case'==':return ar.a.findLast(dat=>(dat==ar.b ? 1:0));case'===':return ar.a.findLast(dat=>(dat===ar.b ? 1:0));case'isNaN':return ar.a.findLast(k=>isNaN(k));
case'<':return ar.a.findLast(dat=>(dat<ar.b ? 1:0));case'>':return ar.a.findLast(dat=>(dat>ar.b ? 1:0));
case'>=':return ar.a.findLast(dat=>(dat>=ar.b ? 1:0));case'<=':return ar.a.findLast(dat=>(dat<=ar.b ? 1:0));
case'!=':return ar.a.findLast(dat=>(dat!=ar.b ? 1:0));case'includes':return ar.a.findLast(dat=>dat.toString().includes(ar.b));
case'!includes':return ar.a.findLast(dat=>!(dat.toString().includes(ar.b)));case'Reflect.has':return ar.a.findLast(dat=>Reflect.has(dat,ar.b));
case'!Reflect.has':return ar.a.findLast(dat=>!(Reflect.has(dat,ar.b)));case'typeof':return ar.a.findLast(dat=>typeof(dat)==ar.b);case'!isNaN':return ar.a.findLast(k=>!isNaN(k));
case'function->':return ar.a.findLast(ar.b);case'[x]':return ar.a.findLast(k=>(k[ar.b]?true:false));
}}
findlastindex(ar){switch(ar.ou){
case'==':return ar.a.findLastIndex(dat=>(dat==ar.b ? 1:0));case'===':return ar.a.findLastIndex(dat=>(dat===ar.b ? 1:0));case'isNaN':return ar.a.findLastIndex(k=>isNaN(k));
case'<':return ar.a.findLastIndex(dat=>(dat<ar.b ? 1:0));case'>':return ar.a.findLastIndex(dat=>(dat>ar.b ? 1:0));
case'>=':return ar.a.findLastIndex(dat=>(dat>=ar.b ? 1:0));case'<=':return ar.a.findLastIndex(dat=>(dat<=ar.b ? 1:0));
case'!=':return ar.a.findLastIndex(dat=>(dat!=ar.b ? 1:0));case'includes':return ar.a.findLastIndex(dat=>dat.toString().includes(ar.b));
case'!includes':return ar.a.findLastIndex(dat=>!(dat.toString().includes(ar.b)));case'Reflect.has':return ar.a.findLastIndex(dat=>Reflect.has(dat,ar.b));
case'!Reflect.has':return ar.a.findLastIndex(dat=>!(Reflect.has(dat,ar.b)));case'typeof':return ar.a.findLastIndex(dat=>typeof(dat)==ar.b);case'!isNaN':return ar.a.findLastIndex(k=>!isNaN(k));
case'function->':return ar.a.findLastIndex(ar.b);case'[x]':return ar.a.findLastIndex(k=>(k[ar.b]?true:false));
}}
rpt4(ar){ar.a[ar.b]=ar.c,ar.a[ar.d]=ar.e;}rpt5(ar){ar.a[ar.b]=ar.c,ar.a[ar.d]=ar.e,ar.a[ar.f]=ar.g;}rpt6(ar){ar.a[ar.b]=ar.c,ar.a[ar.d]=ar.e,ar.a[ar.f]=ar.g,ar.a[ar.h]=ar.i;}
arrcopy(ar){return ar.a.copyWithin(ar.b,ar.c,ar.d)}arnex(ar){return ar.a.next()}aritera(ar){return ar.a[Symbol.iterator]()}
arentries(ar){return ar.a.entries()}withh(ar){return ar.a.with(ar.b,ar.c)}
att(ar){return ar.a.at(ar.b)}angu(ar){return Math.acos(ar.a[0]/Math.hypot(...ar.a))}
m({a,b}){var i=0,fin=Array(a.length);while(i<(a.length)){fin[i]=a[i]*1+b[i++]*1;}return fin;}
r({a,b}){var i=0,fin=Array(a.length);while(i<(a.length)){fin[i]=a[i]-b[i++];}return fin;}
Hadamard({a,b}){var i=0,fin=Array(a.length);while(i<(fin.length)){fin[i]=(a[i]*b[i++]);}return fin;}
invemul(ar){return ar.a.map(k=>1/k);}gen(ar){return Array(ar.a).fill(ar.b);}
gen2(ar){var i=0,fin=Array(ar.a);while(i<(ar.a)){fin[i++]=(Math.random()*(ar.b-ar.c)+ar.c);}return fin;}
pu(ar){ar.a.push(ar.b);}sh(ar){return ar.a.shift();}po(ar){return ar.a.pop();}unsh(ar){ar.a.unshift(ar.b)}
Kr({a,b}){var i=0,j=0,t=0,out=Array(a.length*b.length);while(i<a.length){j=0;while(j<b.length){out[t++]=a[i]*b[j++];}i++}return out;}
tagtp1m(ar,util){if(!util.target.tag1){util.target.tag1=[];}if(util.target.tag1.includes(ar.t)||ar.t===''){return;}else{util.target.tag1.push(ar.t)};}
tagtp1mc(ar,util){if(!util.target.tag1){util.target.tag1=[];}if(ar.t===''){return;}else{util.target.tag1.push(ar.t)};}
tagtp1(ar,util){return util.target.tag1;}tagtp1c(ar,util){return (util.target.tag1.includes(ar.t) ? true:false);}
tagtp1ig(ar,util){util.target.tag1=ar.t}sl(ar){return ar.a.splice(ar.b,ar.c);}sl2(ar){ar.a.splice(ar.b,ar.c);}
fill(ar){return ar.a.fill(ar.b)}fl(ar){return ar.a.flat(ar.b);}
s1(ar,util){return util.target.id;}s2(ar,util){return util.target.drawableID;}
s3(ar,util){var q=vm.runtime.targets.findIndex(dat=>{return dat.id==ar.a;});return vm.runtime.targets[q].tag1;}
s4(ar,util){return vm.renderer.isTouchingDrawables(util.target.drawableID,vm.runtime.targets.filter(dat=>{return (dat.tag1 && dat.tag1.includes(ar.a));}).map(dat=>dat.drawableID));}
s5(ar,util){var A=vm.renderer._candidatesTouching(util.target.drawableID,vm.renderer._drawList).map(dat=>dat.id);var k=[];var q=0;var i=0;while(A.length>i){if(vm.renderer.isTouchingDrawables(util.target.drawableID,[A[i]])){q=vm.runtime.targets.findIndex(dat=>dat.drawableID==A[i]);if(vm.runtime.targets[q].tag1){k=k.concat(vm.runtime.targets[q].tag1);};}else{}i++;}return k;}
s9(ar,util){return vm.renderer.isTouchingDrawables(util.target.drawableID,ar.targets.filter(dat=>{return (dat.tag1 && dat.tag1.includes(ar.a));}).map(dat=>dat.drawableID));}
Gv1(ar,util){Gvec.push(ar.t);}Gv4(ar,util){Gvec=Gvec.concat(ar.t);}Gv3(ar,util){Gvec=ar.t;if(Gvec==''){Gvec=[];}}Gv2(){return Gvec;}
in(ar){return ar.c.indexOf(ar.a,ar.b);}co(ar){return ar.a.concat(ar.b);}Gv5(){return vm.runtime.targets;}
Gv6(ar){vm.runtime.extensionStorage['vectorr'].push(ar.t)}Gv8(ar){return vm.runtime.extensionStorage['vectorr']}Gv9(ar){if(Array.isArray(ar.t)){vm.runtime.extensionStorage['vectorr']=ar.t}}
s6(ar,util){return [util.target.x,util.target.y];}s7(ar,util){util.target.setXY(ar.a[0]*1,ar.a[1]*1);}
s8(ar,util){util.target.setXY(util.target.x*1+ar.a[0]*1,util.target.y*1+ar.a[1]*1);}
cu(ar){return [ar.a];}cu2(ar){return [ar.a,ar.b];}cu3(ar){return [ar.a,ar.b,ar.c];}cu4(ar){return [ar.a,ar.b,ar.c,ar.d];}cu5(ar){return [ar.a,ar.b,ar.c,ar.d,ar.e,ar.f,ar.g,ar.h];}
cu6(ar){return Object.values(ar)}cu7(ar){return Object.values(ar)}cu8(ar){return Object.values(ar)}cu_i(){return iv}cu_j(){return jv}cu_k(){return kv}
uin1(ar){return new Uint8Array(ar.a);}uin2(ar){return new Uint16Array(ar.a);}uin10(ar){return new Uint8ClampedArray(ar.a);}
uin3(ar){return new Uint32Array(ar.a);}uin4(ar){return new Int8Array(ar.a);}uin5(ar){return new Int16Array(ar.a);}uin6(ar){return new Int32Array(ar.a);}
uin7(ar){return new Float16Array(ar.a);}uin8(ar){return new Float32Array(ar.a);}uin9(ar){return new Float64Array(ar.a);}uin11(ar){return new BigInt64Array(ar.a)}uin12(ar){return new BigUint64Array(ar.a)}
dsit(ar){var i=0,out=Array(ar.a.length);while(i<ar.a.length){out[i]=ar.b[i]-ar.a[i++];}return Math.hypot(...out);}
lerp(ar){var i=0,out=Array(ar.a.length);while(i<ar.a.length){out[i]=ar.a[i]*1+(ar.b[i]-ar.a[i++])*ar.c;}return out;}
negvec(ar){return ar.a.map(k=>k*-1);}incl(ar){return ar.a.includes(ar.b)}smdr(ar){let i=0,out=0;while(i<ar.a.length){out+=ar.a[i++];}return out;}//Math.sumPrecise(ar.a);
med1(ar){var i=0,out=0;while(i<ar.a.length){out+=ar.a[i++];}return out/ar.a.length;}
med2(ar){var i=1,out=ar.a[0];while(i<ar.a.length){out*=ar.a[i++];}return out**(1/ar.a.length);}
med3(ar){var i=0,out=0;while(i<ar.a.length){out+=1/ar.a[i++];}return ar.a.length/out;}
med4(ar){const ve=ar.a.map(k=>k**2);var i=0,out=0;while(i<ve.length){out+=ve[i++];}return (out/ve.length)**0.5;}
s10({a,b}){var i=0;while(i<b.length){b[i++].setXY(a[0]*1,a[1]*1)}}
s11({a,b}){var i=0;while(i<b.length){b[i].setXY(b[i].x*1+a[0]*1,b[i++].y*1+a[1]*1)}}s12(ar,util){return util.target}
prto(ar){var i=0,out=1;while(i<ar.a.length){out*=ar.a[i++];}return out;}
muVE(ar){var i=0,fin=Array(ar.a.length);while(i<fin.length){fin[i]=ar.a[i++]*ar.b}return fin;}
cruz(ar){return [(ar.a[1]*ar.b[2])-(ar.a[2]*ar.b[1]),(ar.a[2]*ar.b[0])-(ar.a[0]*ar.b[2]),(ar.a[0]*ar.b[1])-(ar.a[1]*ar.b[0])]}
Refj({a,b}){var i=0,fin=0,j=0;while(i<(a.length)){fin+=((a[i])*(b[i++]));}j=2*(fin/Math.hypot(...b)**2),i=0,fin=Array(a.length);while(i<(a.length)){fin[i]=a[i]-b[i++]*j;}return fin;}
proyvec({a,b}){var i=0,fin=0;while(i<(a.length)){fin+=((a[i])*(b[i++]));}fin/=Math.hypot(...b)**2;return a.map(k=>k*fin);}
proyesc({a,b}){var i=0,fin=0;while(i<(a.length)){fin+=((a[i])*(b[i++]));}return fin/=Math.hypot(...b)**2;}
rev(ar){return ar.a.reverse()}torev(ar){return ar.a.toReversed()}join(ar){return ar.a.join(ar.b)}sort(ar){return ar.a.sort()}tosort(ar){return ar.a.toSorted()}
lain(ar){return ar.c.lastIndexOf(ar.a,ar.b)}esarr(ar){return Array.isArray(ar.a)}arrf(ar){return Array.from(ar.a)}
Rotacion({a,b,c}){var ct=Math.cos(c*grrad),st=Math.sin(c*grrad),cr=[((b[1]*a[2])-(b[2]*a[1]))*st,((b[2]*a[0])-(b[0]*a[2]))*st,((b[0]*a[1])-(b[1]*a[0]))*st],lod=(a[0]*b[0])+(a[1]*b[1])+(a[2]*b[2]),
al=[b[0]*lod*(1-ct),b[1]*lod*(1-ct),b[2]*lod*(1-ct)];return[a[0]*ct+cr[0]+al[0],a[1]*ct+cr[1]+al[1],a[2]*ct+cr[2]+al[2]]}
Rotacion2({a,b,c}){var cos=Math.cos((-c)*grrad),sen=Math.sin((-c)*grrad),
matriz=[cos+(b[0]**2)*(1-cos),b[0]*b[1]*(1-cos)-b[2]*sen,b[0]*b[2]*(1-cos)+b[1]*sen,
	b[1]*b[0]*(1-cos)+b[2]*sen,cos+(b[1]**2)*(1-cos),b[1]*b[2]*(1-cos)-b[0]*sen,
	b[2]*b[0]*(1-cos)-b[1]*sen,b[2]*b[1]*(1-cos)+b[0]*sen,cos+(b[2]**2)*(1-cos)],i=0,nv=Array.from(a);
while(i<a.length){nv[i]=[nv[i][0]*matriz[0]+nv[i][1]*matriz[3]+nv[i][2]*matriz[6],
			 nv[i][0]*matriz[1]+nv[i][1]*matriz[4]+nv[i][2]*matriz[7],
			 nv[i][0]*matriz[2]+nv[i][1]*matriz[5]+nv[i++][2]*matriz[8]];
}return nv;}
med5(ar){var i=0,out=0,k=0;while(i<ar.a.length){out+=ar.a[i++];}out/=ar.a.length;i=0;while(i<ar.a.length){k+=(ar.a[i++]-out)**2;}return (k/(ar.a.length-1))**0.5;}
sli(ar){return ar.a.slice(ar.b,ar.c);}
s13(ar,util){return Math.hypot((ar.a.x-util.target.x),(ar.a.y-util.target.y))}
s14(ar,util){const coord=[util.target.x,util.target.y];var arr=Array(ar.a.length),i=0;while(i<arr.length){arr[i]=Math.hypot(ar.a[i].x-coord[0],ar.a[i++].y-coord[1])}return arr}
s15(ar){return Math.hypot((ar.a.x-ar.b.x),(ar.a.y-ar.b.y))}s16(ar,util){util.target.setXY(ar.a.x,ar.a.y)}
pmedio(ar){let arr=Array(ar.a.length),i=0;while(i<ar.a.length){arr[i]=(ar.a[i]+ar.b[i++])/2}return arr}
pmedioN(ar){let arr=Array(ar.a[0].length).fill(0),i=0,j=0;while(j<ar.a.length){while(i<ar.a[0].length){arr[i]+=(ar.a[j][i++])/ar.a.length}j++;i=0;}return arr}
s17(ar){return [(ar.a.x+ar.b.x)/2,(ar.a.y+ar.b.y)/2]}s18(ar){let arr=[0,0],i=0;while(i<ar.a.length){arr[0]+=ar.a[i].x/ar.a.length,arr[1]+=ar.a[i++].y/ar.a.length}return arr}
s19(ar){ar.a.setXY(ar.b[0],ar.b[1])}s20(ar){ar.a.setDirection(ar.b)}s21(ar,util){util.target.setDirection(Math.atan2(ar.a.x-util.target.x,ar.a.y-util.target.y)*57.295779513082320876798154814105)}
s22(ar,util){util.target.setDirection(ar.a.direction)}s23(ar){ar.b.setDirection(Math.atan2(ar.a.x-ar.b.x,ar.a.y-ar.b.y)*57.295779513082320876798154814105)}
s24(ar){Scratch.vm.runtime.disposeTarget(ar.a)}s25(ar,util){util.target.setDirection(ar.a.direction);util.target.setXY(ar.a.x,ar.a.y)}s26(ar){ar.a.setVisible(true)}s27(ar){ar.a.setVisible(false)}
s28(ar,util){util.target.setDirection(Math.atan2(ar.a[0]-util.target.x,ar.a[1]-util.target.y)*57.295779513082320876798154814105)}s29(ar,util){return vm.renderer.isTouchingDrawables(util.target.drawableID,[ar.a.drawableID]);}
s30(ar,util){return ar.a.filter(z=>vm.renderer.isTouchingDrawables(util.target.drawableID,[z.drawableID]))}dsit2(ar){return ar.b.map(x=>Math.hypot(x[0]-ar.a[0],x[1]-ar.a[1]))}
ppoli({P,polygon}){const between=(p,a,b)=>(p>=a&&p<=b||p<=a&&p>=b);let inside=false,A,B,c;//modificacion de codigo en stack overflow por 'timeapp-> https://stackoverflow.com/users/2608744/timepp'
    for(let i=polygon.length-1,j=0;j<polygon.length;i=j,j++){A=polygon[i],B=polygon[j]
	if(P[0]==A[0]&&P[1]==A[1]||P[0]==B[0]&&P[1]==B[1]){return 0}
	if(A[1]==B[1]&&P[1]==A[1]&&between(P[0],A[0],B[0])){return 0}
	if(between(P[1],A[1],B[1])){
		if (P[1]==A[1]&&B[1]>=A[1]||P[1]==B[1]&&A[1]>=B[1]) continue
		c=(A[0]-P[0])*(B[1]-P[1])-(B[0]-P[0])*(A[1]-P[1])
		if(c==0){return 0}if((A[1]<B[1])==(c>0)){inside=!inside}
	}}return inside?1:-1}
geo0({a,b}){return Math.hypot(a[0]-b[0],a[1]-b[1])<=b[2]}
geo1({a,b}){return (a[0]>=b[0]&&a[0]<=(b[0]+b[2]))&&(a[1]>=b[1]&&a[1]<=(b[1]+b[3]))}
geo2({a,b}){return Math.hypot(a[0]-b[0],a[1]-b[1],a[2]-b[2])<=b[3]}
geo3({a,b}){return (a[0]>=b[0]&&a[0]<=(b[0]+b[3]))&&(a[1]>=b[1]&&a[1]<=(b[1]+b[4]))&&(a[2]>=b[2]&&a[2]<=(b[2]+b[5]))}
dsit3({a,b,c}){let lin=[(b[1]-c[1])/(b[0]-c[0]),b[1]-(b[1]-c[1])/(b[0]-c[0])*b[0]];return Math.abs((lin[0]*a[0]-a[1]+lin[1])/Math.hypot(lin[0],-1))}
geo4({a,b}){return (a[0]>=b[0]&&a[0]<=(b[0]+b[2]))&&(a[1]>=b[1]&&a[1]<=(b[1]+b[2]))}
geo5({a,b}){return (a[0]>=b[0]&&a[0]<=(b[0]+b[3]))&&(a[1]>=b[1]&&a[1]<=(b[1]+b[3]))&&(a[2]>=b[3]&&a[2]<=(b[2]+b[3]))}
s31(ar){return ar.a.setXY(ar.b.x,ar.b.y)}
geo6({a,b}){let c=Math.atan2(a[0]-b[0],a[1]-b[1]);return [Math.sin(c),Math.cos(c),c*57.295779513082320876798154814105]}
geo7({a,b}){let c=[b[0]+(b[2]/2),b[1]-(b[3]/2)];return (Math.abs(a[0]-c[0])<Math.abs(a[1]-c[1])?(a[1]<c[1]?[0,-1,180]:[0,1,0]):(a[0]<c[0]?[-1,0,-90]:[1,0,90]))}
geo8({a,b}){let c=[b[0]+(b[2]/2),b[1]-(b[2]/2)];return (Math.abs(a[0]-c[0])<Math.abs(a[1]-c[1])?(a[1]<c[1]?[0,-1,180]:[0,1,0]):(a[0]<c[0]?[-1,0,-90]:[1,0,90]))}
rpt7(ar){let i=0;while(i<ar.a.length){ar.a[i]=ar.b[i++]}}rpt8(ar){return ++ar.a[ar.b]}rpt9(ar){return --ar.a[ar.b]}rpt10(ar){return ar.a[ar.b]++}rpt11(ar){return ar.a[ar.b]--}
geo9({a,b}){return Math.hypot(a[0]-b[0],a[1]-b[1])<=(b[2]+a[2])}
geo10({cu,du}){return !(cu[0]>=du[0]+du[2])||(cu[0]+cu[2]<=du[0])||(cu[1]>=du[1]+du[3])||(cu[1]+cu[3]<=du[1])}
geo11({cu,du}){return !(cu[0]>=du[0]+du[2])||(cu[0]+cu[2]<=du[0])||(cu[1]>=du[1]+du[2])||(cu[1]+cu[2]<=du[1])}
geo12({a,b}){let pun=Array.from(a);pun[0]=(pun[0]<b[0]?b[0]:(pun[0]>b[0]+b[2]?b[0]+b[2]:pun[0])),pun[1]=(pun[1]<b[1]?b[1]:(pun[1]>b[1]+b[3]?b[1]+b[3]:pun[1]));return Math.hypot(a[0]-pun[0],a[1]-pun[1])<=a[2]}
geo13({a,b}){let pun=Array.from(a);pun[0]=(pun[0]<b[0]?b[0]:(pun[0]>b[0]+b[2]?b[0]+b[2]:pun[0])),pun[1]=(pun[1]<b[1]?b[1]:(pun[1]>b[1]+b[2]?b[1]+b[2]:pun[1]));return Math.hypot(a[0]-pun[0],a[1]-pun[1])<=a[2]}
}Scratch.extensions.register(new vectorr());})(Scratch);