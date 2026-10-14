import { Component, inject } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { Dialog } from '../../ui/dialog/dialog';

@Component({
  selector: 'app-submit-link-dialog',
  imports: [Dialog],
  templateUrl: './submit-link-dialog.html',
  styleUrl: './submit-link-dialog.css',
})
export class SubmitLinkDialog {
  protected readonly dialogRef = inject(DialogRef);
}
