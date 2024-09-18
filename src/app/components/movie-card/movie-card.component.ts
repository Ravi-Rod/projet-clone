import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Movie } from '../../types/movies';
import { tmdbConfig } from '../../pages/constants/config';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
@Input() movie!: Movie;
 tmdbConfig= tmdbConfig;

}
