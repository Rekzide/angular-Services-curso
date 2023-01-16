import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../services/personas.service';
import { Persona } from '../models/persona.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  providers: [PersonasService],
})
export class ListaComponent implements OnInit{

  personas: Persona[];

  constructor(private personasService: PersonasService) {
    this.personas = [];
  }

  ngOnInit(): void {
    this.personas = this.personasService.getAll();
  }


}
