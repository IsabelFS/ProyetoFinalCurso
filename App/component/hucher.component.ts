import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";

@Component ({
	selector: "hucher",
	templateUrl: "app/vista/hucher.html",
	directives: [ROUTER_DIRECTIVES]
})

export class HucherComponent {

	public mostrarHucher: boolean;
	public mostrarHCausas: boolean;
	public mostrarTipos: boolean;
	public mostrarSintomas: boolean;
	public mostrarAsociacion: boolean;

constructor(){
	this.mostrarHucher=false;
	this.mostrarHCausas=false;
	this.mostrarTipos=false;
	this.mostrarSintomas=false;
	this.mostrarAsociacion=false;
}

	onShowHide(value){
			this.mostrarHucher=value;
			this.mostrarHCausas=false;
			this.mostrarTipos=false;
			this.mostrarSintomas=false;
			this.mostrarAsociacion=false;

		}

	onShowHide1(value){
			this.mostrarHCausas=value;
			this.mostrarHucher=false;
			this.mostrarTipos=false;
			this.mostrarSintomas=false;
			this.mostrarAsociacion=false;
	}

	onShowHide3(value){
			this.mostrarTipos=value;
			this.mostrarHCausas=false;
			this.mostrarHucher=false;
			this.mostrarSintomas=false;
			this.mostrarAsociacion=false;
	}

	onShowHide4(value) {
			this.mostrarSintomas=value;
			this.mostrarHCausas=false;
			this.mostrarTipos=false;
			this.mostrarHucher=false;
			this.mostrarAsociacion=false;
	}

		onShowHide5(value) {
			this.mostrarAsociacion=value;
			this.mostrarHCausas=false;
			this.mostrarTipos=false;
			this.mostrarHucher=false;
			this.mostrarSintomas=false;
	}

}