import {Injectable} from "@angular/core";
import {Entry} from "./entry.model";
import {Http} from "@angular/http";

@Injectable()// Required for dependency injection
export class EntryService {

    constructor(private http: Http){// Expose http service to entire class

    }

    getEntries(): Promise<Entry[]> {// returns an array of Entries
        return this.http.get('/app/entries')
            .toPromise()
            .then(response => response.json().data as Entry[])
    }

    addComment(entryId: number, comment: {name: string, comment: string}) {
        return this.http.post(`/app/entries/${entryId}/comments`, comment)
            .toPromise();
    }
}