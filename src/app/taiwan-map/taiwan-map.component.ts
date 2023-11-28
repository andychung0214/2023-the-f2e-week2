import { Component, ViewChild, NgZone, OnDestroy, ElementRef, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from './../../services/shared.service';

// 引入 amCharts

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

// import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_taiwanHigh from '@amcharts/amcharts4-geodata/taiwanHigh';

@Component({
  selector: 'app-taiwan-map',
  templateUrl: './taiwan-map.component.html',
  styleUrls: ['./taiwan-map.component.scss']
})
export class TaiwanMapComponent implements AfterViewInit {
  @ViewChild('taiwanMapContainer') mapContainer?: ElementRef;
  @ViewChild('tooltip') tooltip!: ElementRef;

  activeTab = "";
  subscription: Subscription;

  content = "";
  private map!: am4maps.MapChart;

  constructor(private sharedService: SharedService, private zone: NgZone) {
    this.subscription = this.sharedService.activeTab.subscribe(tab => {
      this.activeTab = tab;
      this.content = tab;
    });
  }


  ngAfterViewInit() {
    if (this.mapContainer && this.mapContainer.nativeElement) {

      const mapContainer = this.mapContainer.nativeElement;
      const cities = mapContainer.querySelectorAll('.city');

      cities.forEach((city: SVGElement) => {
        // 根據數據設定填色，例如:
        city.style.fill = this.getColorBasedOnData(city.classList[1]);

        // 設定滑鼠懸浮事件來顯示提示框
        city.addEventListener('mouseover', (event: MouseEvent) => this.showTooltip(event, city.classList[1]));
        city.addEventListener('mouseout', this.hideTooltip);
      });
    } else {
      console.error('無法取得地圖容器');
    }

  }

  private getColorBasedOnData(cityId: string): string {
    // 根據 cityId 從您的數據中獲取相應的顏色
    // 這裡是一個示例實現，您需要根據實際情況修改
    const data: Record<string, string> = {
      'F': '#84CB98',
      'A': '#84CB98',
      'H': '#84CB98',
      'B': '#84CB98',
      'N': '#84CB98',
      'P': '#84CB98',
      'Q': '#84CB98',
      'I': '#84CB98',
      'D': '#84CB98',
      'E': '#84CB98',
      'T': '#84CB98',
      'U': '#8894D8',
      'V': '#8894D8',
      'Z': '#84CB98',
      'W': '#84CB98',
      'X': '#84CB98',
      'C': '#84CB98',
      'K': '#8894D8',
      'J': '#8894D8',
      'O': '#84CB98',
      'G': '#84CB98',
      'M': '#84CB98',
    };
    return data[cityId] || '#FFFFFF'; // 默認顏色
  }

  private showTooltip(event: MouseEvent, cityId: string): void {
    // 顯示提示框
    // 使用 event.clientX 和 event.clientY 來定位
    // 使用 cityId 來顯示城市名稱或其他信息

    const tooltipElement = this.tooltip.nativeElement;
    tooltipElement.style.display = 'block';
    tooltipElement.style.left = `${event.clientX + 10}px`;
    tooltipElement.style.top = `${event.clientY + 10}px`;

    // 假設您有一個方法來根據 cityId 獲取城市名稱
    const cityName = this.getCityNameById(cityId);
    tooltipElement.textContent = cityName;
  }

  // private hideTooltip(): void {
  //   // 隱藏提示框
  // }


  private hideTooltip(): void {
    const tooltipElement = this.tooltip.nativeElement;
    tooltipElement.style.display = 'none';
  }

  // 假設的方法來獲取城市名稱
  private getCityNameById(cityId: string): string {
    // ... 根據 cityId 獲取城市名稱的邏輯 ...
    switch (cityId) {
      case 'F':
        return '新北市';
      case 'A':
        return '臺北市';
      case 'H':
        return '桃園市';
      case 'B':
        return '臺中市';
      case 'N':
        return '彰化縣';
      case 'P':
        return '雲林縣';
      case 'Q':
        return '嘉義縣';
      case 'I':
        return '嘉義市';
      case 'D':
        return '臺南市';
      case 'E':
        return '高雄市';
      case 'T':
        return '屏東縣';
      case 'U':
        return '花蓮縣';
      case 'V':
        return '臺東縣';
      case 'Z':
        return '連江縣';
      case 'W':
        return '金門縣';
      case 'X':
        return '澎湖縣';
      case 'C':
        return '基隆市';
      case 'K':
        return '苗栗縣';
      case 'J':
        return '新竹縣';
      case 'O':
        return '新竹市';
      case 'G':
        return '宜蘭縣';
      case 'M':
        return '南投縣';
    }
    return '城市名稱'; // 示範
  }


  // ngAfterViewInit() {
  //   this.zone.runOutsideAngular(() => {
  //     let map = am4core.create('taiwanMap', am4maps.MapChart);

  //     map.geodata = am4geodata_taiwanHigh;
  //     map.projection = new am4maps.projections.Miller();

  //     // 放大台灣地圖
  //     map.homeZoomLevel = 5; // 設定放大倍數
  //     // map.homeGeoPoint = {
  //     //   latitude: 23.5, // 可以調整為台灣的緯度
  //     //   longitude: 121  // 可以調整為台灣的經度
  //     // };

  //     let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
  //     polygonSeries.useGeodata = true;

  //     // 設定縣市填色
  //     polygonSeries.heatRules.push({
  //       property: 'fill',
  //       target: polygonSeries.mapPolygons.template,
  //       min: am4core.color('#E6E6FA'),
  //       max: am4core.color('#FF69B4'),
  //       // 可以根據需要進行調整
  //     });

  //     // 滑鼠移到縣市上的提示
  //     let polygonTemplate = polygonSeries.mapPolygons.template;
  //     polygonTemplate.tooltipText = '{name}';
  //     polygonTemplate.nonScalingStroke = true;
  //     polygonTemplate.strokeWidth = 0.5;

  //     // 縣市點擊事件
  //     polygonTemplate.events.on('hit', function (ev: any) {
  //       // console.log('Clicked on', ev.target.dataItem.dataContext['name']);
  //       console.log('Clicked on', ev.target.dataItem.dataContext['name']);
  //       // 在此處理點擊事件
  //     });

  //     this.map = map;
  //   });
  // }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

export interface Tab {
  title: string;      // 頁籤的標題
  isActive: boolean;  // 表示頁籤是否為活動狀態
  route?: string;     // 可選，若與 Angular 路由結合，則表示頁籤相對應的路由
}
