import { Component } from "@angular/core";



@Component({
    selector: 'app-root',// This targets the <app-root> html item in index.html (recommend to prefix html items with app-)
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.css'
    ]
})
export class AppComponent {
    emoji = ['🎉', '😍', '😜', '👍'];
    activeEmoji: string;

    changeEmoji(){
        this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)];
    }
}