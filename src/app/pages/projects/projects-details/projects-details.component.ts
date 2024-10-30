import { Component } from '@angular/core';
import { Project } from '../../../shared/models/project.interface';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProjectsService } from '../../../shared/services/projects.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-projects-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule
  ],
  templateUrl: './projects-details.component.html',
  styleUrl: './projects-details.component.scss'
})
export class ProjectsDetailsComponent {

  project: Project | undefined;

    constructor(
        private route: ActivatedRoute,
        private projectsService: ProjectsService
    ) {}

    ngOnInit(): void {
        // Fetch project id from route parameters
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            if (id) {
                // Fetch project details using the ProjectsService
                this.projectsService.getProjectById(id).subscribe(project => {
                    this.project = project;
                });
            }
        });
    }

}
