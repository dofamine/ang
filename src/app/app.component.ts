import {Component} from '@angular/core';
import {Human} from "./entities/human";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public formModel: Human = new Human("", "");
    public output: any;
    private _active:Human = null
    get active(): Human {
        return this._active;
    }

    set active(value: Human) {
        this._active = value;
    }

    public listHumans: Array<Human> = [
        new Human("Vasu", "pupk"),
        new Human("Ivan", "baraban")
    ];

    public show(answer) {
        this.output = answer.name;
    }
}
