import { IListaGenero } from '../models/IGenero.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  lingua= 'pt-Br';

  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=3dab8f30c07ae00625f1097eb17e77ec';


  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscarGeneros(): Observable<IListaGenero> {
      const url = `${this.apiURL
      }genre/movie/list${this.key}&language=${this.lingua}`;
  
      return this.http.get<IListaGenero>(url).pipe(
        map(retorno => retorno),
        catchError(erro => this.exibirErro(erro))
      );
    }

    async exibirErro(erro) {
      const toast = await this.toastController.create({
        message: 'Erro ao consultar a API.',
        duration: 2000,
        color: 'danger',
        position: 'middle'
      });
      toast.present();
      return null;
    }  
}

