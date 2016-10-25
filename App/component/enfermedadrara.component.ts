import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";

@Component ({
	selector: "enfermedadrara",
	templateUrl: "app/vista/enfermedadrara.html",
	directives: [ROUTER_DIRECTIVES]
})

export class EnfermedadRaraComponent {
	public mostrarCorazon: boolean;

constructor(){
	this.mostrarCorazon=false;
}

	onShowHide(value){
			this.mostrarCorazon=value;
		}
		
}