(function(Scratch) {'use strict';//por el (pentaquark neutro, penta quark neutro) y neutral auream
let com0=Scratch.BlockType.COMMAND;let str0=Scratch.ArgumentType.STRING;
let bol0=Scratch.BlockType.BOOLEAN;let rep0=Scratch.BlockType.REPORTER;
if(!Scratch.extensions.unsandboxed){throw new Error('unsandboxed');}
class BGI{getInfo(){return {id:'BGI',name:'BGI',color1:'#8923FF',color2:'#0F70A0',color3:'#ffff00',blocks: [
{opcode:'a0',blockType:rep0,text:'BigInt[a]',arguments:{a:{type:str0,defaultValue:'1'}}},
{opcode:'a1',blockType:rep0,text:'[a]+[b]',arguments:{a:{type:str0,defaultValue:'10'},b:{type:str0,defaultValue:'10'}}},
{opcode:'a2',blockType:rep0,text:'[a]-[b]',arguments:{a:{type:str0,defaultValue:'10'},b:{type:str0,defaultValue:'10'}}},
{opcode:'a3',blockType:rep0,text:'[a]*[b]',arguments:{a:{type:str0,defaultValue:'10'},b:{type:str0,defaultValue:'10'}}},
{opcode:'a4',blockType:rep0,text:'[a]/[b]',arguments:{a:{type:str0,defaultValue:'10'},b:{type:str0,defaultValue:'10'}}},
{opcode:'a5',blockType:rep0,text:'[a]**[b]',arguments:{a:{type:str0,defaultValue:'10'},b:{type:str0,defaultValue:'10'}}},
{opcode:'a6',blockType:bol0,text:'[a]>[b]',arguments:{a:{type:str0,defaultValue:'1'},b:{type:str0,defaultValue:'1'}}},
{opcode:'a7',blockType:bol0,text:'[a]==[b]',arguments:{a:{type:str0,defaultValue:'1'},b:{type:str0,defaultValue:'1'}}},
{opcode:'a20',blockType:bol0,text:'[a]===[b]',arguments:{a:{type:str0,defaultValue:'1'},b:{type:str0,defaultValue:'1'}}},
{opcode:'a8',blockType:bol0,text:'[a]>=[b]',arguments:{a:{type:str0,defaultValue:'1'},b:{type:str0,defaultValue:'1'}}},
{opcode:'a9',blockType:bol0,text:'[a]!=[b]',arguments:{a:{type:str0,defaultValue:'1'},b:{type:str0,defaultValue:'1'}}},
{opcode:'a19',blockType:bol0,text:'[a]??[b]',arguments:{a:{type:str0,defaultValue:''},b:{type:str0,defaultValue:'10'}}},
{opcode:'a10',blockType:rep0,text:'[k]!',arguments:{k:{type:str0,defaultValue:'12'}}},
{opcode:'a11',blockType:rep0,text:'[a]↑↑[b]',arguments:{a:{type:str0,defaultValue:'1'},b:{type:str0,defaultValue:'1'}}},
{opcode:'a12',blockType:rep0,text:'[a]<<[b]',arguments:{a:{type:str0,defaultValue:'10'},b:{type:str0,defaultValue:'10'}}},
{opcode:'a13',blockType:rep0,text:'[a]>>[b]',arguments:{a:{type:str0,defaultValue:'10'},b:{type:str0,defaultValue:'10'}}},
{opcode:'a14',blockType:rep0,text:'[a]>>>[b]',arguments:{a:{type:str0,defaultValue:'10'},b:{type:str0,defaultValue:'10'}}},
{opcode:'a15',blockType:rep0,text:'[a]&[b]',arguments:{a:{type:str0,defaultValue:'10'},b:{type:str0,defaultValue:'10'}}},
{opcode:'a16',blockType:rep0,text:'[a]|[b]',arguments:{a:{type:str0,defaultValue:'10'},b:{type:str0,defaultValue:'10'}}},
{opcode:'a17',blockType:rep0,text:'[a]^[b]',arguments:{a:{type:str0,defaultValue:'10'},b:{type:str0,defaultValue:'10'}}},
{opcode:'a18',blockType:rep0,text:'~[a]',arguments:{a:{type:str0,defaultValue:'10'}}},
],};}
a0(ar){return BigInt(ar.a);}
a1(ar){return ar.a+ar.b;}
a2(ar){return ar.a-ar.b;}
a3(ar){return ar.a*ar.b;}
a4(ar){return ar.a/ar.b;}
a5(ar){return ar.a**ar.b;}
a6(ar){return ar.a>ar.b;}
a7(ar){return ar.a==ar.b;}
a8(ar){return ar.a>=ar.b;}
a9(ar){return ar.a!=ar.b;}
a10(ar){var a=1,b=1n,c=ar.k;while(a<=c){b*=BigInt(a++);}return b;}
a11(ar){var dat0=BigInt(ar.a),i=0;const dat=dat0;while(i<ar.b-1){dat0=dat**dat0;i++;}return dat0;}
a12(ar){return ar.a<<ar.b;}
a13(ar){return ar.a>>ar.b;}
a14(ar){return ar.a>>>ar.b;}
a15(ar){return ar.a&ar.b;}
a16(ar){return ar.a|ar.b;}
a17(ar){return ar.a^ar.b;}
a18(ar){return ~ar.a;}
a19(ar){return ar.a??ar.b}
a20(ar){return ar.a===ar.b}
}Scratch.extensions.register(new BGI());})(Scratch);