import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterIcon } from './character-icon';

describe('CharacterIcon', () => {
  let component: CharacterIcon;
  let fixture: ComponentFixture<CharacterIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterIcon],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
