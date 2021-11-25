export class NuevoUsuario{
  nombre: string;
  apellidos: string;
  nombreUsuario: string;
  email: string;
  password: string;

  constructor(nombre: string, apellidos: string,nombreUsuario: string, email: string, password: string) {
    this.nombre = nombre;
    this.apellidos=apellidos;
    this.nombreUsuario = nombreUsuario;
    this.email = email;
    this.password = password;
  }


}
