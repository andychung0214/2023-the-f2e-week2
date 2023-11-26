import { SharedService } from './../../services/shared.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private sharedService: SharedService){}

  tabs: Tab[] = [
    { title: '第 15 任總統副總統選舉', isActive: true },
    { title: '第 14 任總統副總統選舉', isActive: false },
    { title: '第 13 任總統副總統選舉', isActive: false },
    { title: '第 11 任總統副總統選舉', isActive: false },
    { title: '第 10 任總統副總統選舉', isActive: false },
    { title: '第 09 任總統副總統選舉', isActive: false },
  ];

  setActiveTab(tab: Tab): void {
    this.tabs.forEach(t => t.isActive = false);
    tab.isActive = true;
    this.sharedService.changeActiveTab(tab.title);
  }


}

export interface Tab {
  title: string;      // 頁籤的標題
  isActive: boolean;  // 表示頁籤是否為活動狀態
  route?: string;     // 可選，若與 Angular 路由結合，則表示頁籤相對應的路由
}

