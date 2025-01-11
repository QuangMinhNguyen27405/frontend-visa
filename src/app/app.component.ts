import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend-visa';

  // private apiUrl = "http://127.0.0.1:3000/games/";

  // http = inject(HttpClient);

  // gameData: any = null;

  // getGame(game: string = 'soccer') {
  //   return this.http.get<any>(this.apiUrl + '/' + game);
  // }

  // ngOnInit() {
  //   this.fetchGame();
  // }

  // fetchGame() {
  //   this.getGame().subscribe({
  //     next: (data) => this.gameData = data,
  //     error: (err) => console.error('Error fetching game data: ', err)
  //   });
  // }
}
