import {Component, EventEmitter, Output} from '@angular/core';
import {Phone} from '../entities/phone';

@Component({
    selector: 'app-phone-form',
    templateUrl: './phone-form.component.html',
    styleUrls: ['./phone-form.component.css']
})
export class PhoneFormComponent {
    @Output('addAction') add = new EventEmitter<Phone>();
    public active = false;
    public phone = new Phone();
    public addPhone() {
        this.add.emit(this.phone);
        this.phone = new Phone();
    }
}
