import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Phone} from "../entities/phone";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {
    @Input('arr') phones: Array<Phone>;
    @Output('active') active: EventEmitter<Phone> = new EventEmitter<Phone>();

    public show(i: number) {
        this.active.emit(this.phones[i]);
    }
}
