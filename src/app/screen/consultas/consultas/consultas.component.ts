import { Component, OnInit } from '@angular/core';
import { Consultas } from 'src/app/model/consultas';
import { PreguntasFrecuentesService } from 'src/app/services/preguntas-frecuentes.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
  public preguntas: Consultas[]=[];
  constructor(private PreguntasFrecuentes: PreguntasFrecuentesService) { }

  ngOnInit(): void {
    this.preguntas = this.PreguntasFrecuentes.getConsultas();
  }

}
