(function(Scratch) {'use strict';//por neutral auream
class trbool{
	constructor(valor){if(valor===1||valor===true){this.valor=1}else if(valor===0||valor===false){this.valor=0}else{this.valor=-1}
	Object.defineProperties(this,{valor:{enumerable:false,configurable:false}});
	}

//funciones estaticas
static not(valor){valor=valor.valueOf();
if(valor===true||valor===1){return new trbool(0)}else if(valor===false||valor===0){return new trbool(1)}else{return new trbool()}}
static or(A,B){A=A.valueOf(),B=B.valueOf();
if(A===1||A===true){return new trbool(1)}
if(A===0||A===false){return (B===1||B===true?new trbool(1):(B===0||B===false?new trbool(0):new trbool()))}
return (B===1||B===true?new trbool(1):new trbool())
}
static and(A,B){A=A.valueOf(),B=B.valueOf();
if(A===1||A===true){return (B===1||B===true?new trbool(1):(B===0||B===false?new trbool(0):new trbool()))}
if(A===0||A===false){return new trbool(0)}
return (B===0||B===false?new trbool(0):new trbool())
}
static truthy(cosa){return Boolean(cosa)}
static truthyDESC(cosa){if(cosa===null||cosa===undefined||cosa.valueOf()===-1){return new trbool()}else{return new trbool(Boolean(cosa))}}
static esDesconocido(bool){return bool.valueOf()===-1}
static implica(A,B){A=A.valueOf(),B=B.valueOf();
if(A===1||A===true){return (B===1||B===true?new trbool(1):(B===0||B===false?new trbool(0):new trbool()))}
if(A===0||A===false){return new trbool(1)}
return (B===1||B===true?new trbool(1):new trbool())
}
static bicondicional(A,B){A=A.valueOf(),B=B.valueOf();
if(A===1||A===true){return (B===1||B===true?new trbool(1):(B===0||B===false?new trbool(0):new trbool()))}
if(A===0||A===false){return (B===1||B===true?new trbool(0):(B===0||B===false?new trbool(1):new trbool()))}
return (B===1||B===true?new trbool():(B===0||B===false?new trbool():new trbool(1)))
}

//funciones
toString(){return (this.valor==0?'falso':(this.valor==1?'verdadero':'desconocido'))}
valueOf(){return this.valor}
}

const com=Scratch.BlockType.COMMAND,str=Scratch.ArgumentType.STRING,bol=Scratch.BlockType.BOOLEAN,rep=Scratch.BlockType.REPORTER;
class Triboolean{getInfo(){return {id:'Triboolean',name:'Triboolean',color1:'#cccc11',color2:'#cccc00',color3:'#ff0000',blocks:[
{opcode:'tb0',blockType:bol,text:'verdadero',disableMonitor:1},
{opcode:'tb1',blockType:bol,text:'falso',disableMonitor:1},
{opcode:'tb2',blockType:bol,text:'desconocido',disableMonitor:1},
{opcode:'tb3',blockType:bol,text:'NOT[a]',arguments:{a:{type:str}}},
{opcode:'tb4',blockType:bol,text:'[a]OR[b]',arguments:{a:{type:str},b:{type:str}}},
{opcode:'tb5',blockType:bol,text:'[a]AND[b]',arguments:{a:{type:str},b:{type:str}}},
{opcode:'tb6',blockType:bol,text:'[a]implica[b]',arguments:{a:{type:str},b:{type:str}}},
{opcode:'tb7',blockType:bol,text:'[a]bicondicional[b]',arguments:{a:{type:str},b:{type:str}}},
{opcode:'tb8',blockType:Scratch.BlockType.LOOP,branchCount:3,text:['valor[a]verdad','falso','desconocido'],arguments:{a:{type:str}}},

],};}
tb0(){return new trbool(1)}
tb1(){return new trbool(0)}
tb2(){return new trbool()}
tb3(ar){return trbool.not(ar.a)}
tb4(ar){return trbool.or(ar.a,ar.b)}
tb5(ar){return trbool.and(ar.a,ar.b)}
tb6(ar){return trbool.implica(ar.a,ar.b)}
tb7(ar){return trbool.bicondicional(ar.a,ar.b)}
tb8(ar,util){let t=ar.a.valueOf();
if(t===1||t===true){util.startBranch(1,false)}else if(t===0||t===false){util.startBranch(2,false)}else{util.startBranch(3,false)};}

}Scratch.extensions.register(new Triboolean());})(Scratch);