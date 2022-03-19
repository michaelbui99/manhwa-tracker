import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ScrapePageRequestDTO } from '../model/scrape-page-request-dto';
import { ScrapeResult } from '../model/scrape-result';
import { SCRAPER_SERVICE_ENDPOINT } from '../__config__/_config';

const httpsOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ScraperService {
  private _baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this._baseUrl = `${SCRAPER_SERVICE_ENDPOINT}/api/v1/manhwascrapers`;
  }

  scrapeToonilyPage(pageUrl: string): Observable<ScrapeResult> {
    const requestDTO: ScrapePageRequestDTO = {
      url: pageUrl,
    };

    return this.httpClient.post<ScrapeResult>(
      `${this._baseUrl}/toonily/tasks/single`,
      requestDTO,
      httpsOptions
    );
  }
}
