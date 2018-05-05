import { Component, OnInit } from '@angular/core';
import {Joueur} from '../joueur'
@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css']
})
export class JoueurComponent implements OnInit {
joueur : Joueur = {
  id: 17,
  name: 'Fayçal',
  email: 'bob@gmail.com',
  phoneNumber: '0612131415',
  age: 27,
  sex: 0
};
  constructor() { }

  ngOnInit() {
  }

}
