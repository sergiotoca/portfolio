import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'aboutme', data: { breadcrumb: 'About' }, loadChildren: () => import('./aboutme/aboutme.module').then(m => m.AboutMeModule) },
        { path: 'contact', data: { breadcrumb: 'Contact' }, loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
        {
            path: 'projects',
            data: { breadcrumb: 'Projects' },
            children: [
                { path: '', loadComponent: () => import('./projects/projects.component').then(m => m.ProjectsComponent) },
                { 
                    path: ':id',
                    loadComponent: () => import('./projects/projects-details/projects-details.component').then(m => m.ProjectsDetailsComponent),
                    data: { breadcrumb: 'Details' }
                }
            ]
        },
        { path: 'education', data: { breadcrumb: 'Education' }, loadComponent: () => import('./education/education.component').then(m => m.EducationComponent) },
        { path: 'experience', data: { breadcrumb: 'Experience' }, loadComponent: () => import('./experience/experience.component').then(m => m.ExperienceComponent) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
