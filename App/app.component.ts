
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";

import {AdoptaComponent} from "./component/adopta.component";
import {MovimientoComponent} from "./component/movimiento.component";
import {EnfermedadRaraComponent} from "./component/enfermedadrara.component";
import {WilliamsComponent} from "./component/williams.component";
import {HucherComponent} from "./component/hucher.component";
import {DistrofiaComponent} from "./component/distrofia.component";
import {PraderComponent} from "./component/prader.component";
import {OpinionComponent} from "./component/opinion.component";
import {ConocelasComponent} from "./component/conocelas.component";
import {DonativoComponent} from "./component/donativo.component";
import {ContactaComponent} from "./component/contacta.component";
//carrusel
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Slide} from './component/carrusel/slide.component';
import {Carousel} from './component/carrusel/carousel.component';
 


@Component({
    selector: 'my-app',
   templateUrl: "app/vista/principal.html",
   directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, Slide, Carousel, ROUTER_DIRECTIVES, MovimientoComponent, AdoptaComponent, EnfermedadRaraComponent, WilliamsComponent, HucherComponent, DistrofiaComponent, PraderComponent, OpinionComponent, ConocelasComponent, DonativoComponent, ContactaComponent]
})
 

@RouteConfig([

	{path: "/adopta", name:"Adopta", component: AdoptaComponent, useAsDefault: true},
	{path: "/movimiento", name:"Movimiento", component: MovimientoComponent},
	{path: "/enfermedad rara", name:"EnfermedadRara", component: EnfermedadRaraComponent},
	{path: "/sindrome de williams", name:"Williams", component: WilliamsComponent},
	{path: "/sindrome de hucher", name: "Hucher", component: HucherComponent},
	{path: "/distrofia muscular de duchenne", name:"Distrofia", component: DistrofiaComponent},
	{path: "/sindrome de prader willi", name:"Prader", component: PraderComponent},
	{path: "/opinion", name:"Opinion", component: OpinionComponent},
	{path: "/conócelas", name:"Conocelas", component: ConocelasComponent},
	{path: "/donativos", name:"Donativo", component: DonativoComponent},
	{path: "/contacta", name:"Contacta", component: ContactaComponent}
	])

export class AppComponent { }
