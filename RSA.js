(function(Scratch) {'use strict';//por el (pentaquark neutro, penta quark neutro) y neutral auream
const com0=Scratch.BlockType.COMMAND;const str0=Scratch.ArgumentType.STRING;
const bol0=Scratch.BlockType.BOOLEAN;const rep0=Scratch.BlockType.REPORTER;
class RSA{getInfo(){return {id:'RSA',name:'RSA',color1:'#f80712',color2:'#0d500f',color3:'#00c055',blocks: [
{opcode:'E0',blockType:rep0,text:'generar llave bites[a]RSA',arguments:{a:{type:str0,defaultValue:'4096'}}},
{opcode:'E1',blockType:rep0,text:'Datos planos[a]',arguments:{a:{type:str0,defaultValue:'texto'}}},
{opcode:'E2',blockType:rep0,text:'Encriptar[a][b]RSA',arguments:{a:{type:str0,defaultValue:'Datos'},b:{type:str0,defaultValue:'llave'}}},
{opcode:'E5',blockType:rep0,text:'Desencriptar[a][b]RSA',arguments:{a:{type:str0,defaultValue:'Datos'},b:{type:str0,defaultValue:'llave'}}},
{opcode:'E3',blockType:rep0,text:'Exportar llave publica[a]RSA',arguments:{a:{type:str0,defaultValue:'llaves'}}},
{opcode:'E4',blockType:rep0,text:'Importar llave publica[a]RSA',arguments:{a:{type:str0,defaultValue:'llaves TypedArray'}}},
{opcode:'E6',blockType:rep0,text:'Convertir a TypedArray[a]',arguments:{a:{type:str0,defaultValue:'40,24,75 o Arraybuffer'}}},
{opcode:'E7',blockType:rep0,text:'TypedArray a texto[a]',arguments:{a:{type:str0,defaultValue:'TypedArray'}}},
{opcode:'E13',blockType:rep0,text:'texto a base64[a]',arguments:{a:{type:str0,defaultValue:'texto'}}},
{opcode:'E14',blockType:rep0,text:'base64 a texto[a]',arguments:{a:{type:str0,defaultValue:'base64'}}},
{opcode:'E8',blockType:rep0,text:'Libro de desplasamiento[a]Uint8Array',arguments:{a:{type:Scratch.ArgumentType.NUMBER,defaultValue:'Numero de casillas<2^16'}}},
{opcode:'E9',blockType:rep0,text:'UUID aleatorio',disableMonitor:1},
{opcode:'E10',blockType:rep0,text:'Aplicar desplazamiento XOR con[a]a[b]desde[c]',arguments:{a:{type:str0,defaultValue:'TypedArray'},b:{type:str0,defaultValue:'Datos'},c:{type:str0,defaultValue:'0'}}},
{opcode:'E15',blockType:rep0,text:'generar firmador HMAC hash[a]',arguments:{a:{type:str0,defaultValue:'SHA-512'}}},
{opcode:'E11',blockType:rep0,text:'firmar datos[a]con[b]',arguments:{a:{type:str0,defaultValue:'ArrayBuffer o TypedArray'},b:{type:str0,defaultValue:'llave HMAC'}}},
{opcode:'E12',blockType:bol0,text:'verificar datos[a]llave[b]firma[c]',arguments:{a:{type:str0,defaultValue:'ArrayBuffer o TypedArray'},b:{type:str0,defaultValue:'llave HMAC'},c:{type:str0,defaultValue:'Firma'}}},
{opcode:'E16',blockType:rep0,text:'Exportar llave HMAC[a]',arguments:{a:{type:str0,defaultValue:'llave'}}},
{opcode:'E17',blockType:rep0,text:'importar llave HMAC[a][b]',arguments:{a:{type:str0,defaultValue:'llave'},b:{type:str0,defaultValue:'SHA-512'}}},
{opcode:'E18',blockType:rep0,text:'Exportar llave privada[a]RSA',arguments:{a:{type:str0,defaultValue:'llaves'}}},
{opcode:'E19',blockType:rep0,text:'Importar llave privada[a]RSA',arguments:{a:{type:str0,defaultValue:'llaves TypedArray'}}},
{opcode:'E20',blockType:rep0,hideFromPalette:1,text:'generar llave AES[a]',arguments:{a:{type:str0,defaultValue:'TypedArray o ArrayBuffer de 16 bytes'}}},
{opcode:'E21',blockType:rep0,hideFromPalette:1,text:'Exportar llave AES[a]',arguments:{a:{type:str0,defaultValue:'llaves'},b:{type:str0,defaultValue:'llave AES'}}},
{opcode:'E22',blockType:rep0,hideFromPalette:1,text:'Importar llave AES[a]',arguments:{a:{type:str0,defaultValue:'TypedArray o ArrayBuffer'}}},
],};}

E0(ar){return crypto.subtle.generateKey({name:"RSA-OAEP",modulusLength:Number(ar.a),publicExponent:new Uint8Array([1, 0, 1]),hash:"SHA-256"},true,["encrypt","decrypt"])}
E1(ar){return (new TextEncoder()).encode(ar.a)}
E2(ar){if(ar.b.toString()=='[object CryptoKey]'){return crypto.subtle.encrypt({name:"RSA-OAEP"},ar.b,ar.a)}else{return crypto.subtle.encrypt({name:"RSA-OAEP"},ar.b.publicKey,ar.a)}}
E3(ar){return crypto.subtle.exportKey('spki',ar.a.publicKey)}
E4(ar){return crypto.subtle.importKey('spki',ar.a,{name:"RSA-OAEP",hash:"SHA-256"},true,['encrypt'])}
E5(ar){if(ar.b.toString()=='[object Object]'){return crypto.subtle.decrypt({name:"RSA-OAEP"},ar.b.privateKey,ar.a)}else{return crypto.subtle.decrypt({name:"RSA-OAEP"},ar.b,ar.a)}}
E6(ar){if(typeof(ar.a)=='object'){if((ar.a.byteLength/2)%2==0){return new Uint16Array(ar.a)}else{return new Uint8Array(ar.a)}}else{return new Uint16Array(Array.from(ar.a.split(',')))}}
E7(ar){return (new TextDecoder()).decode(ar.a)}
E8(ar){return crypto.getRandomValues(new Uint8Array(ar.a))}
E9(ar){return crypto.randomUUID();}
E10(ar){var i=0,k=ar.b,t=ar.a.length-(ar.c+k.length);if((t)>=0){while(i<k.length){k[i]^=ar.a[i+ar.c];i++;}return k;}else{return 'libro de desplasamiento insuficiente';}}
E11(ar){return crypto.subtle.sign("HMAC",ar.b,ar.a)}
E12(ar){return crypto.subtle.verify("HMAC",ar.b,ar.c,ar.a)}
E13(ar){return btoa(ar.a)}
E14(ar){return atob(ar.a)}
E15(ar){return crypto.subtle.generateKey({name:"HMAC",hash:{name:ar.a}},true,["sign","verify"])}
E16(ar){return crypto.subtle.exportKey('raw',ar.a)}
E17(ar){return crypto.subtle.importKey('raw',ar.a,{name:'HMAC',hash:{name:ar.b}},true,['sign','verify'])}
E18(ar){return crypto.subtle.exportKey('pkcs8',ar.a.privateKey)}
E19(ar){return crypto.subtle.importKey('pkcs8',ar.a,{name:"RSA-OAEP",hash:"SHA-256"},true,['decrypt'])}
E20(ar){return crypto.subtle.generateKey({name:'AES-CBC',length:256},true,['wrapKey','unwrapKey'])}
E21(ar){return crypto.subtle.exportKey("raw",ar.a)}
E22(ar){return crypto.subtle.importKey("raw",ar.a,"AES-CBC",true,['wrapKey','unwrapKey'])}
}Scratch.extensions.register(new RSA());})(Scratch);