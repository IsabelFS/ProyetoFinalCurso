import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Slide} from './carrusel/slide.component';
import {Carousel} from './carrusel/carousel.component';

@Component ({
	selector: "movimiento",
	templateUrl: "app/vista/movimiento.html",
	directives: [ROUTER_DIRECTIVES,Slide, Carousel, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class MovimientoComponent {

	  //The time to show the next photo
    private NextPhotoInterval:number = 5000;
    //Looping or not
    private noLoopSlides:boolean = true;
    //Photos
    private slides:Array<any> = [];

    constructor() {
            this.addNewSlide();
    }

    private addNewSlide() {
         this.slides.push(
            {image:"../assets/image/carrusel_1.jpg"},
            {image:'../assets/image/carrusel_2.jpg'},
            {image:'../assets/image/carrusel_3.jpg'},
            {image:'../assets/image/carrusel_4.jpg'},
            {image:'../assets/image/carrusel_5.jpg'}
     
        );
    }

    private removeLastSlide() {
        this.slides.pop();
    }

}