import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RippleModule } from 'primeng/ripple';
import { ProjectsService } from '../../shared/services/projects.service';
import { Project } from '../../shared/models/project.interface';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
      CommonModule,
      FormsModule,
      ButtonModule,
      InputTextModule,
      InputTextareaModule,
      RippleModule,
      DataViewModule,
      DropdownModule,
      ProjectCardComponent
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  totalProjects: Project[] = [];
  sortOptions: any[] = [];
  sortField: string = '';

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    // Fetch all projects
    this.projectsService.getProjects().subscribe((projects) => {
      console.log("Projects fetched:", projects); // Debugging output
      this.totalProjects = projects;
    });

    // Sort options for the dropdown
    this.sortOptions = [
      { label: 'Newest First', value: 'newest' },
      { label: 'Oldest First', value: 'oldest' },
      { label: 'Title', value: 'title' }
    ];
  }

  // Sort the projects based on the sort field
  onSortChange(event: any): void {
    const value = event.value;

    if (value === 'newest') {
      this.totalProjects.sort((a, b) => {
        // Combining day and month into a comparable date format
        const dateA = new Date(`${a.month} ${a.year}`);
        const dateB = new Date(`${b.month} ${b.year}`);
        return dateB.getTime() - dateA.getTime(); // Sort in descending order for "newest first"
      });
    } else if (value === 'oldest') {
      this.totalProjects.sort((a, b) => {
        // Combining day and month into a comparable date format
        const dateA = new Date(`${a.month} ${a.year}`);
        const dateB = new Date(`${b.month} ${b.year}`);
        return dateA.getTime() - dateB.getTime(); // Sort in ascending order for "oldest first"
      });
    } else if (value === 'title') {
      this.totalProjects.sort((a, b) => {
        // Sorting by title alphabetically
        return (a.title ?? '').localeCompare(b.title ?? '');
      });
    }
  }
}