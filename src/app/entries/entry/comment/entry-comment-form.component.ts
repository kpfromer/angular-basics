import {Component, EventEmitter, Input, Output, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";
import {EntryService} from "../../shared/entry.service";

@Component({
    selector: 'app-entry-comment-form',
    templateUrl: 'entry-comment-form.component.html',
    styleUrls: [
        'entry-comment-form.component.css'
    ]
})
export class EntryCommentFormComponent {

    name: string;
    comment: string;

    @Input() entryId: number;

    @Output() onCommentAdded = new EventEmitter<{name: string, comment: string}>();

    @ViewChild('commentForm') commentForm: NgForm;

    onSubmit() {

        if(this.commentForm.invalid) return;

        let comment = {name: this.name, comment: this.comment};

        this.entryService.addComment(this.entryId, comment);

        this.onCommentAdded.emit(comment);

        this.commentForm.resetForm();
    }


    constructor(private entryService: EntryService) {
    }
}