import {Component} from "angular2/core";

@Component ({
	selector: "williams",
	templateUrl: "app/vista/williams.html",
})

export class WilliamsComponent {

	public mostrarWilliams: boolean;
	public mostrarCausas: boolean;
	public mostrarClinicas: boolean;
	public mostrarRiesgos: boolean;
	public mostrarAsociacion: boolean;

constructor(){
	this.mostrarWilliams=false;
	this.mostrarCausas=false;
	this.mostrarClinicas=false;
	this.mostrarRiesgos=false;
	this.mostrarAsociacion=false;
}

	onShowHide(value){
			this.mostrarWilliams=value;
			this.mostrarCausas=false;
			this.mostrarClinicas=false;
			this.mostrarRiesgos=false;
			this.mostrarAsociacion=false;

		}

	onShowHide1(value){
			this.mostrarCausas=value;
			this.mostrarWilliams=false;
			this.mostrarClinicas=false;
			this.mostrarRiesgos=false;
			this.mostrarAsociacion=false;
	}

	onShowHide3(value){
			this.mostrarClinicas=value;
			this.mostrarCausas=false;
			this.mostrarWilliams=false;
			this.mostrarRiesgos=false;
			this.mostrarAsociacion=false;
	}

	onShowHide4(value) {
			this.mostrarRiesgos=value;
			this.mostrarCausas=false;
			this.mostrarClinicas=false;
			this.mostrarWilliams=false;
			this.mostrarAsociacion=false;
	}

	onShowHide5(value) {
			this.mostrarAsociacion=value;
			this.mostrarCausas=false;
			this.mostrarClinicas=false;
			this.mostrarWilliams=false;
			this.mostrarRiesgos=false;
	}
}
