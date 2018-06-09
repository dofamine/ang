import {Component, EventEmitter, Output} from '@angular/core';
import {Phone} from '../entities/phone';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-phone-form',
    templateUrl: './phone-form.component.html',
    styleUrls: ['./phone-form.component.css']
})
export class PhoneFormComponent {
    constructor(private phoneService: DataService, private router: Router) {
    }

    @Output('addAction') add = new EventEmitter<Phone>();
    public active = false;
    public phone = new Phone(this.generateId());

    public addPhone() {
        this.phoneService.put(this.phone);
        this.router.navigate(['details', this.phone.id]);
        this.phone = new Phone(this.generateId());
    }

    private generateId(): number {
        return new Date().getTime();
    }
}
