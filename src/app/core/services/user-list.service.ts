import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export type User = {
    id: number;
    name: string;
    age: number;
    email?: string;
};

const mockData: User[] = [
    { id: 1, name: 'Jake', age: 18 },
    { id: 2, name: 'Stirling', age: 27 },
    { id: 3, name: 'Stepben', age: 31 },
    { id: 4, name: 'Marguerite', age: 20 },
    { id: 5, name: 'Arabella', age: 25 },
    { id: 6, name: 'Julia', age: 23 },
];

@Injectable({
    providedIn: 'root',
})
export class UserListService {
    constructor() {}

    public get(): Observable<User[]> {
        return of(mockData).pipe(delay(700));
    }
}
