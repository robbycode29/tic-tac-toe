import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  winner: string;
  player: string;

  constructor() { 
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
    this.winner = '';
    this.player = 'X';
  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(): void {
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.xIsNext = true;
  }

  getPlayer(): string {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number): void {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.getPlayer());
      this.xIsNext = !this.xIsNext;
      this.player = this.getPlayer();
    }
    this.winner = this.calculateWinner();
  }

  calculateWinner(): string {
    const lines: any[] = [
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // diagonal top left to bottom right
      [2, 4, 6]  // diagonal top right to bottom left
    ];
    for (const line of lines) {
      const [a, b, c] = line;
      if (this.squares[a] && 
          this.squares[a] === this.squares[b] && 
          this.squares[a] === this.squares[c]) {
        return this.squares[a];
      }
    }
    return '';
  }

}
