import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    ngOnInit(): void {
        {
            this.model = [
                {
                    label: 'About Me',
                    icon: 'pi pi-fw pi-user',
                    routerLink: ['/pages/aboutme']
                },
                {
                    label: 'Experience',
                    icon: 'pi pi-fw pi-briefcase',
                    routerLink: ['/pages/experience']
                },
                {
                    label: 'Education Background',
                    icon: 'pi pi-fw pi-book',
                    routerLink: ['/pages/education']
                },
                {
                    label: 'Projects',
                    icon: 'pi pi-fw pi-code',
                    routerLink: ['/pages/projects']
                },
                {
                    label: 'Contact Me',
                    icon: 'pi pi-fw pi-envelope',
                    routerLink: ['/pages/contact']
                }
            ]
        }
    }

    
}
