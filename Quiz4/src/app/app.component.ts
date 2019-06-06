import { Component } from '@angular/core';

interface Sitio {
  img: string;
  nombre: string;
  descripcion: string;
}

let items: Sitio[] = [
{img:'', nombre:'',descripcion:''},
{img:'', nombre:'',descripcion:''},
{img:'', nombre:'',descripcion:''},
{img:'', nombre:'',descripcion:''},
{img:'', nombre:'',descripcion:''},
{img:'', nombre:'',descripcion:''}];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quiz4';
}
