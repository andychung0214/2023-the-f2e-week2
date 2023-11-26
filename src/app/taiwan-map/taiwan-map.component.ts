import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from './../../services/shared.service';

@Component({
  selector: 'app-taiwan-map',
  templateUrl: './taiwan-map.component.html',
  styleUrls: ['./taiwan-map.component.scss']
})
export class TaiwanMapComponent implements OnDestroy  {
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
