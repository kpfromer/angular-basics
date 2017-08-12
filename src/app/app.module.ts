import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from "@angular/http";

// Components
import { AppComponent } from "./app.component"
import {EntryListComponent, EntryComponent} from "./entries/";

/*
This is a typescript decorator (provide Angular with metadata)
Angular compiler uses these decorator to include information
and do other things that may be repetitive without it
*/
@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],// angular now knows that this app will be used with the web browser
    declarations: [
        AppComponent,
        EntryComponent,// Since EntryComponent is a child of the EntryListComponent WE PLACE IT BEFORE EntryListComponent in declarations, else we get an error
        EntryListComponent
    ],// tells angular to start appcomponent at launch, declarations registers all our apps components
    bootstrap: [AppComponent]
})
export class AppModule {

}