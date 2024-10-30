import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { LayoutService, AppConfig } from './layout/service/app.layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  constructor(private primengConfig: PrimeNGConfig, private layoutService: LayoutService) {}

  ngOnInit(): void {

    this.primengConfig.ripple = true;       //enables core ripple functionality

        //optional configuration with the default configuration
        const config: AppConfig = {
            ripple: false,                      //toggles ripple on and off
            inputStyle: 'outlined',             //default style for input elements
            menuMode: 'slim-plus',                 //layout mode of the menu, valid values are "static", "overlay", "slim", "horizontal", "reveal" and "drawer" 
            colorScheme: 'light',               //color scheme of the template, valid values are "light", "dim" and "dark"
            theme: 'orange',                    //default component theme for PrimeNG
            menuTheme: "primaryColor",           //theme of the menu, valid values are "colorScheme", "primaryColor" and "transparent"
            scale: 16                           //size of the body font size to scale the whole application
        };
        this.layoutService.config.set(config);

  }
  title = 'portfolio';
}
