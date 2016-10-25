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
    var PraderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PraderComponent = (function () {
                function PraderComponent() {
                    this.mostrarPrader = false;
                    this.mostrarGenetica = false;
                    this.mostrarDiagnostico = false;
                    this.mostrarCarasteristicas = false;
                    this.mostrarAsociacionPrader = false;
                }
                PraderComponent.prototype.onShowHide = function (value) {
                    this.mostrarPrader = value;
                    this.mostrarGenetica = false;
                    this.mostrarDiagnostico = false;
                    this.mostrarCarasteristicas = false;
                    this.mostrarAsociacionPrader = false;
                };
                PraderComponent.prototype.onShowHide1 = function (value) {
                    this.mostrarGenetica = value;
                    this.mostrarPrader = false;
                    this.mostrarDiagnostico = false;
                    this.mostrarCarasteristicas = false;
                    this.mostrarAsociacionPrader = false;
                };
                PraderComponent.prototype.onShowHide3 = function (value) {
                    this.mostrarDiagnostico = value;
                    this.mostrarGenetica = false;
                    this.mostrarPrader = false;
                    this.mostrarCarasteristicas = false;
                    this.mostrarAsociacionPrader = false;
                };
                PraderComponent.prototype.onShowHide4 = function (value) {
                    this.mostrarCarasteristicas = value;
                    this.mostrarGenetica = false;
                    this.mostrarDiagnostico = false;
                    this.mostrarPrader = false;
                    this.mostrarAsociacionPrader = false;
                };
                PraderComponent.prototype.onShowHide5 = function (value) {
                    this.mostrarAsociacionPrader = value;
                    this.mostrarGenetica = false;
                    this.mostrarDiagnostico = false;
                    this.mostrarPrader = false;
                    this.mostrarCarasteristicas = false;
                };
                PraderComponent = __decorate([
                    core_1.Component({
                        selector: "prader",
                        templateUrl: "app/vista/prader.html",
                    }), 
                    __metadata('design:paramtypes', [])
                ], PraderComponent);
                return PraderComponent;
            }());
            exports_1("PraderComponent", PraderComponent);
        }
    }
});
//# sourceMappingURL=prader.component.js.map