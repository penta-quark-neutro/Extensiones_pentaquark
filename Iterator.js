(function(Scratch) {'use strict';//por neutral auream
const com=Scratch.BlockType.COMMAND;const txt=Scratch.ArgumentType.STRING;
const bol=Scratch.BlockType.BOOLEAN;const rep=Scratch.BlockType.REPORTER;
class IteratorN{getInfo(){return {id:'Iterador',name:'Iterador',color1:'#a5aefc',color2:'#7ae02a',color3:'#5da0d6',blocks:[
{opcode:'it0',blockType:rep,text:'Iterator.from[a]',arguments:{a:{type:txt}}},
{opcode:'it1',blockType:rep,text:'[a].drop[b]',arguments:{a:{type:txt},b:{type:txt,defaultValue:0}}},
{opcode:'it3',blockType:rep,text:'[a].filter[b]',arguments:{a:{type:txt},b:{type:txt,defaultValue:'ƒ'}}},
{opcode:'it4',blockType:rep,text:'[a].find[b]',arguments:{a:{type:txt},b:{type:txt,defaultValue:'ƒ'}}},
{opcode:'it5',blockType:rep,text:'[a].flatMap[b]',arguments:{a:{type:txt},b:{type:txt,defaultValue:'ƒ'}}},
{opcode:'it6',blockType:rep,text:'[a].forEach[b]',arguments:{a:{type:txt},b:{type:txt,defaultValue:'ƒ'}}},
{opcode:'it7',blockType:rep,text:'[a].map[b]',arguments:{a:{type:txt},b:{type:txt,defaultValue:'ƒ'}}},
{opcode:'it8',blockType:rep,text:'[a].reduce[b]',arguments:{a:{type:txt},b:{type:txt,defaultValue:'ƒ'}}},
{opcode:'it9',blockType:bol,text:'[a].some[b]',arguments:{a:{type:txt},b:{type:txt,defaultValue:'ƒ'}}},
{opcode:'it2',blockType:bol,text:'[a].every[b]',arguments:{a:{type:txt},b:{type:txt,defaultValue:'ƒ'}}},
{opcode:'it10',blockType:rep,text:'[a].take[b]',arguments:{a:{type:txt},b:{type:txt,defaultValue:0}}},
{opcode:'it11',blockType:rep,text:'[a].toArray()',arguments:{a:{type:txt}}},
{opcode:'it17',blockType:rep,text:'concat[a][b]',arguments:{a:{type:txt},b:{type:txt}}},
{opcode:'it12',blockType:rep,text:'[a].next()',arguments:{a:{type:txt}}},
{opcode:'it13',blockType:bol,text:'[a].value',arguments:{a:{type:txt}}},
{opcode:'it14',blockType:bol,text:'[a].done',arguments:{a:{type:txt}}},
{opcode:'it15',blockType:bol,text:'¿Iterador[a]?',arguments:{a:{type:txt}}},
{opcode:'it16',blockType:bol,text:'¿Iterable[a]?',arguments:{a:{type:txt}}},
{opcode:'it18',blockType:bol,text:'([a])=>[b]',arguments:{a:{type:txt,defaultValue:'a,b'},b:{type:txt,defaultValue:'a*b'}}},
],
};}
it0(ar){return Iterator.from(ar.a)}
it1(ar){return ar.a.drop(ar.b)}
it2(ar){return ar.a.every(ar.b)}
it3(ar){return ar.a.filter(ar.b)}
it4(ar){return ar.a.find(ar.b)}
it5(ar){return ar.a.flatMap(ar.b)}
it6(ar){return ar.a.forEach(ar.b)}
it7(ar){return ar.a.map(ar.b)}
it8(ar){return ar.a.reduce(ar.b)}
it9(ar){return ar.a.some(ar.b)}
it10(ar){return ar.a.take(ar.b)}
it11(ar){return ar.a.toArray()}
it12(ar){return ar.a.next()}
it13(ar){return ar.a.value}
it14(ar){return ar.a.done}
it15(ar){return ar.a instanceof Iterator}
it16(ar){return !!(ar.a?.[Symbol.iterator])}
it17(ar){return Iterator.concat(ar.a,ar.b)}
it18(ar){return Function('return ('+ar.a+')=>'+ar.b)()}

}Scratch.extensions.register(new IteratorN());})(Scratch);