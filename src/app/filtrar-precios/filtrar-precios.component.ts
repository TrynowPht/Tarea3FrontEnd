import { Component, OnInit } from '@angular/core';
import {Motor} from '../model/motor';
import { Observable } from 'rxjs';
import { MotorService } from '../motor.service';
@Component({
  selector: 'app-filtrar-precios',
  templateUrl: './filtrar-precios.component.html',
  styleUrls: ['./filtrar-precios.component.css']
})
export class FiltrarPrecioComponent implements OnInit {
  motores: Observable<Motor[]>
  min : number=0;
  max: number=0;
  constructor(private motorService: MotorService) { }  

  ngOnInit(): void {
    this.filtrar();
  }
  filtrar(){
    this.motorService.filtrarList(this.min,this.max).subscribe(motores =>this.motores=motores);
  }

}
