(function(Scratch) {'use strict';//por el (pentaquark neutro, penta quark neutro) y neutral auream
const txt=Scratch.ArgumentType.STRING,rep=Scratch.BlockType.REPORTER,num=Scratch.ArgumentType.NUMBER,vgbb=Scratch.BlockType.BUTTON,evaluador=Scratch.BlockType.BOOLEAN,com=Scratch.BlockType.COMMAND,bol1=Scratch.ArgumentType.BOOLEAN;;
const vm=Scratch.vm,runtime=vm.runtime;let ops=1,vecs=1,grrad=Math.PI/180;
function ref(){Scratch.vm.extensionManager.refreshBlocks();}
if(!Scratch.extensions.unsandboxed){throw new Error('unsandboxed');}
class Typedvectorr{getInfo(){return{id:'Typedvectorr',name:'Typedvectorr',color1:'#94b3d2',color2:'#00ffff',color3:'#ff0000',blocks:[
{func:'herr0',blockType:vgbb,text:'Redes pentaquark',},
{func:'herr1',blockType:vgbb,hideFromPalette:!ops,text:'Mostrar operadores matematicos',},{func:'herr2',blockType:vgbb,hideFromPalette:ops,text:'Ocultar operadores matematicos',},
{func:'herr3',blockType:vgbb,hideFromPalette:!vecs,text:'Mostrar vectores',},{func:'herr4',blockType:vgbb,hideFromPalette:vecs,text:'Ocultar vectores',},
{blockType:"label",text:"Operadores matematicos",hideFromPalette:ops},//--------------------------------------------------------------------------------------------------------------------------------
{blockType:"label",text:"Mutan vector principal",hideFromPalette:ops},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'m',blockType:com,text:'[a]+[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:num,defaultValue:''}}},
{opcode:'r',blockType:com,text:'[a]-[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:num,defaultValue:''}}},
{opcode:'muVE',blockType:com,text:'[a]*[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:num,defaultValue:'5'}}},
{opcode:'lerp',blockType:com,text:'IterpoLineal[a][b]alpha[c]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''},c:{type:num,defaultValue:'0.5'}}},
{opcode:'invemul',blockType:com,text:'[a]^-1',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'Hadamard',blockType:com,text:'[a]⊙[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'Rotacion',blockType:com,text:'3DRotar lista[a]en eje[b][c]grados (||xyz||xyz||)',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:num,defaultValue:''},c:{type:num,defaultValue:'45'}}},
{opcode:'Rotacion2',blockType:com,text:'3DRotar lista[a]en eje[b][c]grados (|xyzxyz|)',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:num,defaultValue:''},c:{type:num,defaultValue:'45'}}},
{blockType:"label",text:"No mutan",hideFromPalette:ops},//------------------------------------------------------------------------------------------------------------------------------
{opcode:'prod',blockType:rep,text:'[a]•[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'cruz',blockType:rep,text:'3D[a]X[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:num,defaultValue:''}}},
{opcode:'negvec',blockType:rep,text:'-[a]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'dsit',blockType:rep,text:'[a]dist[b]',hideFromPalette:ops,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
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
{opcode:'set',blockType:com,text:'[a].set[b]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''}}},
{opcode:'fill',blockType:com,text:'[a].fill[b]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'0'}}},
{opcode:'join',blockType:rep,text:'[a].join[b]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:'|'}}},
{opcode:'subar',blockType:rep,text:'[c].subarray[a][b]',hideFromPalette:vecs,arguments:{a:{type:num,defaultValue:'0'},b:{type:num,defaultValue:'5'},c:{type:txt,defaultValue:''}}},
{opcode:'uin0',blockType:rep,text:'Array from[a]separador[b]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:'1,4,7,4'},b:{type:txt,defaultValue:','}}},
{opcode:'uin1',blockType:rep,text:'new [u][a]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},u:{type:txt,menu:'uins'}}},
{opcode:'buffer',blockType:rep,text:'new ArrayBuffer[a][b]',hideFromPalette:vecs,arguments:{a:{type:num,defaultValue:'8'},b:{type:num,defaultValue:'12'}}},
{opcode:'buffer2',blockType:rep,text:'new ArrayBuffer[a]',hideFromPalette:vecs,arguments:{a:{type:num,defaultValue:'8'}}},
{opcode:'trans',blockType:rep,text:'[b].transfer[a]',hideFromPalette:vecs,arguments:{a:{type:num,defaultValue:'0'},b:{type:txt,defaultValue:'buffer'}}},
{opcode:'res',blockType:com,text:'[b].resize[a]',hideFromPalette:vecs,arguments:{a:{type:num,defaultValue:'10'},b:{type:txt,defaultValue:'buffer'}}},
{opcode:'view',blockType:rep,text:'new DataView[a][b][c]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:'buffer'},b:{type:num,defaultValue:'0'},c:{type:num,defaultValue:'2'}}},
{opcode:'setv',blockType:rep,text:'[c].[u][a][b][d]',hideFromPalette:vecs,arguments:{u:{type:txt,menu:'setm'},a:{type:num,defaultValue:'0'},b:{type:num,defaultValue:'5'},c:{type:txt,defaultValue:'DataView'},d:{type:bol1,defaultValue:''}}},
{opcode:'props',blockType:rep,text:'[a].[u]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},u:{type:txt,menu:'pr'}}},
{blockType:"label",text:"solo Uint8Array",hideFromPalette:vecs},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'thex',blockType:rep,text:'[a].toHex',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'tb64',blockType:rep,text:'[a].toBase64',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''}}},
{opcode:'frhex',blockType:rep,text:'fromHex[b]',hideFromPalette:vecs,arguments:{b:{type:txt,defaultValue:'3c623e4d444e3c2f623e'}}},
{opcode:'frb64',blockType:rep,text:'fromBase64[b]',hideFromPalette:vecs,arguments:{b:{type:txt,defaultValue:'PGI+ TURO PC9i Ph'}}},
{blockType:"label",text:"Matrices",hideFromPalette:vecs},//--------------------------------------------------------------------------------------------------------------------------------
{opcode:'mtxi0',blockType:rep,text:'i(2x2)',hideFromPalette:vecs,disableMonitor:1},
{opcode:'mtxi1',blockType:rep,text:'i(3x3)',hideFromPalette:vecs,disableMonitor:1},
{opcode:'mtxi2',blockType:rep,text:'i(4x4)',hideFromPalette:vecs,disableMonitor:1},
{opcode:'mtx0',blockType:com,text:'mtz(2*2)[a]*Arr(2)[b]_salida[c]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''},c:{type:txt,defaultValue:''}}},
{opcode:'mtx1',blockType:com,text:'mtz(3*3)[a]*Arr(3)[b]_salida[c]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''},c:{type:txt,defaultValue:''}}},
{opcode:'mtx2',blockType:com,text:'mtz(4*4)[a]*Arr(4)[b]_salida[c]',hideFromPalette:vecs,arguments:{a:{type:txt,defaultValue:''},b:{type:txt,defaultValue:''},c:{type:txt,defaultValue:''}}},
],menus:{
outs:{acceptReporters:0,items:['+','-','*','/','^','LogB','sen','cos','tan','sign','abs','rampa','lim+','lim-','int','arcsen','arccos','arctan','e^','Ln','Log10','&','|','^','<<','>>','>>>','~','function->']},
Filt:{acceptReporters:0,items:['==','===','<','>','>=','<=','!=']},
Asig:{acceptReporters:0,items:['=','+=','-=','/=','*=','**=','<<=','??=','%=','>>=','>>>=','&=','|=','^=']},
uins:{acceptReporters:0,items:['Uint8ClampedArray','Uint8Array','Uint16Array','Uint32Array','Int8Array','Int16Array','Int32Array','Float16Array','Float32Array','Float64Array','BigInt64Array','BigUint64Array']},
setm:{acceptReporters:0,items:['getInt8','getUint8','getInt16','getUint16','getFloat16','getInt32','getUint32','getFloat32','getFloat64','getBigUint64','getBigInt64','setInt8','setUint8','setInt16','setUint16','setFloat16','setInt32','setUint32','setFloat32','setFloat64','setBigUint64','setBigInt64']},
pr:{acceptReporters:0,items:['buffer','byteLength','byteOffset']}
}};}
ma(ar){switch(ar.ou){
case'+':return ar.a.map(k=>k*1+ar.b*1);break;case'-':return ar.a.map(k=>k-ar.b);break;case'*':return ar.a.map(k=>k*ar.b);break;case'/':return ar.a.map(k=>k/ar.b);break;
case'^':return ar.a.map(k=>k**ar.b);break;case'LogB':return ar.a.map(k=>Math.log(k)/Math.log(ar.b));break;case'sen':return ar.a.map(Math.sin);break;case'cos':return ar.a.map(Math.cos);break;
case'tan':return ar.a.map(Math.tan);break;case'sign':return ar.a.map(Math.sign);break;case'abs':return ar.a.map(Math.abs);break;case'rampa':return ar.a.map(k=>(k>0 ? k:0));break;
case'lim+':return ar.a.map(k=>(k>ar.b ? ar.b:k));break;case'lim-':return ar.a.map(k=>(k<ar.b ? ar.b:k));break;case'int':return ar.a.map(Math.trunc);break;
case'arcsen':return ar.a.map(Math.asin);break;case'arccos':return ar.a.map(Math.acos);break;case'arctan':return ar.a.map(Math.atan);break;case'e^':return ar.a.map(Math.exp);break;
case'Ln':return ar.a.map(Math.log);break;case'Log10':return ar.a.map(Math.log10);break;case'&':return ar.a.map(k=>k&ar.b);break;case'|':return ar.a.map(k=>k|ar.b);break;case'^':return ar.a.map(k=>k^ar.b);break;case'<<':return ar.a.map(k=>k<<ar.b);break;case'>>':return ar.a.map(k=>k>>ar.b);break;case'>>>':return ar.a.map(k=>k>>>ar.b);break;case'~':return ar.a.map(k=>~k);break;
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
nor(ar){var i=0,b=0;while(i<ar.a.length){b+=ar.a[i++]**2}return b**0.5}
unit(ar){var i=0,b=0;while(i<ar.a.length){b+=ar.a[i++]**2}b**=0.5;return ar.a.map(g=>g/b)}
pt(ar){return ar.a[ar.b];}
prod(ar){var i=0,fin=0;while(i<(ar.a.length)){fin+=((ar.a[i])*(ar.b[i++]));}return fin;}
rpt(ar){ar.a[ar.b]=ar.c;return ar.a;}
rpt2(ar){ar.a[ar.b]=ar.c;}
rpt3(ar){switch(ar.tip){case'=':ar.a[ar.b]=ar.c;break;case'+=':ar.a[ar.b]+=ar.c;break;case'-=':ar.a[ar.b]-=ar.c;break;case'/=':ar.a[ar.b]/=ar.c;break;
case'*=':ar.a[ar.b]*=ar.c;break;case'**=':ar.a[ar.b]**=ar.c;break;case'<<=':ar.a[ar.b]<<=ar.c;break;case'>>=':ar.a[ar.b]>>=ar.c;break;case'^=':ar.a[ar.b]^=ar.c;break;
case'>>>=':ar.a[ar.b]>>>=ar.c;break;case'??=':ar.a[ar.b]??=ar.c;break;case'%=':ar.a[ar.b]%=ar.c;break;case'&=':ar.a[ar.b]&=ar.c;break;case'|=':ar.a[ar.b]|=ar.c;break;
}}
angu(ar){return Math.acos(ar.a[0]/Math.hypot(...ar.a))}
m(ar){var i=0;while(i<(ar.a.length)){ar.a[i]+=ar.b[i++];}}
r(ar){var i=0;while(i<(ar.a.length)){ar.a[i]-=ar.b[i++];}}
Hadamard(ar){var i=0;while(i<(ar.a.length)){ar.a[i]*=ar.b[i++];}}
invemul(ar){var i=0;while(i<(ar.a.length)){ar.a[++i]**=-1;}}
uin0(ar){return Array.from(ar.a.split(ar.b+""));}
uin1(ar){return new window[ar.u](ar.a);}
dsit(ar){var i=0,out=Array(ar.a.length);while(i<ar.a.length){out[i]=ar.b[i]-ar.a[i++];}return Math.hypot(...out);}
lerp(ar){var i=0,z=ar.c;while(i<ar.a.length){ar.a[i]+=(ar.b[i]-ar.a[i++])*z;}}
negvec(ar){return ar.a.map(k=>k*-1);}
smdr(ar){var i=0,out=0;while(i<ar.a.length){out+=ar.a[i++];}return out;}
med1(ar){var i=0,out=0;while(i<ar.a.length){out+=ar.a[i++];}return out/ar.a.length;}
med2(ar){var i=1,out=ar.a[0];while(i<ar.a.length){out*=ar.a[i++];}return out**(1/ar.a.length);}
med3(ar){var i=0,out=0;while(i<ar.a.length){out+=1/ar.a[i++];}return ar.a.length/out;}
med4(ar){const ve=ar.a.map(k=>k**2);var i=0,out=0;while(i<ve.length){out+=ve[i++];}return (out/ve.length)**0.5;}
prto(ar){var i=0,out=1;while(i<ar.a.length){out*=ar.a[i++];}return out;}
muVE(ar){var i=0;while(i<ar.a.length){ar.a[i++]*=ar.b}}
cruz(ar){return [(ar.a[1]*ar.b[2])-(ar.a[2]*ar.b[1]),(ar.a[2]*ar.b[0])-(ar.a[0]*ar.b[2]),(ar.a[0]*ar.b[1])-(ar.a[1]*ar.b[0])]}
buffer(ar){return new ArrayBuffer(ar.a,{maxByteLength:ar.b})}
buffer2(ar){return new ArrayBuffer(ar.a)}
subar(ar){return ar.c.subarray(ar.a,ar.b)}
trans(ar){return ar.b.transfer(ar.a)}
view(ar){return new DataView(ar.a,ar.b,ar.c)}
setv(ar){return ar.c[ar.u](ar.a,ar.b,ar.d)}
props(ar){return ar.a[ar.u]}
set(ar){return ar.a.set(ar.b)}
res(ar){ar.b.resize(ar.a)}
fill(ar){ar.a.fill(ar.b)}
thex(ar){return ar.a.toHex()}
tb64(ar){return ar.a.toBase64()}
frhex(ar){return Uint8Array.fromHex(ar.b.toString())}
frb64(ar){return Uint8Array.fromBase64(ar.b.toString())}
Rotacion({a,b,c}){var cos=Math.cos((-c)*grrad),sen=Math.sin((-c)*grrad),
matriz=[cos+(b[0]**2)*(1-cos),b[0]*b[1]*(1-cos)-b[2]*sen,b[0]*b[2]*(1-cos)+b[1]*sen,
	b[1]*b[0]*(1-cos)+b[2]*sen,cos+(b[1]**2)*(1-cos),b[1]*b[2]*(1-cos)-b[0]*sen,
	b[2]*b[0]*(1-cos)-b[1]*sen,b[2]*b[1]*(1-cos)+b[0]*sen,cos+(b[2]**2)*(1-cos)],i=0;
while(i<a.length){a[i]=[a[i][0]*matriz[0]+a[i][1]*matriz[3]+a[i][2]*matriz[6],
			 a[i][0]*matriz[1]+a[i][1]*matriz[4]+a[i][2]*matriz[7],
			 a[i][0]*matriz[2]+a[i][1]*matriz[5]+a[i++][2]*matriz[8]];}}
Rotacion2({a,b,c}){var cos=Math.cos((-c)*grrad),sen=Math.sin((-c)*grrad),
matriz=[cos+(b[0]**2)*(1-cos),b[0]*b[1]*(1-cos)-b[2]*sen,b[0]*b[2]*(1-cos)+b[1]*sen,
	b[1]*b[0]*(1-cos)+b[2]*sen,cos+(b[1]**2)*(1-cos),b[1]*b[2]*(1-cos)-b[0]*sen,
	b[2]*b[0]*(1-cos)-b[1]*sen,b[2]*b[1]*(1-cos)+b[0]*sen,cos+(b[2]**2)*(1-cos)],i=0,k=[0,0,0];
while(i<a.length){k[i]=a[i]*matriz[0]+a[i+1]*matriz[3]+a[i+2]*matriz[6],
		  k[i+1]=a[i]*matriz[1]+a[i+1]*matriz[4]+a[i+2]*matriz[7],
		  k[i+2]=a[i]*matriz[2]+a[i+1]*matriz[5]+a[i+2]*matriz[8],a[i]=k[0],a[i+1]=k[1],a[i+2]=k[2],i+=3;}}
mtx0({a,b,c}){c[0]=(a[0]*b[0])+(a[1]*b[1]),c[1]=(a[2]*b[0])+(a[3]*b[1])}
mtx1({a,b,c}){c[0]=(a[0]*b[0])+(a[1]*b[1])+(a[2]*b[2]),c[1]=(a[3]*b[0])+(a[4]*b[1])+(a[5]*b[2]),c[2]=(a[6]*b[0])+(a[7]*b[1])+(a[8]*b[2])}
mtx2({a,b,c}){c[0]=(a[0]*b[0])+(a[1]*b[1])+(a[2]*b[2])+(a[3]*b[3]),c[1]=(a[4]*b[0])+(a[5]*b[1])+(a[6]*b[2])+(a[7]*b[3]),c[2]=(a[8]*b[0])+(a[9]*b[1])+(a[10]*b[2])+(a[11]*b[3]),c[3]=(a[12]*b[0])+(a[13]*b[1])+(a[14]*b[2])+(a[15]*b[3])}
mtxi0(){return [1,0,0,1]}mtxi1(){return [1,0,0,0,1,0,0,0,1]}mtxi2(){return [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}
join(ar){return ar.a.join(ar.b)}
}Scratch.extensions.register(new Typedvectorr());})(Scratch);