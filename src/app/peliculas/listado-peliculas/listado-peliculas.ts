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

}
