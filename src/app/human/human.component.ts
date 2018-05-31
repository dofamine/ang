import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Human} from "../entities/human";

@Component({
    selector: 'app-human',
    templateUrl: './human.component.html'
})
export class HumanComponent {

    constructor() {
    }

    @Input() human: Human;
    @Input() numbers: number;
    @Output("wow") numberEmit: EventEmitter<number> = new EventEmitter<number>();
    @Output() add: EventEmitter<Human> = new EventEmitter<Human>();
    private number: number = 5;

    public onClick() {
        this.add.emit(this.human);
        // this.numberEmit.emit(this.number);
    }
}
