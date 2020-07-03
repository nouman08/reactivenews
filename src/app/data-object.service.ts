import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataObjectService {

  constructor() { }

  private newsObj;

  setData(item: any) {
      this.newsObj = item;
  }

  getNewsObj(): any[] {
      return this.newsObj;
  }
}
