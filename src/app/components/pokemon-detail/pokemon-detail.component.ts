import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeService } from 'src/app/services/poke-service.service';
import { Pokemon } from'src/app/models/Pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {
  id?: string | null;
  pokemon?: Pokemon;

  constructor(private route: ActivatedRoute, private pokeService: PokeService) { }

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    //ask the pokemon service, for details about this id
    this.pokeService.getPokemonById(this.id).subscribe(
      (response) => {
        //take the keys we want from data, and create a pokemon instance
        this.pokemon = {
          id: response.id,
          name: response.name,
          abilities: response.abilities,
          moves: response.moves,
          img: response.sprites.front_default,
          ShinyImageUrl: response.sprites.front_shiny
        };

        console.log(this.pokemon);
      }
    );
  }


}
