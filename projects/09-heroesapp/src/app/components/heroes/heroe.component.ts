import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  id: any;
  llave: string;

  heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: 'Marvel'
  };

  // tslint:disable-next-line:no-inferrable-types
  nuevo: boolean = false;


  constructor( private _heroesService: HeroesService,
               private router: Router,
               private route: ActivatedRoute ) {
      this.route.params
        .subscribe( parametros => {
          this.llave = parametros['id'];
          if ( this.llave !== 'nuevo') {
              this._heroesService.getHeroe( this.llave )
                .subscribe( (heroe: any ) => { this.heroe = heroe; });
          }
        });
  }

  guardar() {
    console.log(this.heroe);

    // tslint:disable-next-line:triple-equals
    if ( this.id == 'nuevo' ) {
      this._heroesService.nuevoHeroe( this.heroe ).subscribe( data => {
        this.id = data;
        this.id = this.id.name;
        this.router.navigate(['/heroe', this.id.name ]);
    },
    error => console.error(error));
    } else {
      this._heroesService.actualizarHeroe( this.heroe, this.llave ).subscribe( data => {
        this.id = data;
        this.id = this.id.name;
        console.log(data);
    },
    error => console.error(error));
    }

  }

  agregarNuevo( forma: NgForm ) {
    this.router.navigate(['/heroe', 'nuevo']);
    forma.reset({
      casa: 'DC'
    });
  }

  ngOnInit() {
  }

}
