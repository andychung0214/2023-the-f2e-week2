import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DropdownFilterComponent } from './dropdown-filter/dropdown-filter.component';
import { OverviewComponent } from './overview/overview.component';
import { TaiwanMapComponent } from './taiwan-map/taiwan-map.component';
import { TipsComponent } from './tips/tips.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    LayoutComponent,
    NavbarComponent,
    DropdownFilterComponent,
    OverviewComponent,
    TaiwanMapComponent,
    TipsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
