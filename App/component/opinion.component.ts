import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {Opinion} from "../modelo/opiniones";
import {Router, RouteParams} from "angular2/router";
import {OpinionService} from "../servicios/opiniones.service";




@Component ({
	selector: "opinion",
	templateUrl: "app/vista/opinion.html",
	providers: [OpinionService]
	

})

export class OpinionComponent{

	public NombreOpinion = "";

	public nuevoComentario: Opinion;

	public opinion:Opinion;
	public mostrarOpiniones: boolean;
	public opiniones;


	constructor(private _opinionService: OpinionService,  private _router: Router, private _routeParams: RouteParams){

		this.mostrarOpiniones= false;
		this.opiniones= this._opinionService.getOpiniones();
		this.opinion=this.opiniones[0];
	}

	onSubmitComentario(){
		this._opinionService.insertOpinion(this.nuevoComentario);
		this._router.navigate(["Opinion"]);
	}

	ngOnInit():any{
		this.NombreOpinion = this._routeParams.get("nombre");
		this.nuevoComentario = new Opinion(
			0,
			this._routeParams.get("nombre"),
			this._routeParams.get("edad"),
			this._routeParams.get("comentario"));
	}

}