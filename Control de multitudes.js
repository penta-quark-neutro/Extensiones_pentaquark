(function(Scratch) {'use strict';//por el (pentaquark neutro, penta quark neutro) y neutral auream
const txt=Scratch.ArgumentType.STRING,rep=Scratch.BlockType.REPORTER,num=Scratch.ArgumentType.NUMBER,vgbb=Scratch.BlockType.BUTTON,evaluador=Scratch.BlockType.BOOLEAN,com=Scratch.BlockType.COMMAND;
const vm=Scratch.vm,runtime=vm.runtime,rad=Math.PI/180;var univ={};
if(!Scratch.extensions.unsandboxed){throw new Error('unsandboxed');}
class multitudes{getInfo(){return{id:'multitudes',name:'multitudes',color1:'#f456a1',color2:'#00ff00',color3:'#4400ff',blocks:[
{opcode:'mu1',blockType:com,text:'Ir multiples[b]a XY[a][k]',arguments:{a:{type:num,defaultValue:'0'},k:{type:num,defaultValue:'0'},b:{type:txt,defaultValue:'lista1'}}},
{opcode:'mu2',blockType:com,text:'mover multiples[b] XY[a][k]',arguments:{a:{type:txt,defaultValue:'10'},k:{type:num,defaultValue:'10'},b:{type:txt,defaultValue:'lista1'}}},
{opcode:'mu7',blockType:com,text:'mover multiples[b] pasos[a]',arguments:{a:{type:txt,defaultValue:'10'},b:{type:txt,defaultValue:'lista1'}}},
{opcode:'mu10',blockType:com,text:'Apuntar multiples[b] Direccion[a]',arguments:{a:{type:txt,defaultValue:'15'},b:{type:txt,defaultValue:'lista1'}}},
{opcode:'mu11',blockType:com,text:'Rotar multiples[b] grados[a]',arguments:{a:{type:txt,defaultValue:'15'},b:{type:txt,defaultValue:'lista1'}}},
{opcode:'mu3',blockType:com,text:'Añadir este objeto a lista[a]',arguments:{a:{type:txt,defaultValue:'lista1'}}},
{opcode:'mu8',blockType:com,text:'Borrar este objeto de lista[a]',arguments:{a:{type:txt,defaultValue:'lista1'}}},
{opcode:'mu4',blockType:com,text:'Crear lista[a]',arguments:{a:{type:txt,defaultValue:'lista1'}}},
{opcode:'mu5',blockType:rep,text:'listas',disableMonitor:true},
{opcode:'mu6',blockType:rep,text:'lista[a]',arguments:{a:{type:txt,defaultValue:'lista1'}}},
{opcode:'mu9',blockType:com,text:'Borrar referencias sin objeto de lista[a]',arguments:{a:{type:txt,defaultValue:'lista1'}}},
],menus:{}
};}
mu1(ar){if(ar.b in univ){var i=0,ob=univ[ar.b];while(i<ob.length){ob[i++].setXY(ar.a*1,ar.k*1)}}else{console.log('Lista '+ar.b+' no existe');}}
mu2(ar){if(ar.b in univ){var i=0,ob=univ[ar.b];while(i<ob.length){ob[i].setXY(ob[i].x+ar.a*1,ob[i++].y+ar.k*1)}}else{console.log('Lista '+ar.b+' no existe');}}
mu3(ar,util){if(univ[ar.a].map(h=>h.id).some(k=>k==util.target.id)){console.log(util.target.sprite.name+' '+(util.target.id)+' ya estaba en lista '+ar.a)}else{univ[ar.a].push(util.target)}}
mu4(ar){if(ar.a in univ){console.log('Error asignando lista '+ar.a);}else{univ[ar.a]=[];}}
mu5(){return Object.getOwnPropertyNames(univ);}
mu6(ar,util){if(ar.a in univ){return univ[ar.a].map(h=>h.sprite.name);}else{console.log('Lista '+ar.a+' no existe');}}
mu7(ar){if(ar.b in univ){var i=0,ob=univ[ar.b];while(i<ob.length){ob[i].setXY(ob[i].x+ar.a*Math.cos((90-ob[i].direction)*rad),ob[i].y+ar.a*Math.sin((90-ob[i++].direction)*rad))}}else{console.log('Lista '+ar.b+' no existe');}}
mu8(ar,util){var r=univ[ar.a].map(h=>h.id).findIndex(k=>k==util.target.id);if(r!=-1){univ[ar.a].splice(r,1)}else{console.log(util.target.sprite.name+' '+util.target.id+' no existe en lista '+ar.a)}}
mu9(ar){const tar=runtime.targets.map(h=>h.id);univ[ar.a]=univ[ar.a].filter(u=>tar.includes(u.id))}
mu10(ar){if(ar.b in univ){var i=0,ob=univ[ar.b];while(i<ob.length){ob[i++].setDirection(ar.a*1)}}else{console.log('Lista '+ar.b+' no existe');}}
mu11(ar){if(ar.b in univ){var i=0,ob=univ[ar.b];while(i<ob.length){ob[i].setDirection(ob[i++].direction+ar.a*1)}}else{console.log('Lista '+ar.b+' no existe');}}
}Scratch.extensions.register(new multitudes());})(Scratch);