System.register(["angular2/core", "angular2/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var HucherComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HucherComponent = (function () {
                function HucherComponent() {
                    this.mostrarHucher = false;
                    this.mostrarHCausas = false;
                    this.mostrarTipos = false;
                    this.mostrarSintomas = false;
                    this.mostrarAsociacion = false;
                }
                HucherComponent.prototype.onShowHide = function (value) {
                    this.mostrarHucher = value;
                    this.mostrarHCausas = false;
                    this.mostrarTipos = false;
                    this.mostrarSintomas = false;
                    this.mostrarAsociacion = false;
                };
                HucherComponent.prototype.onShowHide1 = function (value) {
                    this.mostrarHCausas = value;
                    this.mostrarHucher = false;
                    this.mostrarTipos = false;
                    this.mostrarSintomas = false;
                    this.mostrarAsociacion = false;
                };
                HucherComponent.prototype.onShowHide3 = function (value) {
                    this.mostrarTipos = value;
                    this.mostrarHCausas = false;
                    this.mostrarHucher = false;
                    this.mostrarSintomas = false;
                    this.mostrarAsociacion = false;
                };
                HucherComponent.prototype.onShowHide4 = function (value) {
                    this.mostrarSintomas = value;
                    this.mostrarHCausas = false;
                    this.mostrarTipos = false;
                    this.mostrarHucher = false;
                    this.mostrarAsociacion = false;
                };
                HucherComponent.prototype.onShowHide5 = function (value) {
                    this.mostrarAsociacion = value;
                    this.mostrarHCausas = false;
                    this.mostrarTipos = false;
                    this.mostrarHucher = false;
                    this.mostrarSintomas = false;
                };
                HucherComponent = __decorate([
                    core_1.Component({
                        selector: "hucher",
                        templateUrl: "app/vista/hucher.html",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HucherComponent);
                return HucherComponent;
            }());
            exports_1("HucherComponent", HucherComponent);
        }
    }
});
//# sourceMappingURL=hucher.component.js.map