import { IPerson, IUser } from "./Interfaces";

export class Person implements IPerson{
  id: number | null= null;
  name: string = '';
  lastname: string = '';
  dni: string = '';
  city: string = '';

  constructor(person?:any){

    this.id = person == undefined ? null : person.id;
    this.name =  person == undefined ? '' : person.name;
    this.lastname =  person == undefined ? '' : person.lastname;
    this.dni =  person == undefined ? '' :person.dni;
    this.city =  person == undefined ? '' :person.city;
  }
}

export class User implements IUser{
  id: number| null= null;
  email: string = '';
  password: string = '';

  constructor(user?:any){
    this.id =  user == undefined ? null : user.id;
    this.email = user == undefined ? '' : user.email;
    this.password = user == undefined ? '' : user.password;
  }
}

