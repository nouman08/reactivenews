import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = 'e4e5f2aebc92472d81c5aa62bd5818a8';

  constructor(private http:HttpClient) { }

  initSources(){
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
  }

  initArticles(){
    return this.http.get('https://newsapi.org/v2/everything?q=technology&sources=techcrunch&language=en&apiKey='+this.api_key);
  }

  getArticlesByID(source: String){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
  }

}
