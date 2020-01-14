import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  // tslint:disable-next-line:variable-name
  api_key = '1b44cd3890294056a161ea4c191a8538';

  constructor(private http: HttpClient) { }

  initSources() {
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
  }
  initArticles() {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.api_key);
  }
  getArticleByID(source: string) {
    return this.http.get('https://newsapi.org/v2/everything?q=stocks+AAPL&sortBy=publishedAt&apiKey=' + this.api_key);
  }
}
