import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  base?:string;
  
  
  constructor(private http: HttpClient) { 
    this.base= 'https://pokeapi.co/api/v2/';
  }

  //get the list of pokemon
  getPokemonFirstPage(){
    let url = this.base + 'pokemon';
    return this.http.get<any>(url);
  }

  //get a pokemon by page
  getPokemonByPage(url?: String){
    return this.http.get<any>(url as string);
  }

  //get a pokemon by id
  getPokemonById(id: string | null){
    let url = this.base + 'pokemon/' + id;
    return this.http.get<any>(url);
  }

  //get an abilitities by id
  getAbilityById(url?:string){
  }


}
