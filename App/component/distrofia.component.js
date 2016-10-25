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
    var DistrofiaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DistrofiaComponent = (function () {
                function DistrofiaComponent() {
                    this.mostrarDistrofia = false;
                    this.mostrarCausasDistrofia = false;
                    this.mostrarEtapas = false;
                    this.mostrarManifestaciones = false;
                    this.mostrarAsociacionDistrofia = false;
                }
                DistrofiaComponent.prototype.onShowHide = function (value) {
                    this.mostrarDistrofia = value;
                    this.mostrarCausasDistrofia = false;
                    this.mostrarEtapas = false;
                    this.mostrarManifestaciones = false;
                    this.mostrarAsociacionDistrofia = false;
                };
                DistrofiaComponent.prototype.onShowHide1 = function (value) {
                    this.mostrarCausasDistrofia = value;
                    this.mostrarDistrofia = false;
                    this.mostrarEtapas = false;
                    this.mostrarManifestaciones = false;
                    this.mostrarAsociacionDistrofia = false;
                };
                DistrofiaComponent.prototype.onShowHide3 = function (value) {
                    this.mostrarEtapas = value;
                    this.mostrarCausasDistrofia = false;
                    this.mostrarDistrofia = false;
                    this.mostrarManifestaciones = false;
                    this.mostrarAsociacionDistrofia = false;
                };
                DistrofiaComponent.prototype.onShowHide4 = function (value) {
                    this.mostrarManifestaciones = value;
                    this.mostrarCausasDistrofia = false;
                    this.mostrarEtapas = false;
                    this.mostrarDistrofia = false;
                    this.mostrarAsociacionDistrofia = false;
                };
                DistrofiaComponent.prototype.onShowHide5 = function (value) {
                    this.mostrarAsociacionDistrofia = value;
                    this.mostrarCausasDistrofia = false;
                    this.mostrarEtapas = false;
                    this.mostrarDistrofia = false;
                    this.mostrarManifestaciones = false;
                };
                DistrofiaComponent = __decorate([
                    core_1.Component({
                        selector: "distrofia",
                        templateUrl: "app/vista/distrofia.html",
                    }), 
                    __metadata('design:paramtypes', [])
                ], DistrofiaComponent);
                return DistrofiaComponent;
            }());
            exports_1("DistrofiaComponent", DistrofiaComponent);
        }
    }
});
//# sourceMappingURL=distrofia.component.js.map