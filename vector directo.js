(function(Scratch) {'use strict';
const txt=Scratch.ArgumentType.STRING,rep=Scratch.BlockType.REPORTER,num=Scratch.ArgumentType.NUMBER,vgbb=Scratch.BlockType.BUTTON,evaluador=Scratch.BlockType.BOOLEAN,com=Scratch.BlockType.COMMAND;
const vm=Scratch.vm,runtime=vm.runtime;let Gvec=[],ops=1,vecs=1,prop=1,glo=1,cc=1,cuat=1,oct=1;
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
{blockType:"label",text:"Operadores matematicos",hideFromPalette:ops},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'m',blockType:rep,text:'[a]+[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:num,defaultValue:''}}},
{opcode:'r',blockType:rep,text:'[a]-[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:num,defaultValue:''}}},
{opcode:'prod',blockType:rep,text:'[a]•[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'Hadamard',blockType:rep,text:'[a]⊙[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'invemul',blockType:rep,text:'[a]^-1',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'negvec',blockType:rep,text:'-[a]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'Kr',blockType:rep,text:'[a]⊗[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'dsit',blockType:rep,text:'[a]dist[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'lerp',blockType:rep,text:'IterpoLineal[a][b]alpha[c]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''},c:{type:num,defaultValue:'0.5'}}},
{opcode:'smdr',blockType:rep,text:'Σ[a]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'med1',blockType:rep,text:'media aritmetica[a]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'med2',blockType:rep,text:'media geometrica[a]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'med3',blockType:rep,text:'media armonica[a]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'med4',blockType:rep,text:'media cuadratica[a]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'nor',blockType:rep,text:'||[a]||',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'unit',blockType:rep,text:'versor[a]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'angu',blockType:rep,text:'Θ°[a]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{blockType:"label",text:"vectores",hideFromPalette:vecs},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'pt',blockType:rep,text:'[a]p[b]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'2'}}},
{opcode:'arr',blockType:rep,text:'arr[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:'1,5,8'}}},
{opcode:'le',blockType:rep,text:'length[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'rpt',blockType:rep,text:'[a]p[b]=[c]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'0'},c:{type:txt,defaultValue:'10'}}},
{opcode:'rpt2',blockType:com,text:'[a]p[b]=[c]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'0'},c:{type:txt,defaultValue:'10'}}},
{opcode:'rpt3',blockType:com,text:'[a]p[b][tip][c]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'0'},c:{type:txt,defaultValue:'10'},tip:{type:txt,menu:'Asig'}}},
{opcode:'gen',blockType:rep,text:'arr leng[a] B[b]',hideFromPalette:vecs,arguments:{a:{type:num,defaultValue:'12'},b:{type:num,defaultValue:'3'}}},
{opcode:'gen2',blockType:rep,text:'arr leng[a] rand B[b]C[c]',hideFromPalette:vecs,arguments:{a:{type:num,defaultValue:'12'},b:{type:num,defaultValue:'70'},c:{type:num,defaultValue:'10'}}},
{opcode:'pu',blockType:rep,text:'push[a] p[b]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'9'}}},
{opcode:'sh',blockType:rep,text:'shift[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'po',blockType:rep,text:'pop[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'fl',blockType:rep,text:'[a]flat[b]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'5'}}},
{opcode:'sl',blockType:rep,text:'[a]splice[b][c]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:num,defaultValue:'1'},c:{type:num,defaultValue:'1'}}},
{opcode:'in',blockType:rep,text:'[c]index of[a][b]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:'K'},b:{type:num,defaultValue:'0'},c:{type:txt,defaultValue:''}}},
{opcode:'ma',blockType:rep,text:'[a].map[ou][b]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},ou:{type:txt,menu:'outs'},b:{type:num,defaultValue:'3'}}},
{opcode:'Fil',blockType:rep,text:'[a].filter[ou][b]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},ou:{type:txt,menu:'Filt'},b:{type:txt,defaultValue:'3'}}},
{opcode:'co',blockType:rep,text:'[a]concat[b]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'uin1',blockType:rep,text:'new Uint8Array[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'uin2',blockType:rep,text:'new Uint16Array[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'uin3',blockType:rep,text:'new Uint32Array[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'uin4',blockType:rep,text:'new int8Array[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'uin5',blockType:rep,text:'new int16Array[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'uin6',blockType:rep,text:'new int32Array[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'uin7',blockType:rep,text:'new Float16Array[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'uin8',blockType:rep,text:'new Float32Array[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'uin9',blockType:rep,text:'new Float64Array[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{blockType:"label",text:"vectores-tuplas",hideFromPalette:vecs},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'cu',blockType:rep,text:' [a] ',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:'5'}}},
{opcode:'cu2',blockType:rep,text:'[a],[b]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:'5'},b:{type:txt,defaultValue:'2'}}},
{opcode:'cu3',blockType:rep,text:'[a],[b],[c]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:'5'},b:{type:txt,defaultValue:'2'},c:{type:txt,defaultValue:'-1'}}},
{opcode:'cu4',blockType:rep,text:'[a],[b],[c],[d]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:'5'},b:{type:txt,defaultValue:'2'},c:{type:txt,defaultValue:'-1'},d:{type:txt,defaultValue:'-4'}}},
{opcode:'cu5',blockType:rep,text:'[a],[b],[c],[d],[e],[f],[g],[h]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:'5'},b:{type:txt,defaultValue:'2'},c:{type:txt,defaultValue:'-1'},d:{type:txt,defaultValue:'-4'},e:{type:txt,defaultValue:'-9'},f:{type:txt,defaultValue:'7'},g:{type:txt,defaultValue:'0'},h:{type:txt,defaultValue:'8'}}},
{blockType:"label",text:"Obj.vec o propiedad",hideFromPalette:prop},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'tagtp1m',blockType:com,text:'añadir[t]tp1 NR',hideFromPalette:prop,arguments:{t:{type:txt,defaultValue:'K'}}},
{opcode:'tagtp1mc',blockType:com,text:'añadir[t]tp1',hideFromPalette:prop,arguments:{t:{type:txt,defaultValue:'K'}}},
{opcode:'tagtp1',blockType:rep,text:'tp1',hideFromPalette:prop,disableMonitor:1},
{opcode:'tagtp1ig',blockType:com,text:'tp1=[t]',hideFromPalette:prop,arguments:{t:{type:txt,defaultValue:''}}},
{opcode:'tagtp1c',blockType:evaluador,text:'contiene?[t]tp1',hideFromPalette:prop,arguments:{t:{type:txt,defaultValue:''}}},
{opcode:'s1',blockType:rep,text:'ID',hideFromPalette:prop,disableMonitor:1},
{opcode:'s2',blockType:rep,text:'DRAWID',hideFromPalette:prop,disableMonitor:1},
{opcode:'s3',blockType:rep,text:'Obj.filter(ID)[a].tp1',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'s4',blockType:evaluador,text:'tocando Obj.tp1.includes[a]?',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:'K'}}},
{opcode:'s9',blockType:evaluador,text:'tocando Obj.tp1.includes[a]?de lista[targets]',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:'K'},targets:{type:txt,defaultValue:''}}},
{opcode:'s5',blockType:rep,text:'tp1 de toda cosa tocada',hideFromPalette:prop,disableMonitor:1},
{opcode:'s6',blockType:rep,text:'coordenadas',hideFromPalette:prop,disableMonitor:1},
{opcode:'s7',blockType:com,text:'Ir a XY[a]',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'s8',blockType:com,text:'mover XY[a]',hideFromPalette:prop,arguments:{a:{type:txt,defaultValue:''}}},
{blockType:"label",text:"Global",hideFromPalette:glo},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'Gv1',blockType:com,text:'push[t]Gv',hideFromPalette:glo,arguments:{t:{type:txt,defaultValue:'L'}}},
{opcode:'Gv4',blockType:com,text:'concat[t]Gv',hideFromPalette:glo,arguments:{t:{type:txt,defaultValue:'L'}}},
{opcode:'Gv2',blockType:rep,text:'Gv',hideFromPalette:glo,disableMonitor:1},
{opcode:'Gv3',blockType:com,text:'Gv=[t]',hideFromPalette:glo,arguments:{t:{type:txt,defaultValue:'L'}}},
{opcode:'Gv5',blockType:rep,text:'runtime Targets',hideFromPalette:glo,disableMonitor:1},
{blockType:"label",text:"Vector global persistente",hideFromPalette:glo},//------------------------------------------------------------
{opcode:'Gv6',blockType:com,text:'push[t]VGP',hideFromPalette:glo,arguments:{t:{type:txt,defaultValue:'L'}}},
{opcode:'Gv8',blockType:rep,text:'VGP',hideFromPalette:glo,disableMonitor:1},
{opcode:'Gv9',blockType:com,text:'VGP=[t]',hideFromPalette:glo,arguments:{t:{type:txt,defaultValue:'L'}}},
{blockType:"label",text:"Complejos",hideFromPalette:cc},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'cc1',blockType:rep,text:'ℂ[a]+[b]',hideFromPalette:cc,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'cc2',blockType:rep,text:'ℂ[a]-[b]',hideFromPalette:cc,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'cc3',blockType:rep,text:'ℂ[a]*[b]',hideFromPalette:cc,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'cc4',blockType:rep,text:'ℂ[a]/[b]',hideFromPalette:cc,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'cc6',blockType:rep,text:'ℂ conj[a]',hideFromPalette:cc,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'cc7',blockType:rep,text:'ℂ LN[a]',hideFromPalette:cc,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'cc8',blockType:rep,text:'ℂ e^[a]',hideFromPalette:cc,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'cc9',blockType:rep,text:'ℂ arg[a]',hideFromPalette:cc,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'cc10',blockType:evaluador,text:'¿[a]es ℂ?',hideFromPalette:cc,arguments:{a:{type:txt,defaultValue:''}}},
{blockType:"label",text:"Cuaterniones",hideFromPalette:cuat},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'cua1',blockType:rep,text:'ℍ[a]+[b]',hideFromPalette:cuat,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'cua2',blockType:rep,text:'ℍ[a]-[b]',hideFromPalette:cuat,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'cua3',blockType:rep,text:'ℍ[a]*[b]',hideFromPalette:cuat,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'cua4',blockType:rep,text:'ℍ[a]/[b]',hideFromPalette:cuat,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'cua6',blockType:rep,text:'ℍ conj[a]',hideFromPalette:cuat,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'cua7',blockType:rep,text:'ℍ LN[a]',hideFromPalette:cuat,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'cua8',blockType:rep,text:'ℍ e^[a]',hideFromPalette:cuat,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'cua9',blockType:evaluador,text:'¿[a]es ℍ?',hideFromPalette:cuat,arguments:{a:{type:txt,defaultValue:''}}},
{blockType:"label",text:"Octoniones",hideFromPalette:oct},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'octa1',blockType:rep,text:'𝕆[a]+[b]',hideFromPalette:oct,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'octa2',blockType:rep,text:'𝕆[a]-[b]',hideFromPalette:oct,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'octa3',blockType:rep,text:'𝕆[a]*[b]',hideFromPalette:oct,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'octa4',blockType:rep,text:'𝕆[a]/[b]',hideFromPalette:oct,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'octa6',blockType:rep,text:'𝕆 conj[a]',hideFromPalette:oct,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'octa8',blockType:rep,text:'𝕆 e^[a]',hideFromPalette:oct,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'octa7',blockType:evaluador,text:'¿[a]es 𝕆?',hideFromPalette:oct,arguments:{a:{type:txt,defaultValue:''}}},
],menus:{
outs:{acceptReporters:0,items:['+','-','*','/','^','LogB','sen','cos','tan','sign','abs','rampa','lim+','lim-','int','arcsen','arccos','arctan','e^','Ln','Log10']},
Filt:{acceptReporters:0,items:['==','===','<','>','>=','<=','!=','includes','!includes','Reflect.has','!Reflect.has','typeof','!inNaN']},
Asig:{acceptReporters:0,items:['=','+=','-=','/=','*=','**=','<<=','??=','%=','>>=','>>>=']}}
};}
octa1(ar){return [ar.a[0]*1+1*ar.b[0],ar.a[1]*1+ar.b[1]*1,ar.a[2]*1+ar.b[2]*1,ar.a[3]*1+ar.b[3]*1,ar.a[4]*1+ar.b[4]*1,ar.a[5]*1+ar.b[5]*1,ar.a[6]*1+ar.b[6]*1,ar.a[7]*1+ar.b[7]*1]}
octa2(ar){return [ar.a[0]-ar.b[0],ar.a[1]-ar.b[1],ar.a[2]-ar.b[2],ar.a[3]-ar.b[3],ar.a[4]-ar.b[4],ar.a[5]-ar.b[5],ar.a[6]-ar.b[6],ar.a[7]-ar.b[7]]}
octa3(ar){const v1=ar.a,v2=ar.b;return [(v1[0]*v2[0])-(v1[1]*v2[1])-(v1[2]*v2[2])-(v1[3]*v2[3])-(v1[4]*v2[4])-(v1[5]*v2[5])-(v1[6]*v2[6])-(v1[7]*v2[7]),(v1[0]*v2[1])+(v1[1]*v2[0])-(v1[2]*v2[3])+(v1[3]*v2[2])-(v1[4]*v2[5])+(v1[5]*v2[4])+(v1[6]*v2[7])-(v1[7]*v2[6]),(v1[0]*v2[2])+(v1[1]*v2[3])+(v1[2]*v2[0])-(v1[3]*v2[1])-(v1[4]*v2[6])-(v1[5]*v2[7])+(v1[6]*v2[4])+(v1[7]*v2[5]),(v1[0]*v2[3])-(v1[1]*v2[2])+(v1[2]*v2[1])+(v1[3]*v2[0])-(v1[4]*v2[7])+(v1[5]*v2[6])-(v1[6]*v2[5])+(v1[7]*v2[4]),(v1[0]*v2[4])+(v1[1]*v2[5])+(v1[2]*v2[6])+(v1[3]*v2[7])+(v1[4]*v2[0])-(v1[5]*v2[1])-(v1[6]*v2[2])-(v1[7]*v2[3]),(v1[0]*v2[5])-(v1[1]*v2[4])+(v1[2]*v2[7])-(v1[3]*v2[6])+(v1[4]*v2[1])+(v1[5]*v2[0])+(v1[6]*v2[3])-(v1[7]*v2[2]),(v1[0]*v2[6])-(v1[1]*v2[7])-(v1[2]*v2[4])+(v1[3]*v2[5])+(v1[4]*v2[2])-(v1[5]*v2[3])+(v1[6]*v2[0])+(v1[7]*v2[1]),(v1[0]*v2[7])+(v1[1]*v2[6])-(v1[2]*v2[5])-(v1[3]*v2[4])+(v1[4]*v2[3])+(v1[5]*v2[2])-(v1[6]*v2[1])+(v1[7]*v2[0])]}
octa4(ar){const v1=ar.a,v2=ar.b,v3=(v2[0]**2)+(v2[1]**2)+(v2[2]**2)+(v2[3]**2)+(v2[4]**2)+(v2[5]**2)+(v2[6]**2)+(v2[7]**2);return [((v1[0]*v2[0])-(v1[1]*-v2[1])-(v1[2]*-v2[2])-(v1[3]*-v2[3])-(v1[4]*-v2[4])-(v1[5]*-v2[5])-(v1[6]*-v2[6])-(v1[7]*-v2[7]))/v3,((v1[0]*-v2[1])+(v1[1]*v2[0])-(v1[2]*-v2[3])+(v1[3]*-v2[2])-(v1[4]*-v2[5])+(v1[5]*-v2[4])+(v1[6]*-v2[7])-(v1[7]*-v2[6]))/v3,((v1[0]*-v2[2])+(v1[1]*-v2[3])+(v1[2]*v2[0])-(v1[3]*-v2[1])-(v1[4]*-v2[6])-(v1[5]*-v2[7])+(v1[6]*-v2[4])+(v1[7]*-v2[5]))/v3,((v1[0]*-v2[3])-(v1[1]*-v2[2])+(v1[2]*-v2[1])+(v1[3]*v2[0])-(v1[4]*-v2[7])+(v1[5]*-v2[6])-(v1[6]*-v2[5])+(v1[7]*-v2[4]))/v3,((v1[0]*-v2[4])+(v1[1]*-v2[5])+(v1[2]*-v2[6])+(v1[3]*-v2[7])+(v1[4]*v2[0])-(v1[5]*-v2[1])-(v1[6]*-v2[2])-(v1[7]*-v2[3]))/v3,((v1[0]*-v2[5])-(v1[1]*-v2[4])+(v1[2]*-v2[7])-(v1[3]*-v2[6])+(v1[4]*-v2[1])+(v1[5]*v2[0])+(v1[6]*-v2[3])-(v1[7]*-v2[2]))/v3,((v1[0]*-v2[6])-(v1[1]*-v2[7])-(v1[2]*-v2[4])+(v1[3]*-v2[5])+(v1[4]*-v2[2])-(v1[5]*-v2[3])+(v1[6]*v2[0])+(v1[7]*-v2[1]))/v3,((v1[0]*-v2[7])+(v1[1]*-v2[6])-(v1[2]*-v2[5])-(v1[3]*-v2[4])+(v1[4]*-v2[3])+(v1[5]*-v2[2])-(v1[6]*-v2[1])+(v1[7]*v2[0]))/v3]}
octa6(ar){return [ar.a[0],-ar.a[1],-ar.a[2],-ar.a[3],-ar.a[4],-ar.a[5],-ar.a[6],-ar.a[7]]}
octa7(ar){return (ar.a.length==8&&!isNaN(Number(ar.a[0]))&&!isNaN(Number(ar.a[1]))&&!isNaN(Number(ar.a[2]))&&!isNaN(Number(ar.a[3]))&&!isNaN(Number(ar.a[4]))&&!isNaN(Number(ar.a[5]))&&!isNaN(Number(ar.a[6]))&&!isNaN(Number(ar.a[7])))}
octa8(ar){const v=ar.a,mo=Math.hypot(v[1],v[2],v[3],v[4],v[5],v[6],v[7]),s=Math.sin(mo)*Math.exp(v[0]);return [Math.cos(mo)*Math.exp(v[0]),s*v[1]/mo,s*v[2]/mo,s*v[3]/mo,s*v[4]/mo,s*v[5]/mo,s*v[6]/mo,s*v[7]/mo]}
cua1(ar){return [ar.a[0]*1+1*ar.b[0],ar.a[1]*1+ar.b[1]*1,ar.a[2]*1+ar.b[2]*1,ar.a[3]*1+ar.b[3]*1]}
cua2(ar){return [ar.a[0]-ar.b[0],ar.a[1]-ar.b[1],ar.a[2]-ar.b[2],ar.a[3]-ar.b[3]]}
cua3(ar){const v1=ar.a,v2=ar.b;return [((v1[0]*v2[0])-(v1[1]*v2[1])-(v1[2]*v2[2])-(v1[3]*v2[3])),((v1[0]*v2[1])+(v1[1]*v2[0])+(v1[2]*v2[3])-(v1[3]*v2[2])),((v1[0]*v2[2])-(v1[1]*v2[3])+(v1[2]*v2[0])+(v1[3]*v2[1])),((v1[0]*v2[3])+(v1[1]*v2[2])-(v1[2]*v2[1])+(v1[3]*v2[0]))];}
cua4(ar){const v1=ar.a,v2=ar.b,mo=(v2[0]**2)+(v2[1]**2)+(v2[2]**2)+(v2[3]**2);return [((v1[0]*v2[0])-(v1[1]*-v2[1])-(v1[2]*-v2[2])-(v1[3]*-v2[3]))/mo,((v1[0]*-v2[1])+(v1[1]*v2[0])+(v1[2]*-v2[3])-(v1[3]*-v2[2]))/mo,((v1[0]*-v2[2])-(v1[1]*-v2[3])+(v1[2]*v2[0])+(v1[3]*-v2[1]))/mo,((v1[0]*-v2[3])+(v1[1]*-v2[2])-(v1[2]*-v2[1])+(v1[3]*v2[0]))/mo];}
cua6(ar){return [ar.a[0],-ar.a[1],-ar.a[2],-ar.a[3]]}
cua7(ar){const V=ar.a,MO=Math.sqrt((V[1]**2)+(V[2]**2)+(V[3]**2)),cq=Math.acos(V[0]/Math.hypot(...V));return [Math.log(Math.hypot(...V)),(V[1]/MO*cq),(V[2]/MO*cq),(V[3]/MO*cq)]}
cua8(ar){const V=ar.a,r=Math.sqrt((V[1]**2)+(V[2]**2)+(V[3]**2)),senrad=Math.sin(r)/r*Math.exp(V[0]);return [(Math.exp(V[0])*Math.cos(r)),senrad*V[1],senrad*V[2],senrad*V[3]]}
cua9(ar){return (ar.a.length==4&&!isNaN(Number(ar.a[0]))&&!isNaN(Number(ar.a[1]))&&!isNaN(Number(ar.a[2]))&&!isNaN(Number(ar.a[3])))}
cc1(ar){return [ar.a[0]*1+1*ar.b[0],ar.a[1]*1+ar.b[1]*1]}
cc2(ar){return [ar.a[0]-ar.b[0],ar.a[1]-ar.b[1]]}
cc3(ar){return [(ar.a[0]*ar.b[0])-ar.a[1]*ar.b[1],ar.a[0]*ar.b[1]+ar.b[0]*ar.a[1]]}
cc4(ar){const G=(ar.b[0]**2)+(ar.b[1]**2);return [((ar.a[0]*ar.b[0])+ar.a[1]*ar.b[1])/G,(ar.b[0]*ar.a[1]-ar.a[0]*ar.b[1])/G]}
cc6(ar){return [ar.a[0],-ar.a[1]]}
cc7(ar){return [Math.log(Math.hypot(...ar.a)),Math.atan2(ar.a[1],ar.a[0])]}
cc8(ar){const pa=Math.exp(ar.a[0]);return [(Math.cos(ar.a[1])*pa),(Math.sin(ar.a[1])*pa)]}
cc9(ar){return Math.atan2(ar.a[1],ar.a[0]);}
cc10(ar){return (ar.a.length==2&&!isNaN(Number(ar.a[0]))&&!isNaN(Number(ar.a[1])))}
ma(ar){switch(ar.ou){
case'+':return ar.a.map(k=>k*1+ar.b*1);break;case'-':return ar.a.map(k=>k-ar.b);break;case'*':return ar.a.map(k=>k*ar.b);break;case'/':return ar.a.map(k=>k/ar.b);break;
case'^':return ar.a.map(k=>k**ar.b);break;case'LogB':return ar.a.map(k=>Math.log(k)/Math.log(ar.b));break;case'sen':return ar.a.map(k=>Math.sin(k));break;case'cos':return ar.a.map(k=>Math.cos(k));break;
case'tan':return ar.a.map(k=>Math.tan(k));break;case'sign':return ar.a.map(k=>Math.sign(k));break;case'abs':return ar.a.map(k=>Math.abs(k));break;case'rampa':return ar.a.map(k=>(k>0 ? k:0));break;
case'lim+':return ar.a.map(k=>(k>ar.b ? ar.b:k));break;case'lim-':return ar.a.map(k=>(k<ar.b ? ar.b:k));break;case'int':return ar.a.map(k=>Math.trunc(k));break;
case'arcsen':return ar.a.map(k=>Math.asin(k));break;case'arccos':return ar.a.map(k=>Math.acos(k));break;case'arctan':return ar.a.map(k=>Math.atan(k));break;case'e^':return ar.a.map(k=>Math.exp(k));break;
case'Ln':return ar.a.map(k=>Math.log(k));break;case'Log10':return ar.a.map(k=>Math.log10(k));break;
}}
Fil(ar){switch(ar.ou){
case'==':return ar.a.filter(dat=>(dat==ar.b ? 1:0));break;case'===':return ar.a.filter(dat=>(dat===ar.b ? 1:0));break;
case'<':return ar.a.filter(dat=>(dat<ar.b ? 1:0));break;case'>':return ar.a.filter(dat=>(dat>ar.b ? 1:0));break;
case'>=':return ar.a.filter(dat=>(dat>=ar.b ? 1:0));break;case'<=':return ar.a.filter(dat=>(dat<=ar.b ? 1:0));break;
case'!=':return ar.a.filter(dat=>(dat!=ar.b ? 1:0));break;case'includes':return ar.a.filter(dat=>dat.toString().includes(ar.b));break;
case'!includes':return ar.a.filter(dat=>!(dat.toString().includes(ar.b)));break;case'Reflect.has':return ar.a.filter(dat=>Reflect.has(dat,ar.b));break;
case'!Reflect.has':return ar.a.filter(dat=>!(Reflect.has(dat,ar.b)));break;case'typeof':return ar.a.filter(dat=>typeof(dat)==ar.b);break;case'!isNaN':return ar.a.map(k=>!isNaN(k));break;
}}
herr0(){Scratch.openWindow('https://linktr.ee/Penta_quark_neutro');}
herr1(){ops=0;ref();}herr2(){ops=1;ref();}herr3(){vecs=0;ref();}herr4(){vecs=1;ref();}herr5(){prop=0;ref();}herr6(){prop=1;ref();}herr7(){glo=0;ref();}herr8(){glo=1;ref();}
herr9(){cc=0;ref();}herr10(){cc=1;ref();}herr11(){cuat=0;ref();}herr12(){cuat=1;ref();}herr13(){oct=0;ref();}herr14(){oct=1;ref();}
arr(ar){return Array.from(ar.a.split(','));}
le(ar){return ar.a.length;}
nor(ar){return Math.hypot(...ar.a)}
unit(ar){const E0=Math.hypot(...ar.a);return ar.a.map(g=>g/E0)}
pt(ar){return ar.a[ar.b];}
prod(ar){var i=0,fin=0;while(i<(ar.a.length)){fin+=((ar.a[i])*(ar.b[i++]));}return fin*1;}
rpt(ar){var vec1=ar.a;vec1[ar.b]=ar.c;return vec1;}
rpt2(ar){ar.a[ar.b]=ar.c;}
rpt3(ar){switch(ar.tip){case'=':ar.a[ar.b]=ar.c;break;case'+=':ar.a[ar.b]+=ar.c;break;case'-=':ar.a[ar.b]-=ar.c;break;case'/=':ar.a[ar.b]/=ar.c;break;
case'*=':ar.a[ar.b]*=ar.c;break;case'**=':ar.a[ar.b]**=ar.c;break;case'<<=':ar.a[ar.b]<<=ar.c;break;case'>>=':ar.a[ar.b]>>=ar.c;break;
case'>>>=':ar.a[ar.b]>>>=ar.c;break;case'??=':ar.a[ar.b]??=ar.c;break;case'%=':ar.a[ar.b]%=ar.c;break;
}}
angu(ar){return Math.acos(ar.a[0]/Math.hypot(...ar.a))}
m(ar){var vec1=ar.a,i=0,fin=[];while(i<(vec1.length)){fin.push(vec1[i]*1+ar.b[i++]*1);}return fin;}
r(ar){var vec1=ar.a,i=0,fin=[];while(i<(vec1.length)){fin.push(vec1[i]-ar.b[i++]);}return fin;}
Hadamard(ar){var i=0,fin=[];while(i<(ar.a.length)){fin.push(ar.a[i]*ar.b[i++]);}return fin;}
invemul(ar){return ar.a.map(k=>1/k);}
gen(ar){var a=new Array(ar.a*1);return a.fill(ar.b*1);}
gen2(ar){var i=0,fin=[];while(i<(ar.a)){fin.push(Math.random()*(ar.b-ar.c)+ar.c);i++;}return fin;}
pu(ar){var vec1=ar.a;vec1.push(ar.b);return vec1;}
sh(ar){var vec1=ar.a;vec1.shift();return vec1;}
po(ar){var vec1=ar.a;vec1.pop();return vec1;}
Kr(ar){function esve(es,ve){var i=0,fin=[];while(i<(ve.length)){fin.push(ve[i++]*es);}return fin;}var vec2=ar.a,j=0,out=[];while(j<(vec2.length)){out=out.concat(esve(vec2[j++],ar.b));}return out;}
tagtp1m(ar,util){if(!util.target.tag1){util.target.tag1=[];}if(util.target.tag1.includes(ar.t)||ar.t===''){return;}else{util.target.tag1.push(ar.t)};}
tagtp1mc(ar,util){if(!util.target.tag1){util.target.tag1=[];}if(ar.t===''){return;}else{util.target.tag1.push(ar.t)};}
tagtp1(ar,util){return util.target.tag1;}
tagtp1c(ar,util){return (util.target.tag1.includes(ar.t) ? true:false);}
tagtp1ig(ar,util){util.target.tag1=ar.t}
sl(ar){return ar.a.splice(ar.b,ar.c);}
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
uin1(ar){return new Uint8Array(ar.a);}uin2(ar){return new Uint16Array(ar.a);}
uin3(ar){return new Uint32Array(ar.a);}uin4(ar){return new Int8Array(ar.a);}
uin5(ar){return new Int16Array(ar.a);}uin6(ar){return new Int32Array(ar.a);}
uin7(ar){return new Float16Array(ar.a);}uin8(ar){return new Float32Array(ar.a);}uin9(ar){return new Float64Array(ar.a);}
dsit(ar){var i=0,out=[];while(i<ar.a.length){out[i]=ar.b[i]-ar.a[i++];}return Math.hypot(...out);}
lerp(ar){var i=0,out=[],z=ar.c;while(i<ar.a.length){out[i]=ar.a[i]*1+(ar.b[i]-ar.a[i++])*z;}return out;}
negvec(ar){return ar.a.map(k=>k*-1);}
smdr(ar){var i=0,out=0;while(i<ar.a.length){out+=ar.a[i++];}return out;}
med1(ar){var i=0,out=0;while(i<ar.a.length){out+=ar.a[i++];}return out/ar.a.length;}
med2(ar){var i=1,out=ar.a[0];while(i<ar.a.length){out*=ar.a[i++];}return out**(1/ar.a.length);}
med3(ar){var i=0,out=0;while(i<ar.a.length){out+=1/ar.a[i++];}return ar.a.length/out;}
med4(ar){const ve=ar.a.map(k=>k**2);var i=0,out=0;while(i<ve.length){out+=ve[i++];}return (out/ve.length)**0.5;}
}Scratch.extensions.register(new vectorr());})(Scratch);