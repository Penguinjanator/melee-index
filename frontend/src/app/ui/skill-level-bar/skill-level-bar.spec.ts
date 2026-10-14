import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillLevelBar } from './skill-level-bar';

describe('SkillLevel', () => {
  let component: SkillLevelBar;
  let fixture: ComponentFixture<SkillLevelBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillLevelBar],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillLevelBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
