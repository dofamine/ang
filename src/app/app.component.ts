import {Component} from '@angular/core';
import {Phone} from './entities/phone';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public phones: Array<Phone> = [];
    public active: Phone = null;

    public update(item: Phone) {
        this.phones.push(item);
    }

    public setActive(phone: Phone) {
        this.active = phone;
    }
}
