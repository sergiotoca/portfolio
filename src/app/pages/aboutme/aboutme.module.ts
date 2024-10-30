import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeRoutingModule } from './aboutme-routing.module';
import { AboutMeComponent } from './aboutme.component';

@NgModule({
	imports: [
		CommonModule,
		AboutMeRoutingModule
	],
	declarations: [AboutMeComponent]
})
export class AboutMeModule { }
