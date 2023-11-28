import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from './../../services/shared.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnDestroy {
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
