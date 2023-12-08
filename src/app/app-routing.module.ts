import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BrowsePokemonComponent } from './components/browse-pokemon/browse-pokemon.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'browse', component: BrowsePokemonComponent},
  {path: 'pokemon/:id', component: PokemonDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
