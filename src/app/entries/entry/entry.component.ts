import {Component} from "@angular/core";


@Component({
    selector: 'app-entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']
})
export class EntryComponent {
    title: string = 'My First Photo';
    photo: string = 'http://placehold.it/800x500?text=Angular Basics';
    description: string = 'A description of angular basics course';
    comments: any[] = [
        {
            name: 'John',
            comment: 'I liked the video.'
        },
        {
            name: 'Jack',
            comment: 'I disliked the video.'
        }
    ]
}