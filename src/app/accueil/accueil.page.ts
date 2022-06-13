import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

features: any[] = [
  {id: 1, name: 'Acheter', src: '../../assets/icon/achat.svg', page: ''},
  {id: 2, name: 'Payer', src: '../../assets/icon/pay.svg', page: ''}
];
  constructor() { }

  ngOnInit() {
  }

}
