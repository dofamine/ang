import {Component, EventEmitter, Input} from '@angular/core';
import {Phone} from "../entities/phone";

@Component({
    selector: 'app-more',
    templateUrl: './more.component.html',
    styleUrls: ['./more.component.css']
})
export class MoreComponent {
    @Input('active') active: Phone;
}