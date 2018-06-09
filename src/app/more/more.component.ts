import {Component, OnInit} from '@angular/core';
import {Phone} from '../entities/phone';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';

@Component({
    selector: 'app-more',
    templateUrl: './more.component.html',
    styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
    public active: Phone = new Phone(0);
    private id: number;

    constructor(private queryParam: ActivatedRoute, private phones: DataService) {
        this.id = parseInt(this.queryParam.snapshot.params.id);
        const query = this.phones.getById(this.id);
        if (query !== null) {
            this.active = query;
        }
        console.log(this.active);
    }

    ngOnInit(): void {

    }
}