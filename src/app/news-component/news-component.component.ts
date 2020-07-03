import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NewsApiService } from '../news-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataObjectService } from '../data-object.service';

@Component({
  selector: 'app-news-component',
  templateUrl: './news-component.component.html',
  styleUrls: ['./news-component.component.css']
})
export class NewsComponentComponent implements OnInit {

  mArticles:Array<any>;
  mSources:Array<any>;
  tempObj: any;
  searchValue: string;

  constructor(private newsapi: NewsApiService, public router: Router, private dataObjectService: DataObjectService){
    console.log('News Constructor called!!!');
  }

  ngOnInit() {
      this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
      this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);
  }

  searchArticles(source){
      this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }

  sendData(data) {
      this.tempObj = data;
      this.dataObjectService.setData(this.tempObj);
      this.router.navigateByUrl('/details');
  }

  search() {
      this.newsapi.getArticlesByID(this.searchValue).subscribe(data => this.mArticles = data['articles']);
      console.log(this.mArticles);
  }

}
