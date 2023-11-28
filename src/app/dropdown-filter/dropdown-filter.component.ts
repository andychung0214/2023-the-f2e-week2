import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from './../../services/shared.service';

@Component({
  selector: 'app-dropdown-filter',
  templateUrl: './dropdown-filter.component.html',
  styleUrls: ['./dropdown-filter.component.scss']
})
export class DropdownFilterComponent implements OnDestroy  {
  activeTab = "";
  subscription: Subscription;

  content = "";

  cities: SelectCity[] = [];
  selectedOption: any;
  selectedCity: string = '';

  countries: SelectCounty[] = [];
  selectedCounty: string = '';

  toweries: SelectTower[] = [];
  selectedTower: string = '';


  constructor(private sharedService: SharedService) {
    this.subscription = this.sharedService.activeTab.subscribe(tab => {
      this.activeTab = tab;
      this.content = tab;
    });



  //   // 利用 sharedService 來取得下拉選單的值
  // this.sharedService.getCity().subscribe(city:any => {
  //   this.options = city;
  // });


  }

  onCityChange(): void {
    this.countries = this.sharedService.getCountyByCityId(this.selectedCity)
    // this.selectedCity = '';
  }

  onCountyChange(): void {
    this.toweries = this.sharedService.getTownshipByCountyId(this.selectedCounty)
    this.selectedCounty = '';
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.cities = this.sharedService.getCity();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}


// user.model.ts
export interface SelectCity {
  text: string;
  value: string;
}

export interface SelectCounty {
  text: string;
  value: string;
}

export interface SelectTower {
  text: string;
  value: string;
}

