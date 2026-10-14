import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogRef } from '@angular/cdk/dialog';

import { Dialog } from './dialog';

describe('Dialog', () => {
  let fixture: ComponentFixture<Dialog>;
  const dialogRef = { id: 'test-dialog', close: vi.fn() };

  beforeEach(async () => {
    dialogRef.close.mockClear();

    await TestBed.configureTestingModule({
      imports: [Dialog],
      providers: [{ provide: DialogRef, useValue: dialogRef }],
    }).compileComponents();

    fixture = TestBed.createComponent(Dialog);
    fixture.componentRef.setInput('title', 'Test title');
    await fixture.whenStable();
  });

  it('should render the title with an id derived from the dialog id', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelector('h2');

    expect(heading.textContent).toContain('Test title');
    expect(heading.id).toBe('test-dialog-title');
  });

  it('should close the dialog when the close button is clicked', () => {
    const closeButton: HTMLButtonElement = fixture.nativeElement.querySelector(
      'button[aria-label="Close dialog"]',
    );

    closeButton.click();

    expect(dialogRef.close).toHaveBeenCalledOnce();
  });
});
