# Extensiones pentaquark
las extensiones aquí presentes están diseñadas para el entorno de turbowarp.
presentan bastantes diferencias, su construcción les confiere mas velocidad, pero no tienen manejo de errores
ni devuelven numbers y strings únicamente, pueden devolver: vectores, Objects, etc...
por lo cual su lógica de manejo debe ser mas cuidadoso.
## contenido de extensiones
### bigint y operadores
contiene los operadores básicos de js (+,-,/,*,**,%,<<,>>,>>>,^,~,|,&) y Bigint() y comparadores
### control de multitudes
actualmente sin mantenimiento...
pero es un poquito mas eficiente moviendo muchos objetos, que si todos tuvieran su propio código... no es muy útil realmente.
### interface
no tiene mucho de interface.
permite usar eval, y varias funciones internas de turbowarp, ademas de unos valores primitivos directamente.
un sistema básico para cargar y guardar archivos y un observador de precion.
⚠️permite ejecución arbitraria de código.
### Map
da disponibilidad al Objeto Map y WeakMap.
### set
da disponibilidad al Objeto Set y WeakSet.
### RSA
de la API cripto, da disponibilidad parcial a la encriptacion RSA.
perfecto para web sockets...
también tiene las firmas con HMAC.
¡aun esta en desarrollo!
⚠️usar con precaución, es fácil cometer errores que anules su funcionalidad.
### Symbol
da disponibilidad a los primitivos Symbol.
⚠️permite ejecución arbitraria de código.
### compleX
es una decente extensión para cálculos de números complejos,cuaterniones y octaniones.
es menos eficiente que vector directo que también incluye esto, pero esta extensión es muy
accesible y fácil de usar para dichos cálculos.
### Typedvector
es una potente extensión para usar los TypedVector, ArrayBuffer y DataView.
ademas de otro calculo aritmético.
ideal para trabajar con 'vector directo' si la eficiencia de datos te preocupa.
también es útil con 'RSA'.
## vector directo
es una de las potentes, permite usar Arrays y TypedArray (pero menos flexible que 'Typedvector')
con la mayoría de métodos de Array, muchos métodos para ahorrar espacio de bloques y eficiencia.
una gran cantidad de métodos aritméticos y gestión de referencias de Objetos del editor (Sprites), que esto
incluye modificación de posición, dirección visibilidad, pausar, detener y despausar.
ademas de manejar números complejos,cuaterniones,octaniones y sedeniones.
cuenta con detección de colicion geométrica básica.
⚠️permite ejecución arbitraria de código.
+220 bloques, +200 acciones con menús.
## objetos
es la mas potente extensión hasta el momento.
reintroduce toda la metaprogramacion de Js, en otros términos: se puede volver a crear y ejecutar funciones de forma dinámica.
ademas de una gran manejo de Object, también expone objetos internos de Turbowarp como VM, y da de forma rápida otros objetos importantes.
técnicamente con esta, se puede hacer todo lo que Js pueda hacer, pero recomiendo usarla junto a otras.
ademas de facilitar el remplazo de código generado por turbowarp con propio.
⚠️permite ejecución arbitraria de código.
+120 bloques, +20 acciones de menús.
### Decimal arbitrario
es una extensión para trabajar con numero decimales arbitrarios en su longitud, funciona en base a [Decimal.js](https://github.com/MikeMcl/decimal.js)
### Iterador
Da facilidad de uso a Iteradores, y sus métodos.
⚠️permite ejecución arbitraria de código.
## workers
permite usar Worker y SharedWorker de una forma simple.
también tiene la Api MessageChannel.
ademas de unos bloques de acceso y ejecución de código.
⚠️permite ejecución arbitraria de código.
### Logica trivalente
parecido y compatible con Boolean.
es una lógica que tiene los valores verdadero, falso y desconocido.
