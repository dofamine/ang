import {Injectable} from '@angular/core';
import {Phone} from './entities/phone';
import {Observable, of} from 'rxjs';

@Injectable()
export class DataService {
    data: Array<Phone> = [];

    getAll(): Observable<Array<Phone>> {
        return of(this.data);
    }

    getById(id: number): Phone {
        const res = this.data.filter(phone => phone.id === id);
        return res.length ? res[0] : null;
    }

    put(phone: Phone): void {
        this.data.push(phone);
    }
}