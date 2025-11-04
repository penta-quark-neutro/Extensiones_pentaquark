(function(Scratch){'use strict';//por el (pentaquark neutro, penta quark neutro) y neutral auream
var vgd1=Scratch.ArgumentType.NUMBER;var vgd2=Scratch.ArgumentType.STRING;var vgbt=Scratch.BlockType.REPORTER;var euler=2.718281828459045235360287;
var vgbb=Scratch.BlockType.BUTTON;let opciones=false;let bloqueslentos=true;let complejos=true;let cuaterniones=true;let octaniones=true;
if(!Scratch.extensions.unsandboxed){throw new Error('This extension must run unsandboxed');}class Complejospentaquark{getInfo(){return{id:'Complejospent',name:'Numeros Hiper Complejos',color1:'#555555',color2:'#ff00ff',color3:'#00ffff',blocks:[//circulo,anillo,bloque.
{blockType:"label",text:"Herramientas",},
{func:'herram1',blockType:vgbb,hideFromPalette:!bloqueslentos||opciones,text:'Ver operadores compactos',},{func:'herram2',blockType:vgbb,hideFromPalette:bloqueslentos||opciones,text:'ocultar operadores compactos',},
{func:'herram3',blockType:vgbb,hideFromPalette:!opciones,text:'mostrar Herramientas',},{func:'herram4',blockType:vgbb,hideFromPalette:opciones,text:'ocultar Herramientas',},
{func:'herram5',blockType:vgbb,hideFromPalette:!complejos||opciones,text:'mostrar complejos',},{func:'herram6',blockType:vgbb,hideFromPalette:complejos||opciones,text:'ocultar complejos',},
{func:'herram7',blockType:vgbb,hideFromPalette:!cuaterniones||opciones,text:'mostrar cuaterniones',},{func:'herram8',blockType:vgbb,hideFromPalette:cuaterniones||opciones,text:'ocultar cuaterniones',},
{func:'herram9',blockType:vgbb,hideFromPalette:!octaniones||opciones,text:'mostrar octaniones',},{func:'herram10',blockType:vgbb,hideFromPalette:octaniones||opciones,text:'ocultar octaniones',},
{opcode:'numero_de_euler',blockType:vgbt,text:'e',disableMonitor:true,hideFromPalette:opciones},
{opcode:'numero_pi',blockType:vgbt,text:'π',disableMonitor:true,hideFromPalette:opciones},
{opcode:'numero_aureo',blockType:vgbt,text:'φ',disableMonitor:true,hideFromPalette:opciones},
{opcode:'cef',blockType:vgbt,text:'α',disableMonitor:true,hideFromPalette:opciones},
{func:'herram0',blockType:vgbb,hideFromPalette:opciones,text:'Redes pentaquark',},
{opcode:'und',blockType:vgbt,text:'[A],[BI]',hideFromPalette:opciones,arguments:{A:{type:vgd2,defaultValue:'2'},BI:{type:vgd2,defaultValue:'8'}}},
{opcode:'dimen',blockType:vgbt,text:'crear R[a] con valor[b]base',hideFromPalette:opciones,arguments:{a:{type:vgd1,defaultValue:'1'},b:{type:vgd1,defaultValue:'1'}}},
{opcode:'dimen2',blockType:vgbt,text:'crear R[a] con valor[b]base ruido',hideFromPalette:opciones,arguments:{a:{type:vgd1,defaultValue:'1'},b:{type:vgd1,defaultValue:'1'}}},
{opcode:'dimenmas',blockType:vgbt,text:'sumar R[a] con R[b]',hideFromPalette:opciones,arguments:{a:{type:vgd2,defaultValue:'1,2'},b:{type:vgd2,defaultValue:'3,8'}}},
{opcode:'dimenpor',blockType:vgbt,text:'producto correspondiente R[a] con R[b]',hideFromPalette:opciones,arguments:{a:{type:vgd2,defaultValue:'1,2'},b:{type:vgd2,defaultValue:'3,8'}}},
{opcode:'part',blockType:vgbt,text:'[z]de [q]',hideFromPalette:opciones,arguments:{q:{type:vgd2,defaultValue:'1,4,6,3'},z:{type:vgd1,defaultValue:'1'}}},
{opcode:'perte',blockType:vgbt,text:'[z]∈',hideFromPalette:opciones,arguments:{z:{type:vgd1,defaultValue:'1'}}},
{opcode:'fix',blockType:vgbt,text:'redondeo[z] limite[k]',hideFromPalette:opciones,arguments:{z:{type:vgd1,defaultValue:'1.9389834346'},k:{type:vgd1,defaultValue:'5'}}},
{blockType:"label",text:"Numeros complejos",hideFromPalette:complejos},
{opcode:'suma',blockType:vgbt,text:'RE[A] IM[BI] + RE[C] IM[DI]',hideFromPalette:!bloqueslentos||complejos,arguments:{
A:{type:vgd1,defaultValue:'1'},BI:{type:vgd1,defaultValue:'1'},C:{type:vgd1,defaultValue:'1'},DI:{type:vgd1,defaultValue:'1'}}},
{opcode:'mult',blockType:vgbt,text:'RE[A] IM[BI] x RE[C] IM[DI]',hideFromPalette:!bloqueslentos||complejos,arguments:{
A:{type:vgd1,defaultValue:'3'},BI:{type:vgd1,defaultValue:'3'},C:{type:vgd1,defaultValue:'3'},DI:{type:vgd1,defaultValue:'3'}}},
{opcode:'div',blockType:vgbt,text:'RE[A] IM[BI] / RE[C] IM[DI]',hideFromPalette:!bloqueslentos||complejos,arguments:{
A:{type:vgd1,defaultValue:'10'},BI:{type:vgd1,defaultValue:'2'},C:{type:vgd1,defaultValue:'5'},DI:{type:vgd1,defaultValue:'4'}}},
{opcode:'resta',blockType:vgbt,text:'RE[A] IM[BI] - RE[C] IM[DI]',hideFromPalette:!bloqueslentos||complejos,arguments:{
A:{type:vgd1,defaultValue:'10'},BI:{type:vgd1,defaultValue:'2'},C:{type:vgd1,defaultValue:'5'},DI:{type:vgd1,defaultValue:'4'}}},
{opcode:'sumadirecta',blockType:vgbt,text:'[A]+[B]',hideFromPalette:bloqueslentos||complejos,arguments:{
A:{type:vgd2,defaultValue:'2,3'},B:{type:vgd2,defaultValue:'8,1'}}},
{opcode:'restadirecta',blockType:vgbt,text:'[A]-[B]',hideFromPalette:bloqueslentos||complejos,arguments:{
A:{type:vgd2,defaultValue:'2,3'},B:{type:vgd2,defaultValue:'8,1'}}},
{opcode:'multdir',blockType: vgbt,text:'[A]x[B]',hideFromPalette:bloqueslentos||complejos,arguments:{
A:{type:vgd2,defaultValue:'2,3'},B:{type:vgd2,defaultValue:'8,1'}}},
{opcode:'divdir',blockType:vgbt,text:'[A]/[B]',hideFromPalette:bloqueslentos||complejos,arguments:{
A:{type:vgd2,defaultValue:'2,3'},B:{type:vgd2,defaultValue:'8,1'}}},
{opcode:'mod',blockType:vgbt,text:'Mod z RE[A] IM[BI]',hideFromPalette:!bloqueslentos||complejos,arguments:{
A:{type:vgd1,defaultValue:'2'},BI:{type:vgd1,defaultValue:'2'}}},
{opcode:'mod2',blockType:vgbt,text:'Mod z [A]',hideFromPalette:bloqueslentos||complejos,arguments:{
A:{type:vgd2,defaultValue:'3,4'}}},
{opcode:'re',blockType:vgbt,text:'RE de Z[A]',hideFromPalette:complejos,arguments:{
A:{type:vgd2,defaultValue:'3,4'}}},
{opcode:'im',blockType:vgbt,text:'IM de Z[A]',hideFromPalette:complejos,arguments:{
A:{type:vgd2,defaultValue:'3,4'}}},
{opcode:'argz1',blockType:vgbt,text:'Arg Z RE[A] IM[Bi]',hideFromPalette:!bloqueslentos||complejos,arguments:{
A:{type:vgd2,defaultValue:'2'},Bi:{type:vgd1,defaultValue:'2'}}},
{opcode:'argz',blockType:vgbt,text:'Arg Z[A]',hideFromPalette:bloqueslentos||complejos,arguments:{A:{type:vgd2,defaultValue:'2,10'}}},
{opcode:'raiz',blockType:vgbt,text:'Raiz N[N] rotacion k[K] de RE[A] IM[BI]',hideFromPalette:complejos,arguments:{
A:{type:vgd1,defaultValue:'100'},BI:{type:vgd1,defaultValue:'50'},N:{type:vgd1,defaultValue:'2'},K:{type:vgd1,defaultValue:'0'}}},
{opcode:'exponente',blockType:vgbt,text:'RE[A] IM[BI]^[N]',hideFromPalette:complejos,arguments:{
A:{type:vgd1,defaultValue:'2'},BI:{type:vgd1,defaultValue:'2'},N:{type:vgd1,defaultValue:'2'}}},
{opcode:'conj',blockType:vgbt,text:'Conjugado de Z[A]',hideFromPalette:complejos,arguments:{
A:{type:vgd2,defaultValue:'2,10'}}},
{opcode:'E_elev',blockType:vgbt,text:'e ^ z[A]',hideFromPalette:bloqueslentos||complejos,arguments:{
A:{type:vgd2,defaultValue:'2,3'}}},
{opcode:'E_elev2',blockType:vgbt,text:'e ^ RE[A] IM[BI]',hideFromPalette:!bloqueslentos||complejos,arguments:{
A:{type:vgd2,defaultValue:'2'},BI:{type:vgd2,defaultValue:'3'}}},
{opcode:'Lnz',blockType:vgbt,text:'Ln z[A]',hideFromPalette:bloqueslentos||complejos,arguments:{
A:{type:vgd2,defaultValue:'2,3'}}},
{opcode:'Lnz2',blockType:vgbt,text:'Ln RE[A] IM[BI]',hideFromPalette:!bloqueslentos||complejos,arguments:{
A:{type:vgd2,defaultValue:'2'},BI:{type:vgd2,defaultValue:'3'}}},
{opcode:'trgfun',blockType:vgbt,text:'RE[A] IM[BI] salida[out]',hideFromPalette:complejos,arguments:{
A:{type:vgd1,defaultValue:'10'},BI:{type:vgd1,defaultValue:'2'},out:{type:vgd2,menu:'outs'}}},
{opcode:'GammaI',blockType:vgbt,text:'Gamma RE[A] IM[BI]',hideFromPalette:complejos,arguments:{
A:{type:vgd2,defaultValue:'2'},BI:{type:vgd2,defaultValue:'3'}}},
	{blockType:"label",text:"Cuterniones",hideFromPalette:cuaterniones},
{func:'info3',blockType:vgbb,hideFromPalette:cuaterniones,text:'Info',},
{opcode:'sucuater',blockType:vgbt,text:'a[a] i[i] j[j] k[k] + a[ab] i[ib] j[jb] k[kb]',hideFromPalette:!bloqueslentos||cuaterniones,arguments:{
a:{type:vgd1,defaultValue:'1'},i:{type:vgd1,defaultValue:'5'},j:{type:vgd1,defaultValue:'2'},k:{type:vgd1,defaultValue:'8'},
ab:{type:vgd1,defaultValue:'1'},ib:{type:vgd1,defaultValue:'5'},jb:{type:vgd1,defaultValue:'2'},kb:{type:vgd1,defaultValue:'8'}}},
{opcode:'mulcuater',blockType:vgbt,text:'a[a] i[i] j[j] k[k]  X  a[ab] i[ib] j[jb] k[kb]',hideFromPalette:!bloqueslentos||cuaterniones,arguments:{
a:{type:vgd1,defaultValue:'1'},i:{type:vgd1,defaultValue:'5'},j:{type:vgd1,defaultValue:'2'},k:{type:vgd1,defaultValue:'8'},
ab:{type:vgd1,defaultValue:'1'},ib:{type:vgd1,defaultValue:'5'},jb:{type:vgd1,defaultValue:'2'},kb:{type:vgd1,defaultValue:'8'}}},
{opcode:'divcuater',blockType:vgbt,text:'a[a] i[i] j[j] k[k]  /  a[ab] i[ib] j[jb] k[kb]',hideFromPalette:!bloqueslentos||cuaterniones,arguments:{
a:{type:vgd1,defaultValue:'1'},i:{type:vgd1,defaultValue:'5'},j:{type:vgd1,defaultValue:'2'},k:{type:vgd1,defaultValue:'8'},
ab:{type:vgd1,defaultValue:'1'},ib:{type:vgd1,defaultValue:'5'},jb:{type:vgd1,defaultValue:'2'},kb:{type:vgd1,defaultValue:'8'}}},
{opcode:'modcuater',blockType:vgbt,text:'norma a q(a[a] i[i] j[j] k[k])',hideFromPalette:!bloqueslentos||cuaterniones,arguments:{
a:{type:vgd1,defaultValue:'1'},i:{type:vgd1,defaultValue:'5'},j:{type:vgd1,defaultValue:'2'},k:{type:vgd1,defaultValue:'8'}}},
{opcode:'sumcuatco',blockType:vgbt,text:'[q]+[q2]',hideFromPalette:bloqueslentos||cuaterniones,arguments:{
q:{type:vgd2,defaultValue:'1,4,6,3'},q2:{type:vgd2,defaultValue:'1,4,6,3'}}},
{opcode:'mulcuatco',blockType:vgbt,text:'[q]x[q2]',hideFromPalette:bloqueslentos||cuaterniones,arguments:{
q:{type:vgd2,defaultValue:'1,4,6,3'},q2:{type:vgd2,defaultValue:'1,4,6,3'}}},
{opcode:'divcuatco',blockType:vgbt,text:'[q]/[q2]',hideFromPalette:bloqueslentos||cuaterniones,arguments:{
q:{type:vgd2,defaultValue:'1,4,6,3'},q2:{type:vgd2,defaultValue:'1,4,6,3'}}},
{opcode:'modcuatco',blockType:vgbt,text:'norma Q[q]',hideFromPalette:bloqueslentos||cuaterniones,arguments:{
q:{type:vgd2,defaultValue:'1,4,6,3'}}},
{opcode:'conjcuater',blockType:vgbt,text:'conjugado  q[q]',hideFromPalette:cuaterniones,arguments:{
q:{type:vgd2,defaultValue:'1,4,6,3'}}},
{opcode:'esccuater',blockType:vgbt,text:'escalar q[q]',hideFromPalette:cuaterniones,arguments:{
q:{type:vgd2,defaultValue:'1,4,6,3'}}},
{opcode:'veccuater',blockType:vgbt,text:'vectorial q[q]',hideFromPalette:cuaterniones,arguments:{
q:{type:vgd2,defaultValue:'1,4,6,3'}}},
{opcode:'eelevcuater',blockType:vgbt,text:'e ^ a[a] i[i] j[j] k[k]',hideFromPalette:!bloqueslentos||cuaterniones,arguments:{
a:{type:vgd1,defaultValue:'1'},i:{type:vgd1,defaultValue:'5'},j:{type:vgd1,defaultValue:'2'},k:{type:vgd1,defaultValue:'8'}}},
{opcode:'Lncuater',blockType:vgbt,text:'Ln a[a] i[i] j[j] k[k]',hideFromPalette:!bloqueslentos||cuaterniones,arguments:{
a:{type:vgd1,defaultValue:'1'},i:{type:vgd1,defaultValue:'5'},j:{type:vgd1,defaultValue:'2'},k:{type:vgd1,defaultValue:'8'}}},
{opcode:'vercuater',blockType:vgbt,text:'versor a[a] i[i] j[j] k[k]',hideFromPalette:!bloqueslentos||cuaterniones,arguments:{
a:{type:vgd1,defaultValue:'1'},i:{type:vgd1,defaultValue:'5'},j:{type:vgd1,defaultValue:'2'},k:{type:vgd1,defaultValue:'8'}}},
{opcode:'eelevcuatco',blockType:vgbt,text:'e ^ q[q]',hideFromPalette:bloqueslentos||cuaterniones,arguments:{
q:{type:vgd2,defaultValue:'1,4,6,3'}}},
{opcode:'Lncuatco',blockType:vgbt,text:'Ln q[a]',hideFromPalette:bloqueslentos||cuaterniones,arguments:{
a:{type:vgd2,defaultValue:'1,4,6,3'}}},
{opcode:'vercuatco',blockType:vgbt,text:'versor q[a]',hideFromPalette:bloqueslentos||cuaterniones,arguments:{
a:{type:vgd2,defaultValue:'1,4,6,3'}}},
	{blockType:"label",text:"octoniones",hideFromPalette:octaniones},
{func:'info5',blockType:vgbb,hideFromPalette:octaniones,text:'Info',},
{opcode:'suoctonion',blockType:vgbt,text:'e⁰[a1] e¹[a2] e²[a3] e³[a4] e⁴[a5] e⁵[a6] e⁶[a7] e⁷[a8]  +  e⁰[b1] e¹[b2] e²[b3] e³[b4] e⁴[b5] e⁵[b6] e⁶[b7] e⁷[b8]',hideFromPalette:!bloqueslentos||octaniones,arguments:{
a1:{type:vgd1,defaultValue:'1'},b1:{type:vgd1,defaultValue:'5'},a2:{type:vgd1,defaultValue:'2'},b2:{type:vgd1,defaultValue:'8'},
a3:{type:vgd1,defaultValue:'1'},b3:{type:vgd1,defaultValue:'5'},a4:{type:vgd1,defaultValue:'2'},b4:{type:vgd1,defaultValue:'8'},
a5:{type:vgd1,defaultValue:'1'},b5:{type:vgd1,defaultValue:'5'},a6:{type:vgd1,defaultValue:'2'},b6:{type:vgd1,defaultValue:'8'},
a7:{type:vgd1,defaultValue:'1'},b7:{type:vgd1,defaultValue:'5'},a8:{type:vgd1,defaultValue:'2'},b8:{type:vgd1,defaultValue:'8'}}},
{opcode:'muloctonion',blockType:vgbt,text: 'e⁰[a1] e¹[a2] e²[a3] e³[a4] e⁴[a5] e⁵[a6] e⁶[a7] e⁷[a8]  x  e⁰[b1] e¹[b2] e²[b3] e³[b4] e⁴[b5] e⁵[b6] e⁶[b7] e⁷[b8]',hideFromPalette:!bloqueslentos||octaniones,arguments:{
a1:{type:vgd1,defaultValue:'1'},b1:{type:vgd1,defaultValue:'5'},a2:{type:vgd1,defaultValue:'2'},b2:{type:vgd1,defaultValue:'8'},
a3:{type:vgd1,defaultValue:'1'},b3:{type:vgd1,defaultValue:'5'},a4:{type:vgd1,defaultValue:'2'},b4:{type:vgd1,defaultValue:'8'},
a5:{type:vgd1,defaultValue:'1'},b5:{type:vgd1,defaultValue:'5'},a6:{type:vgd1,defaultValue:'2'},b6:{type:vgd1,defaultValue:'8'},
a7:{type:vgd1,defaultValue:'1'},b7:{type:vgd1,defaultValue:'5'},a8:{type:vgd1,defaultValue:'2'},b8:{type:vgd1,defaultValue:'8'}}},
{opcode:'divoctonion',blockType:vgbt,text:'e⁰[a1] e¹[a2] e²[a3] e³[a4] e⁴[a5] e⁵[a6] e⁶[a7] e⁷[a8]  /  e⁰[b1] e¹[b2] e²[b3] e³[b4] e⁴[b5] e⁵[b6] e⁶[b7] e⁷[b8]',hideFromPalette:!bloqueslentos||octaniones,arguments:{
a1:{type:vgd1,defaultValue:'1'},b1:{type:vgd1,defaultValue:'5'},a2:{type:vgd1,defaultValue:'2'},b2:{type:vgd1,defaultValue:'8'},
a3:{type:vgd1,defaultValue:'1'},b3:{type:vgd1,defaultValue:'5'},a4:{type:vgd1,defaultValue:'2'},b4:{type:vgd1,defaultValue:'8'},
a5:{type:vgd1,defaultValue:'1'},b5:{type:vgd1,defaultValue:'5'},a6:{type:vgd1,defaultValue:'2'},b6:{type:vgd1,defaultValue:'8'},
a7:{type:vgd1,defaultValue:'1'},b7:{type:vgd1,defaultValue:'5'},a8:{type:vgd1,defaultValue:'2'},b8:{type:vgd1,defaultValue:'8'}}},
{opcode:'suoctonionrap',blockType:vgbt,text:'O1[q] + O2[w]',hideFromPalette:bloqueslentos||octaniones,arguments:{
q:{type:vgd2,defaultValue:'1,4,6,3,1,4,6,3'},w:{type:vgd2,defaultValue:'1,4,6,3,1,4,6,3'}}},
{opcode:'muloctonionrap',blockType:vgbt,text:'O1[q] X O2[w]',hideFromPalette:bloqueslentos||octaniones,arguments:{
q:{type:vgd2,defaultValue:'1,4,6,3,1,4,6,3'},w:{type:vgd2,defaultValue:'1,4,6,3,1,4,6,3'}}},
{opcode:'divoctonionrap',blockType:vgbt,text:'O1[q] / O2[w]',hideFromPalette:bloqueslentos||octaniones,arguments:{
q:{type:vgd2,defaultValue:'1,4,6,3,1,4,6,3'},w:{type:vgd2,defaultValue:'1,4,6,3,1,4,6,3'}}},
{opcode:'conoctonion',blockType:vgbt,text:'Conjugado O[q]',hideFromPalette:octaniones,arguments:{
q:{type:vgd2,defaultValue:'1,4,6,3,1,4,6,3'}}},
{opcode:'modoctonion',blockType:vgbt,text:'Norma O[q]',hideFromPalette:octaniones,arguments:{
q:{type:vgd2,defaultValue:'1,4,6,3,1,4,6,3'}}},],
menus:{outs:{acceptReporters: false,items:['polar','binomica','trigonometrica']}}};}

suma(ar){return((ar.A+ar.C)+','+(ar.BI+ar.DI));}

mult(ar){return(((ar.A*ar.C)-(ar.BI*ar.DI))+','+((ar.A*ar.DI)+(ar.C*ar.BI)));}

div(ar){return((((ar.A*ar.C)+(ar.BI*ar.DI))/((ar.C*ar.C)+(ar.DI*ar.DI)))+','+(((ar.BI*ar.C)-(ar.A*ar.DI))/((ar.C*ar.C)+(ar.DI*ar.DI))));}

resta(ar){return((ar.A-ar.C)+','+(ar.BI-ar.DI));}

mod(ar){return Math.sqrt((ar.A*ar.A)+(ar.BI*ar.BI));}

re(ar){return (ar.A.split(',')[0]);}

mod2(ar){return Math.sqrt((ar.A.split(',')[0]*ar.A.split(',')[0])+(ar.A.split(',')[1]*ar.A.split(',')[1]));}

im(ar){return (ar.A.split(',')[1]);}

argz(ar){return Math.atan2(ar.A.split(',')[1],ar.A.split(',')[0]);}

argz1(ar){return Math.atan2(ar.Bi,ar.A);}

raiz(ar)
{
var dat0=Math.sqrt((ar.A*ar.A)+(ar.BI*ar.BI)),dat1=Math.atan2(ar.BI,ar.A),dat2=Math.pow(dat0,1/ar.N);
return (Math.cos(((dat1+(360*ar.K*3.14159265358979/180))/ar.N)))*dat2+','+(Math.sin(((dat1+(360*ar.K*3.14159265358979/180))/ar.N)))*dat2;
}

exponente(ar)
{
var dat3=1/ar.N,dat0=Math.sqrt((ar.A*ar.A)+(ar.BI*ar.BI)),dat1=Math.atan2(ar.BI,ar.A),dat2=Math.pow(dat0,1/dat3);
return (Math.cos((dat1)/dat3))*dat2+','+(Math.sin((dat1)/dat3))*dat2;
}

conj(ar){return (ar.A.split(',')[0])+','+(ar.A.split(',')[1]*-1);}

und(ar){return ar.A+','+ar.BI;}

numero_de_euler(){return euler;}

numero_pi(){return 3.1415926535;}

numero_aureo(){return 1.6180339887;}

cef(){return 0.0072973525;}

E_elev(ar){
var elAi=ar.A.split(',')[1],pa1=Math.cos(elAi),pa3=Math.sin(elAi),pa2=Math.pow(euler,ar.A.split(',')[0]);
return (pa1*pa2)+','+(pa3*pa2);}

E_elev2(ar){
var pa2=Math.pow(euler,ar.A);
return (Math.cos(ar.BI)*pa2)+','+(Math.sin(ar.BI)*pa2);}

sumadirecta(ar){
var inp1=ar.A.split(',')[0]*1+ar.B.split(',')[0]*1,inp2=ar.A.split(',')[1]*1+ar.B.split(',')[1]*1;
return (inp1+','+inp2);}

restadirecta(ar){
var inp1=ar.A.split(',')[0]-ar.B.split(',')[0],inp2=ar.A.split(',')[1]-ar.B.split(',')[1];
return (inp1+','+inp2);}

multdir(ar){
var c=ar.A.split(',')[0],d=ar.A.split(',')[1],e=ar.B.split(',')[0],f=ar.B.split(',')[1];
return (((c*e)-(d*f))+','+((c*f)+(d*e)));}

Lnz(ar){
var re=ar.A.split(',')[0],im=ar.A.split(',')[1],modz=Math.sqrt((re*re)+(im*im)),argz=Math.atan2(im,re);
return Math.log(modz)+','+argz;}

Lnz2(ar){
return Math.log(Math.sqrt((ar.A*ar.A)+(ar.BI*ar.BI)))+','+Math.atan2(ar.BI,ar.A);}

trgfun(ar){
var mo=Math.sqrt((ar.A*ar.A)+(ar.BI*ar.BI)),arg=Math.atan2(ar.BI,ar.A);
if(ar.out==='polar'){return (mo+'e^'+arg+'i');}
if(ar.out==='binomica'){if(ar.BI<0){return ar.A+(ar.BI+'i')}else{return ar.A+'+'+ar.BI+'i'};}
if(ar.out==='trigonometrica'){return mo+'cos('+arg+')'+'+'+mo+'sen('+arg+')i';}
}

divdir(ar){
var c=ar.A.split(',')[0],d=ar.A.split(',')[1],e=ar.B.split(',')[0],f=ar.B.split(',')[1],vadz=(e*e)+(f*f);
return (((c*e)+(d*f))/vadz+','+((d*e)-(c*f))/vadz);}

info3(){alert('Los quaterniones son pertenecientes al algebra abstracta con la forma (aR+bI+cJ+dK). \n actualmente funcionan de acuerdo a lo esperado. \n si encuentra errores notificame a traves de "herramientas".');}
info5(){alert('los octaniones pertenesen al sistema de algebra abstracta. son bastante lentos. \n actualmente estan incompletos, si encuentra errores notificame a traves de "herramientas".');}
herram1(){bloqueslentos=false;
Scratch.vm.extensionManager.refreshBlocks();}
herram2(){bloqueslentos=true;
Scratch.vm.extensionManager.refreshBlocks();}
herram3(){opciones=false;
Scratch.vm.extensionManager.refreshBlocks();}
herram4(){opciones=true;
Scratch.vm.extensionManager.refreshBlocks();}
herram5(){complejos=false;
Scratch.vm.extensionManager.refreshBlocks();}
herram6(){complejos=true;
Scratch.vm.extensionManager.refreshBlocks();}
herram7(){cuaterniones=false;
Scratch.vm.extensionManager.refreshBlocks();}
herram8(){cuaterniones=true;
Scratch.vm.extensionManager.refreshBlocks();}
herram9(){octaniones=false;
Scratch.vm.extensionManager.refreshBlocks();}
herram10(){octaniones=true;
Scratch.vm.extensionManager.refreshBlocks();}
herram0(){Scratch.openWindow('https://linktr.ee/Penta_quark_neutro');}

sucuater(ar){return (ar.a+ar.ab)+','+(ar.i+ar.ib)+','+(ar.j+ar.jb)+','+(ar.k+ar.kb);}

sumcuatco(ar){return (ar.q.split(',')[0]*1+ar.q2.split(',')[0]*1)+','+(ar.q.split(',')[1]*1+ar.q2.split(',')[1]*1)+','+(ar.q.split(',')[2]*1+ar.q2.split(',')[2]*1)+','+(ar.q.split(',')[3]*1+ar.q2.split(',')[3]*1);}

mulcuater(ar){
var dat0=((ar.a*ar.ab)-(ar.i*ar.ib)-(ar.j*ar.jb)-(ar.k*ar.kb)),
dat1=((ar.a*ar.ib)+(ar.i*ar.ab)+(ar.j*ar.kb)-(ar.k*ar.jb)),
dat2=((ar.a*ar.jb)-(ar.i*ar.kb)+(ar.j*ar.ab)+(ar.k*ar.ib)),
dat3=((ar.a*ar.kb)+(ar.i*ar.jb)-(ar.j*ar.ib)+(ar.k*ar.ab));
return dat0+','+dat1+','+dat2+','+dat3;}

mulcuatco(ar){var vec1=Array.from(ar.q.split(',')),vec2=Array.from(ar.q2.split(',')),
dat0=((vec1[0]*vec2[0])-(vec1[1]*vec2[1])-(vec1[2]*vec2[2])-(vec1[3]*vec2[3])),
dat1=((vec1[0]*vec2[1])+(vec1[1]*vec2[0])+(vec1[2]*vec2[3])-(vec1[3]*vec2[2])),
dat2=((vec1[0]*vec2[2])-(vec1[1]*vec2[3])+(vec1[2]*vec2[0])+(vec1[3]*vec2[1])),
dat3=((vec1[0]*vec2[3])+(vec1[1]*vec2[2])-(vec1[2]*vec2[1])+(vec1[3]*vec2[0]));
return dat0+','+dat1+','+dat2+','+dat3;}

divcuater(ar){
var modb=(ar.ab*ar.ab)+(ar.ib*ar.ib)+(ar.jb*ar.jb)+(ar.kb*ar.kb),
adat0=((ar.a*ar.ab)-(ar.i*-ar.ib)-(ar.j*-ar.jb)-(ar.k*-ar.kb))/modb,
adat1=((ar.a*-ar.ib)+(ar.i*ar.ab)+(ar.j*-ar.kb)-(ar.k*-ar.jb))/modb,
adat2=((ar.a*-ar.jb)-(ar.i*-ar.kb)+(ar.j*ar.ab)+(ar.k*-ar.ib))/modb,
adat3=((ar.a*-ar.kb)+(ar.i*-ar.jb)-(ar.j*-ar.ib)+(ar.k*ar.ab))/modb;
return adat0+','+adat1+','+adat2+','+adat3;}

divcuatco(ar){var vec1=Array.from(ar.q.split(',')),vec2=Array.from(ar.q2.split(',')),
modb=Math.pow(vec2[0],2)+(Math.pow(vec2[1],2))+(Math.pow(vec2[2],2))+(Math.pow(vec2[3],2)),
dat0=((vec1[0]*vec2[0])-(vec1[1]*-vec2[1])-(vec1[2]*-vec2[2])-(vec1[3]*-vec2[3]))/modb,
dat1=((vec1[0]*-vec2[1])+(vec1[1]*vec2[0])+(vec1[2]*-vec2[3])-(vec1[3]*-vec2[2]))/modb,
dat2=((vec1[0]*-vec2[2])-(vec1[1]*-vec2[3])+(vec1[2]*vec2[0])+(vec1[3]*-vec2[1]))/modb,
dat3=((vec1[0]*-vec2[3])+(vec1[1]*-vec2[2])-(vec1[2]*-vec2[1])+(vec1[3]*vec2[0]))/modb;
return dat0+','+dat1+','+dat2+','+dat3;}

modcuater(ar){return Math.sqrt((ar.a*ar.a)+(ar.i*ar.i)+(ar.j*ar.j)+(ar.k*ar.k));}

modcuatco(ar){return Math.sqrt(Math.pow(ar.q.split(',')[0],2)+(Math.pow(ar.q.split(',')[1],2))+(Math.pow(ar.q.split(',')[2],2))+(Math.pow(ar.q.split(',')[3],2)));}

conjcuater(ar){return (ar.q.split(',')[0])+','+(ar.q.split(',')[1]*-1)+','+(ar.q.split(',')[2]*-1)+','+(ar.q.split(',')[3]*-1);}

esccuater(ar){return (ar.q.split(',')[0]);}

veccuater(ar){return (ar.q.split(',')[1])+','+(ar.q.split(',')[2])+','+(ar.q.split(',')[3]);}

perte(ar){
var dat0=ar.z.toString();
if(dat0.includes(','))
{
var lio=0;
var sta=0;
while((sta=dat0.indexOf(',',sta)+1)>0){lio++;}
var indent=-1;
for(var lets=0;lets<=lio;lets++){if(indent!=0){var nord=dat0.split(',')[lets];}
var vat=nord/nord;
if(vat==1||nord==0){indent=1;}else{indent=0;}}
lio++;
if(indent==1){if(lio==2){return 'ℂ';}else{if(lio==4){return 'H';}else{if(lio==8){return 'O';}else{if(lio==16){return 'S';}else{if(lio==32){return 'T';}else{return 'R'+lio;}}}}}}else{if(indent==0){return '???';}else{return 'error'+lets+lio;}}}else{var iden=dat0/dat0;
if(iden==1||dat0==0){return 'R';}else{return '???';}}}

part(ar){
var dat0=(ar.z)-1;
return (ar.q.split(',')[dat0]);}

dimen(ar){
var lo=ar.b;
if(ar.a>0){if(ar.a==1){return ar.b;}else{for(var i=1;i<=ar.a-1;i++){lo=lo+','+ar.b;}return lo;}}else{return '-infinity';}}

dimen2(ar){
var lo=Math.random()*(ar.b-(-ar.b))+(-ar.b);
if(ar.a>0){if(ar.a==1){return Math.random()*(ar.b-(-ar.b))+(-ar.b);}else{for(var i=1;i<=ar.a-1;i++){lo=lo+','+(Math.random()*(ar.b-(-ar.b))+(-ar.b));}return lo;}}else{return '-infinity';}}

dimenmas(ar){
var romper=0;
var dat0=ar.a.toString();
if(dat0.includes(','))
{
var lio=0;
var sta=0;
while((sta=dat0.indexOf(',',sta)+1)>0){lio++;}}else{var romper=1;}
var dat1=ar.b.toString();
if(dat1.includes(','))
{
var lio2=0;
var sta2=0;
while((sta2=dat1.indexOf(',',sta2)+1)>0){lio2++;}}else{var romper=2;}
if(romper==0){if(lio>lio2)
{
var numF=(ar.a.split(',')[0]*1)+(ar.b.split(',')[0]*1);
for(var i=1;i<=lio;i++){numF=numF+','+((ar.a.split(',')[i]*1)+(ar.b.split(',')[i]*1));}
return numF;
}
else
{
var numF=(ar.a.split(',')[0]*1)+(ar.b.split(',')[0]*1);
for(var i=1;i<=lio2;i++){numF=numF+','+((ar.b.split(',')[i]*1)+(ar.a.split(',')[i]*1));}
return numF;
}}else{if(romper==1){return dat0*1+(ar.b.split(',')[0]*1)}else{return dat1*1+(ar.a.split(',')[0]*1)}}
}

dimenpor(ar){
var romper=0;
var dat0=ar.a.toString();
if(dat0.includes(','))
{
var lio=0;
var sta=0;
while((sta=dat0.indexOf(',',sta)+1)>0){lio++;}}else{var romper=1;}
var dat1=ar.b.toString();
if(dat1.includes(','))
{
var lio2=0;
var sta2=0;
while((sta2=dat1.indexOf(',',sta2)+1)>0){lio2++;}}else{var romper=2;}
if(romper==0){if(lio>lio2)
{
var numF=(ar.a.split(',')[0]*1)*(ar.b.split(',')[0]*1);
for(var i=1;i<=lio;i++){numF=numF+','+((ar.a.split(',')[i]*1)*(ar.b.split(',')[i]*1));}
return numF;
}
else
{
var numF=(ar.a.split(',')[0]*1)*(ar.b.split(',')[0]*1);
for(var i=1;i<=lio2;i++){numF=numF+','+((ar.b.split(',')[i]*1)*(ar.a.split(',')[i]*1));}
return numF;
}}else{if(romper==1){return dat0*1*(ar.b.split(',')[0]*1)}else{return dat1*1*(ar.a.split(',')[0]*1)}}
}

eelevcuater(ar){
var rad=Math.sqrt((ar.i*ar.i)+(ar.j*ar.j)+(ar.k*ar.k)),senrad=Math.sin(rad)/rad,elev=Math.pow(euler,ar.a);
return((elev*Math.cos(rad))+','+(senrad*ar.i)*elev+','+(senrad*ar.j)*elev+','+(senrad*ar.k)*elev);}

eelevcuatco(ar){var vec1=Array.from(ar.q.split(',')),rad=Math.sqrt(Math.pow(vec1[1],2)+Math.pow(vec1[2],2)+Math.pow(vec1[3],2)),
senrad=Math.sin(rad)/rad,elev=Math.pow(euler,vec1[0]);
return((elev*Math.cos(rad))+','+(senrad*vec1[1])*elev+','+(senrad*vec1[2])*elev+','+(senrad*vec1[3])*elev);}

Lncuater(ar){
var modq=Math.sqrt((ar.a*ar.a)+(ar.i*ar.i)+(ar.j*ar.j)+(ar.k*ar.k)),
modv=Math.sqrt((ar.i*ar.i)+(ar.j*ar.j)+(ar.k*ar.k)),
cdaq=Math.acos(ar.a/modq);
return (Math.log(modq)+','+(ar.i/modv*cdaq)+','+(ar.j/modv*cdaq)+','+(ar.k/modv*cdaq));}

Lncuatco(ar){var vec1=Array.from(ar.a.split(',')),
modq=Math.sqrt(Math.pow(vec1[0],2)+Math.pow(vec1[1],2)+Math.pow(vec1[2],2)+Math.pow(vec1[3],2)),
modv=Math.sqrt(Math.pow(vec1[1],2)+Math.pow(vec1[2],2)+Math.pow(vec1[3],2)),
cdaq=Math.acos(vec1[0]/modq);
return (Math.log(modq)+','+(vec1[1]/modv*cdaq)+','+(vec1[2]/modv*cdaq)+','+(vec1[3]/modv*cdaq));}

vercuatco(ar){var vec1=Array.from(ar.a.split(',')),
mod=Math.sqrt(Math.pow(vec1[0],2)+Math.pow(vec1[1],2)+Math.pow(vec1[2],2)+Math.pow(vec1[3],2)),dat0=vec1[0]/mod,dat1=vec1[1]/mod,dat2=vec1[2]/mod,dat3=vec1[3]/mod;
return (dat0+','+dat1+','+dat2+','+dat3);}

vercuater(ar){
var mod=Math.sqrt((ar.a*ar.a)+(ar.i*ar.i)+(ar.j*ar.j)+(ar.k*ar.k)),dat0=ar.a/mod,dat1=ar.i/mod,dat2=ar.j/mod,dat3=ar.k/mod;
return (dat0+','+dat1+','+dat2+','+dat3);}

suoctonion(ar){return (ar.a1+ar.b1)+','+(ar.a2+ar.b2)+','+(ar.a3+ar.b3)+','+(ar.a4+ar.b4)+','+(ar.a5+ar.b5)+','+(ar.a6+ar.b6)+','+(ar.a7+ar.b7)+','+(ar.a8+ar.b8);}

suoctonionrap(ar){var vec1=Array.from(ar.q.split(',')),vec2=Array.from(ar.w.split(','));
return (vec1[0]*1+vec2[0]*1)+','+(vec1[1]*1+vec2[1]*1)+','+(vec1[2]*1+vec2[2]*1)+','+(vec1[3]*1+vec2[3]*1)+','+(vec1[4]*1+vec2[4]*1)+','+(vec1[5]*1+vec2[5]*1)+','+(vec1[6]*1+vec2[6]*1)+','+(vec1[7]*1+vec2[7]*1);}

muloctonion(ar){
var dat0=(ar.a1*ar.b1)-(ar.a2*ar.b2)-(ar.a3*ar.b3)-(ar.a4*ar.b4)-(ar.a5*ar.b5)-(ar.a6*ar.b6)-(ar.a7*ar.b7)-(ar.a8*ar.b8),
dat1=(ar.a1*ar.b2)+(ar.a2*ar.b1)-(ar.a3*ar.b4)+(ar.a4*ar.b3)-(ar.a5*ar.b6)+(ar.a6*ar.b5)+(ar.a7*ar.b8)-(ar.a8*ar.b7),
dat2=(ar.a1*ar.b3)+(ar.a2*ar.b4)+(ar.a3*ar.b1)-(ar.a4*ar.b2)-(ar.a5*ar.b7)-(ar.a6*ar.b8)+(ar.a7*ar.b5)+(ar.a8*ar.b6),
dat3=(ar.a1*ar.b4)-(ar.a2*ar.b3)+(ar.a3*ar.b2)+(ar.a4*ar.b1)-(ar.a5*ar.b8)+(ar.a6*ar.b7)-(ar.a7*ar.b6)+(ar.a8*ar.b5),
dat4=(ar.a1*ar.b5)+(ar.a2*ar.b6)+(ar.a3*ar.b7)+(ar.a4*ar.b8)+(ar.a5*ar.b1)-(ar.a6*ar.b2)-(ar.a7*ar.b3)-(ar.a8*ar.b4),
dat5=(ar.a1*ar.b6)-(ar.a2*ar.b5)+(ar.a3*ar.b8)-(ar.a4*ar.b7)+(ar.a5*ar.b2)+(ar.a6*ar.b1)+(ar.a7*ar.b4)-(ar.a8*ar.b3),
dat6=(ar.a1*ar.b7)-(ar.a2*ar.b8)-(ar.a3*ar.b5)+(ar.a4*ar.b6)+(ar.a5*ar.b3)-(ar.a6*ar.b4)+(ar.a7*ar.b1)+(ar.a8*ar.b2),
dat7=(ar.a1*ar.b8)+(ar.a2*ar.b7)-(ar.a3*ar.b6)-(ar.a4*ar.b5)+(ar.a5*ar.b4)+(ar.a6*ar.b3)-(ar.a7*ar.b2)+(ar.a8*ar.b1);
return dat0+','+dat1+','+dat2+','+dat3+','+dat4+','+dat5+','+dat6+','+dat7;}

muloctonionrap(ar){var vec1=Array.from(ar.q.split(',')),vec2=Array.from(ar.w.split(',')),
dat0=(vec1[0]*vec2[0])-(vec1[1]*vec2[1])-(vec1[2]*vec2[2])-(vec1[3]*vec2[3])-(vec1[4]*vec2[4])-(vec1[5]*vec2[5])-(vec1[6]*vec2[6])-(vec1[7]*vec2[7]),
dat1=(vec1[0]*vec2[1])+(vec1[1]*vec2[0])-(vec1[2]*vec2[3])+(vec1[3]*vec2[2])-(vec1[4]*vec2[5])+(vec1[5]*vec2[4])+(vec1[6]*vec2[7])-(vec1[7]*vec2[6]),
dat2=(vec1[0]*vec2[2])+(vec1[1]*vec2[3])+(vec1[2]*vec2[0])-(vec1[3]*vec2[1])-(vec1[4]*vec2[6])-(vec1[5]*vec2[7])+(vec1[6]*vec2[4])+(vec1[7]*vec2[5]),
dat3=(vec1[0]*vec2[3])-(vec1[1]*vec2[2])+(vec1[2]*vec2[1])+(vec1[3]*vec2[0])-(vec1[4]*vec2[7])+(vec1[5]*vec2[6])-(vec1[6]*vec2[5])+(vec1[7]*vec2[4]),
dat4=(vec1[0]*vec2[4])+(vec1[1]*vec2[5])+(vec1[2]*vec2[6])+(vec1[3]*vec2[7])+(vec1[4]*vec2[0])-(vec1[5]*vec2[1])-(vec1[6]*vec2[2])-(vec1[7]*vec2[3]),
dat5=(vec1[0]*vec2[5])-(vec1[1]*vec2[4])+(vec1[2]*vec2[7])-(vec1[3]*vec2[6])+(vec1[4]*vec2[1])+(vec1[5]*vec2[0])+(vec1[6]*vec2[3])-(vec1[7]*vec2[2]),
dat6=(vec1[0]*vec2[6])-(vec1[1]*vec2[7])-(vec1[2]*vec2[4])+(vec1[3]*vec2[5])+(vec1[4]*vec2[2])-(vec1[5]*vec2[3])+(vec1[6]*vec2[0])+(vec1[7]*vec2[1]),
dat7=(vec1[0]*vec2[7])+(vec1[1]*vec2[6])-(vec1[2]*vec2[5])-(vec1[3]*vec2[4])+(vec1[4]*vec2[3])+(vec1[5]*vec2[2])-(vec1[6]*vec2[1])+(vec1[7]*vec2[0]);
return dat0+','+dat1+','+dat2+','+dat3+','+dat4+','+dat5+','+dat6+','+dat7;}

divoctonionrap(ar){var vec1=Array.from(ar.q.split(',')),vec2=Array.from(ar.w.split(',')),
dat8=Math.pow(vec2[0],2)+Math.pow(vec2[1],2)+Math.pow(vec2[2],2)+Math.pow(vec2[3],2)+Math.pow(vec2[4],2)+Math.pow(vec2[5],2)+Math.pow(vec2[6],2)+Math.pow(vec2[7],2),
dat0=((vec1[0]*vec2[0])-(vec1[1]*-vec2[1])-(vec1[2]*-vec2[2])-(vec1[3]*-vec2[3])-(vec1[4]*-vec2[4])-(vec1[5]*-vec2[5])-(vec1[6]*-vec2[6])-(vec1[7]*-vec2[7]))/dat8,
dat1=((vec1[0]*-vec2[1])+(vec1[1]*vec2[0])-(vec1[2]*-vec2[3])+(vec1[3]*-vec2[2])-(vec1[4]*-vec2[5])+(vec1[5]*-vec2[4])+(vec1[6]*-vec2[7])-(vec1[7]*-vec2[6]))/dat8,
dat2=((vec1[0]*-vec2[2])+(vec1[1]*-vec2[3])+(vec1[2]*vec2[0])-(vec1[3]*-vec2[1])-(vec1[4]*-vec2[6])-(vec1[5]*-vec2[7])+(vec1[6]*-vec2[4])+(vec1[7]*-vec2[5]))/dat8,
dat3=((vec1[0]*-vec2[3])-(vec1[1]*-vec2[2])+(vec1[2]*-vec2[1])+(vec1[3]*vec2[0])-(vec1[4]*-vec2[7])+(vec1[5]*-vec2[6])-(vec1[6]*-vec2[5])+(vec1[7]*-vec2[4]))/dat8,
dat4=((vec1[0]*-vec2[4])+(vec1[1]*-vec2[5])+(vec1[2]*-vec2[6])+(vec1[3]*-vec2[7])+(vec1[4]*vec2[0])-(vec1[5]*-vec2[1])-(vec1[6]*-vec2[2])-(vec1[7]*-vec2[3]))/dat8,
dat5=((vec1[0]*-vec2[5])-(vec1[1]*-vec2[4])+(vec1[2]*-vec2[7])-(vec1[3]*-vec2[6])+(vec1[4]*-vec2[1])+(vec1[5]*vec2[0])+(vec1[6]*-vec2[3])-(vec1[7]*-vec2[2]))/dat8,
dat6=((vec1[0]*-vec2[6])-(vec1[1]*-vec2[7])-(vec1[2]*-vec2[4])+(vec1[3]*-vec2[5])+(vec1[4]*-vec2[2])-(vec1[5]*-vec2[3])+(vec1[6]*vec2[0])+(vec1[7]*-vec2[1]))/dat8,
dat7=((vec1[0]*-vec2[7])+(vec1[1]*-vec2[6])-(vec1[2]*-vec2[5])-(vec1[3]*-vec2[4])+(vec1[4]*-vec2[3])+(vec1[5]*-vec2[2])-(vec1[6]*-vec2[1])+(vec1[7]*vec2[0]))/dat8;
return dat0+','+dat1+','+dat2+','+dat3+','+dat4+','+dat5+','+dat6+','+dat7;}

divoctonion(ar){
var dat8=Math.pow(ar.b1,2)+Math.pow(ar.b2,2)+Math.pow(ar.b3,2)+Math.pow(ar.b4,2)+Math.pow(ar.b5,2)+Math.pow(ar.b6,2)+Math.pow(ar.b7,2)+Math.pow(ar.b8,2),
dat0=((ar.a1*ar.b1)-(ar.a2*-ar.b2)-(ar.a3*-ar.b3)-(ar.a4*-ar.b4)-(ar.a5*-ar.b5)-(ar.a6*-ar.b6)-(ar.a7*-ar.b7)-(ar.a8*-ar.b8))/dat8,
dat1=((ar.a1*-ar.b2)+(ar.a2*ar.b1)-(ar.a3*-ar.b4)+(ar.a4*-ar.b3)-(ar.a5*-ar.b6)+(ar.a6*-ar.b5)+(ar.a7*-ar.b8)-(ar.a8*-ar.b7))/dat8,
dat2=((ar.a1*-ar.b3)+(ar.a2*-ar.b4)+(ar.a3*ar.b1)-(ar.a4*-ar.b2)-(ar.a5*-ar.b7)-(ar.a6*-ar.b8)+(ar.a7*-ar.b5)+(ar.a8*-ar.b6))/dat8,
dat3=((ar.a1*-ar.b4)-(ar.a2*-ar.b3)+(ar.a3*-ar.b2)+(ar.a4*ar.b1)-(ar.a5*-ar.b8)+(ar.a6*-ar.b7)-(ar.a7*-ar.b6)+(ar.a8*-ar.b5))/dat8,
dat4=((ar.a1*-ar.b5)+(ar.a2*-ar.b6)+(ar.a3*-ar.b7)+(ar.a4*-ar.b8)+(ar.a5*ar.b1)-(ar.a6*-ar.b2)-(ar.a7*-ar.b3)-(ar.a8*-ar.b4))/dat8,
dat5=((ar.a1*-ar.b6)-(ar.a2*-ar.b5)+(ar.a3*-ar.b8)-(ar.a4*-ar.b7)+(ar.a5*-ar.b2)+(ar.a6*ar.b1)+(ar.a7*-ar.b4)-(ar.a8*-ar.b3))/dat8,
dat6=((ar.a1*-ar.b7)-(ar.a2*-ar.b8)-(ar.a3*-ar.b5)+(ar.a4*-ar.b6)+(ar.a5*-ar.b3)-(ar.a6*-ar.b4)+(ar.a7*ar.b1)+(ar.a8*-ar.b2))/dat8,
dat7=((ar.a1*-ar.b8)+(ar.a2*-ar.b7)-(ar.a3*-ar.b6)-(ar.a4*-ar.b5)+(ar.a5*-ar.b4)+(ar.a6*-ar.b3)-(ar.a7*-ar.b2)+(ar.a8*ar.b1))/dat8;
return dat0+','+dat1+','+dat2+','+dat3+','+dat4+','+dat5+','+dat6+','+dat7;}

conoctonion(ar){return (ar.q.split(',')[0])+','+(ar.q.split(',')[1]*-1)+','+(ar.q.split(',')[2]*-1)+','+(ar.q.split(',')[3]*-1)+','+(ar.q.split(',')[4]*-1)+','+(ar.q.split(',')[5]*-1)+','+(ar.q.split(',')[6]*-1)+','+(ar.q.split(',')[7]*-1);}

modoctonion(ar){var vec1=Array.from(ar.q.split(','));
return Math.sqrt(Math.pow(vec1[0],2)+Math.pow(vec1[1],2)+Math.pow(vec1[2],2)+Math.pow(vec1[3],2)+Math.pow(vec1[4],2)+Math.pow(vec1[5],2)+Math.pow(vec1[6],2)+Math.pow(vec1[7],2));}
fix(ar){if(ar.k>=0){return ar.z.toFixed(ar.k)*1;}else{return ar.z.toFixed(-ar.k)*1;}}

GammaI(ar){
function unosobrez(RE,IM){return ((((1*RE)+(0))/((RE*RE)+(IM*IM)))+','+(((0)-(1*IM))/((RE*RE)+(IM*IM))));}
var Z1=unosobrez(ar.A*10,ar.BI*10),Z2=((ar.A*12)-(Z1.split(',')[0]*1))+','+((ar.BI*12)-(Z1.split(',')[1]*1)),Z3=unosobrez((Z2.split(',')[0]*1),(Z2.split(',')[1]*1));
var Z4=((ar.A+(Z3.split(',')[0]*1))*(1/euler))+','+((ar.BI+(Z3.split(',')[1]*1))*(1/euler)),reg2=Z4.split(',')[0],img2=Z4.split(',')[1];
var modz=Math.sqrt((reg2*reg2)+(img2*img2)),argz=Math.atan2(img2,reg2),Z5=Math.log(modz)+','+argz;
var reg3=((ar.A*Z5.split(',')[0])-(ar.BI*Z5.split(',')[1])),img3=((ar.A*Z5.split(',')[1])+(Z5.split(',')[0]*ar.BI));
var ARC=unosobrez(ar.A,ar.BI),reg1=(ARC.split(',')[0]*2*3.14159265358979),img1=(ARC.split(',')[1]*2*3.14159265358979);
var dat0=Math.sqrt((reg1*reg1)+(img1*img1)),dat1=Math.atan2(img1,reg1),dat2=Math.pow(dat0,1/2),pa3=Math.pow(euler,reg3);
var Z6=(Math.cos(img3)*pa3)+','+(Math.sin(img3)*pa3),Z7=(Math.cos(((dat1+(0/180))/2)))*dat2+','+(Math.sin(((dat1+(0/180))/2)))*dat2;
return (((Z7.split(',')[0]*Z6.split(',')[0])-(Z7.split(',')[1]*Z6.split(',')[1]))+','+((Z7.split(',')[0]*Z6.split(',')[1])+(Z6.split(',')[0]*Z7.split(',')[1])));
}}Scratch.extensions.register(new Complejospentaquark());})(Scratch);