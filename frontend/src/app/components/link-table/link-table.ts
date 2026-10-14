import { Component, input } from '@angular/core';
import { Link } from '../../models/link';
import { Badge } from '../../ui/badge/badge';
import { CharacterIcon } from '../../ui/character-icon/character-icon';
import { SkillLevelBar } from '../../ui/skill-level-bar/skill-level-bar';

@Component({
  selector: 'app-link-table',
  imports: [Badge, CharacterIcon, SkillLevelBar],
  templateUrl: './link-table.html',
  styleUrl: './link-table.css',
})
export class LinkTable {
  links = input.required<Link[]>();
}
