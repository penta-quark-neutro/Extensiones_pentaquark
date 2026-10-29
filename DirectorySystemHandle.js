(function(Scratch) {'use strict';//por el (pentaquark neutro, penta quark neutro) y neutral auream
const com=Scratch.BlockType.COMMAND,str=Scratch.ArgumentType.STRING,bol=Scratch.BlockType.BOOLEAN,rep=Scratch.BlockType.REPORTER;
class FilSYS{getInfo(){return {id:'FileSYS',name:'FileSystemHandle',color1:'#f000f0',color2:'#4411a0',color3:'#007700',blocks:[
{opcode:'fs0',blockType:rep,text:'showDirectoryPicker[a]',arguments:{a:{type:str,defaultValue:'documents'}}},
{opcode:'fs1',blockType:rep,text:'[a].values()',arguments:{a:{type:str}}},
{opcode:'fs4',blockType:rep,text:'[a].next()',arguments:{a:{type:str}}},
{opcode:'fs5',blockType:rep,text:'for await[a]array',arguments:{a:{type:str}}},
{opcode:'fs2',blockType:rep,text:'[c].getDirectoryHandle(dirN[a]create[b])',arguments:{a:{type:str},b:{type:str,defaultValue:'0'},c:{type:str}}},
{opcode:'fs3',blockType:rep,text:'[c].getFileHandle(fileN[a]create[b])',arguments:{a:{type:str},b:{type:str,defaultValue:'0'},c:{type:str}}},
{opcode:'fs6',blockType:rep,text:'[a].getFile()',arguments:{a:{type:str}}},
{opcode:'fs11',blockType:rep,text:'[a].text()',arguments:{a:{type:str}}},
{opcode:'fs7',blockType:rep,text:'[a].createWritable(keepExistingData[b]mode[c])',arguments:{a:{type:str},b:{type:str,defaultValue:'0'},c:{type:str,defaultValue:'siloed'}}},
{opcode:'fs8',blockType:com,text:'[a].write([b])',arguments:{a:{type:str},b:{type:str}}},
{opcode:'fs12',blockType:com,text:'[a].truncate([b])',arguments:{a:{type:str},b:{type:str,defaultValue:'0'}}},
{opcode:'fs13',blockType:com,text:'[a].seek([b])',arguments:{a:{type:str},b:{type:str,defaultValue:'0'}}},
{opcode:'fs9',blockType:com,text:'[a].close()',arguments:{a:{type:str}}},
{opcode:'fs10',blockType:bol,text:'[a].[b]',arguments:{a:{type:str},b:{type:str}}},

],menus:{}
};}
async fs0(ar){return await window.showDirectoryPicker({startIn:ar.a,mode:"readwrite"})}
fs1(ar){return ar.a.values()}
async fs2(ar){return await ar.c.getDirectoryHandle(ar.a,{create:ar.b})}
async fs3(ar){return await ar.c.getFileHandle(ar.a,{create:ar.b})}
fs4(ar){return ar.a.next()}
async fs5(ar){let A=[];for await(const val of ar.a){A.push(val);}return A}
async fs6(ar){return await ar.a.getFile()}
async fs7(ar){return await ar.a.createWritable({keepExistingData:ar.b,mode:ar.c})}
async fs8(ar){return await ar.a.write(ar.b)}
async fs9(ar){return await ar.a.close()}
async fs10(ar){return ar.a[ar.b]}
fs11(ar){return ar.a.text()}
async fs12(ar){return await ar.a.truncate(ar.b)}
async fs13(ar){return await ar.a.seek(ar.b)}

}Scratch.extensions.register(new FilSYS());})(Scratch);