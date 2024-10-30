import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '../layout/service/app.layout.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnDestroy {

    subscription: Subscription;

    darkMode: boolean = false;

    constructor(public router: Router, private layoutService: LayoutService) {
        this.subscription = this.layoutService.configUpdate$.subscribe(config => {
            this.darkMode = config.colorScheme === 'dark' || config.colorScheme === 'dim' ? true : false;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    // Skill values for the knobs
    knobValueJavaScript: number = 80;
    knobValueTypeScript: number = 70;
    knobValueAngular: number = 70;
    knobValueDotNetCore: number = 60;
    knobValueAspNet: number = 80;
    knobValueSQL: number = 90;
    knobValueDAX: number = 30;
    knobValueAzureDevOps: number = 50;
    knobValueReact: number = 90;
    knobValuePython: number = 75;

    scrollToSection(sectionId: string) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
}
