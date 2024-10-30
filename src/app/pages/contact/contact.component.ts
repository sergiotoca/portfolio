import { Component } from '@angular/core';
import { LayoutService } from '../../layout/service/app.layout.service';

@Component({
    templateUrl: './contact.component.html',
})
export class ContactComponent {
    options: any;

    overlays: any[] = [];

    dialogVisible: boolean = false;

    markerTitle: string = '';

    selectedPosition: any;

    infoWindow: any;

    draggable: boolean = false;

    name: string = '';

    email: string = '';

    message: string = '';

    content: any[] = [
        { icon: 'pi pi-fw pi-phone', title: 'Phone', info: '1 (647) 545-5757' },
        {
            icon: 'pi pi-fw pi-github',
            title: 'My GitHub page',
            info: 'sergiotoca',
            link: 'https://github.com/sergiotoca'
        },
        { icon: 'pi pi-fw pi-at', title: 'Email', info: 'sergiotoledo.ca@gmail.com', link: 'mailto:sergiotoledo.ca@gmail.com' },
    ];

    constructor(private layoutService: LayoutService) {}

    get mapStyle() {
        return {
            'background-image': "url('assets/images/contact/torontomap.jpg",
            'background-position': 'center -800px',
                };
    }
}
