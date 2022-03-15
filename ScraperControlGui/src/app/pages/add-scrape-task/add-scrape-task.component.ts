import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrapeResult } from 'src/app/model/scrape-result';
import { ScraperService } from 'src/app/services/scraper.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-scrape-task',
  templateUrl: './add-scrape-task.component.html',
  styleUrls: ['./add-scrape-task.component.scss'],
})
export class AddScrapeTaskComponent implements OnInit {
  pageUrl: string = '';
  resultDisplay: string = '';
  result: ScrapeResult = {
    title: '',
    chapterCount: 0,
    genres: [],
    description: '',
  };
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private scraperService: ScraperService
  ) {}

  ngOnInit(): void {
    if (!this.userService.isLoggedIn()) {
      this.router.navigate(['login']);
    }
  }

  onScrape() {
    this.loading = true;
    this.scraperService.scrapeToonilyPage(this.pageUrl).subscribe(
      (result) => {
        this.pageUrl = '';
        this.resultDisplay = JSON.stringify(result, null, 4);
        this.result = result;
        this.loading = false;
      },
      (err) => (this.loading = false)
    );
  }
}
