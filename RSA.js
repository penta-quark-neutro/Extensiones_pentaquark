(function(Scratch) {'use strict';
const com0=Scratch.BlockType.COMMAND;const str0=Scratch.ArgumentType.STRING;
const bol0=Scratch.BlockType.BOOLEAN;const rep0=Scratch.BlockType.REPORTER;
class RSA{getInfo(){return {id:'RSA',name:'RSA',color1:'#f80712',color2:'#0d500f',color3:'#00c055',blocks: [
{opcode:'E0',blockType:rep0,text:'generar llave bites[a]',arguments:{a:{type:str0,defaultValue:'4096'}}},
{opcode:'E1',blockType:rep0,text:'Datos planos[a]',arguments:{a:{type:str0,defaultValue:'texto'}}},
{opcode:'E2',blockType:rep0,text:'Encriptar[a][b]',arguments:{a:{type:str0,defaultValue:'Datos'},b:{type:str0,defaultValue:'llave'}}},
{opcode:'E5',blockType:rep0,text:'Desencriptar[a][b]',arguments:{a:{type:str0,defaultValue:'Datos'},b:{type:str0,defaultValue:'llave'}}},
{opcode:'E3',blockType:rep0,text:'Exportar llave publica[a]',arguments:{a:{type:str0,defaultValue:'llaves'}}},
{opcode:'E4',blockType:rep0,text:'Importar llave publica[a]',arguments:{a:{type:str0,defaultValue:'llaves TypedArray'}}},
{opcode:'E6',blockType:rep0,text:'Combertir a TypedArray[a]',arguments:{a:{type:str0,defaultValue:'40,24,75 o Arraybuffer'}}},
{opcode:'E7',blockType:rep0,text:'TypedArray a texto[a]',arguments:{a:{type:str0,defaultValue:'TypedArray'}}},
{opcode:'E8',blockType:rep0,text:'Libro de desplasamiento[a]Uint8Array',arguments:{a:{type:Scratch.ArgumentType.NUMBER,defaultValue:'Numero de casillas'}}},
{opcode:'E9',blockType:rep0,text:'UUID aleatoreo',disableMonitor:1},
{opcode:'E10',blockType:rep0,text:'Aplicar desplasamiento XOR con[a]a[b]desde[c]',arguments:{a:{type:str0,defaultValue:'TypedArray'},b:{type:str0,defaultValue:'Datos'},c:{type:str0,defaultValue:'0'}}},
],};}

E0(ar){return crypto.subtle.generateKey({name:"RSA-OAEP",modulusLength:Number(ar.a),publicExponent:new Uint8Array([1, 0, 1]),hash:"SHA-256"},true,["encrypt","decrypt"])}
E1(ar){return new Uint16Array(Array.from(ar.a.split('')).map(k=>k.charCodeAt(0)))}
E2(ar){if(ar.b=='[object CryptoKey]'){return crypto.subtle.encrypt({name:"RSA-OAEP"},ar.b,ar.a)}else{return crypto.subtle.encrypt({name:"RSA-OAEP"},ar.b.publicKey,ar.a)}}
E3(ar){return crypto.subtle.exportKey('spki',ar.a.publicKey)}
E4(ar){return crypto.subtle.importKey('spki',ar.a,{name:"RSA-OAEP",hash:"SHA-256"},true,['encrypt'])}
E5(ar){return crypto.subtle.decrypt({name:"RSA-OAEP"},ar.b.privateKey,ar.a)}
E6(ar){if(typeof(ar.a)=='object'){return new Uint16Array(ar.a)}else{return new Uint16Array(Array.from(ar.a.split(',')))}}
E7(ar){return String.fromCharCode(...ar.a)}
E8(ar){return crypto.getRandomValues(new Uint8Array(ar.a))}
E9(ar){return crypto.randomUUID();}
E10(ar){var i=0,k=ar.b,t=ar.a.length-(ar.c+k.length);if((t)>=0){while(i<k.length){k[i]^=ar.a[i+ar.c];i++;}return k;}else{return 'libro de desplasamiento insuficiente';}}
}Scratch.extensions.register(new RSA());})(Scratch);