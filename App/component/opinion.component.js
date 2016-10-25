System.register(["angular2/core", "../modelo/opiniones", "angular2/router", "../servicios/opiniones.service"], function(exports_1, context_1) {
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
    var core_1, opiniones_1, router_1, opiniones_service_1;
    var OpinionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (opiniones_1_1) {
                opiniones_1 = opiniones_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (opiniones_service_1_1) {
                opiniones_service_1 = opiniones_service_1_1;
            }],
        execute: function() {
            OpinionComponent = (function () {
                function OpinionComponent(_opinionService, _router, _routeParams) {
                    this._opinionService = _opinionService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.NombreOpinion = "";
                    this.mostrarOpiniones = false;
                    this.opiniones = this._opinionService.getOpiniones();
                    this.opinion = this.opiniones[0];
                }
                OpinionComponent.prototype.onSubmitComentario = function () {
                    this._opinionService.insertOpinion(this.nuevoComentario);
                    this._router.navigate(["Opinion"]);
                };
                OpinionComponent.prototype.ngOnInit = function () {
                    this.NombreOpinion = this._routeParams.get("nombre");
                    this.nuevoComentario = new opiniones_1.Opinion(0, this._routeParams.get("nombre"), this._routeParams.get("edad"), this._routeParams.get("comentario"));
                };
                OpinionComponent = __decorate([
                    core_1.Component({
                        selector: "opinion",
                        templateUrl: "app/vista/opinion.html",
                        providers: [opiniones_service_1.OpinionService]
                    }), 
                    __metadata('design:paramtypes', [opiniones_service_1.OpinionService, router_1.Router, router_1.RouteParams])
                ], OpinionComponent);
                return OpinionComponent;
            }());
            exports_1("OpinionComponent", OpinionComponent);
        }
    }
});
//# sourceMappingURL=opinion.component.js.map