import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Phone} from '../entities/phone';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {
    @Input('arr') phones: Array<Phone>;
    @Output('active') active: EventEmitter<Phone> = new EventEmitter<Phone>();

    public p = 'https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg';
    public show(p: Phone) {
        this.active.emit(p);
    }
}
