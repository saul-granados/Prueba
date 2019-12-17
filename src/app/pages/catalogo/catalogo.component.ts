import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../../services/service/catalogo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styles: []
})
export class CatalogoComponent implements OnInit {


  public usuarios: any[];

  constructor(
    private catalogoService: CatalogoService
  ) { 
   
  }

  ngOnInit() {
    this.cargarUsuarios();
  }


  cargarUsuarios() {
    this.catalogoService.obtenerUsuarios()
      .subscribe( response =>  {
        console.log(response);
      });
  }

}
