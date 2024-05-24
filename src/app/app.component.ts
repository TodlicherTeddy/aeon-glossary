import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RulesCardComponent} from "./rules-card/rules-card.component";
import {NgForOf} from "@angular/common";
import {SearchPipe} from "./search.pipe";
import {FormsModule} from "@angular/forms";
import {SearchService} from "./search.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RulesCardComponent, NgForOf, SearchPipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aeon Glossary';
  searchTerm: string = '';
  rules = [
    {
      "id": 1,
      "title": "Ambrosia Limit X/+X:",
      "text": "Your Ambrosia Limit becomes X or is increased by +X. Note: Ambrosia Limit X does not stack, but all +X bonuses are cumulative.",
      "tags": ["keyword"]
    },
    {
      "id": 2,
      "title": "Ascended",
      "text": "This piece of gear ignores Power Level penalties (irrelevant in Cycle I).",
      "tags": ["keyword"]
    },
    {
      "id": 3,
      "title": "Attack Re-roll X",
      "text": "During an Attack Roll, you may re-roll up to X Attack dice with no additional cost. Remember that you can only re-roll each die once, regardless of the re-roll source.",
      "tags": ["keyword"]
    },
    {
      "id": 4,
      "title": "Auto-break X",
      "text": "During the first ability window, place X Break tokens in the Kratos Pool (see Break X keyword).",
      "tags": ["keyword"]
    },]

  searchService: SearchService = inject(SearchService);

  constructor() {
    this.searchService.addSearchObjects(this.rules);
  }
}
