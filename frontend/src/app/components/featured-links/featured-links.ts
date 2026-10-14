import { Component, signal } from '@angular/core';
import { LinkTable } from '../link-table/link-table';
import { Link } from '../../models/link';
import { FakeLinks } from '../../links';

@Component({
  selector: 'app-featured-links',
  imports: [LinkTable],
  templateUrl: './featured-links.html',
  styleUrl: './featured-links.css',
})
export class FeaturedLinks {
  links = signal<Link[]>([]);

  constructor() {
    this.links.set(FakeLinks);
  }
}
