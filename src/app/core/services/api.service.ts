import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Person, User } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL: string = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseURL}/users`);
  }

  getUserToAuth(email:string, password: string): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseURL}/users?email=${email}&password=${password}`);
  }

  getPersons(): Observable<Person[]>{
    return this.http.get<Person[]>(`${this.baseURL}/persons`);
  }

  addPerson(createPerson: Person): Observable<boolean> {
    const url = `${this.baseURL}/persons`;
    return this.http.post<boolean>(url, createPerson);
  }

  editPerson(id: number, updatePerson: Person): Observable<boolean> {
    const url = `${this.baseURL}/persons/${id}`;
    return this.http.put<boolean>(url, updatePerson);
  }

  deletePerson(id: number): Observable<boolean> {
    return this.http.delete(`${this.baseURL}/persons/${id}`)
    .pipe(
      map(resp => true), // Si sale bien retorna true. Recibir un response significa que salio bien
      catchError(error => of(false)) // Si hay algun error en la solicitud me regresa falso
    );
  }



}

