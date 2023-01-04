export class User {

  id: number;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  direccion: string;
  genero: string;
  email: string;
  password: string;
  telefono: string;

  get nombreCompleto(): string {
    return this.nombre + ' ' + this.apellidoPaterno + (this.apellidoMaterno ? (' ' + this.apellidoMaterno) : '');
  }

  constructor(objeto: any) {
    this.id = objeto.id;
    this.telefono = objeto.telefono;
    this.nombre = objeto.nombre;
    this.apellidoPaterno = objeto.apellidoPaterno;
    this.apellidoMaterno = objeto.apellidoMaterno;
    this.direccion = objeto.direccion;
    this.email = objeto.email;
    this.password = objeto.password;
  }

}
