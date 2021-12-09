import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class HeaderComponent implements OnInit {

    location: any;
    navClass: any;
    logo: any;
    navContainer: any;

    constructor(
        private router: Router,
        location: Location
    ) {
        this.router.events
            .subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    this.location = this.router.url;
                    if (this.location == '/') {
                        // this.navClass = 'navbar-area';
                        // this.navContainer = 'container-fluid';
                        // this.logo = 'assets/img/white-logo.png';

                        this.navClass = 'navbar-area navbar-style-four';
                        this.navContainer = 'container-fluid';
                        this.logo = 'assets/img/black-logo.png';

                    } else if (this.location == '/airtime-topup') {
                        this.navClass = 'navbar-area navbar-style-three';
                        this.navContainer = 'container';
                        this.logo = 'assets/img/black-logo.png';
                    } else if (this.location == '/buy-data') {
                        this.navClass = 'navbar-area navbar-style-three';
                        this.navContainer = 'container';
                        this.logo = 'assets/img/black-logo.png';
                    } else if (this.location == '/machine-learning') {
                        this.navClass = 'navbar-area navbar-style-three';
                        this.navContainer = 'container';
                        this.logo = 'assets/img/black-logo.png';
                    } else if (this.location == '/machine-learning-2') {
                        this.navClass = 'navbar-area navbar-style-four';
                        this.navContainer = 'container-fluid';
                        this.logo = 'assets/img/black-logo.png';
                    } else {
                        this.navClass = 'navbar-area navbar-style-two';
                        this.navContainer = 'container';
                        this.logo = 'assets/img/white-logo.png';
                    }
                }
            });
    }

    ngOnInit() {
    }

}
