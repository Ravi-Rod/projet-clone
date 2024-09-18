import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, input } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Movie } from '../../types/movies';

@Component({
  selector: 'app-movie-category',
  standalone: true,
  imports: [CommonModule,MovieCardComponent],
  templateUrl: './movie-category.component.html',
  styleUrls: ['./movie-category.component.css']
})
export class MovieCategoryComponent implements OnInit {

@Input() title="";
@Input() movieList:Movie[]=[];

  constructor() { }

  ngOnInit() {
  }

}
