import {Component} from "@angular/core";
import {Http} from "@angular/http";

@Component({
    selector: 'app-entry-list',
    templateUrl: 'entry-list.component.html',
    styleUrls: ['entry-list.component.css']
})
export class EntryListComponent {
    constructor(http: Http){//Dependency inject, angular handles this, similar to spring @autowired
        http.get('/app/entries/').toPromise()
            .then(response => {debugger})
            .catch(error => {debugger});
    }
}