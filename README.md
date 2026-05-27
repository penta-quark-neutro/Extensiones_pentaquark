# Extenciones pentaquark
las extensiones aqui presentes estan diseñadas para el entorno de turbowarp.
presentan bastantes diferencias, su construccion les confiere mas velocidad, pero no tienen manejo de erroes
ni devuelven numbers y strings unicamente, pueden devolver: vectores, Objects, etc...
por lo cual su logica de manejo debe ser mas cuidadoso.
## contenido de extensiones
### bigint y operadores
contiene los operadores basicos de js (+,-,/,*,**,<<,>>,>>>,^,~,|,&) y Bigint() y comparadores
### control de multitudes
actualmente sin mantenimiento...
pero es un poquito mas eficiente moviendo muchos objetos, que si todos tuvieran su propio codigo... no es muy util realmente.
### interface
no tiene mucho de interface.
permite usar eval, y varias funciones internas de turbowarp, ademas de valores de unos primitivos directamente.
⚠️permite ejecucion arbitraria de codigo.
### Map
da disponibilidad al Objeto Map y WeakMap.
### set
da disponinilidad al Objeto Set y WeakSet.
### RSA
de la API cripto, da disponibilidad parcial a la encriptacion RSA.
perfecto para web sockets...
¡aun esta en desarrollo!
⚠️no lo use como si fuera realmente algo seguro, si quiere protejer datos, use algo que este especialisado
### Symbol
da disponibilidad a los primitivos Symbol.
⚠️permite ejecucion arbitraria de codigo.
### compleX
es una decente extension para calculos de numeros complejos,cuaterniones y octaniones.
ya esta obsoleta por 'vector directo'  y no es muy eficiente.
### Typedvector
es una potente extension para usar los TypedVector, ArrayBuffer y DataView.
ademas de otra calculo aritmetico.
ideal para trabajas con 'vector directo' si la eficiensia de datos te preocupa.
tambien es util con 'RSA'
## vector directo
es una de las potentes, permite usar Arrays y TypedArray (pero menos flexible que 'Typedvector')
con la mayoria de metodos de Array, muchos metodos para ahorra espacio de bloques y eficiencia.
una gran cantidad de metodos aritmeticos y gestion de referencias de Objetos del editor (Sprites).
ademas de manejar numeros complejos,cuaterniones,octaniones y sedeniones.
⚠️permite ejecucion arbitraria de codigo.
## objetos
es la mas potente extension hasta el momento.
rentroduce toda la metaprogramacion de Js, en otros terminos: se puede volver a crear y ejecutar funciones de forma dinamica.
ademas de una gran manejo de Object, tambien expone objetos internos de Turbowarp como VM, y da de foma rapida otros objetos imporatantes.
tecnicamente con esta, se puede hacer todo lo que Js pueda hacer, pero recomiendo usarla junto a otras.
⚠️permite ejecucion arbitraria de codigo.
