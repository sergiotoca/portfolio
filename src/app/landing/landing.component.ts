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
    
      private intervals = new Map();

    subscription: Subscription;

    darkMode: boolean = false;

    constructor(public router: Router, private layoutService: LayoutService) {
        this.subscription = this.layoutService.configUpdate$.subscribe(config => {
            this.darkMode = config.colorScheme === 'dark' || config.colorScheme === 'dim' ? true : false;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();

        // Clear all intervals on component destroy to prevent memory leaks
        this.intervals.forEach(interval => clearInterval(interval));
    }

    skills = [
        { name: 'JavaScript', value: 80, hoverValue: 80 },
        { name: 'TypeScript', value: 70, hoverValue: 70 },
        { name: 'Angular', value: 85, hoverValue: 85 },
        { name: '.NET Core', value: 75, hoverValue: 75 },
        { name: 'ASP.NET', value: 65, hoverValue: 65 },
        { name: 'SQL', value: 90, hoverValue: 90 },
        { name: 'DAX', value: 60, hoverValue: 60 },
        { name: 'DevOps', value: 70, hoverValue: 70 },
        { name: 'React', value: 80, hoverValue: 80 },
        { name: 'Python', value: 85, hoverValue: 85 }
    ];
    

    scrollToSection(sectionId: string) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    startHover(skill: any) {
        this.clearHoverInterval(skill);
    
        // Initialize direction flag and set initial state
        let incrementing = false;
    
        const interval = setInterval(() => {
            if (incrementing) {
                // Increment hoverValue until it reaches the skill's value
                if (skill.hoverValue < skill.value) {
                    skill.hoverValue++;
                } else {
                    // Stop after completing one full cycle back to the original value
                    this.clearHoverInterval(skill);
                }
            } else {
                // Decrement hoverValue until it reaches 0
                if (skill.hoverValue > 50) {
                    skill.hoverValue--;
                } else {
                    // Switch direction to increment back up
                    incrementing = true;
                }
            }
        }, 15); // Adjust timing for smoother or faster animation
    
        this.intervals.set(skill, interval);
    }
    
    endHover(skill: any) {
        this.clearHoverInterval(skill);
        const interval = setInterval(() => {
          if (skill.hoverValue < skill.value) {
            skill.hoverValue++;
          } else {
            this.clearHoverInterval(skill);
          }
        }, 15);
        this.intervals.set(skill, interval);
    }
    
    private clearHoverInterval(skill: any) {
        if (this.intervals.has(skill)) {
          clearInterval(this.intervals.get(skill));
          this.intervals.delete(skill);
        }
    }
}
