import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NumbersComponent } from './numbers/numbers.component';
import { SymbolsComponent } from './symbols/symbols.component';
import { ReadingsComponent } from './readings/readings.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
	{ path: '',	component: HomeComponent },
	{ path: 'numbers',	component: NumbersComponent },
	{ path: 'symbols',	component: SymbolsComponent },
	{ path: 'readings',	component: ReadingsComponent },
	{ path: 'about',	component: AboutComponent },
	{ path: '**',	redirectTo: '', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
