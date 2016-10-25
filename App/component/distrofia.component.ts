import {Component} from "angular2/core";


@Component ({
	selector: "distrofia",
	templateUrl: "app/vista/distrofia.html",
})

export class DistrofiaComponent {

	public mostrarDistrofia: boolean;
	public mostrarCausasDistrofia: boolean;
	public mostrarEtapas: boolean;
	public mostrarManifestaciones: boolean;
	public mostrarAsociacionDistrofia: boolean;

constructor(){
	this.mostrarDistrofia=false;
	this.mostrarCausasDistrofia=false;
	this.mostrarEtapas=false;
	this.mostrarManifestaciones=false;
	this.mostrarAsociacionDistrofia=false;
}

	onShowHide(value){
			this.mostrarDistrofia=value;
			this.mostrarCausasDistrofia=false;
			this.mostrarEtapas=false;
			this.mostrarManifestaciones=false;
			this.mostrarAsociacionDistrofia=false;

		}

	onShowHide1(value){
			this.mostrarCausasDistrofia=value;
			this.mostrarDistrofia=false;
			this.mostrarEtapas=false;
			this.mostrarManifestaciones=false;
			this.mostrarAsociacionDistrofia=false;
	}

	onShowHide3(value){
			this.mostrarEtapas=value;
			this.mostrarCausasDistrofia=false;
			this.mostrarDistrofia=false;
			this.mostrarManifestaciones=false;
			this.mostrarAsociacionDistrofia=false;
	}

	onShowHide4(value) {
			this.mostrarManifestaciones=value;
			this.mostrarCausasDistrofia=false;
			this.mostrarEtapas=false;
			this.mostrarDistrofia=false;
			this.mostrarAsociacionDistrofia=false;
	}

		onShowHide5(value) {
			this.mostrarAsociacionDistrofia=value;
			this.mostrarCausasDistrofia=false;
			this.mostrarEtapas=false;
			this.mostrarDistrofia=false;
			this.mostrarManifestaciones=false;
	}
}
