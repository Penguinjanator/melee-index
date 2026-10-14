import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogRef } from '@angular/cdk/dialog';

import { SubmitLinkDialog } from './submit-link-dialog';

describe('SubmitLinkDialog', () => {
  let component: SubmitLinkDialog;
  let fixture: ComponentFixture<SubmitLinkDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitLinkDialog],
      providers: [{ provide: DialogRef, useValue: { id: 'test-dialog', close: vi.fn() } }],
    }).compileComponents();

    fixture = TestBed.createComponent(SubmitLinkDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
