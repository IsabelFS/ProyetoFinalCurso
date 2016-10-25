import {Injectable} from 'angular2/core';
import {OPINION} from './mock.opiniones';
import {Opinion} from '../modelo/opiniones';

@Injectable()

export class OpinionService{
	getOpiniones(){
		return OPINION;
	}
 insertOpinion(opinion: Opinion){
	Promise.resolve(OPINION).then((opiniones: Opinion[]) => opiniones.push(opinion));
	}
}