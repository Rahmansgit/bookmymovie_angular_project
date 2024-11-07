import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {movieListArray: any[] = []


  constructor(
    private router: Router,
    private service: MoviesService) {
    this.movieListArray = service.AllMovies;
  }
goToVieMovie(id:number): void{
  this.router.navigate(['viewMovie/' + id]);
}
}



