import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-board',
  standalone: true,
  imports: [], // Add any necessary Angular modules here
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css'] // Corrected property name
})
export class ScoreBoardComponent implements OnInit {
  private sportUrl = "http://127.0.0.1:3000/games/";
  public gameData: any = null;

  constructor(private http: HttpClient) {}

  getGame(game: string = 'soccer') {
    const url = `http://127.0.0.1:3000/games/soccer`;
    return this.http.get<any>(url);
  }

  ngOnInit() {
    this.fetchGame();
  }

  fetchGame() {
    console.log("pass");
    this.getGame().subscribe({
      next: (data) => {
        console.log('Game data fetched:', data);
        this.gameData = data;
      },
      error: (err) => {
        console.error('Error fetching game data:', err);
      }
    });
  }
}
