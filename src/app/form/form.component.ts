import {Component, EventEmitter, Output} from '@angular/core';
import {Human} from '../entities/human';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html'
})
export class FormComponent {

    constructor() {
    }

    public currentHuman: Human = new Human('', '');
    @Output('addHuman') add: EventEmitter<Human> = new EventEmitter<Human>();

    public humanAdd() {
        this.add.emit(this.currentHuman);
        this.currentHuman = new Human ('', '');
    }
}
