import { Component } from '@angular/core';

@Component({
    selector: 'app-entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']
})
export class EntryComponent {
    title: string = 'My first photo';
    photo: string = 'http://via.placeholder.com/350x150';
    description: string = 'A description';
}