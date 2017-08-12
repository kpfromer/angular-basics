import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {FormsModule} from "@angular/forms";

// Services
import {EntryService} from "./entries/shared/entry.service";

// Components
import { AppComponent } from "./app.component"
import {EntryListComponent, EntryComponent} from "./entries/";
import {InMemoryEntryService} from "./backend";
import {EntryCommentFormComponent} from "./entries/entry/comment/entry-comment-form.component";

/*
This is a typescript decorator (provide Angular with metadata)
Angular compiler uses these decorator to include information
and do other things that may be repetitive without it
*/
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryEntryService),// ONLY FOR DEVELOPMENT
        FormsModule
    ],// angular now knows that this app will be used with the web browser
    providers : [
        EntryService
    ],// defines injectable services
    declarations: [
        AppComponent,
        EntryComponent,// Since EntryComponent is a child of the EntryListComponent WE PLACE IT BEFORE EntryListComponent in declarations, else we get an error
        EntryListComponent,
        EntryCommentFormComponent
    ],// tells angular to start appcomponent at launch, declarations registers all our apps components
    bootstrap: [AppComponent]
})
export class AppModule {

}