import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  AllMovies: any[] = [
 
  {
    "id": 1,
    "movieName": "Mission: Impossible – Dead Reckoning Part One",
    "director": "Christopher McQuarrie",
    "actor": "Tom Cruise, Hayley Atwell, Rebecca Ferguson",
      "posterUrl": "../../assets/images/mission_impossible.jpg",
      "story": "Ethan Hunt and the IMF team must track down a terrifying new weapon that threatens all of humanity if it falls into the wrong hands. With control of the future and the fate of the world at stake, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan is forced to consider that nothing can matter more than the mission -- not even the lives of those he cares about most.",
    "trailer":"../../assets/images/mission_impossible.jpg"
  },
  {
    "id": 2,
    "movieName": "John Wick: Chapter 5",
    "director": "Chad Stahelski",
    "actor": "Keanu Reeves, Donnie Yen, Bill Skarsgård",
    "posterUrl": "../../assets/images/john_wick_5.jpg",
    "story": "Ethan Hunt and the IMF team must track down a terrifying new weapon that threatens all of humanity if it falls into the wrong hands. With control of the future and the fate of the world at stake, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan is forced to consider that nothing can matter more than the mission -- not even the lives of those he cares about most."
  },
  {
    "id": 3,
    "movieName": "Mad Max: The Wasteland",
    "director": "George Miller",
    "actor": "Tom Hardy, Anya Taylor-Joy, Chris Hemsworth",
    "posterUrl": "../../assets/images/mad_max.jpg",
    "story": "Ethan Hunt and the IMF team must track down a terrifying new weapon that threatens all of humanity if it falls into the wrong hands. With control of the future and the fate of the world at stake, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan is forced to consider that nothing can matter more than the mission -- not even the lives of those he cares about most."
  },
  {
    "id": 4,
    "movieName": "Fast X",
    "director": "Louis Leterrier",
    "actor": "Vin Diesel, Michelle Rodriguez, Jason Momoa",
    "posterUrl": "../../assets/images/fast_x.jpg",
    "story": "Ethan Hunt and the IMF team must track down a terrifying new weapon that threatens all of humanity if it falls into the wrong hands. With control of the future and the fate of the world at stake, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan is forced to consider that nothing can matter more than the mission -- not even the lives of those he cares about most."
  },
  {
    "id": 5,
    "movieName": "Transformers: One",
    "director": "Josh Cooley",
    "actor": "Chris Hemsworth, Scarlett Johansson, Brian Tyree Henry",
    "posterUrl": "../../assets/images/transformers_one.jpg",
    "story": "Ethan Hunt and the IMF team must track down a terrifying new weapon that threatens all of humanity if it falls into the wrong hands. With control of the future and the fate of the world at stake, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan is forced to consider that nothing can matter more than the mission -- not even the lives of those he cares about most."
  },
  {
    "id": 6,
    "movieName": "The Marvels",
    "director": "Nia DaCosta",
    "actor": "Brie Larson, Teyonah Parris, Iman Vellani",
    "posterUrl": "../../assets/images/the_marvels.jpg",
    "story": "Ethan Hunt and the IMF team must track down a terrifying new weapon that threatens all of humanity if it falls into the wrong hands. With control of the future and the fate of the world at stake, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan is forced to consider that nothing can matter more than the mission -- not even the lives of those he cares about most."
  },
  {
    "id": 7,
    "movieName": "Indiana Jones and the Dial of Destiny",
    "director": "James Mangold",
    "actor": "Harrison Ford, Phoebe Waller-Bridge, Mads Mikkelsen",
    "posterUrl": "../../assets/images/indiana_jones.jpg",
    "story": "Ethan Hunt and the IMF team must track down a terrifying new weapon that threatens all of humanity if it falls into the wrong hands. With control of the future and the fate of the world at stake, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan is forced to consider that nothing can matter more than the mission -- not even the lives of those he cares about most."
  },
  {
    "id": 8,
    "movieName": "Deadpool 3",
    "director": "Shawn Levy",
    "actor": "Ryan Reynolds, Hugh Jackman, Morena Baccarin",
    "posterUrl": "../../assets/images/deadpool_3.jpg",
    "story": "Ethan Hunt and the IMF team must track down a terrifying new weapon that threatens all of humanity if it falls into the wrong hands. With control of the future and the fate of the world at stake, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan is forced to consider that nothing can matter more than the mission -- not even the lives of those he cares about most."
  },
  {
    "id": 9,
    "movieName": "Aquaman and the Lost Kingdom",
    "director": "James Wan",
    "actor": "Jason Momoa, Amber Heard, Patrick Wilson",
    "posterUrl": "../../assets/images/aquaman.jpg",
    "story": "Ethan Hunt and the IMF team must track down a terrifying new weapon that threatens all of humanity if it falls into the wrong hands. With control of the future and the fate of the world at stake, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan is forced to consider that nothing can matter more than the mission -- not even the lives of those he cares about most."
  },
  {
    "id": 10,
    "movieName": "Blade",
    "director": "Yann Demange",
    "actor": "Mahershala Ali, Delroy Lindo, Aaron Pierre",
    "posterUrl": "../../assets/images/blade.jpg",
    "story": "Ethan Hunt and the IMF team must track down a terrifying new weapon that threatens all of humanity if it falls into the wrong hands. With control of the future and the fate of the world at stake, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan is forced to consider that nothing can matter more than the mission -- not even the lives of those he cares about most."
  },
  {
    "id": 11,
    "movieName": "Venom",
    "director": "Yann Demange",
    "actor": "Mahershala Ali, Delroy Lindo, Aaron Pierre",
    "posterUrl": "../../assets/images/venom.png",
    "story": "Ethan Hunt and the IMF team must track down a terrifying new weapon that threatens all of humanity if it falls into the wrong hands. With control of the future and the fate of the world at stake, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan is forced to consider that nothing can matter more than the mission -- not even the lives of those he cares about most."
    },
  {
    "id": 12,
    "movieName": "Oppenheimer",
    "director": "Yann Demange",
    "actor": "Mahershala Ali, Delroy Lindo, Aaron Pierre",
    "posterUrl": "../../assets/images/oppenheimer.jpg",
    "story": "Ethan Hunt and the IMF team must track down a terrifying new weapon that threatens all of humanity if it falls into the wrong hands. With control of the future and the fate of the world at stake, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan is forced to consider that nothing can matter more than the mission -- not even the lives of those he cares about most."
  }
]

  findMovieById(id: any): any[]{
    return this.AllMovies.filter(movie => movie.id == parseInt(id));
}

  // find(id: number): any[] {
  //   const movie = this.AllMovies.find(movie => movie.id == id);
  //   return movie
  // }

}
