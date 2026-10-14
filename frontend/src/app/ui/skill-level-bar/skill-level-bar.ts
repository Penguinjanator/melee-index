import { Component, computed, input } from '@angular/core';
import { SkillLevel } from '../../models/skill-level';

@Component({
  selector: 'app-skill-level-bar',
  imports: [],
  templateUrl: './skill-level-bar.html',
  styleUrl: './skill-level-bar.css',
})
export class SkillLevelBar {
  public readonly skillLevel = input.required<SkillLevel>();

  protected readonly percentage = computed(() => {
    const skillLevel = this.skillLevel();
    switch (skillLevel) {
      case SkillLevel.Beginner:
        return 25;
      case SkillLevel.Intermediate:
        return 50;
      case SkillLevel.Advanced:
        return 75;
      case SkillLevel.Expert:
        return 100;
    }

    return 0;
  });
}
