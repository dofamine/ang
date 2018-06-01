import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Human} from '../entities/human';

@Component({
    selector: 'app-human',
    templateUrl: './human.component.html'
})
export class HumanComponent {

    constructor() {
    }
    @Input() isActive: boolean;
    @Input() human: Human;
    @Input() numbers: number;
    @Output() add: EventEmitter<Human> = new EventEmitter<Human>();

    public onClick() {
        this.add.emit(this.human);
    }
}
