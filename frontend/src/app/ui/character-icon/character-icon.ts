import { Component, input } from '@angular/core';

@Component({
  selector: 'app-character-icon',
  imports: [],
  templateUrl: './character-icon.html',
  styleUrl: './character-icon.css',
})
export class CharacterIcon {
  public readonly characterName = input.required<string>();
}
