import { Component } from '@angular/core';
import { PersonasService } from './services/personas.service';
import { Persona } from './models/persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonasService],
})
export class AppComponent {

  arrPersonas : Persona[];

  constructor(private personaService: PersonasService) {
    this.arrPersonas = [];
  }

  ngOnInit(): void {
    const personas = this.personaService.getAll();
    console.log(personas);
    this.arrPersonas = this.personaService.getAll();
  }

  onClick() {
    this.personaService.create(new Persona('Nueva', 'García', 45, true));
  }

  /*onClickActivas() {
    this.personaService.activos()
    .then(arrTempPersonas => console.log(arrTempPersonas))
    .catch(error => console.log(error));

  }*/

  async onClickActivas() {
    try {
      this.arrPersonas = await this.personaService.activosv2();
    } catch (error) {
      console.log(error);
    }

  }

}
