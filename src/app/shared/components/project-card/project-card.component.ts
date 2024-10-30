import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../models/project.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
      CommonModule
  ],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
    @Input() project!: Project;

    constructor(private router: Router) {}

    ngOnInit(): void {
      console.log('Project data:', this.project); // Add this to verify project data
  }

    navigateToDetail(): void {
      if (this.project && this.project.id) {
          this.router.navigate(['/pages/projects', this.project.id]);
      }
  }
}
