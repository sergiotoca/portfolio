import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutMeComponent } from './aboutme.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: AboutMeComponent }
	])],
	exports: [RouterModule]
})
export class AboutMeRoutingModule { }
