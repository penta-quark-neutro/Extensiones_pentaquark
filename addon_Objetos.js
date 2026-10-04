(function(Scratch) {'use strict';//por neutral auream
let fu=1,da=1,ob=1,no=0;
function ref(){Scratch.vm.extensionManager.refreshBlocks();}
function cd(obj,opco,blty,hid,args){obj.opcode=opco;obj.blockType=blty;obj.hideFromPalette=hid;obj.arguments=args;return obj;}
const com=Scratch.BlockType.COMMAND,vgbb=Scratch.BlockType.BUTTON,bol=Scratch.BlockType.BOOLEAN,z={type:Scratch.ArgumentType.STRING};
function df(a){let b={};for (let i of a){b[i]=z}return b}
if(!Scratch.extensions.unsandboxed){throw new Error('Esta extension solo funcion sin "sandbox"');}
class expsext{getInfo(){return {id:'expsext',name:'exps++',color1:'#984905',color2:'#763613',color3:'#e39668',blocks: [
{func:'herr1',blockType:vgbb,hideFromPalette:!fu,text:'Mostrar funciones y utiles',},{func:'herr2',blockType:vgbb,hideFromPalette:fu,text:'Ocultar funciones y utiles'},
{func:'herr3',blockType:vgbb,hideFromPalette:!da,text:'Mostrar accesores',},{func:'herr4',blockType:vgbb,hideFromPalette:da,text:'Ocultar accesores'},
{func:'herr5',blockType:vgbb,hideFromPalette:!ob,text:'Mostrar asignadores',},{func:'herr6',blockType:vgbb,hideFromPalette:ob,text:'Ocultar asignadores'},
{blockType:"label",text:"Uso de funciones y utiles",hideFromPalette:fu},//--------------------------------------------------------------------------------------------------------------------------------
cd({text:'[a]([b][c])'},'e1',bol,fu,df('abc')),
cd({text:'new[a]([b][c])',},'e2',bol,fu,df('abc')),
cd({text:'[a].[c]([b][d])'},'e3',bol,fu,df('abcd')),
cd({text:'new[a].[c]([b][d])'},'e4',bol,fu,df('abcd')),
cd({text:'[a]([b][c])'},'e5',com,fu,df('abc')),
cd({text:'new[a]([b][c])'},'e6',com,fu,df('abc')),
cd({text:'[a].[c]([b][d])'},'e7',com,fu,df('abcd')),
cd({text:'new[a].[c]([b][d])'},'e8',com,fu,df('abcd')),
cd({text:'[a]?.([b][c])'},'e9',bol,fu,df('abc')),
cd({text:'[a].[b]?.([c][d])'},'e10',bol,fu,df('abcd')),
cd({text:'[a]?.([b][c])'},'e11',com,fu,df('abc')),
cd({text:'[a].[b]?.([c][d])'},'e12',com,fu,df('abcd')),
cd({text:'[a]([b][c][d])'},'e40',bol,fu,df('abcd')),
cd({text:'new[a]([b][c][d])'},'e41',bol,fu,df('abcd')),
cd({text:'[a].[c]([b][d][e])'},'e42',bol,fu,df('abcde')),
cd({text:'new[a].[c]([b][d][e])'},'e43',bol,fu,df('abcde')),
cd({text:'[a]([b][c][d])'},'e44',com,fu,df('abcd')),
cd({text:'new[a]([b][c][d])'},'e45',com,fu,df('abcd')),
cd({text:'[a].[c]([b][d][e])'},'e46',com,fu,df('abcde')),
cd({text:'new[a].[c]([b][d][e])'},'e47',com,fu,df('abcde')),
cd({text:'[a]?.([b][c][d])'},'e48',bol,fu,df('abcd')),
cd({text:'[a].[b]?.([c][d][e])'},'e49',bol,fu,df('abcde')),
cd({text:'[a]?.([b][c][d])'},'e50',com,fu,df('abcd')),
cd({text:'[a].[b]?.([c][d][e])'},'e51',com,fu,df('abcde')),
cd({text:'[a]?([b]?[d]:[e]):[c]'},'e37',bol,fu,df('abcde')),
cd({text:'[a]?[b]:([c]?[d]:[e])'},'e38',bol,fu,df('abcde')),
cd({text:'[a]?([b]?[d]:[e]):([c]?[f]:[g])'},'e39',bol,fu,df('abcdefg')),
cd({text:'array[a][b][c][d][e]'},'e118',bol,fu,df('abcde')),
cd({text:'array[a][b][c][d][e][f]'},'e119',bol,fu,df('abcdef')),
cd({text:'array[a][b][c][d][e][f][g]'},'e120',bol,fu,df('abcdefg')),
cd({text:'array[a][b][c][d][e][f][g][h]'},'e121',bol,fu,df('abcdefgh')),
cd({text:'{[a]:[b],[c]:[d],[e]:[f],[g]:[h],[i]:[j]}'},'e122',bol,fu,df('abcdefghij')),
cd({text:'{[a]:[b],[c]:[d],[e]:[f],[g]:[h],[i]:[j],[k]:[l]}'},'e123',bol,fu,df('abcdefghijkl')),
cd({text:'{[a]:[b],[c]:[d],[e]:[f],[g]:[h],[i]:[j],[k]:[l],[m]:[n]}'},'e124',bol,fu,df('abcdefghijklmn')),
cd({text:'{[a]:[b],[c]:[d],[e]:[f],[g]:[h],[i]:[j],[k]:[l],[m]:[n],[o]:[p]}'},'e125',bol,fu,df('abcdefghijklmnop')),
{blockType:"label",text:"accesores",hideFromPalette:da},//----------------------------------------------------------------------------------------------------------------------
cd({text:'[a].[b].[c].[d].[e]'},'e13',bol,da,df('abcde')),
cd({text:'[a].[b].[c].[d].[e].[f]'},'e14',bol,da,df('abcdef')),
cd({text:'[a].[b].[c].[d].[e].[f].[g]'},'e15',bol,da,df('abcdefg')),
cd({text:'[a].[b].[c].[d].[e].[f].[g].[h]'},'e16',bol,da,df('abcdefgh')),
cd({text:'[a].[b].[c].[d].[e].[f].[g].[h].[i]'},'e56',bol,da,df('abcdefghi')),
cd({text:'[a]?.[b]?.[c]?.[d]?.[e]'},'e17',bol,da,df('abcde')),
cd({text:'[a]?.[b]?.[c]?.[d]?.[e]?.[f]'},'e18',bol,da,df('abcdef')),
cd({text:'[a]?.[b]?.[c]?.[d]?.[e]?.[f]?.[g]'},'e19',bol,da,df('abcdefg')),
cd({text:'[a]?.[b]?.[c]?.[d]?.[e]?.[f]?.[g]?.[h]'},'e20',bol,da,df('abcdefgh')),
cd({text:'[a]?.[b]?.[c]?.[d]?.[e]?.[f]?.[g]?.[h]?.[i]'},'e57',bol,da,df('abcdefghi')),
{blockType:"label",text:"asignadores",hideFromPalette:ob},//--------------------------------------------------------------------------------------------------------------------------------
cd({text:'[a].[b].[d]=[c]'},'e21',com,ob,df('abcd')),
cd({text:'[a].[b].[d]+=[c]'},'e22',com,ob,df('abcd')),
cd({text:'[a].[b].[d]-=[c]'},'e23',com,ob,df('abcd')),
cd({text:'[a].[b].[d]/=[c]'},'e24',com,ob,df('abcd')),
cd({text:'[a].[b].[d]*=[c]'},'e25',com,ob,df('abcd')),
cd({text:'[a].[b].[d]**=[c]'},'e26',com,ob,df('abcd')),
cd({text:'[a].[b].[d]%=[c]'},'e27',com,ob,df('abcd')),
cd({text:'[a].[b].[d]<<=[c]'},'e28',com,ob,df('abcd')),
cd({text:'[a].[b].[d]>>=[c]'},'e29',com,ob,df('abcd')),
cd({text:'[a].[b].[d]>>>=[c]'},'e30',com,ob,df('abcd')),
cd({text:'[a].[b].[d]&=[c]'},'e31',com,ob,df('abcd')),
cd({text:'[a].[b].[d]|=[c]'},'e32',com,ob,df('abcd')),
cd({text:'[a].[b].[d]^=[c]'},'e33',com,ob,df('abcd')),
cd({text:'[a].[b].[d]||=[c]'},'e34',com,ob,df('abcd')),
cd({text:'[a].[b].[d]&&=[c]'},'e35',com,ob,df('abcd')),
cd({text:'[a].[b].[d]??=[c]'},'e36',com,ob,df('abcd')),
{func:'herr7',blockType:vgbb,hideFromPalette:ob,text:'Siguiente'},//----------------------------
cd({text:'[a].[b]=[c],[d]=[e]'},'e52',com,ob||(no!=0),df('abcde')),
cd({text:'[a].[b]=[c],[d]=[e],[f]=[g]'},'e53',com,ob||(no!=0),df('abcdefg')),
cd({text:'[a].[b]=[c],[d]=[e],[f]=[g],[h]=[i]'},'e54',com,ob||(no!=0),df('abcdefghi')),
cd({text:'[a].[b]=[c],[d]=[e],[f]=[g],[h]=[i],[j]=[k]'},'e55',com,ob||(no!=0),df('abcdefghijk')),
cd({text:'[a].[b]+=[c],[d]+=[e]'},'e58',com,ob||(no!=1),df('abcde')),
cd({text:'[a].[b]+=[c],[d]+=[e],[f]+=[g]'},'e59',com,ob||(no!=1),df('abcdefg')),
cd({text:'[a].[b]+=[c],[d]+=[e],[f]+=[g],[h]+=[i]'},'e60',com,ob||(no!=1),df('abcdefghi')),
cd({text:'[a].[b]+=[c],[d]+=[e],[f]+=[g],[h]+=[i],[j]+=[k]'},'e61',com,ob||(no!=1),df('abcdefghijk')),
cd({text:'[a].[b]-=[c],[d]-=[e]'},'e62',com,ob||(no!=2),df('abcde')),
cd({text:'[a].[b]-=[c],[d]-=[e],[f]-=[g]'},'e63',com,ob||(no!=2),df('abcdefg')),
cd({text:'[a].[b]-=[c],[d]-=[e],[f]-=[g],[h]-=[i]'},'e64',com,ob||(no!=2),df('abcdefghi')),
cd({text:'[a].[b]-=[c],[d]-=[e],[f]-=[g],[h]-=[i],[j]-=[k]'},'e65',com,ob||(no!=2),df('abcdefghijk')),
cd({text:'[a].[b]/=[c],[d]/=[e]'},'e66',com,ob||(no!=3),df('abcde')),
cd({text:'[a].[b]/=[c],[d]/=[e],[f]/=[g]'},'e67',com,ob||(no!=3),df('abcdefg')),
cd({text:'[a].[b]/=[c],[d]/=[e],[f]/=[g],[h]/=[i]'},'e68',com,ob||(no!=3),df('abcdefghi')),
cd({text:'[a].[b]/=[c],[d]/=[e],[f]/=[g],[h]/=[i],[j]/=[k]'},'e69',com,ob||(no!=3),df('abcdefghijk')),
cd({text:'[a].[b]*=[c],[d]*=[e]'},'e70',com,ob||(no!=4),df('abcde')),
cd({text:'[a].[b]*=[c],[d]*=[e],[f]*=[g]'},'e71',com,ob||(no!=4),df('abcdefg')),
cd({text:'[a].[b]*=[c],[d]*=[e],[f]*=[g],[h]*=[i]'},'e72',com,ob||(no!=4),df('abcdefghi')),
cd({text:'[a].[b]*=[c],[d]*=[e],[f]*=[g],[h]*=[i],[j]*=[k]'},'e73',com,ob||(no!=4),df('abcdefghijk')),
cd({text:'[a].[b]**=[c],[d]**=[e]'},'e74',com,ob||(no!=5),df('abcde')),
cd({text:'[a].[b]**=[c],[d]**=[e],[f]**=[g]'},'e75',com,ob||(no!=5),df('abcdefg')),
cd({text:'[a].[b]**=[c],[d]**=[e],[f]**=[g],[h]**=[i]'},'e76',com,ob||(no!=5),df('abcdefghi')),
cd({text:'[a].[b]**=[c],[d]**=[e],[f]**=[g],[h]**=[i],[j]**=[k]'},'e77',com,ob||(no!=5),df('abcdefghijk')),
cd({text:'[a].[b]%=[c],[d]%=[e]'},'e78',com,ob||(no!=6),df('abcde')),
cd({text:'[a].[b]%=[c],[d]%=[e],[f]%=[g]'},'e79',com,ob||(no!=6),df('abcdefg')),
cd({text:'[a].[b]%=[c],[d]%=[e],[f]%=[g],[h]%=[i]'},'e80',com,ob||(no!=6),df('abcdefghi')),
cd({text:'[a].[b]%=[c],[d]%=[e],[f]%=[g],[h]%=[i],[j]%=[k]'},'e81',com,ob||(no!=6),df('abcdefghijk')),
cd({text:'[a].[b]<<=[c],[d]<<=[e]'},'e82',com,ob||(no!=7),df('abcde')),
cd({text:'[a].[b]<<=[c],[d]<<=[e],[f]<<=[g]'},'e83',com,ob||(no!=7),df('abcdefg')),
cd({text:'[a].[b]<<=[c],[d]<<=[e],[f]<<=[g],[h]<<=[i]'},'e84',com,ob||(no!=7),df('abcdefghi')),
cd({text:'[a].[b]<<=[c],[d]<<=[e],[f]<<=[g],[h]<<=[i],[j]<<=[k]'},'e85',com,ob||(no!=7),df('abcdefghijk')),
cd({text:'[a].[b]>>=[c],[d]>>=[e]'},'e86',com,ob||(no!=8),df('abcde')),
cd({text:'[a].[b]>>=[c],[d]>>=[e],[f]>>=[g]'},'e87',com,ob||(no!=8),df('abcdefg')),
cd({text:'[a].[b]>>=[c],[d]>>=[e],[f]>>=[g],[h]>>=[i]'},'e88',com,ob||(no!=8),df('abcdefghi')),
cd({text:'[a].[b]>>=[c],[d]>>=[e],[f]>>=[g],[h]>>=[i],[j]>>=[k]'},'e89',com,ob||(no!=8),df('abcdefghijk')),
cd({text:'[a].[b]>>>=[c],[d]>>>=[e]'},'e90',com,ob||(no!=9),df('abcde')),
cd({text:'[a].[b]>>>=[c],[d]>>>=[e],[f]>>>=[g]'},'e91',com,ob||(no!=9),df('abcdefg')),
cd({text:'[a].[b]>>>=[c],[d]>>>=[e],[f]>>>=[g],[h]>>>=[i]'},'e92',com,ob||(no!=9),df('abcdefghi')),
cd({text:'[a].[b]>>>=[c],[d]>>>=[e],[f]>>>=[g],[h]>>>=[i],[j]>>>=[k]'},'e93',com,ob||(no!=9),df('abcdefghijk')),
cd({text:'[a].[b]&=[c],[d]&=[e]'},'e94',com,ob||(no!=10),df('abcde')),
cd({text:'[a].[b]&=[c],[d]&=[e],[f]&=[g]'},'e95',com,ob||(no!=10),df('abcdefg')),
cd({text:'[a].[b]&=[c],[d]&=[e],[f]&=[g],[h]&=[i]'},'e96',com,ob||(no!=10),df('abcdefghi')),
cd({text:'[a].[b]&=[c],[d]&=[e],[f]&=[g],[h]&=[i],[j]&=[k]'},'e97',com,ob||(no!=10),df('abcdefghijk')),
cd({text:'[a].[b]|=[c],[d]|=[e]'},'e98',com,ob||(no!=11),df('abcde')),
cd({text:'[a].[b]|=[c],[d]|=[e],[f]|=[g]'},'e99',com,ob||(no!=11),df('abcdefg')),
cd({text:'[a].[b]|=[c],[d]|=[e],[f]|=[g],[h]|=[i]'},'e100',com,ob||(no!=11),df('abcdefghi')),
cd({text:'[a].[b]|=[c],[d]|=[e],[f]|=[g],[h]|=[i],[j]|=[k]'},'e101',com,ob||(no!=11),df('abcdefghijk')),
cd({text:'[a].[b]^=[c],[d]^=[e]'},'e102',com,ob||(no!=12),df('abcde')),
cd({text:'[a].[b]^=[c],[d]^=[e],[f]^=[g]'},'e103',com,ob||(no!=12),df('abcdefg')),
cd({text:'[a].[b]^=[c],[d]^=[e],[f]^=[g],[h]^=[i]'},'e104',com,ob||(no!=12),df('abcdefghi')),
cd({text:'[a].[b]^=[c],[d]^=[e],[f]^=[g],[h]^=[i],[j]^=[k]'},'e105',com,ob||(no!=12),df('abcdefghijk')),
cd({text:'[a].[b]||=[c],[d]||=[e]'},'e106',com,ob||(no!=13),df('abcde')),
cd({text:'[a].[b]||=[c],[d]||=[e],[f]||=[g]'},'e107',com,ob||(no!=13),df('abcdefg')),
cd({text:'[a].[b]||=[c],[d]||=[e],[f]||=[g],[h]||=[i]'},'e108',com,ob||(no!=13),df('abcdefghi')),
cd({text:'[a].[b]||=[c],[d]||=[e],[f]||=[g],[h]||=[i],[j]||=[k]'},'e109',com,ob||(no!=13),df('abcdefghijk')),
cd({text:'[a].[b]&&=[c],[d]&&=[e]'},'e110',com,ob||(no!=14),df('abcde')),
cd({text:'[a].[b]&&=[c],[d]&&=[e],[f]&&=[g]'},'e111',com,ob||(no!=14),df('abcdefg')),
cd({text:'[a].[b]&&=[c],[d]&&=[e],[f]&&=[g],[h]&&=[i]'},'e112',com,ob||(no!=14),df('abcdefghi')),
cd({text:'[a].[b]&&=[c],[d]&&=[e],[f]&&=[g],[h]&&=[i],[j]&&=[k]'},'e113',com,ob||(no!=14),df('abcdefghijk')),
cd({text:'[a].[b]??=[c],[d]??=[e]'},'e114',com,ob||(no!=15),df('abcde')),
cd({text:'[a].[b]??=[c],[d]??=[e],[f]??=[g]'},'e115',com,ob||(no!=15),df('abcdefg')),
cd({text:'[a].[b]??=[c],[d]??=[e],[f]??=[g],[h]??=[i]'},'e116',com,ob||(no!=15),df('abcdefghi')),
cd({text:'[a].[b]??=[c],[d]??=[e],[f]??=[g],[h]??=[i],[j]??=[k]'},'e117',com,ob||(no!=15),df('abcdefghijk'))

],menus:{}
};}
herr1(){fu=0;ref()}herr2(){fu=1;ref()}herr3(){da=0;ref()}herr4(){da=1;ref()}herr5(){ob=0;ref()}herr6(){ob=1;ref()}herr7(){no+=1;(no>15?no=0:null);ref()}
e1(ar){return ar.a(ar.b,ar.c)}
e2(ar){return new ar.a(ar.b,ar.c)}
e3(ar){return ar.a[ar.c](ar.b,ar.d)}
e4(ar){return new ar.a[ar.c](ar.b,ar.d)}
e5(ar){ar.a(ar.b,ar.c)}
e6(ar){new ar.a(ar.b,ar.c)}
e7(ar){ar.a[ar.c](ar.b,ar.d)}
e8(ar){new ar.a[ar.c](ar.b,ar.d)}
e9(ar){return ar.a?.(ar.b,ar.c)}
e10(ar){return ar.a?.[ar.b]?.(ar.c,ar.d)}
e11(ar){ar.a?.(ar.b,ar.c)}
e12(ar){ar.a?.[ar.b]?.(ar.c,ar.d)}
e13(ar){return ar.a[ar.b][ar.c][ar.d][ar.e]}
e14(ar){return ar.a[ar.b][ar.c][ar.d][ar.e][ar.f]}
e15(ar){return ar.a[ar.b][ar.c][ar.d][ar.e][ar.f][ar.g]}
e16(ar){return ar.a[ar.b][ar.c][ar.d][ar.e][ar.f][ar.g][ar.h]}
e17(ar){return ar.a?.[ar.b]?.[ar.c]?.[ar.d]?.[ar.e]}
e18(ar){return ar.a?.[ar.b]?.[ar.c]?.[ar.d]?.[ar.e]?.[ar.f]}
e19(ar){return ar.a?.[ar.b]?.[ar.c]?.[ar.d]?.[ar.e]?.[ar.f]?.[ar.g]}
e20(ar){return ar.a?.[ar.b]?.[ar.c]?.[ar.d]?.[ar.e]?.[ar.f]?.[ar.g]?.[ar.h]}
e21(ar){ar.a[ar.b][ar.d]=ar.c}
e22(ar){ar.a[ar.b][ar.d]+=ar.c}
e23(ar){ar.a[ar.b][ar.d]-=ar.c}
e24(ar){ar.a[ar.b][ar.d]/=ar.c}
e25(ar){ar.a[ar.b][ar.d]*=ar.c}
e26(ar){ar.a[ar.b][ar.d]**=ar.c}
e27(ar){ar.a[ar.b][ar.d]%=ar.c}
e28(ar){ar.a[ar.b][ar.d]<<=ar.c}
e29(ar){ar.a[ar.b][ar.d]>>=ar.c}
e30(ar){ar.a[ar.b][ar.d]>>>=ar.c}
e31(ar){ar.a[ar.b][ar.d]&=ar.c}
e32(ar){ar.a[ar.b][ar.d]|=ar.c}
e33(ar){ar.a[ar.b][ar.d]^=ar.c}
e34(ar){ar.a[ar.b][ar.d]||=ar.c}
e35(ar){ar.a[ar.b][ar.d]&&=ar.c}
e36(ar){ar.a[ar.b][ar.d]??=ar.c}
e37(ar){return (ar.a?(ar.b?ar.d:ar.e):ar.c)}
e38(ar){return (ar.a?ar.b:(ar.c?ar.d:ar.e))}
e39(ar){return (ar.a?(ar.b?ar.d:ar.e):(ar.c?ar.f:ar.g))}
e40(ar){return ar.a(ar.b,ar.c,ar.d);}
e41(ar){return new ar.a(ar.b,ar.c,ar.d)}
e42(ar){return ar.a[ar.c](ar.b,ar.d,ar.e)}
e43(ar){return new ar.a[ar.c](ar.b,ar.d,ar.e)}
e44(ar){ar.a(ar.b,ar.c,ar.d)}
e45(ar){new ar.a(ar.b,ar.c,ar.d)}
e46(ar){ar.a[ar.c](ar.b,ar.d,ar.e)}
e47(ar){new ar.a[ar.c](ar.b,ar.d,ar.e)}
e48(ar){return ar.a?.(ar.b,ar.c,ar.d)}
e49(ar){return ar.a?.[ar.b]?.(ar.c,ar.d,ar.e)}
e50(ar){ar.a?.(ar.b,ar.c,ar.d)}
e51(ar){ar.a?.[ar.b]?.(ar.c,ar.d,ar.e)}
e52(ar){ar.a[ar.b]=ar.c,ar.a[ar.d]=ar.e}
e53(ar){ar.a[ar.b]=ar.c,ar.a[ar.d]=ar.e,ar.a[ar.f]=ar.g}
e54(ar){ar.a[ar.b]=ar.c,ar.a[ar.d]=ar.e,ar.a[ar.f]=ar.g,ar.a[ar.h]=ar.i}
e55(ar){ar.a[ar.b]=ar.c,ar.a[ar.d]=ar.e,ar.a[ar.f]=ar.g,ar.a[ar.h]=ar.i,ar.a[ar.j]=ar.k}
e56(ar){return ar.a[ar.b][ar.c][ar.d][ar.e][ar.f][ar.g][ar.h][ar.i]}
e57(ar){return ar.a?.[ar.b]?.[ar.c]?.[ar.d]?.[ar.e]?.[ar.f]?.[ar.g]?.[ar.h]?.[ar.i]}
e58({a,b,c,d,e}){a[b]+=c,a[d]+=e}
e59({a,b,c,d,e,f,g}){a[b]+=c,a[d]+=e,a[f]+=g}
e60({a,b,c,d,e,f,g,h,i}){a[b]+=c,a[d]+=e,a[f]+=g,a[h]+=i}
e61({a,b,c,d,e,f,g,h,i,j,k}){a[b]+=c,a[d]+=e,a[f]+=g,a[h]+=i,a[j]+=k}
e62({a,b,c,d,e}){a[b]-=c,a[d]-=e}
e63({a,b,c,d,e,f,g}){a[b]-=c,a[d]-=e,a[f]-=g}
e64({a,b,c,d,e,f,g,h,i}){a[b]-=c,a[d]-=e,a[f]-=g,a[h]-=i}
e65({a,b,c,d,e,f,g,h,i,j,k}){a[b]-=c,a[d]-=e,a[f]-=g,a[h]-=i,a[j]-=k}
e66({a,b,c,d,e}){a[b]/=c,a[d]/=e}
e67({a,b,c,d,e,f,g}){a[b]/=c,a[d]/=e,a[f]/=g}
e68({a,b,c,d,e,f,g,h,i}){a[b]/=c,a[d]/=e,a[f]/=g,a[h]/=i}
e69({a,b,c,d,e,f,g,h,i,j,k}){a[b]/=c,a[d]/=e,a[f]/=g,a[h]/=i,a[j]/=k}
e70({a,b,c,d,e}){a[b]*=c,a[d]*=e}
e71({a,b,c,d,e,f,g}){a[b]*=c,a[d]*=e,a[f]*=g}
e72({a,b,c,d,e,f,g,h,i}){a[b]*=c,a[d]*=e,a[f]*=g,a[h]*=i}
e73({a,b,c,d,e,f,g,h,i,j,k}){a[b]*=c,a[d]*=e,a[f]*=g,a[h]*=i,a[j]*=k}
e74({a,b,c,d,e}){a[b]**=c,a[d]**=e}
e75({a,b,c,d,e,f,g}){a[b]**=c,a[d]**=e,a[f]**=g}
e76({a,b,c,d,e,f,g,h,i}){a[b]**=c,a[d]**=e,a[f]**=g,a[h]**=i}
e77({a,b,c,d,e,f,g,h,i,j,k}){a[b]**=c,a[d]**=e,a[f]**=g,a[h]**=i,a[j]**=k}
e78({a,b,c,d,e}){a[b]%=c,a[d]%=e}
e79({a,b,c,d,e,f,g}){a[b]%=c,a[d]%=e,a[f]%=g}
e80({a,b,c,d,e,f,g,h,i}){a[b]%=c,a[d]%=e,a[f]%=g,a[h]%=i}
e81({a,b,c,d,e,f,g,h,i,j,k}){a[b]%=c,a[d]%=e,a[f]%=g,a[h]%=i,a[j]%=k}
e82({a,b,c,d,e}){a[b]<<=c,a[d]<<=e}
e83({a,b,c,d,e,f,g}){a[b]<<=c,a[d]<<=e,a[f]<<=g}
e84({a,b,c,d,e,f,g,h,i}){a[b]<<=c,a[d]<<=e,a[f]<<=g,a[h]<<=i}
e85({a,b,c,d,e,f,g,h,i,j,k}){a[b]<<=c,a[d]<<=e,a[f]<<=g,a[h]<<=i,a[j]<<=k}
e86({a,b,c,d,e}){a[b]>>=c,a[d]>>=e}
e87({a,b,c,d,e,f,g}){a[b]>>=c,a[d]>>=e,a[f]>>=g}
e88({a,b,c,d,e,f,g,h,i}){a[b]>>=c,a[d]>>=e,a[f]>>=g,a[h]>>=i}
e89({a,b,c,d,e,f,g,h,i,j,k}){a[b]>>=c,a[d]>>=e,a[f]>>=g,a[h]>>=i,a[j]>>=k}
e90({a,b,c,d,e}){a[b]>>>=c,a[d]>>>=e}
e91({a,b,c,d,e,f,g}){a[b]>>>=c,a[d]>>>=e,a[f]>>>=g}
e92({a,b,c,d,e,f,g,h,i}){a[b]>>>=c,a[d]>>>=e,a[f]>>>=g,a[h]>>>=i}
e93({a,b,c,d,e,f,g,h,i,j,k}){a[b]>>>=c,a[d]>>>=e,a[f]>>>=g,a[h]>>>=i,a[j]>>>=k}
e94({a,b,c,d,e}){a[b]&=c,a[d]&=e}
e95({a,b,c,d,e,f,g}){a[b]&=c,a[d]&=e,a[f]&=g}
e96({a,b,c,d,e,f,g,h,i}){a[b]&=c,a[d]&=e,a[f]&=g,a[h]&=i}
e97({a,b,c,d,e,f,g,h,i,j,k}){a[b]&=c,a[d]&=e,a[f]&=g,a[h]&=i,a[j]&=k}
e98({a,b,c,d,e}){a[b]|=c,a[d]|=e}
e99({a,b,c,d,e,f,g}){a[b]|=c,a[d]|=e,a[f]|=g}
e100({a,b,c,d,e,f,g,h,i}){a[b]|=c,a[d]|=e,a[f]|=g,a[h]|=i}
e101({a,b,c,d,e,f,g,h,i,j,k}){a[b]|=c,a[d]|=e,a[f]|=g,a[h]|=i,a[j]|=k}
e102({a,b,c,d,e}){a[b]^=c,a[d]^=e}
e103({a,b,c,d,e,f,g}){a[b]^=c,a[d]^=e,a[f]^=g}
e104({a,b,c,d,e,f,g,h,i}){a[b]^=c,a[d]^=e,a[f]^=g,a[h]^=i}
e105({a,b,c,d,e,f,g,h,i,j,k}){a[b]^=c,a[d]^=e,a[f]^=g,a[h]^=i,a[j]^=k}
e106({a,b,c,d,e}){a[b]||=c,a[d]||=e}
e107({a,b,c,d,e,f,g}){a[b]||=c,a[d]||=e,a[f]||=g}
e108({a,b,c,d,e,f,g,h,i}){a[b]||=c,a[d]||=e,a[f]||=g,a[h]||=i}
e109({a,b,c,d,e,f,g,h,i,j,k}){a[b]||=c,a[d]||=e,a[f]||=g,a[h]||=i,a[j]||=k}
e110({a,b,c,d,e}){a[b]&&=c,a[d]&&=e}
e111({a,b,c,d,e,f,g}){a[b]&&=c,a[d]&&=e,a[f]&&=g}
e112({a,b,c,d,e,f,g,h,i}){a[b]&&=c,a[d]&&=e,a[f]&&=g,a[h]&&=i}
e113({a,b,c,d,e,f,g,h,i,j,k}){a[b]&&=c,a[d]&&=e,a[f]&&=g,a[h]&&=i,a[j]&&=k}
e114({a,b,c,d,e}){a[b]??=c,a[d]??=e}
e115({a,b,c,d,e,f,g}){a[b]??=c,a[d]??=e,a[f]??=g}
e116({a,b,c,d,e,f,g,h,i}){a[b]??=c,a[d]??=e,a[f]??=g,a[h]??=i}
e117({a,b,c,d,e,f,g,h,i,j,k}){a[b]??=c,a[d]??=e,a[f]??=g,a[h]??=i,a[j]??=k}
e118(ar){return [ar.a,ar.b,ar.c,ar.d,ar.e]}
e119(ar){return [ar.a,ar.b,ar.c,ar.d,ar.e,ar.f]}
e120(ar){return [ar.a,ar.b,ar.c,ar.d,ar.e,ar.f,ar.g]}
e121(ar){return [ar.a,ar.b,ar.c,ar.d,ar.e,ar.f,ar.g,ar.h]}
e122({a,b,c,d,e,f,g,h,i,j}){return {[a]:b,[c]:d,[e]:f,[g]:h,[i]:j}}
e123({a,b,c,d,e,f,g,h,i,j,k,l}){return {[a]:b,[c]:d,[e]:f,[g]:h,[i]:j,[k]:l}}
e124({a,b,c,d,e,f,g,h,i,j,k,l,m,n}){return {[a]:b,[c]:d,[e]:f,[g]:h,[i]:j,[k]:l,[m]:n}}
e125({a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p}){return {[a]:b,[c]:d,[e]:f,[g]:h,[i]:j,[k]:l,[m]:n,[o]:p}}


}Scratch.extensions.register(new expsext());})(Scratch);