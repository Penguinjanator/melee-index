import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  navbarItems: NavbarItem[] = [{ title: 'Links' }, { title: 'About' }];
}

interface NavbarItem {
  title: string;
}
