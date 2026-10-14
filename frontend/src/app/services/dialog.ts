import { inject, Service } from '@angular/core';
import { ComponentType } from '@angular/cdk/overlay';
import { Dialog as CdkDialog, DialogRef } from '@angular/cdk/dialog';

let nextDialogId = 0;

@Service()
export class DialogService {
  private readonly cdkDialog = inject(CdkDialog);

  open<Result = unknown, Data = unknown, Content = unknown>(
    component: ComponentType<Content>,
    data?: Data,
  ): DialogRef<Result, Content> {
    const id = `app-dialog-${nextDialogId++}`;

    return this.cdkDialog.open<Result, Data, Content>(component, {
      id,
      data,
      ariaLabelledBy: `${id}-title`,
    });
  }
}
