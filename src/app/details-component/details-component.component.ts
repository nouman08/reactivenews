import { Component, OnInit, Input } from '@angular/core';
import { DataObjectService } from '../data-object.service';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.css']
})
export class DetailsComponentComponent implements OnInit {

  mArticle: any;
  mArticles:Array<any>;
  mSources:Array<any>;

  constructor(private newsapi: NewsApiService, private dataObjectService: DataObjectService) { }

  ngOnInit(): void {
      this.mArticle = this.dataObjectService.getNewsObj();
      console.log(this.dataObjectService.getNewsObj());

      this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
      this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);
  }
}
