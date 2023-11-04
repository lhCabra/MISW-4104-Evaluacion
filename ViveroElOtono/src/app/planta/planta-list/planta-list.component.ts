import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';
@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.css'],
})
export class PlantaListComponent implements OnInit {
  plantas: Array<Planta> = [];
  numeroInterior: number=0;
  numeroExterior: number=0;

  constructor(private plantaService: PlantaService) {}

  getPlantas(): void {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
    });     
    }
  
getInteriores(){
  return this.numeroInterior =this.plantas.filter(planta => planta.tipo == 'Interior').length;

}
getExteriores(){
  return this.numeroInterior =this.plantas.filter(planta => planta.tipo == 'Exterior').length;

}
  ngOnInit() {
    this.getPlantas();
  }
}
