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

    skills = [
        { name: 'JavaScript', value: 80 },
        { name: 'TypeScript', value: 70 },
        { name: 'Angular', value: 85 },
        { name: '.NET Core', value: 75 },
        { name: 'ASP.NET', value: 65 },
        { name: 'SQL', value: 90 },
        { name: 'DAX', value: 60 },
        { name: 'DevOps', value: 70 },
        { name: 'React', value: 80 },
        { name: 'Python', value: 85 }
      ];

    scrollToSection(sectionId: string) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
}
