import { Component, EventEmitter, Output } from '@angular/core';
import { Person } from 'src/app/core/Models';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {

  public newPerson: Person = new Person();

  @Output() public personToCreate: EventEmitter<Person> = new EventEmitter();

  constructor(){}

  public createPerson(){
    this.personToCreate.emit(this.newPerson);
  }
}
