import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

    @Input('text') text: string;
    @Output('textChange') textChange = new EventEmitter<string>();

    ngOnInit() {
    }

    changeDetection() {
        this.textChange.emit(this.text);
    }
}
