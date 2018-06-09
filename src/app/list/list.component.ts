import {Component} from '@angular/core';
import {Phone} from '../entities/phone';
import {DataService} from '../data.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {
    public phones: Array<Phone>;
    constructor(private phoneService: DataService) {
        this.phoneService.getAll().subscribe(response => this.phones = response);
        // console.log(this.phoneService);
    }
}
