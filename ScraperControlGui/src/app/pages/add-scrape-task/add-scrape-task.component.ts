import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { KeyedWrite } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observer } from 'rxjs';
import { ScrapeResult } from 'src/app/model/scrape-result';
import { SupportedScrapers } from 'src/app/model/supported-scrapers';
import { ScraperService } from 'src/app/services/scraper.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-scrape-task',
  templateUrl: './add-scrape-task.component.html',
  styleUrls: ['./add-scrape-task.component.scss'],
})
export class AddScrapeTaskComponent implements OnInit {
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  private _emptyScrapeResults: ScrapeResult = {
    title: '',
    chapterCount: 0,
    genres: [],
    description: '',
  };

  supportedScrapers: string[] = [];
  pageUrl: string = '';
  resultDisplay: string = '';
  result: ScrapeResult = this._emptyScrapeResults;
  loading = false;
  helperText = '';

  constructor(
    private router: Router,
    private userService: UserService,
    private scraperService: ScraperService
  ) {}

  ngOnInit(): void {
    if (!this.userService.isLoggedIn()) {
      this.router.navigate(['login']);
    }

    this.supportedScrapers = this.getSupportedScraperKeys();
  }

  onScrape() {
    this.loading = true;
    const observer: Observer<ScrapeResult> = {
      next: (result) => {
        this.pageUrl = '';
        this.resultDisplay = JSON.stringify(result, null, 4);
        this.result = result;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.pageUrl = '';
      },
      complete: () => {},
    };

    this.scraperService.scrapeToonilyPage(this.pageUrl).subscribe(observer);
  }

  clearResults() {
    this.result = this._emptyScrapeResults;
  }

  setHelperText(text: string) {
    this.helperText = text;
  }

  onHoverSave() {
    const text =
      'Saves the results to the database.\n If an entry with same title already exists, then the entry will be updated.\n If entry does not exist, then new entry will be created';

    this.setHelperText(text);
  }

  onHoverClear() {
    const text = 'Clears the results. Clear cannot be undone';

    this.setHelperText(text);
  }

  private getSupportedScraperKeys(): any[] {
    return Object.keys(SupportedScrapers);
  }
}
