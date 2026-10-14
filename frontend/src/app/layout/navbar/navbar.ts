import { Component, inject } from '@angular/core';
import { DialogService } from '../../services/dialog';
import { SubmitLinkDialog } from '../../components/submit-link-dialog/submit-link-dialog';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private readonly dialogService = inject(DialogService);

  navbarItems: NavbarItem[] = [{ title: 'Resource' }, { title: 'About' }];

  protected openSubmitLinkDialog(): void {
    this.dialogService.open(SubmitLinkDialog);
  }
}

interface NavbarItem {
  title: string;
}
