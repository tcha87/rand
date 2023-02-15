import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiDialogModule, TuiNotificationsModule, TuiRootModule } from '@taiga-ui/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { CoreModule } from './core/core.module';
import { FooterModule } from './shared/ui/footer/footer.module';
import { HeaderModule } from './shared/ui/header/header.module';
import { HomeComponent } from './dashbaord/home/home.component';
import { TripsComponent } from './dashbaord/trips/trips.component';
import { ReferralsComponent } from './dashbaord/referrals/referrals.component';
import { QoutationsComponent } from './dashbaord/qoutations/qoutations.component';
import { GetQuoteComponent } from './shared/get-quote/get-quote.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GetAddressComponent } from './shared/get-address/get-address.component';
import { GetDetailsComponent } from './shared/get-details/get-details.component';
import { GetPackingComponent } from './shared/get-packing/get-packing.component';
import { ServicesComponent } from './shared/services/services.component';
import { WorkComponent } from './shared/work/work.component';
import { ShopComponent } from './shared/shop/shop.component';
import { ContactComponent } from './shared/contact/contact.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, TripsComponent, ReferralsComponent, QoutationsComponent, GetQuoteComponent, GetAddressComponent, GetDetailsComponent, GetPackingComponent, ServicesComponent, WorkComponent, ShopComponent, ContactComponent],
  imports: [
    // Angular
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAdoeWTKIwwCnR_YJ3jB81_kViXI_UrELk',
      libraries: ['places'],
    }),
    BrowserModule,
    BrowserAnimationsModule,

    // Taiga UI
    TuiRootModule,
    TuiDialogModule,
    TuiNotificationsModule,

    // Core
    CoreModule,

    // Application
    AppRoutingModule,
    HeaderModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
