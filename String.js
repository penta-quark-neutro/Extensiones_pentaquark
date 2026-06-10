(function(Scratch) {'use strict';//por neutral auream
const com=Scratch.BlockType.COMMAND;const str=Scratch.ArgumentType.STRING;
const bol=Scratch.BlockType.BOOLEAN;const rep=Scratch.BlockType.REPORTER;
class sString{getInfo(){return {id:'sString',name:'String',color1:'#ddcc99',color2:'#f0a000',color3:'#eeff00',blocks:[
{opcode:'str0',blockType:rep,text:'String[a]',arguments:{a:{type:str,defaultValue:'texto'}}},
{opcode:'str1',blockType:rep,text:'new String[a]',arguments:{a:{type:str,defaultValue:'texto'}}},
{opcode:'str2',blockType:rep,text:'String.fromCharCode(...[a])',arguments:{a:{type:str,defaultValue:''}}},
{opcode:'str3',blockType:rep,text:'String.fromCodePoint(...[a])',arguments:{a:{type:str,defaultValue:''}}},
{opcode:'str4',blockType:rep,text:'[a].charCodeAt[b]',arguments:{a:{type:str,defaultValue:'txt'},b:{type:str,defaultValue:'0'}}},
{opcode:'str5',blockType:rep,text:'[a].codePointAt[b]',arguments:{a:{type:str,defaultValue:'txt'},b:{type:str,defaultValue:'0'}}},
{opcode:'str6',blockType:rep,text:'[a].endsWith[b][c]',arguments:{a:{type:str,defaultValue:'txt'},b:{type:str,defaultValue:'t'},c:{type:str,defaultValue:'3'}}},
{opcode:'str7',blockType:bol,text:'[a].includes[b][c]',arguments:{a:{type:str,defaultValue:'txt'},b:{type:str,defaultValue:'x'},c:{type:str,defaultValue:'-1'}}},
{opcode:'str8',blockType:rep,text:'[a].indexOf[b][c]',arguments:{a:{type:str,defaultValue:'txt'},b:{type:str,defaultValue:'x'},c:{type:str,defaultValue:'0'}}},
{opcode:'str9',blockType:rep,text:'[a].lastIndexOf[b][c]',arguments:{a:{type:str,defaultValue:'txt'},b:{type:str,defaultValue:'x'},c:{type:str,defaultValue:'3'}}},
{opcode:'str10',blockType:rep,text:'[a].repeat[b]',arguments:{a:{type:str,defaultValue:'txt'},b:{type:str,defaultValue:'3'}}},
{opcode:'str11',blockType:rep,text:'[a].replace[b][c]',arguments:{a:{type:str,defaultValue:'txt'},b:{type:str,defaultValue:'x'},c:{type:str,defaultValue:'n'}}},
{opcode:'str12',blockType:rep,text:'[a].replaceAll[b][c]',arguments:{a:{type:str,defaultValue:'txt'},b:{type:str,defaultValue:'t'},c:{type:str,defaultValue:'e'}}},
{opcode:'str13',blockType:rep,text:'[a].toLowerCase',arguments:{a:{type:str,defaultValue:'TXT'}}},
{opcode:'str14',blockType:rep,text:'[a].toUpperCase',arguments:{a:{type:str,defaultValue:'txt'}}},
{opcode:'str15',blockType:rep,text:'[a].toWellFormed',arguments:{a:{type:str,defaultValue:'txt'}}},
{opcode:'str16',blockType:bol,text:'[a].isWellFormed',arguments:{a:{type:str,defaultValue:'txt'}}},
{opcode:'str17',blockType:rep,text:'[a].split[b][c]',arguments:{a:{type:str,defaultValue:'t,x,t,8'},b:{type:str,defaultValue:','},c:{type:str,defaultValue:'3'}}},
{opcode:'str18',blockType:rep,text:'[a].slice[b][c]',arguments:{a:{type:str,defaultValue:'txt'},b:{type:str,defaultValue:'0'},c:{type:str,defaultValue:'2'}}},
{opcode:'str19',blockType:bol,text:'[a].startsWith[b][c]',arguments:{a:{type:str,defaultValue:'txt'},b:{type:str,defaultValue:'t'},c:{type:str,defaultValue:'0'}}},
{opcode:'str25',blockType:bol,text:'[a].endsWith[b][c]',arguments:{a:{type:str,defaultValue:'txt'},b:{type:str,defaultValue:'t'},c:{type:str,defaultValue:'3'}}},
{opcode:'str20',blockType:rep,text:'[a].substr[b][c]',arguments:{a:{type:str,defaultValue:'txtAAAAA'},b:{type:str,defaultValue:'0'},c:{type:str,defaultValue:'3'}}},
{opcode:'str21',blockType:rep,text:'[a].trim',arguments:{a:{type:str,defaultValue:'  txt  '}}},
{opcode:'str22',blockType:rep,text:'[a].trimStart',arguments:{a:{type:str,defaultValue:'  txt  '}}},
{opcode:'str23',blockType:rep,text:'[a].trimEnd',arguments:{a:{type:str,defaultValue:'  txt  '}}},
{opcode:'str24',blockType:rep,text:'[a].toString',arguments:{a:{type:str,defaultValue:100}}},
{opcode:'str26',blockType:rep,text:'[a].padStart[b][c]',arguments:{a:{type:str,defaultValue:'txt'},b:{type:str,defaultValue:'6'},c:{type:str,defaultValue:'-'}}},
{opcode:'str27',blockType:rep,text:'[a].padEnd[b][c]',arguments:{a:{type:str,defaultValue:'txt'},b:{type:str,defaultValue:'6'},c:{type:str,defaultValue:'+'}}},
],};}
str0(ar){return String(ar.a)}
str1(ar){return new String(ar.a)}
str2(ar){return String.fromCharCode(...ar.a)}
str3(ar){return String.fromCodePoint(...ar.a)}
str4(ar){return ar.a.charCodeAt(ar.b)}
str5(ar){return ar.a.codePointAt(ar.b)}
str6(ar){return ar.a.endsWith(ar.b,ar.c)}
str7(ar){return ar.a.includes(ar.b,ar.c)}
str8(ar){return ar.a.indexOf(ar.b,ar.c)}
str9(ar){return ar.a.lastIndexOf(ar.b,ar.c)}
str10(ar){return ar.a.repeat(ar.b)}
str11(ar){return ar.a.replace(ar.b,ar.c)}
str12(ar){return ar.a.replaceAll(ar.b,ar.c)}
str13(ar){return ar.a.toLowerCase()}
str14(ar){return ar.a.toUpperCase()}
str15(ar){return ar.a.toWellFormed()}
str16(ar){return ar.a.isWellFormed()}
str17(ar){return ar.a.split(ar.b,ar.c)}
str18(ar){return ar.a.slice(ar.b,ar.c)}
str19(ar){return ar.a.startsWith(ar.b,ar.c)}
str20(ar){return ar.a.substr(ar.b,ar.c)}
str21(ar){return ar.a.trim()}
str22(ar){return ar.a.trimStart()}
str23(ar){return ar.a.trimEnd()}
str24(ar){return ar.a.toString()}
str25(ar){return ar.a.endsWith(ar.b,ar.c)}
str26(ar){return ar.a.padStart(ar.b,ar.c)}
str27(ar){return ar.a.padEnd(ar.b,ar.c)}

}Scratch.extensions.register(new sString());})(Scratch);