import { Component, inject, input } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-dialog',
  imports: [],
  templateUrl: './dialog.html',
  styleUrl: './dialog.css',
})
export class Dialog {
  private readonly dialogRef = inject(DialogRef);

  title = input.required<string>();

  protected readonly titleId = `${this.dialogRef.id}-title`;

  protected close(): void {
    this.dialogRef.close();
  }
}
