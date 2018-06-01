import {Component, EventEmitter, Output} from '@angular/core';
import {Phone} from "../entities/phone";

@Component({
    selector: 'app-phone-form',
    templateUrl: './phone-form.component.html',
    styleUrls: ['./phone-form.component.css']
})
export class PhoneFormComponent {
    public active = false;
    public phone: Phone = new Phone();
    @Output('addAction') add: EventEmitter<phone> = new EventEmitter<phone>();

    constructor() {
    }

    public addPhone() {
        this.add.emit(this.phone);
        this.phone = new Phone();
    }

    public showForm() {
        this.active = !this.active;
    }
}
