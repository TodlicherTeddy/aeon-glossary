import {Component, Input} from '@angular/core';
import {Rule} from "./Rule";

@Component({
  selector: 'app-rules-card',
  standalone: true,
  imports: [],
  template: `
    <h4>{{ rule?.title }}</h4>
    <div>{{ rule?.text }}</div>
  `,
  styleUrl: './rules-card.component.css'
})
export class RulesCardComponent {
  @Input() rule: Rule | undefined;
}
