(function(Scratch){'use strict';//por el (pentaquark neutro, penta quark neutro)
var vgd1=Scratch.ArgumentType.NUMBER;var vgd2=Scratch.ArgumentType.STRING;var vgbt=Scratch.BlockType.REPORTER;var euler=2.718281828459045235360287;
var vgbb=Scratch.BlockType.BUTTON;let opciones=false;let BLOLE=true;let complejos=true;let cuaterniones=true;let octaniones=true;
function unosobrez(RE,IM){return [(((1*RE))/((RE*RE)+(IM*IM))),((-(1*IM))/((RE*RE)+(IM*IM)))];}
function expz(z){let p=Math.exp(z[0]);return [(Math.cos(z[1])*p),(Math.sin(z[1])*p)];}
function multz(z1,z2){return [((z1[0]*z2[0])-(z1[1]*z2[1])),((z1[0]*z2[1])+(z1[1]*z2[0]))];}
function divz(z1,z2){var vadz=(z2[0]**2)+(z2[1]**2);return [((z1[0]*z2[0])+(z1[1]*z2[1]))/vadz,((z1[1]*z2[0])-(z1[0]*z2[1]))/vadz];}
function zelevN(z,N){let dat3=1/N,dat1=Math.atan2(z[1],z[0]),dat2=Math.pow(Math.hypot(z[0],z[1]),1/dat3);return [(Math.cos((dat1)/dat3))*dat2,(Math.sin((dat1)/dat3))*dat2];}
if(!Scratch.extensions.unsandboxed){throw new Error('This extension must run unsandboxed');}class Complejospentaquark{getInfo(){return{id:'Complejospent',name:'Numeros Hiper Complejos',color1:'#555555',color2:'#ff00ff',color3:'#00ffff',blocks:[//circulo,anillo,bloque.
{blockType:"label",text:"Herramientas",},
{func:'herram1',blockType:vgbb,hideFromPalette:!BLOLE||opciones,text:'Ver operadores compactos',},{func:'herram2',blockType:vgbb,hideFromPalette:BLOLE||opciones,text:'ocultar operadores compactos',},
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
{blockType:"label",text:"Numeros complejos",hideFromPalette:complejos},//----------------------------------------------------------------------------------------------------------------------
{opcode:'suma',blockType:vgbt,text:'RE[A] IM[BI] + RE[C] IM[DI]',hideFromPalette:!BLOLE||complejos,arguments:{A:{type:vgd1,defaultValue:'1'},BI:{type:vgd1,defaultValue:'1'},C:{type:vgd1,defaultValue:'1'},DI:{type:vgd1,defaultValue:'1'}}},
{opcode:'mult',blockType:vgbt,text:'RE[A] IM[BI] x RE[C] IM[DI]',hideFromPalette:!BLOLE||complejos,arguments:{A:{type:vgd1,defaultValue:'3'},BI:{type:vgd1,defaultValue:'3'},C:{type:vgd1,defaultValue:'3'},DI:{type:vgd1,defaultValue:'3'}}},
{opcode:'div',blockType:vgbt,text:'RE[A] IM[BI] / RE[C] IM[DI]',hideFromPalette:!BLOLE||complejos,arguments:{A:{type:vgd1,defaultValue:'10'},BI:{type:vgd1,defaultValue:'2'},C:{type:vgd1,defaultValue:'5'},DI:{type:vgd1,defaultValue:'4'}}},
{opcode:'resta',blockType:vgbt,text:'RE[A] IM[BI] - RE[C] IM[DI]',hideFromPalette:!BLOLE||complejos,arguments:{A:{type:vgd1,defaultValue:'10'},BI:{type:vgd1,defaultValue:'2'},C:{type:vgd1,defaultValue:'5'},DI:{type:vgd1,defaultValue:'4'}}},
{opcode:'sumadirecta',blockType:vgbt,text:'[A]+[B]',hideFromPalette:BLOLE||complejos,arguments:{A:{type:vgd2,defaultValue:'2,3'},B:{type:vgd2,defaultValue:'8,1'}}},
{opcode:'restadirecta',blockType:vgbt,text:'[A]-[B]',hideFromPalette:BLOLE||complejos,arguments:{A:{type:vgd2,defaultValue:'2,3'},B:{type:vgd2,defaultValue:'8,1'}}},
{opcode:'multdir',blockType: vgbt,text:'[A]x[B]',hideFromPalette:BLOLE||complejos,arguments:{A:{type:vgd2,defaultValue:'2,3'},B:{type:vgd2,defaultValue:'8,1'}}},
{opcode:'divdir',blockType:vgbt,text:'[A]/[B]',hideFromPalette:BLOLE||complejos,arguments:{A:{type:vgd2,defaultValue:'2,3'},B:{type:vgd2,defaultValue:'8,1'}}},
{opcode:'mod',blockType:vgbt,text:'Mod z RE[A] IM[BI]',hideFromPalette:!BLOLE||complejos,arguments:{A:{type:vgd1,defaultValue:'2'},BI:{type:vgd1,defaultValue:'2'}}},
{opcode:'mod2',blockType:vgbt,text:'Mod z [A]',hideFromPalette:BLOLE||complejos,arguments:{A:{type:vgd2,defaultValue:'3,4'}}},
{opcode:'re',blockType:vgbt,text:'RE de Z[A]',hideFromPalette:complejos,arguments:{A:{type:vgd2,defaultValue:'3,4'}}},
{opcode:'im',blockType:vgbt,text:'IM de Z[A]',hideFromPalette:complejos,arguments:{A:{type:vgd2,defaultValue:'3,4'}}},
{opcode:'argz1',blockType:vgbt,text:'Arg Z RE[A] IM[Bi]',hideFromPalette:!BLOLE||complejos,arguments:{A:{type:vgd2,defaultValue:'2'},Bi:{type:vgd1,defaultValue:'2'}}},
{opcode:'argz',blockType:vgbt,text:'Arg Z[A]',hideFromPalette:BLOLE||complejos,arguments:{A:{type:vgd2,defaultValue:'2,10'}}},
{opcode:'raiz',blockType:vgbt,text:'Raiz N[N] rotacion k[K] de RE[A] IM[BI]',hideFromPalette:complejos,arguments:{A:{type:vgd1,defaultValue:'100'},BI:{type:vgd1,defaultValue:'50'},N:{type:vgd1,defaultValue:'2'},K:{type:vgd1,defaultValue:'0'}}},
{opcode:'exponente',blockType:vgbt,text:'RE[A] IM[BI]^[N]',hideFromPalette:complejos,arguments:{A:{type:vgd1,defaultValue:'2'},BI:{type:vgd1,defaultValue:'2'},N:{type:vgd1,defaultValue:'2'}}},
{opcode:'conj',blockType:vgbt,text:'Conjugado de Z[A]',hideFromPalette:complejos,arguments:{A:{type:vgd2,defaultValue:'2,10'}}},
{opcode:'E_elev',blockType:vgbt,text:'e ^ z[A]',hideFromPalette:BLOLE||complejos,arguments:{A:{type:vgd2,defaultValue:'2,3'}}},
{opcode:'E_elev2',blockType:vgbt,text:'e ^ RE[A] IM[BI]',hideFromPalette:!BLOLE||complejos,arguments:{A:{type:vgd2,defaultValue:'2'},BI:{type:vgd2,defaultValue:'3'}}},
{opcode:'Lnz',blockType:vgbt,text:'Ln z[A]',hideFromPalette:BLOLE||complejos,arguments:{A:{type:vgd2,defaultValue:'2,3'}}},
{opcode:'Lnz2',blockType:vgbt,text:'Ln RE[A] IM[BI]',hideFromPalette:!BLOLE||complejos,arguments:{A:{type:vgd2,defaultValue:'2'},BI:{type:vgd2,defaultValue:'3'}}},
{opcode:'trgfun',blockType:vgbt,text:'RE[A] IM[BI] salida[out]',hideFromPalette:complejos,arguments:{A:{type:vgd1,defaultValue:'10'},BI:{type:vgd1,defaultValue:'2'},out:{type:vgd2,menu:'outs'}}},
{opcode:'GammaI',blockType:vgbt,text:'Gamma RE[A] IM[BI]',hideFromPalette:!BLOLE||complejos,arguments:{A:{type:vgd2,defaultValue:'2'},BI:{type:vgd2,defaultValue:'3'}}},
{opcode:'GammaI2',blockType:vgbt,text:'Gamma [A]',hideFromPalette:BLOLE||complejos,arguments:{A:{type:vgd2,defaultValue:'2,3'}}},
{opcode:'sencz',blockType:vgbt,text:'seno Z[A]',hideFromPalette:complejos,arguments:{A:{type:vgd2,defaultValue:'2,10'}}},
{opcode:'coscz',blockType:vgbt,text:'coseno Z[A]',hideFromPalette:complejos,arguments:{A:{type:vgd2,defaultValue:'2,10'}}},
{opcode:'tancz',blockType:vgbt,text:'tangente Z[A]',hideFromPalette:complejos,arguments:{A:{type:vgd2,defaultValue:'2,10'}}},
{opcode:'arcsencz',blockType:vgbt,text:'arcsen Z[A]',hideFromPalette:complejos,arguments:{A:{type:vgd2,defaultValue:'2,10'}}},
{opcode:'arccoscz',blockType:vgbt,text:'arccos Z[A]',hideFromPalette:complejos,arguments:{A:{type:vgd2,defaultValue:'2,10'}}},
{opcode:'arctancz',blockType:vgbt,text:'arctan Z[A]',hideFromPalette:complejos,arguments:{A:{type:vgd2,defaultValue:'2,10'}}},
	{blockType:"label",text:"Cuterniones",hideFromPalette:cuaterniones},//----------------------------------------------------------------------------------------------------------
{func:'info3',blockType:vgbb,hideFromPalette:cuaterniones,text:'Info',},
{opcode:'sucuater',blockType:vgbt,text:'a[a] i[i] j[j] k[k] + a[ab] i[ib] j[jb] k[kb]',hideFromPalette:!BLOLE||cuaterniones,arguments:{a:{type:vgd1,defaultValue:'1'},i:{type:vgd1,defaultValue:'5'},j:{type:vgd1,defaultValue:'2'},k:{type:vgd1,defaultValue:'8'},ab:{type:vgd1,defaultValue:'1'},ib:{type:vgd1,defaultValue:'5'},jb:{type:vgd1,defaultValue:'2'},kb:{type:vgd1,defaultValue:'8'}}},
{opcode:'mulcuater',blockType:vgbt,text:'a[a] i[i] j[j] k[k]  X  a[ab] i[ib] j[jb] k[kb]',hideFromPalette:!BLOLE||cuaterniones,arguments:{a:{type:vgd1,defaultValue:'1'},i:{type:vgd1,defaultValue:'5'},j:{type:vgd1,defaultValue:'2'},k:{type:vgd1,defaultValue:'8'},ab:{type:vgd1,defaultValue:'1'},ib:{type:vgd1,defaultValue:'5'},jb:{type:vgd1,defaultValue:'2'},kb:{type:vgd1,defaultValue:'8'}}},
{opcode:'divcuater',blockType:vgbt,text:'a[a] i[i] j[j] k[k]  /  a[ab] i[ib] j[jb] k[kb]',hideFromPalette:!BLOLE||cuaterniones,arguments:{a:{type:vgd1,defaultValue:'1'},i:{type:vgd1,defaultValue:'5'},j:{type:vgd1,defaultValue:'2'},k:{type:vgd1,defaultValue:'8'},ab:{type:vgd1,defaultValue:'1'},ib:{type:vgd1,defaultValue:'5'},jb:{type:vgd1,defaultValue:'2'},kb:{type:vgd1,defaultValue:'8'}}},
{opcode:'modcuater',blockType:vgbt,text:'norma a q(a[a] i[i] j[j] k[k])',hideFromPalette:!BLOLE||cuaterniones,arguments:{a:{type:vgd1,defaultValue:'1'},i:{type:vgd1,defaultValue:'5'},j:{type:vgd1,defaultValue:'2'},k:{type:vgd1,defaultValue:'8'}}},
{opcode:'sumcuatco',blockType:vgbt,text:'[q]+[q2]',hideFromPalette:BLOLE||cuaterniones,arguments:{q:{type:vgd2,defaultValue:'1,4,6,3'},q2:{type:vgd2,defaultValue:'1,4,6,3'}}},
{opcode:'mulcuatco',blockType:vgbt,text:'[q]x[q2]',hideFromPalette:BLOLE||cuaterniones,arguments:{q:{type:vgd2,defaultValue:'1,4,6,3'},q2:{type:vgd2,defaultValue:'1,4,6,3'}}},
{opcode:'divcuatco',blockType:vgbt,text:'[q]/[q2]',hideFromPalette:BLOLE||cuaterniones,arguments:{q:{type:vgd2,defaultValue:'1,4,6,3'},q2:{type:vgd2,defaultValue:'1,4,6,3'}}},
{opcode:'modcuatco',blockType:vgbt,text:'norma Q[q]',hideFromPalette:BLOLE||cuaterniones,arguments:{q:{type:vgd2,defaultValue:'1,4,6,3'}}},
{opcode:'conjcuater',blockType:vgbt,text:'conjugado  q[q]',hideFromPalette:cuaterniones,arguments:{q:{type:vgd2,defaultValue:'1,4,6,3'}}},
{opcode:'esccuater',blockType:vgbt,text:'escalar q[q]',hideFromPalette:cuaterniones,arguments:{q:{type:vgd2,defaultValue:'1,4,6,3'}}},
{opcode:'veccuater',blockType:vgbt,text:'vectorial q[q]',hideFromPalette:cuaterniones,arguments:{q:{type:vgd2,defaultValue:'1,4,6,3'}}},
{opcode:'eelevcuater',blockType:vgbt,text:'e ^ a[a] i[i] j[j] k[k]',hideFromPalette:!BLOLE||cuaterniones,arguments:{a:{type:vgd1,defaultValue:'1'},i:{type:vgd1,defaultValue:'5'},j:{type:vgd1,defaultValue:'2'},k:{type:vgd1,defaultValue:'8'}}},
{opcode:'Lncuater',blockType:vgbt,text:'Ln a[a] i[i] j[j] k[k]',hideFromPalette:!BLOLE||cuaterniones,arguments:{a:{type:vgd1,defaultValue:'1'},i:{type:vgd1,defaultValue:'5'},j:{type:vgd1,defaultValue:'2'},k:{type:vgd1,defaultValue:'8'}}},
{opcode:'vercuater',blockType:vgbt,text:'versor a[a] i[i] j[j] k[k]',hideFromPalette:!BLOLE||cuaterniones,arguments:{a:{type:vgd1,defaultValue:'1'},i:{type:vgd1,defaultValue:'5'},j:{type:vgd1,defaultValue:'2'},k:{type:vgd1,defaultValue:'8'}}},
{opcode:'eelevcuatco',blockType:vgbt,text:'e ^ q[q]',hideFromPalette:BLOLE||cuaterniones,arguments:{q:{type:vgd2,defaultValue:'1,4,6,3'}}},
{opcode:'Lncuatco',blockType:vgbt,text:'Ln q[a]',hideFromPalette:BLOLE||cuaterniones,arguments:{a:{type:vgd2,defaultValue:'1,4,6,3'}}},
{opcode:'vercuatco',blockType:vgbt,text:'versor q[a]',hideFromPalette:BLOLE||cuaterniones,arguments:{a:{type:vgd2,defaultValue:'1,4,6,3'}}},
	{blockType:"label",text:"octoniones",hideFromPalette:octaniones},//---------------------------------------------------------------------------------------------------------------------
{func:'info5',blockType:vgbb,hideFromPalette:octaniones,text:'Info',},
{opcode:'suoctonion',blockType:vgbt,text:'e⁰[a1]e¹[a2]e²[a3]e³[a4]e⁴[a5]e⁵[a6]e⁶[a7]e⁷[a8]+ e⁰[b1]e¹[b2]e²[b3]e³[b4]e⁴[b5]e⁵[b6]e⁶[b7]e⁷[b8]',hideFromPalette:!BLOLE||octaniones,arguments:{
a1:{type:vgd1,defaultValue:'1'},b1:{type:vgd1,defaultValue:'5'},a2:{type:vgd1,defaultValue:'2'},b2:{type:vgd1,defaultValue:'8'},a3:{type:vgd1,defaultValue:'1'},b3:{type:vgd1,defaultValue:'5'},a4:{type:vgd1,defaultValue:'2'},b4:{type:vgd1,defaultValue:'8'},
a5:{type:vgd1,defaultValue:'1'},b5:{type:vgd1,defaultValue:'5'},a6:{type:vgd1,defaultValue:'2'},b6:{type:vgd1,defaultValue:'8'},a7:{type:vgd1,defaultValue:'1'},b7:{type:vgd1,defaultValue:'5'},a8:{type:vgd1,defaultValue:'2'},b8:{type:vgd1,defaultValue:'8'}}},
{opcode:'muloctonion',blockType:vgbt,text: 'e⁰[a1]e¹[a2]e²[a3]e³[a4]e⁴[a5]e⁵[a6]e⁶[a7]e⁷[a8]x e⁰[b1]e¹[b2]e²[b3]e³[b4]e⁴[b5]e⁵[b6]e⁶[b7]e⁷[b8]',hideFromPalette:!BLOLE||octaniones,arguments:{
a1:{type:vgd1,defaultValue:'1'},b1:{type:vgd1,defaultValue:'5'},a2:{type:vgd1,defaultValue:'2'},b2:{type:vgd1,defaultValue:'8'},a3:{type:vgd1,defaultValue:'1'},b3:{type:vgd1,defaultValue:'5'},a4:{type:vgd1,defaultValue:'2'},b4:{type:vgd1,defaultValue:'8'},
a5:{type:vgd1,defaultValue:'1'},b5:{type:vgd1,defaultValue:'5'},a6:{type:vgd1,defaultValue:'2'},b6:{type:vgd1,defaultValue:'8'},a7:{type:vgd1,defaultValue:'1'},b7:{type:vgd1,defaultValue:'5'},a8:{type:vgd1,defaultValue:'2'},b8:{type:vgd1,defaultValue:'8'}}},
{opcode:'divoctonion',blockType:vgbt,text:'e⁰[a1]e¹[a2]e²[a3]e³[a4]e⁴[a5]e⁵[a6]e⁶[a7]e⁷[a8]/ e⁰[b1]e¹[b2]e²[b3]e³[b4]e⁴[b5]e⁵[b6]e⁶[b7]e⁷[b8]',hideFromPalette:!BLOLE||octaniones,arguments:{
a1:{type:vgd1,defaultValue:'1'},b1:{type:vgd1,defaultValue:'5'},a2:{type:vgd1,defaultValue:'2'},b2:{type:vgd1,defaultValue:'8'},a3:{type:vgd1,defaultValue:'1'},b3:{type:vgd1,defaultValue:'5'},a4:{type:vgd1,defaultValue:'2'},b4:{type:vgd1,defaultValue:'8'},
a5:{type:vgd1,defaultValue:'1'},b5:{type:vgd1,defaultValue:'5'},a6:{type:vgd1,defaultValue:'2'},b6:{type:vgd1,defaultValue:'8'},a7:{type:vgd1,defaultValue:'1'},b7:{type:vgd1,defaultValue:'5'},a8:{type:vgd1,defaultValue:'2'},b8:{type:vgd1,defaultValue:'8'}}},
{opcode:'suoctonionrap',blockType:vgbt,text:'O1[q] + O2[w]',hideFromPalette:BLOLE||octaniones,arguments:{q:{type:vgd2,defaultValue:'1,4,6,3,1,4,6,3'},w:{type:vgd2,defaultValue:'1,4,6,3,1,4,6,3'}}},
{opcode:'muloctonionrap',blockType:vgbt,text:'O1[q] X O2[w]',hideFromPalette:BLOLE||octaniones,arguments:{q:{type:vgd2,defaultValue:'1,4,6,3,1,4,6,3'},w:{type:vgd2,defaultValue:'1,4,6,3,1,4,6,3'}}},
{opcode:'divoctonionrap',blockType:vgbt,text:'O1[q] / O2[w]',hideFromPalette:BLOLE||octaniones,arguments:{q:{type:vgd2,defaultValue:'1,4,6,3,1,4,6,3'},w:{type:vgd2,defaultValue:'1,4,6,3,1,4,6,3'}}},
{opcode:'conoctonion',blockType:vgbt,text:'Conjugado O[q]',hideFromPalette:octaniones,arguments:{q:{type:vgd2,defaultValue:'1,4,6,3,1,4,6,3'}}},
{opcode:'modoctonion',blockType:vgbt,text:'Norma O[q]',hideFromPalette:octaniones,arguments:{q:{type:vgd2,defaultValue:'1,4,6,3,1,4,6,3'}}},],
menus:{outs:{acceptReporters: false,items:['polar','binomica','trigonometrica']}}};}

suma(ar){return((ar.A+ar.C)+','+(ar.BI+ar.DI));}
mult(ar){return(((ar.A*ar.C)-(ar.BI*ar.DI))+','+((ar.A*ar.DI)+(ar.C*ar.BI)));}
div(ar){return((((ar.A*ar.C)+(ar.BI*ar.DI))/((ar.C*ar.C)+(ar.DI*ar.DI)))+','+(((ar.BI*ar.C)-(ar.A*ar.DI))/((ar.C*ar.C)+(ar.DI*ar.DI))));}
resta(ar){return((ar.A-ar.C)+','+(ar.BI-ar.DI));}
mod(ar){return Math.hypot(ar.A,ar.BI**2);}
re(ar){return (ar.A.split(',')[0]);}
mod2(ar){return Math.sqrt((ar.A.split(',')[0]**2)+(ar.A.split(',')[1]**2));}
im(ar){return (ar.A.split(',')[1]);}
argz(ar){return Math.atan2(ar.A.split(',')[1],ar.A.split(',')[0]);}
argz1(ar){return Math.atan2(ar.Bi,ar.A);}
raiz(ar){var dat0=Math.hypot(ar.A,ar.BI),dat1=Math.atan2(ar.BI,ar.A),dat2=Math.pow(dat0,1/ar.N);
return (Math.cos(((dat1+(360*ar.K*Math.PI/180))/ar.N)))*dat2+','+(Math.sin(((dat1+(360*ar.K*Math.PI/180))/ar.N)))*dat2;
}
exponente(ar){var dat3=1/ar.N,dat1=Math.atan2(ar.BI,ar.A),dat2=Math.pow(Math.hypot(ar.A,ar.BI),1/dat3);
return (Math.cos((dat1)/dat3))*dat2+','+(Math.sin((dat1)/dat3))*dat2;
}
conj(ar){return (ar.A.split(',')[0])+','+(ar.A.split(',')[1]*-1);}
und(ar){return ar.A+','+ar.BI;}
numero_de_euler(){return Math.E;}
numero_pi(){return Math.PI;}
numero_aureo(){return 1.6180339887;}
cef(){return 0.0072973525;}
E_elev(ar){var elAi=ar.A.split(',')[1],pa2=Math.exp(ar.A.split(',')[0]);
return (Math.cos(elAi)*pa2)+','+(Math.sin(elAi)*pa2);}
E_elev2(ar){var pa2=Math.exp(ar.A);
return (Math.cos(ar.BI)*pa2)+','+(Math.sin(ar.BI)*pa2);}
sumadirecta(ar){return ((ar.A.split(',')[0]*1+ar.B.split(',')[0]*1)+','+(ar.A.split(',')[1]*1+ar.B.split(',')[1]*1));}
restadirecta(ar){return ((ar.A.split(',')[0]-ar.B.split(',')[0])+','+(ar.A.split(',')[1]-ar.B.split(',')[1]));}
multdir(ar){var [c,d]=ar.A.split(','),[e,f]=ar.B.split(',');
return (((c*e)-(d*f))+','+((c*f)+(d*e)));}
Lnz(ar){var [re,im]=ar.A.split(',');
return Math.log(Math.hypot(re,im))+','+Math.atan2(im,re);}
Lnz2(ar){return Math.log(Math.hypot(ar.A,ar.BI))+','+Math.atan2(ar.BI,ar.A);}
trgfun(ar){var mo=Math.hypot(ar.A,ar.BI),arg=Math.atan2(ar.BI,ar.A);
if(ar.out==='polar'){return (mo+'e^'+arg+'i');}
if(ar.out==='binomica'){if(ar.BI<0){return ar.A+(ar.BI+'i')}else{return ar.A+'+'+ar.BI+'i'};}
if(ar.out==='trigonometrica'){return mo+'cos('+arg+')'+'+'+mo+'sen('+arg+')i';}
}
divdir(ar){var [c,d]=ar.A.split(','),[e,f]=ar.B.split(','),vadz=(e**2)+(f**2);
return (((c*e)+(d*f))/vadz+','+((d*e)-(c*f))/vadz);}
info3(){alert('Los quaterniones son pertenecientes al algebra abstracta con la forma (aR+bI+cJ+dK). \n actualmente funcionan de acuerdo a lo esperado. \n si encuentra errores notificame a traves de "herramientas".');}
info5(){alert('los octaniones pertenesen al sistema de algebra abstracta. son bastante lentos. \n actualmente estan incompletos, si encuentra errores notificame a traves de "herramientas".');}
herram1(){BLOLE=false;Scratch.vm.extensionManager.refreshBlocks();}
herram2(){BLOLE=true;Scratch.vm.extensionManager.refreshBlocks();}
herram3(){opciones=false;Scratch.vm.extensionManager.refreshBlocks();}
herram4(){opciones=true;Scratch.vm.extensionManager.refreshBlocks();}
herram5(){complejos=false;Scratch.vm.extensionManager.refreshBlocks();}
herram6(){complejos=true;Scratch.vm.extensionManager.refreshBlocks();}
herram7(){cuaterniones=false;Scratch.vm.extensionManager.refreshBlocks();}
herram8(){cuaterniones=true;Scratch.vm.extensionManager.refreshBlocks();}
herram9(){octaniones=false;Scratch.vm.extensionManager.refreshBlocks();}
herram10(){octaniones=true;Scratch.vm.extensionManager.refreshBlocks();}
herram0(){Scratch.openWindow('https://linktr.ee/Penta_quark_neutro');}
sucuater(ar){return (ar.a+ar.ab)+','+(ar.i+ar.ib)+','+(ar.j+ar.jb)+','+(ar.k+ar.kb);}
sumcuatco(ar){var a=ar.q.split(','),b=ar.q2.split(',');
return (a[0]*1+b[0]*1)+','+(a[1]*1+b[1]*1)+','+(a[2]*1+b[2]*1)+','+(a[3]*1+b[3]*1);}
mulcuater(ar){return ((ar.a*ar.ab)-(ar.i*ar.ib)-(ar.j*ar.jb)-(ar.k*ar.kb))+','+
((ar.a*ar.ib)+(ar.i*ar.ab)+(ar.j*ar.kb)-(ar.k*ar.jb))+','+
((ar.a*ar.jb)-(ar.i*ar.kb)+(ar.j*ar.ab)+(ar.k*ar.ib))+','+
((ar.a*ar.kb)+(ar.i*ar.jb)-(ar.j*ar.ib)+(ar.k*ar.ab));
}
mulcuatco(ar){var vec1=ar.q.split(','),vec2=ar.q2.split(',');
return ((vec1[0]*vec2[0])-(vec1[1]*vec2[1])-(vec1[2]*vec2[2])-(vec1[3]*vec2[3]))+','+
((vec1[0]*vec2[1])+(vec1[1]*vec2[0])+(vec1[2]*vec2[3])-(vec1[3]*vec2[2]))+','+
((vec1[0]*vec2[2])-(vec1[1]*vec2[3])+(vec1[2]*vec2[0])+(vec1[3]*vec2[1]))+','+
((vec1[0]*vec2[3])+(vec1[1]*vec2[2])-(vec1[2]*vec2[1])+(vec1[3]*vec2[0]));
}
divcuater(ar){var modb=(ar.ab**2)+(ar.ib**2)+(ar.jb**2)+(ar.kb**2);
return ((ar.a*ar.ab)-(ar.i*-ar.ib)-(ar.j*-ar.jb)-(ar.k*-ar.kb))/modb+','+
((ar.a*-ar.ib)+(ar.i*ar.ab)+(ar.j*-ar.kb)-(ar.k*-ar.jb))/modb+','+
((ar.a*-ar.jb)-(ar.i*-ar.kb)+(ar.j*ar.ab)+(ar.k*-ar.ib))/modb+','+
((ar.a*-ar.kb)+(ar.i*-ar.jb)-(ar.j*-ar.ib)+(ar.k*ar.ab))/modb;
}
divcuatco(ar){var vec1=ar.q.split(','),vec2=ar.q2.split(','),modb=(vec2[0]**2)+(vec2[1]**2)+(vec2[2]**2)+(vec2[3]**2);
return ((vec1[0]*vec2[0])-(vec1[1]*-vec2[1])-(vec1[2]*-vec2[2])-(vec1[3]*-vec2[3]))/modb+','+
((vec1[0]*-vec2[1])+(vec1[1]*vec2[0])+(vec1[2]*-vec2[3])-(vec1[3]*-vec2[2]))/modb+','+
((vec1[0]*-vec2[2])-(vec1[1]*-vec2[3])+(vec1[2]*vec2[0])+(vec1[3]*-vec2[1]))/modb+','+
((vec1[0]*-vec2[3])+(vec1[1]*-vec2[2])-(vec1[2]*-vec2[1])+(vec1[3]*vec2[0]))/modb;
}
modcuater(ar){return Math.hypot(ar.a,ar.i,ar.j,ar.k);}
modcuatco(ar){return Math.hypot(ar.q.split(',')[0],ar.q.split(',')[1],ar.q.split(',')[2],ar.q.split(',')[3]);}
conjcuater(ar){return (ar.q.split(',')[0])+','+(ar.q.split(',')[1]*-1)+','+(ar.q.split(',')[2]*-1)+','+(ar.q.split(',')[3]*-1);}
esccuater(ar){return (ar.q.split(',')[0]);}
veccuater(ar){return (ar.q.split(',')[1])+','+(ar.q.split(',')[2])+','+(ar.q.split(',')[3]);}
perte(ar){var dat0=ar.z.toString().split(',').map(k=>k*1);
if(dat0.every(k=>!isNaN(k))){dat0=dat0.length;
if(dat0==2){return 'C'}if(dat0==4){return 'H'}if(dat0==8){return 'O'}if(dat0==16){return 'S'}if(dat0==32){return 'T'}else{return 'R'+dat0}
}else{return '???'}}
part(ar){return (ar.q.split(',')[(ar.z)-1]);}
dimen(ar){return Array(ar.a).fill(ar.b).join()}
dimen2(ar){var dat0=Array(ar.a);return dat0.map(k=>Math.random()*(ar.b-(-ar.b))).join()}
dimenmas(ar){var dat0=ar.a.split(',').map(k=>k*1),dat1=ar.b.split(',').map(k=>k*1),i=0;
if(dat0.length<dat1.length){
while(dat0.length>i){dat0[i]+=dat1[i++]}return dat0.join()}else{
while(dat1.length>i){dat1[i]+=dat0[i++]}return dat1.join()}}
dimenpor(ar){var dat0=ar.a.split(',').map(k=>k*1),dat1=ar.b.split(',').map(k=>k*1),i=0;
if(dat0.length<dat1.length){
while(dat0.length>i){dat0[i]*=dat1[i++]}return dat0.join()}else{
while(dat1.length>i){dat1[i]*=dat0[i++]}return dat1.join()}}
eelevcuater(ar){var rad=Math.hypot(ar.i,ar.j,ar.k),senrad=Math.sin(rad)/rad,elev=Math.exp(ar.a);
return((elev*Math.cos(rad))+','+(senrad*ar.i)*elev+','+(senrad*ar.j)*elev+','+(senrad*ar.k)*elev);}
eelevcuatco(ar){var vec1=ar.q.split(','),rad=Math.hypot(vec1[1],vec1[2],vec1[3]),
senrad=Math.sin(rad)/rad,elev=Math.exp(vec1[0]);
return((elev*Math.cos(rad))+','+(senrad*vec1[1])*elev+','+(senrad*vec1[2])*elev+','+(senrad*vec1[3])*elev);}
Lncuater(ar){var modq=Math.hypot(ar.a,ar.i,ar.j,ar.k),
modv=Math.hypot(ar.i,ar.j,ar.k),cdaq=Math.acos(ar.a/modq);
return (Math.log(modq)+','+(ar.i/modv*cdaq)+','+(ar.j/modv*cdaq)+','+(ar.k/modv*cdaq));}
Lncuatco(ar){var vec1=ar.a.split(','),
modq=Math.hypot(vec1[0],vec1[1],vec1[2],vec1[3]),
modv=Math.hypot(vec1[1],vec1[2],vec1[3]),
cdaq=Math.acos(vec1[0]/modq);
return (Math.log(modq)+','+(vec1[1]/modv*cdaq)+','+(vec1[2]/modv*cdaq)+','+(vec1[3]/modv*cdaq));}
vercuatco(ar){var vec1=ar.a.split(','),
mod=Math.sqrt(Math.pow(vec1[0],2)+Math.pow(vec1[1],2)+Math.pow(vec1[2],2)+Math.pow(vec1[3],2));
return ((vec1[0]/mod)+','+(vec1[1]/mod)+','+(vec1[2]/mod)+','+(vec1[3]/mod));}
vercuater(ar){var mod=Math.hypot(ar.a,ar.i,ar.j,ar.k);
return ((ar.a/mod)+','+(ar.i/mod)+','+(ar.j/mod)+','+(ar.k/mod));}
suoctonion(ar){return (ar.a1+ar.b1)+','+(ar.a2+ar.b2)+','+(ar.a3+ar.b3)+','+(ar.a4+ar.b4)+','+(ar.a5+ar.b5)+','+(ar.a6+ar.b6)+','+(ar.a7+ar.b7)+','+(ar.a8+ar.b8);}
suoctonionrap(ar){var vec1=ar.q.split(','),vec2=ar.w.split(',');
return (vec1[0]*1+vec2[0]*1)+','+(vec1[1]*1+vec2[1]*1)+','+(vec1[2]*1+vec2[2]*1)+','+(vec1[3]*1+vec2[3]*1)+','+(vec1[4]*1+vec2[4]*1)+','+(vec1[5]*1+vec2[5]*1)+','+(vec1[6]*1+vec2[6]*1)+','+(vec1[7]*1+vec2[7]*1);}
muloctonion(ar){return ((ar.a1*ar.b1)-(ar.a2*ar.b2)-(ar.a3*ar.b3)-(ar.a4*ar.b4)-(ar.a5*ar.b5)-(ar.a6*ar.b6)-(ar.a7*ar.b7)-(ar.a8*ar.b8))+','+
((ar.a1*ar.b2)+(ar.a2*ar.b1)-(ar.a3*ar.b4)+(ar.a4*ar.b3)-(ar.a5*ar.b6)+(ar.a6*ar.b5)+(ar.a7*ar.b8)-(ar.a8*ar.b7))+','+
((ar.a1*ar.b3)+(ar.a2*ar.b4)+(ar.a3*ar.b1)-(ar.a4*ar.b2)-(ar.a5*ar.b7)-(ar.a6*ar.b8)+(ar.a7*ar.b5)+(ar.a8*ar.b6))+','+
((ar.a1*ar.b4)-(ar.a2*ar.b3)+(ar.a3*ar.b2)+(ar.a4*ar.b1)-(ar.a5*ar.b8)+(ar.a6*ar.b7)-(ar.a7*ar.b6)+(ar.a8*ar.b5))+','+
((ar.a1*ar.b5)+(ar.a2*ar.b6)+(ar.a3*ar.b7)+(ar.a4*ar.b8)+(ar.a5*ar.b1)-(ar.a6*ar.b2)-(ar.a7*ar.b3)-(ar.a8*ar.b4))+','+
((ar.a1*ar.b6)-(ar.a2*ar.b5)+(ar.a3*ar.b8)-(ar.a4*ar.b7)+(ar.a5*ar.b2)+(ar.a6*ar.b1)+(ar.a7*ar.b4)-(ar.a8*ar.b3))+','+
((ar.a1*ar.b7)-(ar.a2*ar.b8)-(ar.a3*ar.b5)+(ar.a4*ar.b6)+(ar.a5*ar.b3)-(ar.a6*ar.b4)+(ar.a7*ar.b1)+(ar.a8*ar.b2))+','+
((ar.a1*ar.b8)+(ar.a2*ar.b7)-(ar.a3*ar.b6)-(ar.a4*ar.b5)+(ar.a5*ar.b4)+(ar.a6*ar.b3)-(ar.a7*ar.b2)+(ar.a8*ar.b1));
}
muloctonionrap(ar){var vec1=ar.q.split(','),vec2=ar.w.split(',');
return ((vec1[0]*vec2[0])-(vec1[1]*vec2[1])-(vec1[2]*vec2[2])-(vec1[3]*vec2[3])-(vec1[4]*vec2[4])-(vec1[5]*vec2[5])-(vec1[6]*vec2[6])-(vec1[7]*vec2[7]))+','+
((vec1[0]*vec2[1])+(vec1[1]*vec2[0])-(vec1[2]*vec2[3])+(vec1[3]*vec2[2])-(vec1[4]*vec2[5])+(vec1[5]*vec2[4])+(vec1[6]*vec2[7])-(vec1[7]*vec2[6]))+','+
((vec1[0]*vec2[2])+(vec1[1]*vec2[3])+(vec1[2]*vec2[0])-(vec1[3]*vec2[1])-(vec1[4]*vec2[6])-(vec1[5]*vec2[7])+(vec1[6]*vec2[4])+(vec1[7]*vec2[5]))+','+
((vec1[0]*vec2[3])-(vec1[1]*vec2[2])+(vec1[2]*vec2[1])+(vec1[3]*vec2[0])-(vec1[4]*vec2[7])+(vec1[5]*vec2[6])-(vec1[6]*vec2[5])+(vec1[7]*vec2[4]))+','+
((vec1[0]*vec2[4])+(vec1[1]*vec2[5])+(vec1[2]*vec2[6])+(vec1[3]*vec2[7])+(vec1[4]*vec2[0])-(vec1[5]*vec2[1])-(vec1[6]*vec2[2])-(vec1[7]*vec2[3]))+','+
((vec1[0]*vec2[5])-(vec1[1]*vec2[4])+(vec1[2]*vec2[7])-(vec1[3]*vec2[6])+(vec1[4]*vec2[1])+(vec1[5]*vec2[0])+(vec1[6]*vec2[3])-(vec1[7]*vec2[2]))+','+
((vec1[0]*vec2[6])-(vec1[1]*vec2[7])-(vec1[2]*vec2[4])+(vec1[3]*vec2[5])+(vec1[4]*vec2[2])-(vec1[5]*vec2[3])+(vec1[6]*vec2[0])+(vec1[7]*vec2[1]))+','+
((vec1[0]*vec2[7])+(vec1[1]*vec2[6])-(vec1[2]*vec2[5])-(vec1[3]*vec2[4])+(vec1[4]*vec2[3])+(vec1[5]*vec2[2])-(vec1[6]*vec2[1])+(vec1[7]*vec2[0]));
}
divoctonionrap(ar){var vec1=ar.q.split(','),vec2=ar.w.split(','),
dat8=Math.pow(vec2[0],2)+Math.pow(vec2[1],2)+Math.pow(vec2[2],2)+Math.pow(vec2[3],2)+Math.pow(vec2[4],2)+Math.pow(vec2[5],2)+Math.pow(vec2[6],2)+Math.pow(vec2[7],2);
return ((vec1[0]*vec2[0])-(vec1[1]*-vec2[1])-(vec1[2]*-vec2[2])-(vec1[3]*-vec2[3])-(vec1[4]*-vec2[4])-(vec1[5]*-vec2[5])-(vec1[6]*-vec2[6])-(vec1[7]*-vec2[7]))/dat8+','+
((vec1[0]*-vec2[1])+(vec1[1]*vec2[0])-(vec1[2]*-vec2[3])+(vec1[3]*-vec2[2])-(vec1[4]*-vec2[5])+(vec1[5]*-vec2[4])+(vec1[6]*-vec2[7])-(vec1[7]*-vec2[6]))/dat8+','+
((vec1[0]*-vec2[2])+(vec1[1]*-vec2[3])+(vec1[2]*vec2[0])-(vec1[3]*-vec2[1])-(vec1[4]*-vec2[6])-(vec1[5]*-vec2[7])+(vec1[6]*-vec2[4])+(vec1[7]*-vec2[5]))/dat8+','+
((vec1[0]*-vec2[3])-(vec1[1]*-vec2[2])+(vec1[2]*-vec2[1])+(vec1[3]*vec2[0])-(vec1[4]*-vec2[7])+(vec1[5]*-vec2[6])-(vec1[6]*-vec2[5])+(vec1[7]*-vec2[4]))/dat8+','+
((vec1[0]*-vec2[4])+(vec1[1]*-vec2[5])+(vec1[2]*-vec2[6])+(vec1[3]*-vec2[7])+(vec1[4]*vec2[0])-(vec1[5]*-vec2[1])-(vec1[6]*-vec2[2])-(vec1[7]*-vec2[3]))/dat8+','+
((vec1[0]*-vec2[5])-(vec1[1]*-vec2[4])+(vec1[2]*-vec2[7])-(vec1[3]*-vec2[6])+(vec1[4]*-vec2[1])+(vec1[5]*vec2[0])+(vec1[6]*-vec2[3])-(vec1[7]*-vec2[2]))/dat8+','+
((vec1[0]*-vec2[6])-(vec1[1]*-vec2[7])-(vec1[2]*-vec2[4])+(vec1[3]*-vec2[5])+(vec1[4]*-vec2[2])-(vec1[5]*-vec2[3])+(vec1[6]*vec2[0])+(vec1[7]*-vec2[1]))/dat8+','+
((vec1[0]*-vec2[7])+(vec1[1]*-vec2[6])-(vec1[2]*-vec2[5])-(vec1[3]*-vec2[4])+(vec1[4]*-vec2[3])+(vec1[5]*-vec2[2])-(vec1[6]*-vec2[1])+(vec1[7]*vec2[0]))/dat8;
}
divoctonion(ar){var dat8=Math.pow(ar.b1,2)+Math.pow(ar.b2,2)+Math.pow(ar.b3,2)+Math.pow(ar.b4,2)+Math.pow(ar.b5,2)+Math.pow(ar.b6,2)+Math.pow(ar.b7,2)+Math.pow(ar.b8,2);
return ((ar.a1*ar.b1)-(ar.a2*-ar.b2)-(ar.a3*-ar.b3)-(ar.a4*-ar.b4)-(ar.a5*-ar.b5)-(ar.a6*-ar.b6)-(ar.a7*-ar.b7)-(ar.a8*-ar.b8))/dat8+','+
((ar.a1*-ar.b2)+(ar.a2*ar.b1)-(ar.a3*-ar.b4)+(ar.a4*-ar.b3)-(ar.a5*-ar.b6)+(ar.a6*-ar.b5)+(ar.a7*-ar.b8)-(ar.a8*-ar.b7))/dat8+','+
((ar.a1*-ar.b3)+(ar.a2*-ar.b4)+(ar.a3*ar.b1)-(ar.a4*-ar.b2)-(ar.a5*-ar.b7)-(ar.a6*-ar.b8)+(ar.a7*-ar.b5)+(ar.a8*-ar.b6))/dat8+','+
((ar.a1*-ar.b4)-(ar.a2*-ar.b3)+(ar.a3*-ar.b2)+(ar.a4*ar.b1)-(ar.a5*-ar.b8)+(ar.a6*-ar.b7)-(ar.a7*-ar.b6)+(ar.a8*-ar.b5))/dat8+','+
((ar.a1*-ar.b5)+(ar.a2*-ar.b6)+(ar.a3*-ar.b7)+(ar.a4*-ar.b8)+(ar.a5*ar.b1)-(ar.a6*-ar.b2)-(ar.a7*-ar.b3)-(ar.a8*-ar.b4))/dat8+','+
((ar.a1*-ar.b6)-(ar.a2*-ar.b5)+(ar.a3*-ar.b8)-(ar.a4*-ar.b7)+(ar.a5*-ar.b2)+(ar.a6*ar.b1)+(ar.a7*-ar.b4)-(ar.a8*-ar.b3))/dat8+','+
((ar.a1*-ar.b7)-(ar.a2*-ar.b8)-(ar.a3*-ar.b5)+(ar.a4*-ar.b6)+(ar.a5*-ar.b3)-(ar.a6*-ar.b4)+(ar.a7*ar.b1)+(ar.a8*-ar.b2))/dat8+','+
((ar.a1*-ar.b8)+(ar.a2*-ar.b7)-(ar.a3*-ar.b6)-(ar.a4*-ar.b5)+(ar.a5*-ar.b4)+(ar.a6*-ar.b3)-(ar.a7*-ar.b2)+(ar.a8*ar.b1))/dat8;
}
conoctonion(ar){var vec=ar.q.split(',');
return (vec[0])+','+(vec[1]*-1)+','+(vec[2]*-1)+','+(vec[3]*-1)+','+(vec[4]*-1)+','+(vec[5]*-1)+','+(vec[6]*-1)+','+(vec[7]*-1);}
modoctonion(ar){var vec1=ar.q.split(',');
return Math.sqrt(Math.pow(vec1[0],2)+Math.pow(vec1[1],2)+Math.pow(vec1[2],2)+Math.pow(vec1[3],2)+Math.pow(vec1[4],2)+Math.pow(vec1[5],2)+Math.pow(vec1[6],2)+Math.pow(vec1[7],2));}
fix(ar){if(ar.k>=0){return ar.z.toFixed(ar.k)*1;}else{return ar.z.toFixed(-ar.k)*1;}}

GammaI(ar){
var Z1=unosobrez(ar.A*10,ar.BI*10),Z2=[((ar.A*12)-(Z1[0])),((ar.BI*12)-(Z1[1]))],Z3=unosobrez(Z2[0],Z2[1]);
var Z4=[((ar.A+(Z3[0]))*(1/euler)),((ar.BI+(Z3[1]))*(1/euler))],Z5=[Math.log(Math.hypot(Z4[0],Z4[1])),Math.atan2(Z4[1],Z4[0])];
var img3=((ar.A*Z5[1])+(Z5[0]*ar.BI)),ARC=unosobrez(ar.A,ar.BI);
var dat1=Math.atan2((ARC[1]*6.283185307179586),(ARC[0]*6.283185307179586)),dat2=Math.pow(Math.hypot((ARC[0]*6.283185307179586),(ARC[1]*6.283185307179586)),0.5),pa3=Math.exp((ar.A*Z5[0])-(ar.BI*Z5[1]));
var Z6=[(Math.cos(img3)*pa3),(Math.sin(img3)*pa3)],Z7=[(Math.cos(((dat1)/2)))*dat2,(Math.sin(((dat1)/2)))*dat2];
return (((Z7[0]*Z6[0])-(Z7[1]*Z6[1]))+','+((Z7[0]*Z6[1])+(Z6[0]*Z7[1])));
}
GammaI2(ar){let vec0=ar.A.split(',').map(x=>x*1);
var Z1=unosobrez(vec0[0]*10,vec0[1]*10),Z2=[((vec0[0]*12)-(Z1[0])),((vec0[1]*12)-(Z1[1]))],Z3=unosobrez(Z2[0],Z2[1]);
var Z4=[((vec0[0]+(Z3[0]))*(1/euler)),((vec0[1]+(Z3[1]))*(1/euler))],Z5=[Math.log(Math.hypot(Z4[0],Z4[1])),Math.atan2(Z4[1],Z4[0])];
var img3=((vec0[0]*Z5[1])+(Z5[0]*vec0[1])),ARC=unosobrez(vec0[0],vec0[1]);
var dat1=Math.atan2((ARC[1]*6.283185307179586),(ARC[0]*6.283185307179586)),dat2=Math.pow(Math.hypot((ARC[0]*6.283185307179586),(ARC[1]*6.283185307179586)),0.5),pa3=Math.exp((vec0[0]*Z5[0])-(vec0[1]*Z5[1]));
var Z6=[(Math.cos(img3)*pa3),(Math.sin(img3)*pa3)],Z7=[(Math.cos(((dat1)/2)))*dat2,(Math.sin(((dat1)/2)))*dat2];
return (((Z7[0]*Z6[0])-(Z7[1]*Z6[1]))+','+((Z7[0]*Z6[1])+(Z6[0]*Z7[1])));
}
sencz(ar){let z0=ar.A.split(','),z1=expz(multz(z0,[0,1])),z2=expz(multz(z0,[0,-1]));
return divz([z1[0]-z2[0],z1[1]-z2[1]],[0,2]).toString()}
coscz(ar){let z0=ar.A.split(','),z1=expz(multz(z0,[0,1])),z2=expz(multz(z0,[0,-1]));
return divz([z1[0]+z2[0],z1[1]+z2[1]],[2,0]).toString()}
tancz(ar){let z0=ar.A.split(','),z1=expz(multz(z0,[0,1])),z2=expz(multz(z0,[0,-1]));
return divz(divz([z1[0]-z2[0],z1[1]-z2[1]],[0,2]),divz([z1[0]+z2[0],z1[1]+z2[1]],[2,0])).toString()}
arcsencz(ar){let z0=ar.A.split(','),z1=multz(z0,z0),z2=multz(z0,[0,1]);
z1=zelevN([1-z1[0],-z1[1]],0.5);z1=[z1[0]+z2[0],z1[1]+z2[1]];
return multz([Math.log(Math.hypot(z1[0],z1[1])),Math.atan2(z1[1],z1[0])],[0,-1]).toString()}
arccoscz(ar){let z0=ar.A.split(','),z1=multz(z0,z0);
z1=multz(zelevN([1-z1[0],-z1[1]],0.5),[0,1]);z1=[+z0[0]+z1[0],+z0[1]+z1[1]];
return multz([Math.log(Math.hypot(z1[0],z1[1])),Math.atan2(z1[1],z1[0])],[0,-1]).toString()}
arctancz(ar){let z0=ar.A.split(','),z1=divz([-z0[0],1-z0[1]],[+z0[0],1+(+z0[1])]);
return multz([Math.log(Math.hypot(z1[0],z1[1])),Math.atan2(z1[1],z1[0])],[0,-0.5]).toString()}
}Scratch.extensions.register(new Complejospentaquark());})(Scratch);