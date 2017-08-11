import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component"

/*
This is a typescript decorator (provide Angular with metadata)
Angular compiler uses these decorator to include information
and do other things that may be repetitive without it
*/
@NgModule({
    imports: [BrowserModule],// angular now knows that this app will be used with the web browser
    declarations: [AppComponent],// tells angular to start appcomponent at launch, declarations registers all our apps components
    bootstrap: [AppComponent]
})
export class AppModule {

}