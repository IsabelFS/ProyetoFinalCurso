System.register(['angular2/core', "angular2/router", "./component/adopta.component", "./component/movimiento.component", "./component/enfermedadrara.component", "./component/williams.component", "./component/hucher.component", "./component/distrofia.component", "./component/prader.component", "./component/opinion.component", "./component/conocelas.component", "./component/donativo.component", "./component/contacta.component", 'angular2/common', './component/carrusel/slide.component', './component/carrusel/carousel.component'], function(exports_1, context_1) {
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
    var core_1, router_1, adopta_component_1, movimiento_component_1, enfermedadrara_component_1, williams_component_1, hucher_component_1, distrofia_component_1, prader_component_1, opinion_component_1, conocelas_component_1, donativo_component_1, contacta_component_1, common_1, slide_component_1, carousel_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (adopta_component_1_1) {
                adopta_component_1 = adopta_component_1_1;
            },
            function (movimiento_component_1_1) {
                movimiento_component_1 = movimiento_component_1_1;
            },
            function (enfermedadrara_component_1_1) {
                enfermedadrara_component_1 = enfermedadrara_component_1_1;
            },
            function (williams_component_1_1) {
                williams_component_1 = williams_component_1_1;
            },
            function (hucher_component_1_1) {
                hucher_component_1 = hucher_component_1_1;
            },
            function (distrofia_component_1_1) {
                distrofia_component_1 = distrofia_component_1_1;
            },
            function (prader_component_1_1) {
                prader_component_1 = prader_component_1_1;
            },
            function (opinion_component_1_1) {
                opinion_component_1 = opinion_component_1_1;
            },
            function (conocelas_component_1_1) {
                conocelas_component_1 = conocelas_component_1_1;
            },
            function (donativo_component_1_1) {
                donativo_component_1 = donativo_component_1_1;
            },
            function (contacta_component_1_1) {
                contacta_component_1 = contacta_component_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (slide_component_1_1) {
                slide_component_1 = slide_component_1_1;
            },
            function (carousel_component_1_1) {
                carousel_component_1 = carousel_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: "app/vista/principal.html",
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, slide_component_1.Slide, carousel_component_1.Carousel, router_1.ROUTER_DIRECTIVES, movimiento_component_1.MovimientoComponent, adopta_component_1.AdoptaComponent, enfermedadrara_component_1.EnfermedadRaraComponent, williams_component_1.WilliamsComponent, hucher_component_1.HucherComponent, distrofia_component_1.DistrofiaComponent, prader_component_1.PraderComponent, opinion_component_1.OpinionComponent, conocelas_component_1.ConocelasComponent, donativo_component_1.DonativoComponent, contacta_component_1.ContactaComponent]
                    }),
                    router_1.RouteConfig([
                        { path: "/adopta", name: "Adopta", component: adopta_component_1.AdoptaComponent, useAsDefault: true },
                        { path: "/movimiento", name: "Movimiento", component: movimiento_component_1.MovimientoComponent },
                        { path: "/enfermedad rara", name: "EnfermedadRara", component: enfermedadrara_component_1.EnfermedadRaraComponent },
                        { path: "/sindrome de williams", name: "Williams", component: williams_component_1.WilliamsComponent },
                        { path: "/sindrome de hucher", name: "Hucher", component: hucher_component_1.HucherComponent },
                        { path: "/distrofia muscular de duchenne", name: "Distrofia", component: distrofia_component_1.DistrofiaComponent },
                        { path: "/sindrome de prader willi", name: "Prader", component: prader_component_1.PraderComponent },
                        { path: "/opinion", name: "Opinion", component: opinion_component_1.OpinionComponent },
                        { path: "/conócelas", name: "Conocelas", component: conocelas_component_1.ConocelasComponent },
                        { path: "/donativos", name: "Donativo", component: donativo_component_1.DonativoComponent },
                        { path: "/contacta", name: "Contacta", component: contacta_component_1.ContactaComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map