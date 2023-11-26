import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
   // 定義一個 BehaviorSubject 來存儲當前活動頁籤的資料
   private activeTabSource = new BehaviorSubject<string>('');

   // Observable 資料流
   activeTab = this.activeTabSource.asObservable();

   constructor() {}

   // 改變活動頁籤
   changeActiveTab(tab: string) {
     this.activeTabSource.next(tab);
   }
}
