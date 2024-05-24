import {Component, Input} from '@angular/core';
import {Rule} from "./Rule";

@Component({
  selector: 'app-rules-card',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <h1>{{ rule?.title }}</h1>
      <div>{{ rule?.text }}</div>
    </div>
  `,
  styleUrl: './rules-card.component.css'
})
export class RulesCardComponent {
  @Input() rule: Rule | undefined;
}
