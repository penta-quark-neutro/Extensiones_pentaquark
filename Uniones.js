(function(Scratch) {'use strict';//por el (pentaquark neutro, penta quark neutro) y neutral auream
const com=Scratch.BlockType.COMMAND;const str=Scratch.ArgumentType.STRING,num=Scratch.ArgumentType.NUMBER;const bol=Scratch.BlockType.BOOLEAN;const rep=Scratch.BlockType.REPORTER;
const vm=Scratch.vm,radian=57.295779513082320876798154814105;
class ftarget{
	constructor(a,b,c) {this.x=a,this.y=b,this.direction=c,this.falso=true}
setXY(a,b){this.x=a,this.y=b}
setDirection(a){this.direction=a}
}
class Union{getInfo(){return {id:'Union',name:'Uniones',color1:'#0f44d2',color2:'#000000',color3:'#11f5a1',blocks: [
{opcode:'j17',blockType:com,text:'unir[a]fijo (x[b])',arguments:{a:{type:str,defaultValue:'referencia'},b:{type:num}}},
{opcode:'j18',blockType:com,text:'unir[a]fijo (y[b])',arguments:{a:{type:str,defaultValue:'referencia'},b:{type:num}}},
{opcode:'j0',blockType:com,text:'unir[a]fijo (x[b]y[c])',arguments:{a:{type:str,defaultValue:'referencia'},b:{type:num},c:{type:num}}},
{opcode:'j3',blockType:com,text:'unir[a]radial (r[b]preservDir[c])',arguments:{a:{type:str,defaultValue:'referencia'},b:{type:num},c:{type:num,defaultValue:1}}},
{opcode:'j4',blockType:com,text:'unir[a]radial libre (r[b]preservDir[c])',arguments:{a:{type:str,defaultValue:'referencia'},b:{type:num},c:{type:num,defaultValue:1}}},
{opcode:'j7',blockType:com,text:'unir[a]resorte fijo (x[b]y[c]amort[d]rigid[e])',arguments:{a:{type:str,defaultValue:'referencia'},b:{type:num},c:{type:num},d:{type:num,defaultValue:0.97},e:{type:num,defaultValue:2}}},
{opcode:'j8',blockType:com,text:'unir[a]resorte radial lineal r (r[b]preservDir[c]amort[d]rigid[e])',arguments:{a:{type:str,defaultValue:'referencia'},b:{type:num},c:{type:num,defaultValue:1},d:{type:num,defaultValue:0.97},e:{type:num,defaultValue:2}}},
{opcode:'j10',blockType:com,text:'unir[a]resorte radial semi libre (r[b]preservDir[c]amort[d]rigid[e])',arguments:{a:{type:str,defaultValue:'referencia'},b:{type:num},c:{type:num,defaultValue:1},d:{type:num,defaultValue:0.97},e:{type:num,defaultValue:2}}},
{opcode:'j9',blockType:com,text:'unir[a]ancla direccional (r[b]grad[c]preservDir[d])',arguments:{a:{type:str,defaultValue:'referencia'},b:{type:num},c:{type:num},d:{type:num,defaultValue:1}}},
{opcode:'j11',blockType:com,text:'unir[a]resorte con ancla direccional lib (r[b]grad[c]preservDir[d]amort[e]rigid[f])',arguments:{a:{type:str,defaultValue:'referencia'},b:{type:num},c:{type:num},d:{type:num,defaultValue:1},e:{type:num,defaultValue:0.97},f:{type:num,defaultValue:2}}},
{opcode:'j16',blockType:com,text:'unir[a]resorte con ancla direccional grad (r[b]grad[c]preservDir[d]amort[e]rigid[f])',arguments:{a:{type:str,defaultValue:'referencia'},b:{type:num},c:{type:num},d:{type:num,defaultValue:1},e:{type:num,defaultValue:0.97},f:{type:num,defaultValue:1}}},
{opcode:'j20',blockType:com,text:'unir[a]resorte con ancla direccional dir (r[b]grad[c]amort[d]rigid[e]+dir[f]dirFig[g])',arguments:{a:{type:str,defaultValue:'referencia'},b:{type:num},c:{type:num},d:{type:num,defaultValue:0.97},e:{type:num,defaultValue:1},f:{type:num,defaultValue:0},g:{type:num,defaultValue:0}}},
{opcode:'j1',blockType:rep,text:'Referencia',disableMonitor:1},
{opcode:'j2',blockType:com,text:'actualizar uniones'},
{opcode:'j19',blockType:com,text:'actualizar uniones con base[a]',arguments:{a:{type:str,defaultValue:'referencia'}}},
{opcode:'j5',blockType:rep,text:'uniones',disableMonitor:1},
{opcode:'j13',blockType:rep,text:'union[a]',disableMonitor:1,arguments:{a:{type:num}}},
{opcode:'j14',blockType:rep,text:'union[a][b]',disableMonitor:1,arguments:{a:{type:num},b:{type:num}}},
{opcode:'j15',blockType:rep,text:'union[a][b]=[c]',disableMonitor:1,arguments:{a:{type:num},b:{type:num},c:{type:num}}},
{opcode:'j6',blockType:com,text:'desunir[a]',arguments:{a:{type:str,defaultValue:'referencia'}}},
{opcode:'j12',blockType:com,text:'revisar por uniones no existentes'},
{opcode:'j21',blockType:rep,text:'referencia falsa(x[a]y[b]dir[c])',arguments:{a:{type:num},b:{type:num},c:{type:num}}},

],menus:{}};}
j0(ar,util){if(typeof(ar.a)!='object'){return 0}if(!('unidat' in util.target)){util.target.unidat=[]}if(util.target.unidat.findIndex(x=>x.includes(ar.a))==-1){util.target.unidat.push([1,ar.a,ar.b,ar.c])}else{util.target.unidat[util.target.unidat.findIndex(x=>x.includes(ar.a))]=[1,ar.a,ar.b,ar.c]}}
j1(ar,util){return util.target}
j2(ar,util){let targ=util.target;
for(let un of targ.unidat){
if(un[0]==1){un[1].x=un[2]+targ.x,un[1].y=un[3]+targ.y;vm.renderer.updateDrawablePosition(un[1].drawableID,[un[1].x,un[1].y])}
if(un[0]==2){let dis=un[2]-Math.hypot(targ.x-un[1].x,targ.y-un[1].y),od=un[1].direction;un[1].direction=Math.atan2(targ.x-un[1].x,targ.y-un[1].y)*radian;un[1].x-=dis*Math.sin(un[1].direction/radian);un[1].y-=dis*Math.cos(un[1].direction/radian);un[1].setDirection((un[3]?od:un[1].direction));vm.renderer.updateDrawablePosition(un[1].drawableID,[un[1].x,un[1].y])}
if(un[0]==3){let dis=Math.hypot(targ.x-un[1].x,targ.y-un[1].y),od=un[1].direction;if(dis>un[2]){dis=un[2]-dis;un[1].direction=Math.atan2(targ.x-un[1].x,targ.y-un[1].y)*radian;un[1].x-=dis*Math.sin(un[1].direction/radian);un[1].y-=dis*Math.cos(un[1].direction/radian);un[1].setDirection((un[3]?od:un[1].direction));vm.renderer.updateDrawablePosition(un[1].drawableID,[un[1].x,un[1].y])}}
if(un[0]==4){un[6]+=((targ.x+un[2])-un[1].x)/un[5],un[7]+=((targ.y+un[3])-un[1].y)/un[5],un[1].x+=un[6],un[1].y+=un[7],un[6]*=un[4],un[7]*=un[4];vm.renderer.updateDrawablePosition(un[1].drawableID,[un[1].x,un[1].y])}
if(un[0]==5){let od=un[1].direction;un[1].direction=Math.atan2(targ.x-un[1].x,targ.y-un[1].y)*radian;un[6]+=(un[2]-Math.hypot(targ.x-un[1].x,targ.y-un[1].y))/un[5];un[1].x-=un[6]*Math.sin(un[1].direction/radian);un[1].y-=un[6]*Math.cos(un[1].direction/radian);un[6]*=un[4];un[1].setDirection((un[3]?od:un[1].direction));vm.renderer.updateDrawablePosition(un[1].drawableID,[un[1].x,un[1].y])}
if(un[0]==6){let od=un[1].direction;un[1].direction=targ.direction+un[3];un[1].x=un[2]*Math.sin(un[1].direction/radian)+targ.x,un[1].y=un[2]*Math.cos(un[1].direction/radian)+targ.y;un[1].setDirection((un[4]?od:un[1].direction));vm.renderer.updateDrawablePosition(un[1].drawableID,[un[1].x,un[1].y])}
if(un[0]==7){let dis=un[2]-Math.hypot(targ.x-un[1].x,targ.y-un[1].y),od=un[1].direction;un[1].direction=Math.atan2(targ.x-un[1].x,targ.y-un[1].y)*radian;un[6]-=(dis*Math.sin(un[1].direction/radian))/un[5],un[7]-=(dis*Math.cos(un[1].direction/radian))/un[5];un[1].x+=un[6],un[1].y+=un[7],un[6]*=un[4],un[7]*=un[4];un[1].setDirection((un[3]?od:un[1].direction));vm.renderer.updateDrawablePosition(un[1].drawableID,[un[1].x,un[1].y])}
if(un[0]==8){let od=un[1].direction;un[1].direction=targ.direction+un[3];un[7]-=(un[1].x-(un[2]*Math.sin(un[1].direction/radian)+targ.x))/un[6],un[8]-=(un[1].y-(un[2]*Math.cos(un[1].direction/radian)+targ.y))/un[6];un[1].x+=un[7],un[1].y+=un[8],un[7]*=un[5],un[8]*=un[5];un[1].setDirection((un[4]?od:un[1].direction));vm.renderer.updateDrawablePosition(un[1].drawableID,[un[1].x,un[1].y])}
if(un[0]==9){let od=un[1].direction;un[7]+=Math.sin((targ.direction+un[3]-od)/radian)/un[6],un[1].direction+=un[7];un[1].x=un[2]*Math.sin(un[1].direction/radian)+targ.x,un[1].y=un[2]*Math.cos(un[1].direction/radian)+targ.y;un[7]*=un[5];un[1].setDirection((un[4]?od:un[1].direction));vm.renderer.updateDrawablePosition(un[1].drawableID,[un[1].x,un[1].y])}
if(un[0]==10){un[1].x=un[2]+targ.x;vm.renderer.updateDrawablePosition(un[1].drawableID,[un[1].x,un[1].y])}
if(un[0]==11){un[1].y=un[3]+targ.y;vm.renderer.updateDrawablePosition(un[1].drawableID,[un[1].x,un[1].y])}
if(un[0]==12){un[8]+=Math.sin((un[7]?un[6]-un[1].direction:(targ.direction+un[6]-un[1].direction))/radian)/un[5],un[1].direction+=un[8],un[8]*=un[4];un[1].x=un[2]*Math.sin((targ.direction+un[3])/radian)+targ.x,un[1].y=un[2]*Math.cos((targ.direction+un[3])/radian)+targ.y;un[1].setDirection(un[1].direction);vm.renderer.updateDrawablePosition(un[1].drawableID,[un[1].x,un[1].y])}


}}
j3(ar,util){if(typeof(ar.a)!='object'){return 0}if(!('unidat' in util.target)){util.target.unidat=[]}if(util.target.unidat.findIndex(x=>x.includes(ar.a))==-1){util.target.unidat.push([2,ar.a,ar.b,ar.c])}else{util.target.unidat[util.target.unidat.findIndex(x=>x.includes(ar.a))]=[2,ar.a,ar.b,ar.c]}}
j4(ar,util){if(typeof(ar.a)!='object'){return 0}if(!('unidat' in util.target)){util.target.unidat=[]}if(util.target.unidat.findIndex(x=>x.includes(ar.a))==-1){util.target.unidat.push([3,ar.a,ar.b,ar.c])}else{util.target.unidat[util.target.unidat.findIndex(x=>x.includes(ar.a))]=[3,ar.a,ar.b,ar.c]}}
j5(ar,util){return util.target.unidat}
j6(ar,util){if(typeof(ar.a)!='object'){return 0}if(!('unidat' in util.target)){return 0}if(util.target.unidat.findIndex(x=>x.includes(ar.a))==-1){return 0}else{util.target.unidat.splice(util.target.unidat.findIndex(x=>x.includes(ar.a)),1)}}
j7(ar,util){if(typeof(ar.a)!='object'){return 0}if(!('unidat' in util.target)){util.target.unidat=[]}if(util.target.unidat.findIndex(x=>x.includes(ar.a))==-1){util.target.unidat.push([4,ar.a,ar.b,ar.c,ar.d,ar.e,0,0])}else{util.target.unidat[util.target.unidat.findIndex(x=>x.includes(ar.a))]=[4,ar.a,ar.b,ar.c,ar.d,ar.e,0,0]}}
j8(ar,util){if(typeof(ar.a)!='object'){return 0}if(!('unidat' in util.target)){util.target.unidat=[]}if(util.target.unidat.findIndex(x=>x.includes(ar.a))==-1){util.target.unidat.push([5,ar.a,ar.b,ar.c,ar.d,ar.e,0])}else{util.target.unidat[util.target.unidat.findIndex(x=>x.includes(ar.a))]=[5,ar.a,ar.b,ar.c,ar.d,ar.e,0]}}
j9(ar,util){if(typeof(ar.a)!='object'){return 0}if(!('unidat' in util.target)){util.target.unidat=[]}if(util.target.unidat.findIndex(x=>x.includes(ar.a))==-1){util.target.unidat.push([6,ar.a,ar.b,ar.c,ar.d])}else{util.target.unidat[util.target.unidat.findIndex(x=>x.includes(ar.a))]=[6,ar.a,ar.b,ar.c,ar.d]}}
j10(ar,util){if(typeof(ar.a)!='object'){return 0}if(!('unidat' in util.target)){util.target.unidat=[]}if(util.target.unidat.findIndex(x=>x.includes(ar.a))==-1){util.target.unidat.push([7,ar.a,ar.b,ar.c,ar.d,ar.e,0,0])}else{util.target.unidat[util.target.unidat.findIndex(x=>x.includes(ar.a))]=[7,ar.a,ar.b,ar.c,ar.d,ar.e,0,0]}}
j11(ar,util){if(typeof(ar.a)!='object'){return 0}if(!('unidat' in util.target)){util.target.unidat=[]}if(util.target.unidat.findIndex(x=>x.includes(ar.a))==-1){util.target.unidat.push([8,ar.a,ar.b,ar.c,ar.d,ar.e,ar.f,0,0])}else{util.target.unidat[util.target.unidat.findIndex(x=>x.includes(ar.a))]=[8,ar.a,ar.b,ar.c,ar.d,ar.e,ar.f,0,0]}}
j12(ar,util){let i=0,k=util.target.unidat.filter(x=>!(x in vm.runtime.targets)&&!(falso in x));while(i<k.length){util.target.unidat.splice(util.target.unidat.indexOf(k[i++]),1)}}
j13(ar,util){return util.target.unidat[ar.a]}
j14(ar,util){return util.target.unidat[ar.a][ar.b]}
j15(ar,util){return util.target.unidat[ar.a][ar.b]=[ar.c]}
j16(ar,util){if(typeof(ar.a)!='object'){return 0}if(!('unidat' in util.target)){util.target.unidat=[]}if(util.target.unidat.findIndex(x=>x.includes(ar.a))==-1){util.target.unidat.push([9,ar.a,ar.b,ar.c,ar.d,ar.e,ar.f,0])}else{util.target.unidat[util.target.unidat.findIndex(x=>x.includes(ar.a))]=[9,ar.a,ar.b,ar.c,ar.d,ar.e,ar.f,0]}}
j17(ar,util){if(typeof(ar.a)!='object'){return 0}if(!('unidat' in util.target)){util.target.unidat=[]}if(util.target.unidat.findIndex(x=>x.includes(ar.a))==-1){util.target.unidat.push([10,ar.a,ar.b])}else{util.target.unidat[util.target.unidat.findIndex(x=>x.includes(ar.a))]=[10,ar.a,ar.b]}}
j18(ar,util){if(typeof(ar.a)!='object'){return 0}if(!('unidat' in util.target)){util.target.unidat=[]}if(util.target.unidat.findIndex(x=>x.includes(ar.a))==-1){util.target.unidat.push([11,ar.a,ar.b])}else{util.target.unidat[util.target.unidat.findIndex(x=>x.includes(ar.a))]=[11,ar.a,ar.b]}}
j19(ar,util){let targ=ar.a;
for(let un of util.target.unidat){
if(un[0]==1){un[1].x=un[2]+targ.x,un[1].y=un[3]+targ.y;vm.renderer.updateDrawablePosition(un[1].drawableID,[un[1].x,un[1].y])}
if(un[0]==2){let dis=un[2]-Math.hypot(targ.x-un[1].x,targ.y-un[1].y),od=un[1].direction;un[1].direction=Math.atan2(targ.x-un[1].x,targ.y-un[1].y)*radian;un[1].x-=dis*Math.sin(un[1].direction/radian);un[1].y-=dis*Math.cos(un[1].direction/radian);un[1].setDirection((un[3]?od:un[1].direction));vm.renderer.updateDrawablePosition(un[1].drawableID,[un[1].x,un[1].y])}
if(un[0]==3){let dis=Math.hypot(targ.x-un[1].x,targ.y-un[1].y),od=un[1].direction;if(dis>un[2]){dis=un[2]-dis;un[1].direction=Math.atan2(targ.x-un[1].x,targ.y-un[1].y)*radian;un[1].x-=dis*Math.sin(un[1].direction/radian);un[1].y-=dis*Math.cos(un[1].direction/radian);un[1].setDirection((un[3]?od:un[1].direction));vm.renderer.updateDrawablePosition(un[1].drawableID,[un[1].x,un[1].y])}}
if(un[0]==4){un[6]+=((targ.x+un[2])-un[1].x)/un[5],un[7]+=((targ.y+un[3])-un[1].y)/un[5],un[1].x+=un[6],un[1].y+=un[7],un[6]*=un[4],un[7]*=un[4];vm.renderer.updateDrawablePosition(un[1].drawableID,[un[1].x,un[1].y])}
if(un[0]==5){let od=un[1].direction;un[1].direction=Math.atan2(targ.x-un[1].x,targ.y-un[1].y)*radian;un[6]+=(un[2]-Math.hypot(targ.x-un[1].x,targ.y-un[1].y))/un[5];un[1].x-=un[6]*Math.sin(un[1].direction/radian);un[1].y-=un[6]*Math.cos(un[1].direction/radian);un[6]*=un[4];un[1].setDirection((un[3]?od:un[1].direction));vm.renderer.updateDrawablePosition(un[1].drawableID,[un[1].x,un[1].y])}
if(un[0]==6){let od=un[1].direction;un[1].direction=targ.direction+un[3];un[1].x=un[2]*Math.sin(un[1].direction/radian)+targ.x,un[1].y=un[2]*Math.cos(un[1].direction/radian)+targ.y;un[1].setDirection((un[4]?od:un[1].direction));vm.renderer.updateDrawablePosition(un[1].drawableID,[un[1].x,un[1].y])}
if(un[0]==7){let dis=un[2]-Math.hypot(targ.x-un[1].x,targ.y-un[1].y),od=un[1].direction;un[1].direction=Math.atan2(targ.x-un[1].x,targ.y-un[1].y)*radian;un[6]-=(dis*Math.sin(un[1].direction/radian))/un[5],un[7]-=(dis*Math.cos(un[1].direction/radian))/un[5];un[1].x+=un[6],un[1].y+=un[7],un[6]*=un[4],un[7]*=un[4];un[1].setDirection((un[3]?od:un[1].direction));vm.renderer.updateDrawablePosition(un[1].drawableID,[un[1].x,un[1].y])}
if(un[0]==8){let od=un[1].direction;un[1].direction=targ.direction+un[3];un[7]-=(un[1].x-(un[2]*Math.sin(un[1].direction/radian)+targ.x))/un[6],un[8]-=(un[1].y-(un[2]*Math.cos(un[1].direction/radian)+targ.y))/un[6];un[1].x+=un[7],un[1].y+=un[8],un[7]*=un[5],un[8]*=un[5];un[1].setDirection((un[4]?od:un[1].direction));vm.renderer.updateDrawablePosition(un[1].drawableID,[un[1].x,un[1].y])}
if(un[0]==9){let od=un[1].direction;un[7]+=Math.sin((targ.direction+un[3]-od)/radian)/un[6],un[1].direction+=un[7];un[1].x=un[2]*Math.sin(un[1].direction/radian)+targ.x,un[1].y=un[2]*Math.cos(un[1].direction/radian)+targ.y;un[7]*=un[5];un[1].setDirection((un[4]?od:un[1].direction));vm.renderer.updateDrawablePosition(un[1].drawableID,[un[1].x,un[1].y])}
if(un[0]==10){un[1].x=un[2]+targ.x;vm.renderer.updateDrawablePosition(un[1].drawableID,[un[1].x,un[1].y])}
if(un[0]==11){un[1].y=un[3]+targ.y;vm.renderer.updateDrawablePosition(un[1].drawableID,[un[1].x,un[1].y])}
if(un[0]==12){un[8]+=Math.sin((un[7]?un[6]-un[1].direction:(targ.direction+un[6]-un[1].direction))/radian)/un[5],un[1].direction+=un[8],un[8]*=un[4];un[1].x=un[2]*Math.sin((targ.direction+un[3])/radian)+targ.x,un[1].y=un[2]*Math.cos((targ.direction+un[3])/radian)+targ.y;un[1].setDirection(un[1].direction);vm.renderer.updateDrawablePosition(un[1].drawableID,[un[1].x,un[1].y])}

}}
j20(ar,util){if(typeof(ar.a)!='object'){return 0}if(!('unidat' in util.target)){util.target.unidat=[]}if(util.target.unidat.findIndex(x=>x.includes(ar.a))==-1){util.target.unidat.push([12,ar.a,ar.b,ar.c,ar.d,ar.e,ar.f,ar.g,0])}else{util.target.unidat[util.target.unidat.findIndex(x=>x.includes(ar.a))]=[12,ar.a,ar.b,ar.c,ar.d,ar.e,ar.f,ar.g,0]}}
j21(ar,util){return new ftarget(ar.a,ar.b,ar.c)}

}Scratch.extensions.register(new Union());})(Scratch);