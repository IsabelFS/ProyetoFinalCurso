System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var WilliamsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            WilliamsComponent = (function () {
                function WilliamsComponent() {
                    this.mostrarWilliams = false;
                    this.mostrarCausas = false;
                    this.mostrarClinicas = false;
                    this.mostrarRiesgos = false;
                    this.mostrarAsociacion = false;
                }
                WilliamsComponent.prototype.onShowHide = function (value) {
                    this.mostrarWilliams = value;
                    this.mostrarCausas = false;
                    this.mostrarClinicas = false;
                    this.mostrarRiesgos = false;
                    this.mostrarAsociacion = false;
                };
                WilliamsComponent.prototype.onShowHide1 = function (value) {
                    this.mostrarCausas = value;
                    this.mostrarWilliams = false;
                    this.mostrarClinicas = false;
                    this.mostrarRiesgos = false;
                    this.mostrarAsociacion = false;
                };
                WilliamsComponent.prototype.onShowHide3 = function (value) {
                    this.mostrarClinicas = value;
                    this.mostrarCausas = false;
                    this.mostrarWilliams = false;
                    this.mostrarRiesgos = false;
                    this.mostrarAsociacion = false;
                };
                WilliamsComponent.prototype.onShowHide4 = function (value) {
                    this.mostrarRiesgos = value;
                    this.mostrarCausas = false;
                    this.mostrarClinicas = false;
                    this.mostrarWilliams = false;
                    this.mostrarAsociacion = false;
                };
                WilliamsComponent.prototype.onShowHide5 = function (value) {
                    this.mostrarAsociacion = value;
                    this.mostrarCausas = false;
                    this.mostrarClinicas = false;
                    this.mostrarWilliams = false;
                    this.mostrarRiesgos = false;
                };
                WilliamsComponent = __decorate([
                    core_1.Component({
                        selector: "williams",
                        templateUrl: "app/vista/williams.html",
                    }), 
                    __metadata('design:paramtypes', [])
                ], WilliamsComponent);
                return WilliamsComponent;
            }());
            exports_1("WilliamsComponent", WilliamsComponent);
        }
    }
});
//# sourceMappingURL=williams.component.js.map