System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Opinion;
    return {
        setters:[],
        execute: function() {
            Opinion = (function () {
                function Opinion(id, nombre, edad, comentario) {
                    this.id = id;
                    this.nombre = nombre;
                    this.edad = edad;
                    this.comentario = comentario;
                }
                return Opinion;
            }());
            exports_1("Opinion", Opinion);
        }
    }
});
//# sourceMappingURL=opiniones.js.map