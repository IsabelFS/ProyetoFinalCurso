System.register(["angular2/core", "angular2/router", 'angular2/common', './carrusel/slide.component', './carrusel/carousel.component'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, slide_component_1, carousel_component_1;
    var MovimientoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
            MovimientoComponent = (function () {
                function MovimientoComponent() {
                    //The time to show the next photo
                    this.NextPhotoInterval = 5000;
                    //Looping or not
                    this.noLoopSlides = true;
                    //Photos
                    this.slides = [];
                    this.addNewSlide();
                }
                MovimientoComponent.prototype.addNewSlide = function () {
                    this.slides.push({ image: "../assets/image/carrusel_1.jpg" }, { image: '../assets/image/carrusel_2.jpg' }, { image: '../assets/image/carrusel_3.jpg' }, { image: '../assets/image/carrusel_4.jpg' }, { image: '../assets/image/carrusel_5.jpg' });
                };
                MovimientoComponent.prototype.removeLastSlide = function () {
                    this.slides.pop();
                };
                MovimientoComponent = __decorate([
                    core_1.Component({
                        selector: "movimiento",
                        templateUrl: "app/vista/movimiento.html",
                        directives: [router_1.ROUTER_DIRECTIVES, slide_component_1.Slide, carousel_component_1.Carousel, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MovimientoComponent);
                return MovimientoComponent;
            }());
            exports_1("MovimientoComponent", MovimientoComponent);
        }
    }
});
//# sourceMappingURL=movimiento.component.js.map