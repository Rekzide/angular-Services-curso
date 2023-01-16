export class Persona {
  nombre: string;
  apellidos: string;
  edad: number;
  activo: boolean;

  constructor(pNombre: string, pApellidos: string, pEdad: number, pActivo: boolean) {
      this.nombre = pNombre;
      this.apellidos = pApellidos;
      this.edad = pEdad;
      this.activo = pActivo;
  }


}
