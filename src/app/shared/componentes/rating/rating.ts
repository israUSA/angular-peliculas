import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-rating',
  imports: [MatIconModule, NgClass],
  templateUrl: './rating.html',
  styleUrl: './rating.css'
})
export class Rating implements OnInit {
  ngOnInit(): void {
  }

  @Input({required: true, transform: (valor: number) => Array(valor).fill(0)})
  maximoRating: number[];

  @Input({})
  ratingSeleccionado = 0;


  ratingAnterior = 0;

  @Output()
  votado = new EventEmitter<number>();

  manejarMouseEnter(indice: number){
    this.ratingSeleccionado = indice + 1;
    console.log('rating: ' + this.ratingSeleccionado);
    
  }

  manejarMouseLeave(){
    if (this.ratingAnterior !== 0) {
      this.ratingSeleccionado = this.ratingAnterior;
    } else{
      this.ratingSeleccionado = 0;
    }
  }

  manejarClick(indice: number){


    if ( this.ratingSeleccionado == this.ratingAnterior) {
      this.ratingSeleccionado = 0; 
      this.ratingAnterior = 0;
      
    } else {
      this.ratingSeleccionado = indice + 1;
      this.ratingAnterior = this.ratingSeleccionado;
      this.votado.emit(this.ratingSeleccionado);

    }


  }

}
