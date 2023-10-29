import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from 'src/app/core/Models';

@Component({
  selector: 'app-view-persons',
  templateUrl: './view-persons.component.html',
  styleUrls: ['./view-persons.component.css']
})
export class ViewPersonsComponent {

  @Input() inputPersons: Array<Person> = []
  @Output() personToDelete: EventEmitter<number> = new EventEmitter();
  @Output() personToEdit: EventEmitter<Person> = new EventEmitter();


  public deletePerson(id: number){
    this.personToDelete.emit(id);
  }

  public editPerson(person: Person){
    this.personToEdit.emit(person);
  }

}
