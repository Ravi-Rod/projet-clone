import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieCategoryComponent } from '../../components/movie-category/movie-category.component';
import { MovieService } from '../../service/movie.service';
import { Movie } from '../../types/movies';
import { tmdbConfig } from '../constants/config';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [HeaderComponent, MovieCategoryComponent],
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

movieService= inject(MovieService);
popularMovies:Movie[]= [];
nowPlayingMovies:Movie[]= [];
topRatedMovies:Movie[]= [];
upcomingMovies:Movie[]= [];
bannerMovie!:Movie;
tmdbConfig= tmdbConfig;
public domSanitize=inject(DomSanitizer);
  constructor() { }

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe((result:any)=>{
      console.log(result);
      this.popularMovies= result.results;
      this.bannerMovie= this.popularMovies[0];
      this.movieService.getMovieVideos(this.bannerMovie.id).subscribe((res:any)=>{
      this.bannerMovie.videoKey= res.results.find((x:any)=>x.site='Youtube').key;
      console.log(this.bannerMovie);
      })
    })
    this.movieService.getNowPlayingMovies().subscribe((result:any)=>{
      console.log(result);
      this.nowPlayingMovies= result.results;
    })
    this.movieService.getTopRatedMovies().subscribe((result:any)=>{
      console.log(result);
      this.topRatedMovies= result.results;
    })
    this.movieService.getUpcomingMovies().subscribe((result:any)=>{
      console.log(result);
      this.upcomingMovies= result.results;
    })
  }

}
