//ⁿ⁰¹²³⁴⁵⁶⁷⁸⁹ΔΘΛΞΣאΨΩαφ∞≈≡↑←→↓↔↕∂∏√ƍ•ₓₔₐₑₒ∈∨∋⇒⇔∴∠⌒∫×
(function(Scratch) {'use strict';
const txt=Scratch.ArgumentType.STRING;const reportero=Scratch.BlockType.REPORTER;const numero=Scratch.ArgumentType.NUMBER;const vgbb=Scratch.BlockType.BUTTON;
const evaluador=Scratch.BlockType.BOOLEAN;const ops=true;const cons=true;const Ext=true;const vect=true;
if(!Scratch.extensions.unsandboxed){throw new Error('This extension must run unsandboxed');}
class minmatespentaquark{getInfo(){return{id:'minmatespentaquark',name:'Pequeñas matematicas',color1:'#555555',color2:'#ffff00',color3:'#00ff00',blocks:[
//circulo,anillo,bloque.
{func:'herram0',blockType:vgbb,text:'Redes pentaquark',},
{blockType:"label",text:"Operadores",},//--------------------------------------------------------------------------------------------------------------------------
 {func:'herram1',blockType:vgbb,hideFromPalette:!ops,text:'mostrar Operadores',},{func:'herram2',blockType:vgbb,hideFromPalette:ops,text:'ocultar Operadores',},
{opcode:'delta_dirac',blockType:reportero,text:'δ a[a]x[x]',hideFromPalette:ops,arguments:{a:{type:numero,defaultValue:'1'},x:{type:numero,defaultValue:'1'}}},
{opcode:'signo_x',blockType:reportero,text:'sgn [x]',hideFromPalette:ops,arguments:{x:{type:numero,defaultValue:'1'}}},
{opcode:'rampa_de_x',blockType:reportero,text:'rampa [x]',hideFromPalette:ops,arguments:{x:{type:numero,defaultValue:'1'}}},
{opcode:'sen_prob',blockType:reportero,text:'caidasen [x]',hideFromPalette:ops,arguments:{x:{type:numero,defaultValue:'1'}}},
{opcode:'tendlim',blockType:reportero,text:'max [x] lim+[y]lim-[z]',hideFromPalette:ops,arguments:{x:{type:numero,defaultValue:'1'},y:{type:numero,defaultValue:'10'},z:{type:numero,defaultValue:'-10'}}},
{opcode:'tendlim2',blockType:reportero,text:'max [x] lim+[y]',hideFromPalette:ops,arguments:{x:{type:numero,defaultValue:'1'},y:{type:numero,defaultValue:'10'}}},
{opcode:'tendlim3',blockType:reportero,text:'max [x] lim-[z]',hideFromPalette:ops,arguments:{x:{type:numero,defaultValue:'1'},z:{type:numero,defaultValue:'-10'}}},
{opcode:'prsx_y',blockType:reportero,text:'[x]es % de[y]',hideFromPalette:ops,arguments:{x:{type:numero,defaultValue:'1'},y:{type:numero,defaultValue:'10'}}},
{opcode:'vacio',blockType:evaluador,text:'Ø[a]?',hideFromPalette:ops,arguments:{a:{type:Scratch.ArgumentType.STRING,defaultValue:''}}},
{opcode:'divisorinfinito',blockType:reportero,text:'[a]/[b] 0=xlim->0,∞=xlim->∞',hideFromPalette:ops,arguments:{a:{type:numero,defaultValue:'0'},b:{type:numero,defaultValue:'0'}}},
{opcode:'neg',blockType:reportero,text:'-[x]',hideFromPalette:ops,arguments:{x:{type:numero,defaultValue:'1'}}},
{opcode:'neg2',blockType:evaluador,text:'¬[x]',hideFromPalette:ops,arguments:{x:{type:Scratch.ArgumentType.BOOLEAN,defaultValue:''}}},
{opcode:'devo',blockType:evaluador,text:'[x]',hideFromPalette:ops,arguments:{x:{type:txt,defaultValue:''}}},
{opcode:'fix',blockType:reportero,text:'redondeo[z] limite[k]',hideFromPalette:ops,arguments:{z:{type:numero,defaultValue:'1.9389834346'},k:{type:numero,defaultValue:'5'}}},
{opcode:'expo',blockType:reportero,text:'[z]^[k]',hideFromPalette:ops,arguments:{z:{type:numero,defaultValue:'1.9'},k:{type:numero,defaultValue:'5'}}},
{opcode:'sinc',blockType:reportero,text:'sincN[k]',hideFromPalette:ops,arguments:{k:{type:numero,defaultValue:'5'}}},
{opcode:'escalon',blockType:reportero,text:'Escalon[k]',hideFromPalette:ops,arguments:{k:{type:numero,defaultValue:'5'}}},
{opcode:'fract',blockType:reportero,text:'fract[k]',hideFromPalette:ops,arguments:{k:{type:numero,defaultValue:'5.5656'}}},
{opcode:'enter',blockType:reportero,text:'int[k]',hideFromPalette:ops,arguments:{k:{type:numero,defaultValue:'5.5656'}}},
{opcode:'Logx',blockType:reportero,text:'Log b[k] n[x]',hideFromPalette:ops,arguments:{k:{type:numero,defaultValue:'100'},x:{type:numero,defaultValue:'10000'}}},
{opcode:'fact',blockType:reportero,text:'[k]!',hideFromPalette:ops,arguments:{k:{type:numero,defaultValue:'5'}}},
{opcode:'gamma',blockType:reportero,text:'Γ[k]≈',hideFromPalette:ops,arguments:{k:{type:numero,defaultValue:'5'}}},
{opcode:'mei',blockType:evaluador,text:'[a]≥[b]',hideFromPalette:ops,arguments:{a:{type:numero,defaultValue:'2'},b:{type:numero,defaultValue:'5'}}},
{opcode:'mnei',blockType:evaluador,text:'[a]≤[b]',hideFromPalette:ops,arguments:{a:{type:numero,defaultValue:'2'},b:{type:numero,defaultValue:'5'}}},
{opcode:'ni',blockType:reportero,text:'[a]≠[b]',hideFromPalette:ops,arguments:{a:{type:numero,defaultValue:'2'},b:{type:numero,defaultValue:'5'}}},
{opcode:'tetra',blockType:evaluador,text:'[a]↑↑[b]',hideFromPalette:ops,arguments:{a:{type:numero,defaultValue:'3'},b:{type:numero,defaultValue:'3'}}},{blockType:"label",text:"Azar",hideFromPalette:ops},//----------------------------------------------------------------------------------------------------------------------------------
{opcode:'prse',blockType:evaluador,text:'[x]%',hideFromPalette:ops,arguments:{x:{type:numero,defaultValue:'0.34'}}},
{opcode:'prseve',blockType:reportero,text:'eventos[x]unif%',hideFromPalette:ops,arguments:{x:{type:numero,defaultValue:'5'}}},
{blockType:"label",text:"constantes",},//----------------------------------------------------------------------------------------------------------------------------------
 {func:'herram3',blockType:vgbb,hideFromPalette:!cons,text:'mostrar constantes',},{func:'herram4',blockType:vgbb,hideFromPalette:cons,text:'ocultar constantes',},
{opcode:'c',blockType:reportero,text:'c',hideFromPalette:cons,disableMonitor:1},{opcode:'π',blockType:reportero,text:'π',hideFromPalette:cons,disableMonitor:1},
{opcode:'φ',blockType:reportero,text:'φ',hideFromPalette:cons,disableMonitor:1},{opcode:'e',blockType:reportero,text:'e',hideFromPalette:cons,disableMonitor:1},
{opcode:'G',blockType:reportero,text:'G',hideFromPalette:cons,disableMonitor:1},{opcode:'h',blockType:reportero,text:'h',hideFromPalette:cons,disableMonitor:1},
{opcode:'α',blockType:reportero,text:'α',hideFromPalette:cons,disableMonitor:1},{opcode:'g',blockType:reportero,text:'g',hideFromPalette:cons,disableMonitor:1},
{opcode:'Na',blockType:reportero,text:'Na',hideFromPalette:cons,disableMonitor:1},{opcode:'E',blockType:reportero,text:'E',hideFromPalette:cons,disableMonitor:1,},
{opcode:'φ0',blockType:reportero,text:'φ0',hideFromPalette:cons,disableMonitor:1,},{opcode:'µ0',blockType:reportero,text:'µ0',hideFromPalette:cons,disableMonitor:1},
{opcode:'inf0',blockType:reportero,text:'+∞',hideFromPalette:cons,disableMonitor:1,},{opcode:'inf1',blockType:reportero,text:'-∞',hideFromPalette:cons,disableMonitor:1,},
{opcode:'γ',blockType:reportero,text:'γ',hideFromPalette:cons,disableMonitor:1},
{blockType:"label",text:"trabajando vectores",},//-----------------------------------------------------------------------------------------------------------------------
 {func:'herram7',blockType:vgbb,hideFromPalette:!vect,text:'mostrar vectores',},{func:'herram8',blockType:vgbb,hideFromPalette:vect,text:'ocultar vectores',},
{opcode:'prodpunto',blockType:reportero,text:'[a]•[b]',hideFromPalette:vect,arguments:{a:{type:txt,defaultValue:'1,5'},b:{type:txt,defaultValue:'2,6'}}},
{opcode:'prodcruz',blockType:reportero,text:'[a]×[b]',hideFromPalette:vect,arguments:{a:{type:txt,defaultValue:'1,5,8'},b:{type:txt,defaultValue:'2,6,9'}}},
{opcode:'norma',blockType:reportero,text:'||[a]||',hideFromPalette:vect,arguments:{a:{type:txt,defaultValue:'1,5,8'}}},
{opcode:'escvec',blockType:reportero,text:'V[a]*E[b]',hideFromPalette:vect,arguments:{a:{type:txt,defaultValue:'1,5,8'},b:{type:numero,defaultValue:'2'}}},
{opcode:'vector',blockType:evaluador,text:'¿V[a]?',hideFromPalette:vect,arguments:{a:{type:Scratch.ArgumentType.STRING,defaultValue:'4,4'}}},
{opcode:'vmv',blockType:reportero,text:'[a]+[b]',hideFromPalette:vect,arguments:{a:{type:txt,defaultValue:'1,5,8'},b:{type:txt,defaultValue:'2,5,4'}}},
{opcode:'vnv',blockType:reportero,text:'[a]-[b]',hideFromPalette:vect,arguments:{a:{type:txt,defaultValue:'1,5,8'},b:{type:txt,defaultValue:'2,5,4'}}},
{opcode:'prt',blockType:reportero,text:'V[a] parte[b]',hideFromPalette:vect,arguments:{a:{type:txt,defaultValue:'1,5,8'},b:{type:numero,defaultValue:'2'}}},
{opcode:'und',blockType:reportero,text:'unir[a],[b]',hideFromPalette:vect,arguments:{a:{type:txt,defaultValue:'1'},b:{type:txt,defaultValue:'2'}}},
{opcode:'rx',blockType:reportero,text:'[a]∈Rⁿ',hideFromPalette:vect,arguments:{a:{type:txt,defaultValue:'1,4'}}},
{opcode:'producto_Kronecker',blockType:reportero,text:'[a]⊗[b]',hideFromPalette:vect,arguments:{a:{type:txt,defaultValue:'1,5'},b:{type:txt,defaultValue:'2,5'}}},
{opcode:'shift',blockType:reportero,text:'Shift[a]',hideFromPalette:vect,arguments:{a:{type:txt,defaultValue:'1,5,8'}}},
{opcode:'pop',blockType:reportero,text:'pop[a]',hideFromPalette:vect,arguments:{a:{type:txt,defaultValue:'1,5,8'}}},
{opcode:'rem',blockType:reportero,text:'remplazar p[a] de[b] con[c]',hideFromPalette:vect,arguments:{a:{type:txt,defaultValue:'1'},b:{type:txt,defaultValue:'1,4,8'},c:{type:txt,defaultValue:'10'}}},
],};}
//herramientas----------------------------------------------------------------------------------------------------------
herram0(){Scratch.openWindow('https://linktr.ee/Penta_quark_neutro');}
herram1(){ops=false;Scratch.vm.extensionManager.refreshBlocks();}
herram2(){ops=true;Scratch.vm.extensionManager.refreshBlocks();}
herram3(){cons=false;Scratch.vm.extensionManager.refreshBlocks();}
herram4(){cons=true;Scratch.vm.extensionManager.refreshBlocks();}
herram5(){Ext=false;Scratch.vm.extensionManager.refreshBlocks();}
herram6(){Ext=true;Scratch.vm.extensionManager.refreshBlocks();}
herram7(){vect=false;Scratch.vm.extensionManager.refreshBlocks();}
herram8(){vect=true;Scratch.vm.extensionManager.refreshBlocks();}
//minimas matematicas----------------------------------------------------------------------------------------------------------
delta_dirac(ar){if(ar.a==ar.x){return 1/0;}else{return 0;}}
signo_x(ar){return Math.sign(ar.x)}
rampa_de_x(ar){if(ar.x<0){return 0;}else{return ar.x}}
sen_prob(ar){return ((Math.pow(Math.sin(ar.x),2)+1)/(Math.pow(Math.pow(ar.x,2),1/4)+1))*100;}
tendlim(ar){if(ar.x>=ar.y){return ar.y;}else{if(ar.x<=ar.z){return ar.z;}else{return ar.x;}}}
tendlim2(ar){if(ar.x>=ar.y){return ar.y;}else{return ar.x}}
tendlim3(ar){if(ar.x<=ar.z){return ar.z;}else{return ar.x}}
prsx_y(ar){return (ar.x/ar.y)*100;}
vacio(ar){return (ar.a===''||ar.a==null);}
divisorinfinito(ar){var infinity=1/0;
if(ar.a==0 && ar.b==0){return 1;}else{if(ar.a==infinity && ar.b==infinity || ar.a==-infinity && ar.b==-infinity){return 1;}else{
if(ar.a==-infinity && ar.b==infinity || ar.a==infinity && ar.b==-infinity){return -1;}else{if(ar.a==infinity && ar.b==0 || ar.a==-infinity && ar.b==0){return 0;}else{
if(ar.a==0 && ar.b==infinity || ar.a==0 && ar.b==-infinity){return 0;}else{return ar.a/ar.b;}}}}}}
neg(ar){return -ar.x;}
neg2(ar){return !(ar.x==true);}
devo(ar){return ar.x;}
fix(ar){if(ar.k>=0){return ar.z.toFixed(ar.k*1);}else{return ar.z.toFixed(-ar.k*1);}}
expo(ar){return Math.pow(ar.z,ar.k);}
sinc(ar){if(ar.k==0){return 1;}else{return Math.sin(3.1415926535*ar.k)/(3.1415926535*ar.k);}}
escalon(ar){if(ar.k>=0){return 1;}else{return 0;}}
fract(ar){if(ar.k>=0){return ar.k-Math.floor(ar.k);}else{return ar.k-Math.ceil(ar.k);}}
enter(ar){return Math.trunc(ar.k);}
Logx(ar){return Math.log(ar.x)/Math.log(ar.k);}
fact(ar){let num=1;let num2=1;
for(num=1;num<=ar.k;num++){num2=num2*num;}return num2;}
gamma(ar){return Math.pow(2*3.14159265358979/ar.k,1/2)*Math.pow((1/2.71828182845905*(ar.k+(1/(12*ar.k-(1/(10*ar.k)))))),ar.k);}
mei(ar){return (ar.a>=ar.b);}
mnei(ar){return (ar.a<=ar.b);}
ni(ar){return (ar.a!=ar.b);}
tetra(ar){var dat0=ar.a;var i=0;var n=ar.b-1;while(i<n){dat0=ar.a**dat0;i++;}
return dat0;}
//constantes----------------------------------------------------------------------------------------------------------
c(){return 299792458;}
π(){return 3.1415926535;}
φ(){return 1.6118033988;}
e(){return 2.7182818284;}
G(){return 6.67408*Math.pow(10,-11);}
h(){return 6.62607004*Math.pow(10,-34)}
α(){return 0.0072973525;}
g(){return 9.80665;}
Na(){return 6.02214129*Math.pow(10,23);}
E(){return 1.602176565*Math.pow(10,-19);}
φ0(){return 2.067833758*Math.pow(10,-15);}
µ0(){return 0.000001256637061;}
inf0(){return 1/0;}
inf1(){return -(1/0);}
γ(){return 0.577215664901632;}
//vectores----------------------------------------------------------------------------------------------------------
prodpunto(ar){if(ar.a.includes(',')&&ar.b.includes(',')){var vec1=Array.from(ar.a.split(','));var vec2=Array.from(ar.b.split(','));
if(vec1.lenght=vec2.length){var i=0;var fin=0;
while(i<(vec1.length)){fin=fin+((vec1[i]*1)*(vec2[i]*1));
i=i+1;}}else{return 'vectores no sumables';}
return fin*1;}else{return 'no valido';}}
prodcruz(ar){if(ar.a.includes(',')&&ar.b.includes(',')){var vec1=Array.from(ar.a.split(','));var vec2=Array.from(ar.b.split(','));
if((vec1.lenght=3)&&(vec2.length=3)){return (vec1[1]*vec2[2]-vec1[2]*vec2[1])+','+(vec1[2]*vec2[0]-vec1[0]*vec2[2])+','+(vec1[0]*vec2[1]-vec1[1]*vec2[0]);}}else{return 'vector R3 requerido';}}
norma(ar){var vec1=Array.from(ar.a.split(','));var i=0;var fin=0;
while(i<(vec1.length)){fin=fin+(Math.pow(vec1[i]*1,2));i++;}
return Math.pow(fin,0.5);}
escvec(ar){var vec1=Array.from(ar.a.split(','));var i=1;var fin=vec1[0]*ar.b;
while(i<(vec1.length)){fin=fin+','+vec1[i]*ar.b;i++;}
return fin;}
vector(ar){var dat0=ar.a.toString();
if(dat0.includes(',')){var vec1=Array.from(ar.a.split(','));var i=0;var fin=0;
while(i<(vec1.length)){fin=fin+vec1[i]*1;i++;}
return ((fin/fin)==1);}else{return false;}}
vmv(ar){var vec1=Array.from(ar.a.split(','));var vec2=Array.from(ar.b.split(','));var i=1;var fin=vec1[0]*1+vec2[0]*1;
while(i<(vec1.length)){fin=fin+','+(vec1[i]*1+vec2[i]*1);i++;}
return fin;}
prt(ar){return ar.a.split(',')[ar.b-1]}
und(ar){return ar.a+','+ar.b;}
rx(ar){var vec1=Array.from(ar.a.split(','));
return vec1.length;}
vnv(ar){var vec1=Array.from(ar.a.split(','));var vec2=Array.from(ar.b.split(','));var i=1;var fin=vec1[0]*1-vec2[0]*1;
while(i<(vec1.length)){fin=fin+','+(vec1[i]*1-vec2[i]*1);i++;}
return fin;}
producto_Kronecker(ar){function escvec(vec,esc){var vec1=Array.from(vec.split(','));var i=1;var fin=vec1[0]*esc;while(i<(vec1.length)){fin=fin+','+vec1[i]*esc;i++;}
return fin;}
var vec2=Array.from(ar.a.split(','));var j=1;var out=escvec(ar.b,vec2[0]);
while(j<(vec2.length)){out=out+','+escvec(ar.b,vec2[j]);j++;}
return out;}
shift(ar){var vec1=Array.from(ar.a.split(','));
vec1.shift();
return vec1.toString();}
pop(ar){var vec1=Array.from(ar.a.split(','));
vec1.pop();
return vec1.toString();}
rem(ar){var vec1=Array.from(ar.b.split(','));vec1[ar.a-1]=ar.c;
return vec1.toString();}
//Azar----------------------------------------------------------------------------------------------------------
prse(ar){return (ar.x>Math.random());}
prseve(ar){return 1/ar.x;}
  }
  Scratch.extensions.register(new minmatespentaquark());
})(Scratch);