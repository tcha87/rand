import { Component } from '@angular/core';

import { AuthFacade } from '../../../auth/store/auth.facade';

@Component({
  selector: 'aa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  readonly menuItems = [
    { link: '/home', label: 'Home', icon: null },
    { link: '/about', label: 'About', icon: null },
    { link: '/get-quote', label: 'Get a Quote', icon: null },
    { link: '/services', label: 'Our Services', icon: null },
    { link: '/work', label: 'Our Work', icon: null },
    { link: '/shop', label: 'Shop', icon: null },
    { link: '/secured-feat', label: 'Refer a Friend', icon: 'tuiIconHeartFilledLarge' },
    { link: '/contact', label: 'Contact Us', icon: null },
  ];
  authUser$ = this.authFacade.user$;

  constructor(private authFacade: AuthFacade) {}

  logout() {
    this.authFacade.logout();
  }
}
