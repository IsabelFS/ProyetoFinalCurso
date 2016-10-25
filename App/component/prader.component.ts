import {Component} from "angular2/core";


@Component ({
	selector: "prader",
	templateUrl: "app/vista/prader.html",
})

export class PraderComponent {

	public mostrarPrader: boolean;
	public mostrarGenetica: boolean;
	public mostrarDiagnostico: boolean;
	public mostrarCarasteristicas: boolean;
	public mostrarAsociacionPrader: boolean;

constructor(){
	this.mostrarPrader=false;
	this.mostrarGenetica=false;
	this.mostrarDiagnostico=false;
	this.mostrarCarasteristicas=false;
	this.mostrarAsociacionPrader=false;
}

	onShowHide(value){
			this.mostrarPrader=value;
			this.mostrarGenetica=false;
			this.mostrarDiagnostico=false;
			this.mostrarCarasteristicas=false;
			this.mostrarAsociacionPrader=false;

		}

	onShowHide1(value){
			this.mostrarGenetica=value;
			this.mostrarPrader=false;
			this.mostrarDiagnostico=false;
			this.mostrarCarasteristicas=false;
			this.mostrarAsociacionPrader=false;
	}

	onShowHide3(value){
			this.mostrarDiagnostico=value;
			this.mostrarGenetica=false;
			this.mostrarPrader=false;
			this.mostrarCarasteristicas=false;
			this.mostrarAsociacionPrader=false;
	}

	onShowHide4(value) {
			this.mostrarCarasteristicas=value;
			this.mostrarGenetica=false;
			this.mostrarDiagnostico=false;
			this.mostrarPrader=false;
			this.mostrarAsociacionPrader=false;
	}

		onShowHide5(value) {
			this.mostrarAsociacionPrader=value;
			this.mostrarGenetica=false;
			this.mostrarDiagnostico=false;
			this.mostrarPrader=false;
			this.mostrarCarasteristicas=false;
	}

}

