import { Component } from '@angular/core';

interface Sitio {
  img: string;
  nombre: string;
  descripcion: string;
  ocultar: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quiz4';
  items: Sitio[];
  constructor() {
    this.reset();
  }

  ocultar(id: number) {
    this.items[id].ocultar = true;
  }

  reset() {
    this.items = [
      {img: 'https://cdn.worldvectorlogo.com/logos/facebook-2.svg',
       nombre: 'Instagram', descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
       ocultar: false},
      {img: 'https://cdn.worldvectorlogo.com/logos/facebook-2.svg',
       nombre: 'Twitter', descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
       ocultar: false},
      {img: 'https://cdn.worldvectorlogo.com/logos/facebook-2.svg',
       nombre: 'Facebook', descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
       ocultar: false},
      {img: 'https://cdn.worldvectorlogo.com/logos/facebook-2.svg',
       nombre: 'Pinterest', descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
       ocultar: false},
      {img: 'https://cdn.worldvectorlogo.com/logos/facebook-2.svg',
       nombre: 'Google', descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
       ocultar: false},
      {img: 'https://cdn.worldvectorlogo.com/logos/facebook-2.svg',
       nombre: 'Github', descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
       ocultar: false}
    ];
  }
}
