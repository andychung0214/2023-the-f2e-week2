import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from './../../services/shared.service';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent implements OnDestroy  {
  activeTab = "";
  subscription: Subscription;

  content = "";

  constructor(private sharedService: SharedService) {
    this.subscription = this.sharedService.activeTab.subscribe(tab => {
      this.activeTab = tab;
      this.content = tab;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
