import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {RulesCardComponent} from "./rules-card/rules-card.component";
import {NgForOf} from "@angular/common";
import {SearchPipe} from "./search.pipe";
import {FormsModule} from "@angular/forms";
import {SearchService} from "./search.service";
import * as rulesJSON from '../assets/rules.json';
import {Rule} from "./rules-card/Rule";

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
  rules = rulesJSON as Rule;

  searchService: SearchService = inject(SearchService);

  constructor() {
    this.searchService.addSearchObjects(this.rules);
  }

}
