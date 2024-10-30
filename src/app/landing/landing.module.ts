import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfigModule } from '../layout/config/app.config.module';
import { AnimateEnterDirective } from './animateenter.directive'; 
import { KnobModule } from 'primeng/knob';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        LandingRoutingModule,
        ButtonModule,
        RouterModule,
        StyleClassModule,
        AppConfigModule,
        KnobModule,
        FormsModule
    ],
    declarations: [LandingComponent, AnimateEnterDirective]
})
export class LandingModule { }
