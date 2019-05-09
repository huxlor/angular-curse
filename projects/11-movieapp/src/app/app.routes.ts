import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BuscadorComponent } from './components/buscador/buscador.component';




const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'buscador', component: BuscadorComponent },
    { path: 'pelicula', component: PeliculaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);
