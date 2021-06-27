import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { IFilme } from '../models/IFilme.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Videos';

  listaVideos: IFilme[] = [
    {
      nome:'Luca (2021)',
      lancamento:'17/06/2021',
      duracao:'1h 41m',
      classificacao:83,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1lk7QISmTam2iOzzUAQYs6voeFg.jpg',
      generos:['Animação', 'Comédia', 'Família', 'Fantasia']
    },
    {
      nome:'Velozes & Furiosos 9 (2021)',
      lancamento:'24/06/2021',
      duracao:'2h 25m',
      classificacao:80,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8L4Mep3KDUK4ztUgf2HlPvUVzZy.jpg',
      generos:['Ação', 'Aventura', 'Crime']
    }
  ];

  constructor(public alertController: AlertController,
     public toastController: ToastController) {}

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim, Favoritar!',
          handler: () => {
            this.presentToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Filmes adicionado aos favoritos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
