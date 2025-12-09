(function(Scratch) {'use strict';//por el (pentaquark neutro, penta quark neutro) y neutral auream
const txt=Scratch.ArgumentType.STRING,rep=Scratch.BlockType.REPORTER,num=Scratch.ArgumentType.NUMBER,vgbb=Scratch.BlockType.BUTTON,evaluador=Scratch.BlockType.BOOLEAN,com=Scratch.BlockType.COMMAND;
const vm=Scratch.vm,runtime=vm.runtime,grrad=Math.PI/180,iv=[1,0,0],jv=[0,1,0],kv=[0,0,1];let Gvec=[],ops=1,vecs=1,prop=1,glo=1,cc=1,cuat=1,oct=1,sed=1;
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
{blockType:"label",text:"Operadores matematicos",hideFromPalette:ops},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'m',blockType:rep,text:'[a]+[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:num,defaultValue:''}}},
{opcode:'r',blockType:rep,text:'[a]-[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:num,defaultValue:''}}},
{opcode:'muVE',blockType:rep,text:'[a]*[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:num,defaultValue:'5'}}},
{opcode:'prod',blockType:rep,text:'[a]•[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'cruz',blockType:rep,text:'3D[a]X[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:num,defaultValue:''}}},
{opcode:'Hadamard',blockType:rep,text:'[a]⊙[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'invemul',blockType:rep,text:'[a]^-1',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'negvec',blockType:rep,text:'-[a]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'Kr',blockType:rep,text:'[a]⊗[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'dsit',blockType:rep,text:'[a]dist[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'lerp',blockType:rep,text:'IterpoLineal[a][b]alpha[c]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''},c:{type:num,defaultValue:'0.5'}}},
{opcode:'smdr',blockType:rep,text:'Σ[a]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'prto',blockType:rep,text:'∏[a]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'med1',blockType:rep,text:'media aritmetica[a]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'med2',blockType:rep,text:'media geometrica[a]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'med3',blockType:rep,text:'media armonica[a]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'med4',blockType:rep,text:'media cuadratica[a]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'nor',blockType:rep,text:'||[a]||',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'unit',blockType:rep,text:'versor[a]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'angu',blockType:rep,text:'Θ°[a]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'Refj',blockType:rep,text:'Reflexion[a]normal[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:num,defaultValue:''}}},
{opcode:'proyvec',blockType:rep,text:'Proyeccion vectorial[a][b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:num,defaultValue:''}}},
{opcode:'proyesc',blockType:rep,text:'Proyeccion escalar[a][b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:num,defaultValue:''}}},
{opcode:'Rotacion',blockType:rep,text:'3DRotar[a]en eje[b][c]grados',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:num,defaultValue:''},c:{type:num,defaultValue:'45'}}},
{opcode:'Rotacion2',blockType:rep,text:'3DRotar lista[a]en eje[b][c]grados',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:num,defaultValue:''},c:{type:num,defaultValue:'45'}}},
{blockType:"label",text:"vectores",hideFromPalette:vecs},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'pt',blockType:rep,text:'[a]〚[b]〛',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'2'}}},
{opcode:'att',blockType:rep,text:'[a].at[b]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'2'}}},
{opcode:'withh',blockType:rep,text:'[a].with[b][c]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'0'},c:{type:txt,defaultValue:'2'}}},
{opcode:'arr',blockType:rep,text:'arr[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:'1,5,8'}}},
{opcode:'arrf',blockType:rep,text:'Array.from[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'le',blockType:rep,text:'length[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'rpt',blockType:rep,text:'[a]〚[b]〛=[c]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'0'},c:{type:txt,defaultValue:'10'}}},
{opcode:'rpt2',blockType:com,text:'[a]〚[b]〛=[c]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'0'},c:{type:txt,defaultValue:'10'}}},
{opcode:'rpt3',blockType:com,text:'[a]〚[b]〛[tip][c]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'0'},c:{type:txt,defaultValue:'10'},tip:{type:txt,menu:'Asig'}}},
{opcode:'gen',blockType:rep,text:'Array[a]B[b]',hideFromPalette:vecs,arguments:{a:{type:num,defaultValue:'12'},b:{type:num,defaultValue:'3'}}},
{opcode:'gen2',blockType:rep,text:'Array[a]rand B[b]C[c]',hideFromPalette:vecs,arguments:{a:{type:num,defaultValue:'12'},b:{type:num,defaultValue:'70'},c:{type:num,defaultValue:'10'}}},
{opcode:'arentries',blockType:rep,text:'[a].entries',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'aritera',blockType:rep,text:'[a]〚Symbol.iterator〛()',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'arnex',blockType:rep,text:'[a].next',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'pu',blockType:rep,text:'push[a]p[b]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'9'}}},
{opcode:'sh',blockType:rep,text:'shift[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'po',blockType:rep,text:'pop[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'fl',blockType:rep,text:'[a].flat[b]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'5'}}},
{opcode:'fill',blockType:rep,text:'[a].fill[b]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'5'}}},
{opcode:'sl',blockType:rep,text:'[a].splice[b][c]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:num,defaultValue:'1'},c:{type:num,defaultValue:'1'}}},
{opcode:'in',blockType:rep,text:'[c].indexOf[a][b]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:'K'},b:{type:num,defaultValue:'0'},c:{type:txt,defaultValue:''}}},
{opcode:'lain',blockType:rep,text:'[c].lastIndexOf[a][b]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:'K'},b:{type:num,defaultValue:'-1'},c:{type:txt,defaultValue:''}}},
{opcode:'arrcopy',blockType:rep,text:'[a].copyWithin[b][c][d]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:num,defaultValue:'1'},c:{type:num,defaultValue:'1'},d:{type:num,defaultValue:'1'}}},
{opcode:'ma',blockType:rep,text:'[a].map[ou][b]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},ou:{type:txt,menu:'outs'},b:{type:num,defaultValue:'3'}}},
{opcode:'Fil',blockType:rep,text:'[a].filter[ou][b]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},ou:{type:txt,menu:'Filt'},b:{type:txt,defaultValue:'3'}}},
{opcode:'co',blockType:rep,text:'[a].concat[b]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'incl',blockType:rep,text:'[a].includes[b]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'5'}}},
{opcode:'rev',blockType:rep,text:'[a].reverse',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'torev',blockType:rep,text:'[a].toReversed',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'join',blockType:rep,text:'[a].join[b]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'-'}}},
{opcode:'sort',blockType:rep,text:'[a].sort',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'tosort',blockType:rep,text:'[a].toSorted',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'esarr',blockType:evaluador,text:'isArray[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'uin1',blockType:rep,text:'new Uint8Array[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'uin10',blockType:rep,text:'new Uint8ClampedArray[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'uin2',blockType:rep,text:'new Uint16Array[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'uin3',blockType:rep,text:'new Uint32Array[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'uin4',blockType:rep,text:'new int8Array[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'uin5',blockType:rep,text:'new int16Array[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'uin6',blockType:rep,text:'new int32Array[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'uin7',blockType:rep,text:'new Float16Array[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'uin8',blockType:rep,text:'new Float32Array[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'uin9',blockType:rep,text:'new Float64Array[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
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
{opcode:'pt2',blockType:rep,text:'[a]〚[b]〛〚[c]〛',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'2'},c:{type:txt,defaultValue:'0'}}},
{opcode:'pt3',blockType:rep,text:'[a]〚[b]〛〚[c]〛〚[d]〛',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'2'},c:{type:txt,defaultValue:'0'},d:{type:txt,defaultValue:'3'}}},
{opcode:'pt4',blockType:rep,text:'[a]〚[b]〛〚[c]〛〚[d]〛〚[e]〛',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'2'},c:{type:txt,defaultValue:'0'},d:{type:txt,defaultValue:'3'},e:{type:txt,defaultValue:'7'}}},
{opcode:'rpt4',blockType:com,text:'[a]〚[b]〛=[c],〚[d]〛=[e]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'2'},c:{type:txt,defaultValue:'0'},d:{type:txt,defaultValue:'1'},e:{type:txt,defaultValue:'255'}}},
{opcode:'rpt5',blockType:com,text:'[a]〚[b]〛=[c],〚[d]〛=[e],〚[f]〛=[g]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'2'},c:{type:txt,defaultValue:'0'},d:{type:txt,defaultValue:'1'},e:{type:txt,defaultValue:'255'},f:{type:txt,defaultValue:'0'},g:{type:txt,defaultValue:'7'}}},
{opcode:'rpt6',blockType:com,text:'[a]〚[b]〛=[c],〚[d]〛=[e],〚[f]〛=[g],〚[h]〛=[i]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'2'},c:{type:txt,defaultValue:'0'},d:{type:txt,defaultValue:'1'},e:{type:txt,defaultValue:'255'},f:{type:txt,defaultValue:'0'},g:{type:txt,defaultValue:'7'},h:{type:txt,defaultValue:'3'},i:{type:txt,defaultValue:'-10'}}},
{blockType:"label",text:"Obj.vec o propiedad",hideFromPalette:prop},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'tagtp1m',blockType:com,text:'añadir[t]tp1 NR',hideFromPalette:prop,arguments:{t:{type:txt,defaultValue:'K'}}},
{opcode:'tagtp1mc',blockType:com,text:'añadir[t]tp1',hideFromPalette:prop,arguments:{t:{type:txt,defaultValue:'K'}}},
{opcode:'tagtp1',blockType:rep,text:'tp1',hideFromPalette:prop,disableMonitor:1},
{opcode:'tagtp1ig',blockType:com,text:'tp1=[t]',hideFromPalette:prop,arguments:{t:{type:txt,defaultValue:''}}},
{opcode:'tagtp1c',blockType:evaluador,text:'contiene?[t]tp1',hideFromPalette:prop,arguments:{t:{type:txt,defaultValue:''}}},
{opcode:'s1',blockType:rep,text:'ID',hideFromPalette:prop,disableMonitor:1},
{opcode:'s2',blockType:rep,text:'DRAWID',hideFromPalette:prop,disableMonitor:1},
{opcode:'s12',blockType:rep,text:'Referencia object',hideFromPalette:prop,disableMonitor:1},
{opcode:'s3',blockType:rep,text:'Obj.filter(ID)[a].tp1',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'s4',blockType:evaluador,text:'tocando Obj.tp1.includes[a]?',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:'K'}}},
{opcode:'s9',blockType:evaluador,text:'tocando Obj.tp1.includes[a]?de lista[targets]',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:'K'},targets:{type:txt,defaultValue:'[DrawID,...]'}}},
{opcode:'s5',blockType:rep,text:'tp1 de toda cosa tocada',hideFromPalette:prop,disableMonitor:1},
{opcode:'s6',blockType:rep,text:'coordenadas',hideFromPalette:prop,disableMonitor:1},
{opcode:'s7',blockType:com,text:'Ir a XY[a]',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'s8',blockType:com,text:'mover XY[a]',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'s10',blockType:com,text:'Ir multiples[b]a XY[a]',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'[object,...]'}}},
{opcode:'s11',blockType:com,text:'mover multiples[b] XY[a]',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'[object,...]'}}},
{blockType:"label",text:"Global",hideFromPalette:glo},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'Gv1',blockType:com,text:'push[t]Gv',hideFromPalette:glo,arguments:{t:{type:txt,defaultValue:'L'}}},
{opcode:'Gv4',blockType:com,text:'concat[t]Gv',hideFromPalette:glo,arguments:{t:{type:txt,defaultValue:'L'}}},
{opcode:'Gv2',blockType:rep,text:'Gv',hideFromPalette:glo,disableMonitor:1},
{opcode:'Gv3',blockType:com,text:'Gv=[t]',hideFromPalette:glo,arguments:{t:{type:txt,defaultValue:''}}},
{opcode:'Gv5',blockType:rep,text:'runtime Targets',hideFromPalette:glo,disableMonitor:1},
{blockType:"label",text:"Vector global persistente",hideFromPalette:glo},//------------------------------------------------------------
{opcode:'Gv6',blockType:com,text:'push[t]VGP',hideFromPalette:glo,arguments:{t:{type:txt,defaultValue:'L'}}},
{opcode:'Gv8',blockType:rep,text:'VGP',hideFromPalette:glo,disableMonitor:1},
{opcode:'Gv9',blockType:com,text:'VGP=[t]',hideFromPalette:glo,arguments:{t:{type:txt,defaultValue:''}}},
{blockType:"label",text:"Complejos",hideFromPalette:cc},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'cc1',blockType:rep,text:'ℂ[a]+[b]',hideFromPalette:cc,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'cc2',blockType:rep,text:'ℂ[a]-[b]',hideFromPalette:cc,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'cc3',blockType:rep,text:'ℂ[a]*[b]',hideFromPalette:cc,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'cc4',blockType:rep,text:'ℂ[a]/[b]',hideFromPalette:cc,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'cc6',blockType:rep,text:'ℂ conj[a]',hideFromPalette:cc,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'cc7',blockType:rep,text:'ℂ LN[a]',hideFromPalette:cc,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'cc8',blockType:rep,text:'ℂ e^[a]',hideFromPalette:cc,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'cc9',blockType:rep,text:'ℂ arg[a]',hideFromPalette:cc,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'cc11',blockType:rep,text:'ℂ ||[a]||',hideFromPalette:cc,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'cc10',blockType:evaluador,text:'¿[a]es ℂ?',hideFromPalette:cc,arguments:{a:{type:txt,defaultValue:''}}},
{blockType:"label",text:"Cuaterniones",hideFromPalette:cuat},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'cua1',blockType:rep,text:'ℍ[a]+[b]',hideFromPalette:cuat,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'cua2',blockType:rep,text:'ℍ[a]-[b]',hideFromPalette:cuat,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'cua3',blockType:rep,text:'ℍ[v1]*[v2]',hideFromPalette:cuat,arguments:{v1:{type:txt,defaultValue:''},v2:{type:txt,defaultValue:''}}},
{opcode:'cua4',blockType:rep,text:'ℍ[v1]/[v2]',hideFromPalette:cuat,arguments:{v1:{type:txt,defaultValue:''},v2:{type:txt,defaultValue:''}}},
{opcode:'cua6',blockType:rep,text:'ℍ conj[a]',hideFromPalette:cuat,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'cua7',blockType:rep,text:'ℍ LN[V]',hideFromPalette:cuat,arguments:{V:{type:txt,defaultValue:''}}},
{opcode:'cua8',blockType:rep,text:'ℍ e^[V]',hideFromPalette:cuat,arguments:{V:{type:txt,defaultValue:''}}},
{opcode:'cua10',blockType:rep,text:'ℍ ||[V]||',hideFromPalette:cuat,arguments:{V:{type:txt,defaultValue:''}}},
{opcode:'cua9',blockType:evaluador,text:'¿[a]es ℍ?',hideFromPalette:cuat,arguments:{a:{type:txt,defaultValue:''}}},
{blockType:"label",text:"Octoniones",hideFromPalette:oct},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'octa1',blockType:rep,text:'𝕆[a]+[b]',hideFromPalette:oct,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'octa2',blockType:rep,text:'𝕆[a]-[b]',hideFromPalette:oct,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'octa3',blockType:rep,text:'𝕆[v1]*[v2]',hideFromPalette:oct,arguments:{v1:{type:txt,defaultValue:''},v2:{type:txt,defaultValue:''}}},
{opcode:'octa4',blockType:rep,text:'𝕆[v1]/[v2]',hideFromPalette:oct,arguments:{v1:{type:txt,defaultValue:''},v2:{type:txt,defaultValue:''}}},
{opcode:'octa6',blockType:rep,text:'𝕆 conj[a]',hideFromPalette:oct,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'octa8',blockType:rep,text:'𝕆 e^[v]',hideFromPalette:oct,arguments:{v:{type:txt,defaultValue:''}}},
{opcode:'octa9',blockType:rep,text:'𝕆 ||[v]||',hideFromPalette:oct,arguments:{v:{type:txt,defaultValue:''}}},
{opcode:'octa7',blockType:evaluador,text:'¿[a]es 𝕆?',hideFromPalette:oct,arguments:{a:{type:txt,defaultValue:''}}},
{blockType:"label",text:"Sedeniones",hideFromPalette:sed},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'sed1',blockType:rep,text:'𝕊[v]+[w]',hideFromPalette:sed,arguments:{v:{type:txt,defaultValue:''},w:{type:txt,defaultValue:''}}},
{opcode:'sed2',blockType:rep,text:'𝕊[v]-[w]',hideFromPalette:sed,arguments:{v:{type:txt,defaultValue:''},w:{type:txt,defaultValue:''}}},
{opcode:'sed5',blockType:rep,text:'𝕊[v]*[k]',hideFromPalette:sed,arguments:{v:{type:txt,defaultValue:''},k:{type:txt,defaultValue:''}}},
{opcode:'sed3',blockType:rep,text:'𝕊 conj[v]',hideFromPalette:sed,arguments:{v:{type:txt,defaultValue:''}}},
{opcode:'sed4',blockType:evaluador,text:'¿[a]es 𝕊?',hideFromPalette:sed,arguments:{a:{type:txt,defaultValue:''}}},
],menus:{
outs:{acceptReporters:0,items:['+','-','*','/','**','LogB','sen','cos','tan','sign','abs','rampa','lim+','lim-','int','arcsen','arccos','arctan','e^','Ln','Log10','|','&','^','~','<<','>>','>>>','tofixed','function->']},
Filt:{acceptReporters:0,items:['==','===','<','>','>=','<=','!=','includes','!includes','Reflect.has','!Reflect.has','typeof','!isNaN','isNaN']},
Asig:{acceptReporters:0,items:['=','+=','-=','/=','*=','**=','<<=','??=','%=','>>=','>>>=']}}
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
octa1({a,b}){return [a[0]*1+1*b[0],a[1]*1+b[1]*1,a[2]*1+b[2]*1,a[3]*1+b[3]*1,a[4]*1+b[4]*1,a[5]*1+b[5]*1,a[6]*1+b[6]*1,a[7]*1+b[7]*1]}
octa2({a,b}){return [a[0]-b[0],a[1]-b[1],a[2]-b[2],a[3]-b[3],a[4]-b[4],a[5]-b[5],a[6]-b[6],a[7]-b[7]]}
octa3({v1,v2}){return [(v1[0]*v2[0])-(v1[1]*v2[1])-(v1[2]*v2[2])-(v1[3]*v2[3])-(v1[4]*v2[4])-(v1[5]*v2[5])-(v1[6]*v2[6])-(v1[7]*v2[7]),(v1[0]*v2[1])+(v1[1]*v2[0])-(v1[2]*v2[3])+(v1[3]*v2[2])-(v1[4]*v2[5])+(v1[5]*v2[4])+(v1[6]*v2[7])-(v1[7]*v2[6]),(v1[0]*v2[2])+(v1[1]*v2[3])+(v1[2]*v2[0])-(v1[3]*v2[1])-(v1[4]*v2[6])-(v1[5]*v2[7])+(v1[6]*v2[4])+(v1[7]*v2[5]),(v1[0]*v2[3])-(v1[1]*v2[2])+(v1[2]*v2[1])+(v1[3]*v2[0])-(v1[4]*v2[7])+(v1[5]*v2[6])-(v1[6]*v2[5])+(v1[7]*v2[4]),(v1[0]*v2[4])+(v1[1]*v2[5])+(v1[2]*v2[6])+(v1[3]*v2[7])+(v1[4]*v2[0])-(v1[5]*v2[1])-(v1[6]*v2[2])-(v1[7]*v2[3]),(v1[0]*v2[5])-(v1[1]*v2[4])+(v1[2]*v2[7])-(v1[3]*v2[6])+(v1[4]*v2[1])+(v1[5]*v2[0])+(v1[6]*v2[3])-(v1[7]*v2[2]),(v1[0]*v2[6])-(v1[1]*v2[7])-(v1[2]*v2[4])+(v1[3]*v2[5])+(v1[4]*v2[2])-(v1[5]*v2[3])+(v1[6]*v2[0])+(v1[7]*v2[1]),(v1[0]*v2[7])+(v1[1]*v2[6])-(v1[2]*v2[5])-(v1[3]*v2[4])+(v1[4]*v2[3])+(v1[5]*v2[2])-(v1[6]*v2[1])+(v1[7]*v2[0])]}
octa4({v1,v2}){const v3=(v2[0]**2)+(v2[1]**2)+(v2[2]**2)+(v2[3]**2)+(v2[4]**2)+(v2[5]**2)+(v2[6]**2)+(v2[7]**2);return [((v1[0]*v2[0])-(v1[1]*-v2[1])-(v1[2]*-v2[2])-(v1[3]*-v2[3])-(v1[4]*-v2[4])-(v1[5]*-v2[5])-(v1[6]*-v2[6])-(v1[7]*-v2[7]))/v3,((v1[0]*-v2[1])+(v1[1]*v2[0])-(v1[2]*-v2[3])+(v1[3]*-v2[2])-(v1[4]*-v2[5])+(v1[5]*-v2[4])+(v1[6]*-v2[7])-(v1[7]*-v2[6]))/v3,((v1[0]*-v2[2])+(v1[1]*-v2[3])+(v1[2]*v2[0])-(v1[3]*-v2[1])-(v1[4]*-v2[6])-(v1[5]*-v2[7])+(v1[6]*-v2[4])+(v1[7]*-v2[5]))/v3,((v1[0]*-v2[3])-(v1[1]*-v2[2])+(v1[2]*-v2[1])+(v1[3]*v2[0])-(v1[4]*-v2[7])+(v1[5]*-v2[6])-(v1[6]*-v2[5])+(v1[7]*-v2[4]))/v3,((v1[0]*-v2[4])+(v1[1]*-v2[5])+(v1[2]*-v2[6])+(v1[3]*-v2[7])+(v1[4]*v2[0])-(v1[5]*-v2[1])-(v1[6]*-v2[2])-(v1[7]*-v2[3]))/v3,((v1[0]*-v2[5])-(v1[1]*-v2[4])+(v1[2]*-v2[7])-(v1[3]*-v2[6])+(v1[4]*-v2[1])+(v1[5]*v2[0])+(v1[6]*-v2[3])-(v1[7]*-v2[2]))/v3,((v1[0]*-v2[6])-(v1[1]*-v2[7])-(v1[2]*-v2[4])+(v1[3]*-v2[5])+(v1[4]*-v2[2])-(v1[5]*-v2[3])+(v1[6]*v2[0])+(v1[7]*-v2[1]))/v3,((v1[0]*-v2[7])+(v1[1]*-v2[6])-(v1[2]*-v2[5])-(v1[3]*-v2[4])+(v1[4]*-v2[3])+(v1[5]*-v2[2])-(v1[6]*-v2[1])+(v1[7]*v2[0]))/v3]}
octa6({a}){return [a[0],-a[1],-a[2],-a[3],-a[4],-a[5],-a[6],-a[7]]}
octa7({a}){return (a.length==8&&!isNaN(Number(a[0]))&&!isNaN(Number(a[1]))&&!isNaN(Number(a[2]))&&!isNaN(Number(a[3]))&&!isNaN(Number(a[4]))&&!isNaN(Number(a[5]))&&!isNaN(Number(a[6]))&&!isNaN(Number(a[7])))}
octa8({v}){const mo=Math.hypot(v[1],v[2],v[3],v[4],v[5],v[6],v[7]),s=Math.sin(mo)*Math.exp(v[0]);return [Math.cos(mo)*Math.exp(v[0]),s*v[1]/mo,s*v[2]/mo,s*v[3]/mo,s*v[4]/mo,s*v[5]/mo,s*v[6]/mo,s*v[7]/mo]}
octa9({v}){return (v[0]**2+v[1]**2+v[2]**2+v[3]**2+v[4]**2+v[5]**2+v[6]**2+v[7]**2)**0.5}
cua1({a,b}){return [a[0]*1+1*b[0],a[1]*1+b[1]*1,a[2]*1+b[2]*1,a[3]*1+b[3]*1]}
cua2({a,b}){return [a[0]-b[0],a[1]-b[1],a[2]-b[2],a[3]-b[3]]}
cua3({v1,v2}){return [((v1[0]*v2[0])-(v1[1]*v2[1])-(v1[2]*v2[2])-(v1[3]*v2[3])),((v1[0]*v2[1])+(v1[1]*v2[0])+(v1[2]*v2[3])-(v1[3]*v2[2])),((v1[0]*v2[2])-(v1[1]*v2[3])+(v1[2]*v2[0])+(v1[3]*v2[1])),((v1[0]*v2[3])+(v1[1]*v2[2])-(v1[2]*v2[1])+(v1[3]*v2[0]))];}
cua4({v1,v2}){const mo=(v2[0]**2)+(v2[1]**2)+(v2[2]**2)+(v2[3]**2);return [((v1[0]*v2[0])-(v1[1]*-v2[1])-(v1[2]*-v2[2])-(v1[3]*-v2[3]))/mo,((v1[0]*-v2[1])+(v1[1]*v2[0])+(v1[2]*-v2[3])-(v1[3]*-v2[2]))/mo,((v1[0]*-v2[2])-(v1[1]*-v2[3])+(v1[2]*v2[0])+(v1[3]*-v2[1]))/mo,((v1[0]*-v2[3])+(v1[1]*-v2[2])-(v1[2]*-v2[1])+(v1[3]*v2[0]))/mo];}
cua6({a}){return [a[0],-a[1],-a[2],-a[3]]}
cua7({V}){const M=((V[1]**2)+(V[2]**2)+(V[3]**2))**0.5,c=Math.acos(V[0]/Math.hypot(...V));return [Math.log(Math.hypot(...V)),(V[1]/M*c),(V[2]/M*c),(V[3]/M*c)]}
cua8({V}){const r=((V[1]**2)+(V[2]**2)+(V[3]**2))**0.5,srad=Math.sin(r)/r*Math.exp(V[0]);return [(Math.exp(V[0])*Math.cos(r)),srad*V[1],srad*V[2],srad*V[3]]}
cua9({a}){return (a.length==4&&!isNaN(Number(a[0]))&&!isNaN(Number(a[1]))&&!isNaN(Number(a[2]))&&!isNaN(Number(a[3])))}
cua10({V}){return (V[0]**2+V[1]**2+V[2]**2+V[3]**2)**0.5}
cc1(ar){return [ar.a[0]*1+1*ar.b[0],+ar.a[1]*1+ +ar.b[1]*1]}
cc2(ar){return [ar.a[0]-ar.b[0],ar.a[1]-ar.b[1]]}
cc3(ar){return [(ar.a[0]*ar.b[0])-ar.a[1]*ar.b[1],ar.a[0]*ar.b[1]+ar.b[0]*ar.a[1]]}
cc4({a,b}){const G=(b[0]**2)+(b[1]**2);return [((a[0]*b[0])+a[1]*b[1])/G,(b[0]*a[1]-a[0]*b[1])/G]}
cc6(ar){return [ar.a[0],-ar.a[1]]}
cc7(ar){return [Math.log(Math.hypot(...ar.a)),Math.atan2(ar.a[1],ar.a[0])]}
cc8(ar){const pa=Math.exp(ar.a[0]);return [(Math.cos(ar.a[1])*pa),(Math.sin(ar.a[1])*pa)]}
cc9(ar){return Math.atan2(ar.a[1],ar.a[0]);}
cc10(ar){return (ar.a.length==2&&!isNaN(Number(ar.a[0]))&&!isNaN(Number(ar.a[1])))}
cc11(ar){return (ar.a[0]**2+ar.a[1]**2)**0.5}
ma(ar){switch(ar.ou){
case'+':return ar.a.map(k=>k*1+ar.b*1);break;case'-':return ar.a.map(k=>k-ar.b);break;case'*':return ar.a.map(k=>k*ar.b);break;case'/':return ar.a.map(k=>k/ar.b);break;
case'**':return ar.a.map(k=>k**ar.b);break;case'LogB':return ar.a.map(k=>Math.log(k)/Math.log(ar.b));break;case'sen':return ar.a.map(Math.sin);break;case'cos':return ar.a.map(Math.cos);break;
case'tan':return ar.a.map(Math.tan);break;case'sign':return ar.a.map(Math.sign);break;case'abs':return ar.a.map(Math.abs);break;case'rampa':return ar.a.map(k=>(k>0 ? k:0));break;
case'lim+':return ar.a.map(k=>(k>ar.b ? ar.b:k));break;case'lim-':return ar.a.map(k=>(k<ar.b ? ar.b:k));break;case'int':return ar.a.map(Math.trunc);break;
case'arcsen':return ar.a.map(Math.asin);break;case'arccos':return ar.a.map(Math.acos);break;case'arctan':return ar.a.map(Math.atan);break;case'e^':return ar.a.map(Math.exp);break;
case'Ln':return ar.a.map(Math.log);break;case'Log10':return ar.a.map(Math.log10);break;case'|':return ar.a.map(k=>k|ar.b);break;case'&':return ar.a.map(k=>k&ar.b);break;
case'^':return ar.a.map(k=>k^ar.b);break;case'~':return ar.a.map(k=>~k);break;case'<<':return ar.a.map(k=>k<<ar.b);break;case'>>':return ar.a.map(k=>k>>ar.b);break;case'>>>':return ar.a.map(k=>k>>>ar.b);break;
case'tofixed':return ar.a.map(k=>k.toFixed(ar.b));break;case'function->':return ar.a.map(ar.b);break
}}
Fil(ar){switch(ar.ou){
case'==':return ar.a.filter(dat=>(dat==ar.b ? 1:0));break;case'===':return ar.a.filter(dat=>(dat===ar.b ? 1:0));break;case'isNaN':return ar.a.filter(k=>isNaN(k));break;
case'<':return ar.a.filter(dat=>(dat<ar.b ? 1:0));break;case'>':return ar.a.filter(dat=>(dat>ar.b ? 1:0));break;
case'>=':return ar.a.filter(dat=>(dat>=ar.b ? 1:0));break;case'<=':return ar.a.filter(dat=>(dat<=ar.b ? 1:0));break;
case'!=':return ar.a.filter(dat=>(dat!=ar.b ? 1:0));break;case'includes':return ar.a.filter(dat=>dat.toString().includes(ar.b));break;
case'!includes':return ar.a.filter(dat=>!(dat.toString().includes(ar.b)));break;case'Reflect.has':return ar.a.filter(dat=>Reflect.has(dat,ar.b));break;
case'!Reflect.has':return ar.a.filter(dat=>!(Reflect.has(dat,ar.b)));break;case'typeof':return ar.a.filter(dat=>typeof(dat)==ar.b);break;case'!isNaN':return ar.a.filter(k=>!isNaN(k));break;
}}
herr0(){Scratch.openWindow('https://linktr.ee/Penta_quark_neutro');}
herr1(){ops=0;ref();}herr2(){ops=1;ref();}herr3(){vecs=0;ref();}herr4(){vecs=1;ref();}herr5(){prop=0;ref();}herr6(){prop=1;ref();}herr7(){glo=0;ref();}herr8(){glo=1;ref();}
herr9(){cc=0;ref();}herr10(){cc=1;ref();}herr11(){cuat=0;ref();}herr12(){cuat=1;ref();}herr13(){oct=0;ref();}herr14(){oct=1;ref();}herr15(){sed=0;ref();}herr16(){sed=1;ref();}
arr(ar){return Array.from(ar.a.split(','));}
le(ar){return ar.a.length;}
nor(ar){var i=0,b=0;while(i<ar.a.length){b+=ar.a[i++]**2}return b**0.5}
unit(ar){var i=0,b=0;while(i<ar.a.length){b+=ar.a[i++]**2}b**=0.5;return ar.a.map(g=>g/b)}
pt(ar){return ar.a[ar.b];}
pt2(ar){return ar.a[ar.b][ar.c]}
pt3(ar){return ar.a[ar.b][ar.c][ar.d]}
pt4(ar){return ar.a[ar.b][ar.c][ar.d][ar.e]}
prod(ar){var i=0,fin=0;while(i<(ar.a.length)){fin+=((ar.a[i])*(ar.b[i++]));}return fin;}
rpt(ar){ar.a[ar.b]=ar.c;return ar.a;}
rpt2(ar){ar.a[ar.b]=ar.c;}
rpt3(ar){switch(ar.tip){case'=':ar.a[ar.b]=ar.c;break;case'+=':ar.a[ar.b]+=ar.c;break;case'-=':ar.a[ar.b]-=ar.c;break;case'/=':ar.a[ar.b]/=ar.c;break;
case'*=':ar.a[ar.b]*=ar.c;break;case'**=':ar.a[ar.b]**=ar.c;break;case'<<=':ar.a[ar.b]<<=ar.c;break;case'>>=':ar.a[ar.b]>>=ar.c;break;
case'>>>=':ar.a[ar.b]>>>=ar.c;break;case'??=':ar.a[ar.b]??=ar.c;break;case'%=':ar.a[ar.b]%=ar.c;break;
}}
rpt4(ar){ar.a[ar.b]=ar.c,ar.a[ar.d]=ar.e;}
rpt5(ar){ar.a[ar.b]=ar.c,ar.a[ar.d]=ar.e,ar.a[ar.f]=ar.g;}
rpt6(ar){ar.a[ar.b]=ar.c,ar.a[ar.d]=ar.e,ar.a[ar.f]=ar.g,ar.a[ar.h]=ar.i;}
arrcopy(ar){return ar.a.copyWithin(ar.b,ar.c,ar.d)}
arnex(ar){return ar.a.next()}
aritera(ar){return ar.a[Symbol.iterator]()}
arentries(ar){return ar.a.entries()}
withh(ar){return ar.a.with(ar.b,ar.c)}
att(ar){return ar.a.at(ar.b)}
angu(ar){return Math.acos(ar.a[0]/Math.hypot(...ar.a))}
m({a,b}){var i=0,fin=Array(a.length);while(i<(a.length)){fin[i]=a[i]*1+b[i++]*1;}return fin;}
r({a,b}){var i=0,fin=Array(a.length);while(i<(a.length)){fin[i]=a[i]-b[i++];}return fin;}
Hadamard({a,b}){var i=0,fin=Array(a.length);while(i<(fin.length)){fin[i]=(a[i]*b[i++]);}return fin;}
invemul(ar){return ar.a.map(k=>1/k);}
gen(ar){return Array(ar.a).fill(ar.b);}
gen2(ar){var i=0,fin=Array(ar.a);while(i<(ar.a)){fin[i++]=(Math.random()*(ar.b-ar.c)+ar.c);}return fin;}
pu(ar){return ar.a.push(ar.b);}sh(ar){return ar.a.shift();}po(ar){return ar.a.pop();}
Kr({a,b}){var i=0,j=0,t=0,out=Array(a.length*b.length);while(i<a.length){j=0;while(j<b.length){out[t++]=a[i]*b[j++];}i++}return out;}
tagtp1m(ar,util){if(!util.target.tag1){util.target.tag1=[];}if(util.target.tag1.includes(ar.t)||ar.t===''){return;}else{util.target.tag1.push(ar.t)};}
tagtp1mc(ar,util){if(!util.target.tag1){util.target.tag1=[];}if(ar.t===''){return;}else{util.target.tag1.push(ar.t)};}
tagtp1(ar,util){return util.target.tag1;}
tagtp1c(ar,util){return (util.target.tag1.includes(ar.t) ? true:false);}
tagtp1ig(ar,util){util.target.tag1=ar.t}
sl(ar){return ar.a.splice(ar.b,ar.c);}
fill(ar){return ar.a.fill(ar.b)}
fl(ar){return ar.a.flat(ar.b);}
s1(ar,util){return util.target.id;}
s2(ar,util){return util.target.drawableID;}
s3(ar,util){var q=vm.runtime.targets.findIndex(dat=>{return dat.id==ar.a;});return vm.runtime.targets[q].tag1;}
s4(ar,util){return vm.renderer.isTouchingDrawables(util.target.drawableID,vm.runtime.targets.filter(dat=>{return (dat.tag1 && dat.tag1.includes(ar.a));}).map(dat=>dat.drawableID));}
s5(ar,util){var A=vm.renderer._candidatesTouching(util.target.drawableID,vm.renderer._drawList).map(dat=>dat.id);var k=[];var q=0;var i=0;while(A.length>i){if(vm.renderer.isTouchingDrawables(util.target.drawableID,[A[i]])){q=vm.runtime.targets.findIndex(dat=>dat.drawableID==A[i]);if(vm.runtime.targets[q].tag1){k=k.concat(vm.runtime.targets[q].tag1);};}else{}i++;}return k;}
s9(ar,util){return vm.renderer.isTouchingDrawables(util.target.drawableID,ar.targets.filter(dat=>{return (dat.tag1 && dat.tag1.includes(ar.a));}).map(dat=>dat.drawableID));}
Gv1(ar,util){Gvec.push(ar.t);}Gv4(ar,util){Gvec=Gvec.concat(ar.t);}Gv3(ar,util){Gvec=ar.t;if(Gvec==''){Gvec=[];}}Gv2(){return Gvec;}
in(ar){return ar.c.indexOf(ar.a,ar.b);}co(ar){return ar.a.concat(ar.b);}Gv5(){return vm.runtime.targets;}
Gv6(ar){vm.runtime.extensionStorage['vectorr'].push(ar.t)}Gv8(ar){return vm.runtime.extensionStorage['vectorr']}Gv9(ar){if(Array.isArray(ar.t)){vm.runtime.extensionStorage['vectorr']=ar.t}}
s6(ar,util){return [util.target.x,util.target.y];}
s7(ar,util){util.target.setXY(ar.a[0]*1,ar.a[1]*1);}
s8(ar,util){util.target.setXY(util.target.x*1+ar.a[0]*1,util.target.y*1+ar.a[1]*1);}
cu(ar){return [ar.a];}cu2(ar){return [ar.a,ar.b];}cu3(ar){return [ar.a,ar.b,ar.c];}cu4(ar){return [ar.a,ar.b,ar.c,ar.d];}cu5(ar){return [ar.a,ar.b,ar.c,ar.d,ar.e,ar.f,ar.g,ar.h];}
cu6(ar){return Object.values(ar)}cu7(ar){return Object.values(ar)}cu8(ar){return Object.values(ar)}
cu_i(){return iv}cu_j(){return jv}cu_k(){return kv}
uin1(ar){return new Uint8Array(ar.a);}uin2(ar){return new Uint16Array(ar.a);}uin10(ar){return new Uint8ClampedArray(ar.a);}
uin3(ar){return new Uint32Array(ar.a);}uin4(ar){return new Int8Array(ar.a);}
uin5(ar){return new Int16Array(ar.a);}uin6(ar){return new Int32Array(ar.a);}
uin7(ar){return new Float16Array(ar.a);}uin8(ar){return new Float32Array(ar.a);}uin9(ar){return new Float64Array(ar.a);}
dsit(ar){var i=0,out=Array(ar.a.length);while(i<ar.a.length){out[i]=ar.b[i]-ar.a[i++];}return Math.hypot(...out);}
lerp(ar){var i=0,out=Array(ar.a.length);while(i<ar.a.length){out[i]=ar.a[i]*1+(ar.b[i]-ar.a[i++])*ar.c;}return out;}
negvec(ar){return ar.a.map(k=>k*-1);}
incl(ar){return ar.a.includes(ar.b)}
smdr(ar){var i=0,out=0;while(i<ar.a.length){out+=ar.a[i++];}return out;}
med1(ar){var i=0,out=0;while(i<ar.a.length){out+=ar.a[i++];}return out/ar.a.length;}
med2(ar){var i=1,out=ar.a[0];while(i<ar.a.length){out*=ar.a[i++];}return out**(1/ar.a.length);}
med3(ar){var i=0,out=0;while(i<ar.a.length){out+=1/ar.a[i++];}return ar.a.length/out;}
med4(ar){const ve=ar.a.map(k=>k**2);var i=0,out=0;while(i<ve.length){out+=ve[i++];}return (out/ve.length)**0.5;}
s10({a,b}){var i=0;while(i<b.length){b[i++].setXY(a[0]*1,a[1]*1)}}
s11({a,b}){var i=0;while(i<b.length){b[i].setXY(b[i].x*1+a[0]*1,b[i++].y*1+a[1]*1)}}
s12(ar,util){return util.target}
prto(ar){var i=0,out=1;while(i<ar.a.length){out*=ar.a[i++];}return out;}
muVE(ar){var i=0,fin=Array(ar.a.length);while(i<fin.length){fin[i]=ar.a[i++]*ar.b}return fin;}
cruz(ar){return [(ar.a[1]*ar.b[2])-(ar.a[2]*ar.b[1]),(ar.a[2]*ar.b[0])-(ar.a[0]*ar.b[2]),(ar.a[0]*ar.b[1])-(ar.a[1]*ar.b[0])]}
Refj({a,b}){var i=0,fin=0,j=0;while(i<(a.length)){fin+=((a[i])*(b[i++]));}j=2*(fin/Math.hypot(...b)**2),i=0,fin=Array(a.length);while(i<(a.length)){fin[i]=a[i]-b[i++]*j;}return fin;}
proyvec({a,b}){var i=0,fin=0;while(i<(a.length)){fin+=((a[i])*(b[i++]));}fin/=Math.hypot(...b)**2;return a.map(k=>k*fin);}
proyesc({a,b}){var i=0,fin=0;while(i<(a.length)){fin+=((a[i])*(b[i++]));}return fin/=Math.hypot(...b)**2;}
rev(ar){return ar.a.reverse()}torev(ar){return ar.a.toReversed()}
join(ar){return ar.a.join(ar.b)}
sort(ar){return ar.a.sort()}tosort(ar){return ar.a.toSorted()}
lain(ar){return ar.c.lastIndexOf(ar.a,ar.b)}
esarr(ar){return Array.isArray(ar.a)}
arrf(ar){return Array.from(ar.a)}
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

}Scratch.extensions.register(new vectorr());})(Scratch);