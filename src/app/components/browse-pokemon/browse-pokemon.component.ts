import { Component } from '@angular/core';
import { PokeService } from 'src/app/services/poke-service.service';

@Component({
  selector: 'app-browse-pokemon',
  templateUrl: './browse-pokemon.component.html',
  styleUrls: ['./browse-pokemon.component.css']
})

//Get an instance of my service. going to use dependency injection to do it
// Somewhere, I need to call the service and get the pokemon records to show
// I need to load a component level variable with some pokemon records
// I need to handle next and previous click and should I disable the buttons, if there is no next/previous
// When someone clicks on a pokemon's name, them to the detail page for that pokemon
export class BrowsePokemonComponent {
  pokemonList?: any[];
  prev?: String;
  next?: String;

  constructor(private pokeService: PokeService){
    this.pokemonList = []; //ensure array is null and not cause errors
  }


  ngOnInit(){
    //fetch the records we need
    this.pokeService.getPokemonFirstPage().subscribe(records => {
      console.log(records);
      this.pokemonList = records.results;
      //loop over each pokemon, parse URL to get the id, then set the id on te object
      this.messagePokemonList(this.pokemonList);
      this.prev = records.previous;
      this.next = records.next;

    });
  }

  messagePokemonList(pokeList: any[] | undefined){
    if(pokeList){
      for(let pokemon of pokeList){
        let urlpart = pokemon.url.split('/');
        let id = urlpart[urlpart.length - 2];
        console.log(id);
        pokemon.id = id;
      }
    }
  }

  prevClick(){
    console.log("prev click");
    this.pokeService.getPokemonByPage(this.prev).subscribe(records => {
      console.log(records);
      this.pokemonList = records.results;
      this.messagePokemonList(this.pokemonList);
      this.prev = records.previous;
      this.next = records.next;
    });
  }

  nextClick(){
    console.log("next click");
    this.pokeService.getPokemonByPage(this.next).subscribe(records => {
      console.log(records);
      this.pokemonList = records.results;
      this.messagePokemonList(this.pokemonList);
      this.prev = records.previous;
      this.next = records.next;
    });
  }
}
