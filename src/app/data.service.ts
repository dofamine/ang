import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs/index";

@Injectable()
export class DataService {
    arr: Array<number> = [1, 2, 4, 2];

    show(): Observable<Array<number>> {
        return of(this.arr);
    }

    add(value: number): void {
        this.arr.push(value);
    }
}
