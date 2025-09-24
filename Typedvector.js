(function(Scratch) {'use strict';
const txt=Scratch.ArgumentType.STRING,rep=Scratch.BlockType.REPORTER,num=Scratch.ArgumentType.NUMBER,vgbb=Scratch.BlockType.BUTTON,evaluador=Scratch.BlockType.BOOLEAN,com=Scratch.BlockType.COMMAND;
const vm=Scratch.vm,runtime=vm.runtime;let ops=1,vecs=1;
function ref(){Scratch.vm.extensionManager.refreshBlocks();}
if(!Scratch.extensions.unsandboxed){throw new Error('unsandboxed');}
class Typedvectorr{getInfo(){return{id:'Typedvectorr',name:'Typedvectorr',color1:'#94b3d2',color2:'#00ffff',color3:'#ff0000',blocks:[
{func:'herr0',blockType:vgbb,text:'Redes pentaquark',},
{func:'herr1',blockType:vgbb,hideFromPalette:!ops,text:'Mostrar operadores matematicos',},{func:'herr2',blockType:vgbb,hideFromPalette:ops,text:'Ocultar operadores matematicos',},
{func:'herr3',blockType:vgbb,hideFromPalette:!vecs,text:'Mostrar vectores',},{func:'herr4',blockType:vgbb,hideFromPalette:vecs,text:'Ocultar vectores',},
{blockType:"label",text:"Operadores matematicos",hideFromPalette:ops},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'m',blockType:rep,text:'[a]+[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:num,defaultValue:''}}},
{opcode:'r',blockType:rep,text:'[a]-[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:num,defaultValue:''}}},
{opcode:'muVE',blockType:rep,text:'[a]*[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:num,defaultValue:'5'}}},
{opcode:'prod',blockType:rep,text:'[a]•[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'cruz',blockType:rep,text:'3D[a]X[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:num,defaultValue:''}}},
{opcode:'Hadamard',blockType:rep,text:'[a]⊙[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'invemul',blockType:rep,text:'[a]^-1',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'negvec',blockType:rep,text:'-[a]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
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
{blockType:"label",text:"vectores",hideFromPalette:vecs},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'pt',blockType:rep,text:'[a]〚[b]〛',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'2'}}},
{opcode:'le',blockType:rep,text:'length[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'rpt',blockType:rep,text:'[a]p[b]=[c]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'0'},c:{type:txt,defaultValue:'10'}}},
{opcode:'rpt2',blockType:com,text:'[a]p[b]=[c]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'0'},c:{type:txt,defaultValue:'10'}}},
{opcode:'rpt3',blockType:com,text:'[a]p[b][tip][c]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'0'},c:{type:txt,defaultValue:'10'},tip:{type:txt,menu:'Asig'}}},
{opcode:'ma',blockType:rep,text:'[a].map[ou][b]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},ou:{type:txt,menu:'outs'},b:{type:num,defaultValue:'3'}}},
{opcode:'Fil',blockType:rep,text:'[a].filter[ou][b]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},ou:{type:txt,menu:'Filt'},b:{type:txt,defaultValue:'3'}}},
{opcode:'uin0',blockType:rep,text:'Array from[a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:'1,4,7,4'}}},
{opcode:'uin1',blockType:rep,text:'new [u][a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},u:{type:txt,menu:'uins'}}},
{opcode:'buffer',blockType:rep,text:'new ArrayBuffer[a][b]',hideFromPalette:vecs,arguments:{a:{type:num,defaultValue:'8'},b:{type:num,defaultValue:'0'}}},
{opcode:'subar',blockType:rep,text:'[c]subarray[a][b]',hideFromPalette:vecs,arguments:{a:{type:num,defaultValue:'0'},b:{type:num,defaultValue:'5'},c:{type:txt,defaultValue:''}}},
{opcode:'trans',blockType:rep,text:'[b].transfer[a]',hideFromPalette:vecs,arguments:{a:{type:num,defaultValue:'0'},b:{type:txt,defaultValue:'buffer'}}},
{opcode:'view',blockType:rep,text:'new DataView[a][b][c]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:'buffer'},b:{type:num,defaultValue:'0'},c:{type:num,defaultValue:'2'}}},
{opcode:'setv',blockType:rep,text:'[c].[u][a][b]',hideFromPalette:vecs,arguments:{u:{type:txt,menu:'setm'},a:{type:num,defaultValue:'0'},b:{type:num,defaultValue:'5'},c:{type:txt,defaultValue:'DataView'}}},
{opcode:'props',blockType:rep,text:'[a].[u]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},u:{type:txt,menu:'pr'}}},
],menus:{
outs:{acceptReporters:0,items:['+','-','*','/','^','LogB','sen','cos','tan','sign','abs','rampa','lim+','lim-','int','arcsen','arccos','arctan','e^','Ln','Log10']},
Filt:{acceptReporters:0,items:['==','===','<','>','>=','<=','!=']},
Asig:{acceptReporters:0,items:['=','+=','-=','/=','*=','**=','<<=','??=','%=','>>=','>>>=']},
uins:{acceptReporters:0,items:['Uint8Array','Uint16Array','Uint32Array','Int8Array','Int16Array','Int32Array','Float16Array','Float32Array','Float64Array','Uint8ClampedArray','BigInt64Array','BigUint64Array']},
setm:{acceptReporters:0,items:['getInt8','getUint8','getInt16','getUint16','getFloat16','getInt32','getUint32','getFloat32','getFloat64','getBigUint64','getBigInt64','setInt8','setUint8','setInt16','setUint16','setFloat16','setInt32','setUint32','setFloat32','setFloat64','setBigUint64','setBigInt64']},
pr:{acceptReporters:0,items:['buffer','byteLength','byteOffset']}
}};}
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
case'!=':return ar.a.filter(dat=>(dat!=ar.b ? 1:0));break;
}}
herr0(){Scratch.openWindow('https://linktr.ee/Penta_quark_neutro');}
herr1(){ops=0;ref();}herr2(){ops=1;ref();}herr3(){vecs=0;ref();}herr4(){vecs=1;ref();}
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
m(ar){var vec1=ar.a,i=0;while(i<(vec1.length)){vec1[i]+=ar.b[i++];}return vec1;}
r(ar){var vec1=ar.a,i=0;while(i<(vec1.length)){vec1[i]-=ar.b[i++];}return vec1;}
Hadamard(ar){var i=0;while(i<(ar.a.length)){ar.a[i]*=ar.b[i++];}return ar.a;}
invemul(ar){return ar.a.map(k=>1/k);}
uin0(ar){return Array.from(ar.a.split(','));}
uin1(ar){return new window[ar.u](ar.a);}
dsit(ar){var i=0,out=Array(ar.a.length);while(i<ar.a.length){out[i]=ar.b[i]-ar.a[i++];}return Math.hypot(...out);}
lerp(ar){var i=0,z=ar.c;while(i<ar.a.length){ar.a[i]+=(ar.b[i]-ar.a[i++])*z;}return ar.a;}
negvec(ar){return ar.a.map(k=>k*-1);}
smdr(ar){var i=0,out=0;while(i<ar.a.length){out+=ar.a[i++];}return out;}
med1(ar){var i=0,out=0;while(i<ar.a.length){out+=ar.a[i++];}return out/ar.a.length;}
med2(ar){var i=1,out=ar.a[0];while(i<ar.a.length){out*=ar.a[i++];}return out**(1/ar.a.length);}
med3(ar){var i=0,out=0;while(i<ar.a.length){out+=1/ar.a[i++];}return ar.a.length/out;}
med4(ar){const ve=ar.a.map(k=>k**2);var i=0,out=0;while(i<ve.length){out+=ve[i++];}return (out/ve.length)**0.5;}
prto(ar){var i=0,out=1;while(i<ar.a.length){out*=ar.a[i++];}return out;}
muVE(ar){var i=0;while(i<ar.a.length){ar.a[i++]*=ar.b}return ar.a;}
cruz(ar){ar.a[0]=(ar.a[1]*ar.b[2])-(ar.a[2]*ar.b[1]),ar.a[1]=(ar.a[2]*ar.b[0])-(ar.a[0]*ar.b[2]),ar.a[2]=(ar.a[0]*ar.b[1])-(ar.a[1]*ar.b[0]);return ar.a}
buffer(ar){return new ArrayBuffer(ar.a,ar.b)}
subar(ar){return ar.c.subarray(ar.a,ar.b)}
trans(ar){return ar.b.transfer(ar.a)}
view(ar){return new DataView(ar.a,ar.b,ar.c)}
setv(ar){return ar.c[ar.u](ar.a,ar.b)}
props(ar){return ar.a[ar.u]}
}Scratch.extensions.register(new Typedvectorr());})(Scratch);