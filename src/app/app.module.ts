import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomsComponent } from './rooms/rooms.component';
import { HeaderComponent } from './header/header.component';
import {Routes, RouterModule} from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { HotelsComponent } from './hotels/hotels.component';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { FooterComponent } from './footer/footer.component';
import { AdLineComponent } from './ad-line/ad-line.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


const appRoutes: Routes =[
  { path: '', component: AppComponent},
  { path: 'vvo', component: AppComponent},
  { path: 'msc', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    HeaderComponent,
    HotelsComponent,
    FooterComponent,
    AdLineComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    NgbModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatSelectModule,
    RouterModule.forRoot(
      appRoutes,
      {
        onSameUrlNavigation: 'reload',
        enableTracing: false } // <-- debugging purposes only
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
