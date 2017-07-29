import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = "Photo Album";
  picture1: string = 'https://media.giphy.com/media/3ohzdUi5U8LBb4GD4s/giphy.gif';
  caption1: string = 'Jon Snow';
  picture2: string = 'https://media.giphy.com/media/3o7bu1PjAacbngGcpO/giphy.gif';
  caption2: string = 'Winter has come';
  picture3: string = 'https://media.giphy.com/media/NtX2BPM2NsTQs/giphy.gif';
  caption3: string = 'in a Lover\'s quarrel';
}