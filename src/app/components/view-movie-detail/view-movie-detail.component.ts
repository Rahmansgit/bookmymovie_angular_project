import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-view-movie-detail',
  templateUrl: './view-movie-detail.component.html',
  styleUrls: ['./view-movie-detail.component.css']
})
export class ViewMovieDetailComponent {

  // movieList: String[] = ["movie 1"]
  // movieListArray: any[] = [
  //   {
  //     movieName: "movie 1",
  //     director: "director 1",
  //     actor: "actor1",
  //     posterUrl: "../../assets/images/movie1.webp"
  //   }

  // ]
  movieListArray!: any[];
  id: number | any =0;
movieList: any;


  constructor(private ActivatedRoute: ActivatedRoute,
    private service: MoviesService,
    private router: Router

  ) {
    this.id = this.ActivatedRoute.snapshot.paramMap.get("id");
    this.movieListArray = this.service.findMovieById(this.id);
    
  }


    buyTicket(time: string) {
    this.router.navigate(['/ticketbooking/' + time])  
  }

}
