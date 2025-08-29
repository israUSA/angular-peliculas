import { CurrencyPipe, DatePipe, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { ListadoGenerico } from "../../shared/componentes/listado-generico/listado-generico";
import { MatIconModule } from "@angular/material/icon";


@Component({
  selector: 'app-listado-peliculas',
  imports: [DatePipe, CurrencyPipe, UpperCasePipe, NgOptimizedImage, ListadoGenerico, ListadoGenerico, MatIconModule],
  templateUrl: './listado-peliculas.html',
  styleUrl: './listado-peliculas.css'
})
export class ListadoPeliculasComponent {

  @Input({required: true})
  peliculas = signal<any[] | null>(null);  
  
  
  ngOnInit(): void {    
  }

  agregarPelicula(){
    this.peliculas.update((pelis) => {
      const nuevasPelis = [
        {
          titulo: 'Inside Out 2',
          fechaLanzamiento: new Date(),
          precio: 1400.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832'
        },
        {
          titulo: 'Moana 2',
          fechaLanzamiento: new Date('2016-05-03'),
          precio: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg'
        }
      ];
      nuevasPelis.push({
        titulo: 'Nueva Película',
        fechaLanzamiento: new Date('2025-08-28'),
        precio: 500.50,
        poster: null
      });
      return nuevasPelis;
    });
  }

  removerPelicula(pelicula:any){
    const indice = this.peliculas().findIndex((peliculaActual: any) => peliculaActual.titulo === pelicula.titulo);
    this.peliculas().splice(indice,1);
  }



}
