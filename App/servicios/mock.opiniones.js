System.register(["../modelo/opiniones"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var opiniones_1;
    var OPINION;
    return {
        setters:[
            function (opiniones_1_1) {
                opiniones_1 = opiniones_1_1;
            }],
        execute: function() {
            exports_1("OPINION", OPINION = [
                new opiniones_1.Opinion(1, "María", "30", "Me gusta la dinámica de la página. creo que es importante conocer realmente que es una enfermedad rara"),
            ]);
        }
    }
});
//# sourceMappingURL=mock.opiniones.js.map