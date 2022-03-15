import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import {ObserversModule} from '@angular/cdk/observers';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxAnimatedGradientModule } from 'ngx-animated-gradient';
import { NgParticlesModule } from "ng-particles";
import { VimeModule } from '@vime/angular';
import { NgxPayPalModule } from 'ngx-paypal';
import { NgChartsModule } from 'ng2-charts';
import { LazyLoadImageModule } from 'ng-lazyload-image';

/* Lottie Effects */
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

// Taiga-UI
import {TuiButtonModule, TuiRootModule, TuiDialogModule, TuiNotificationsModule, TUI_SANITIZER, TuiSvgModule } from "@taiga-ui/core";
import {TuiBadgeModule, TuiInputPasswordModule, TuiAccordionModule, TuiDataListWrapperModule, TuiTabsModule, TuiMarkerIconModule} from '@taiga-ui/kit';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';

// Angular Material
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {CdkTableModule} from '@angular/cdk/table';
import {LayoutModule} from '@angular/cdk/layout';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRippleModule} from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import {MatBadgeModule} from '@angular/material/badge';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCarouselModule} from 'ng-mat-carousel';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

import { JwtModule } from "@auth0/angular-jwt";
import { ProfilComponent } from './user/profil/profil.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CommonInterceptor } from "./common.interceptor";
import { NewsComponent } from './admin/news/news.component';
import { PatchnotesComponent } from './admin/patchnotes/patchnotes.component';
import { HomepageComponent } from './admin/homepage/homepage.component';
import { ShopDashboardComponent } from './pages/shop/shop-dashboard/shop-dashboard.component';
import { ShopHomeComponent } from './pages/shop/shop-home/shop-home.component';
import { ShopCartComponent } from './pages/shop/shop-cart/shop-cart.component';
import { PaymentSuccessfullyComponent } from './payment/payment-successfully/payment-successfully.component';
import { ShopCheckoutComponent } from './pages/shop/shop-checkout/shop-checkout.component';
import { PaymentErrorComponent } from './payment/payment-error/payment-error.component';
import { PaymentLoadingComponent } from './payment/payment-loading/payment-loading.component';
import { StartdownloadComponent } from './dialogs/startdownload/startdownload.component';
import { EdituserComponent } from './dialogs/edituser/edituser.component';
import { BanuserComponent } from './dialogs/banuser/banuser.component';
import { RemoveuserComponent } from './dialogs/removeuser/removeuser.component';
import { ShopconfigComponent } from './admin/shopconfig/shopconfig.component';
import { ProducteditnameComponent } from './dialogs/producteditname/producteditname.component';
import { ProducteditpriceComponent } from './dialogs/producteditprice/producteditprice.component';
import { ProducteditcategoryComponent } from './dialogs/producteditcategory/producteditcategory.component';
import { ProducteditimageComponent } from './dialogs/producteditimage/producteditimage.component';
import { ProducteditdescriptionComponent } from './dialogs/producteditdescription/producteditdescription.component';
import { EditnewComponent } from './dialogs/editnew/editnew.component';
import { EditpatchnoteComponent } from './dialogs/editpatchnote/editpatchnote.component';
import { Http404Component } from './pages/http404/http404.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { TestComponent } from './test/test.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}

/**
 * NgModule that includes all Material modules that are required to serve 
 * the Plunker.
 */

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProfilComponent,
    DashboardComponent,
    NewsComponent,
    PatchnotesComponent,
    HomepageComponent,
    HomeComponent,
    ShopDashboardComponent,
    ShopHomeComponent,
    ShopCartComponent,
    PaymentSuccessfullyComponent,
    ShopCheckoutComponent,
    PaymentErrorComponent,
    PaymentLoadingComponent,
    StartdownloadComponent,
    EdituserComponent,
    BanuserComponent,
    RemoveuserComponent,
    ShopconfigComponent,
    ProducteditnameComponent,
    ProducteditpriceComponent,
    ProducteditcategoryComponent,
    ProducteditimageComponent,
    ProducteditdescriptionComponent,
    EditnewComponent,
    EditpatchnoteComponent,
    Http404Component,
    SafeHtmlPipe,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    //Taiga-UI
    TuiRootModule,
    TuiDialogModule,
    TuiNotificationsModule,
    TuiBadgeModule,
    TuiButtonModule,
    TuiInputPasswordModule,
    TuiAccordionModule,
    TuiSvgModule,
    TuiMoneyModule,
    TuiDataListWrapperModule,
    TuiTabsModule,
    TuiMarkerIconModule,
    TuiSvgModule,
    //Angular material
    MatExpansionModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatTabsModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatPaginatorModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatRippleModule,
    MatTooltipModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatStepperModule,
    MatBadgeModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    OverlayModule,
    CdkTableModule,
    NgxSpinnerModule,
    NgxSkeletonLoaderModule,
    NgxAnimatedGradientModule,
    NgParticlesModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:4200', '104.21.27.140', '104.21.27.140'],
        disallowedRoutes:[]
      },
    }),
    LottieModule.forRoot({ player: playerFactory }),
    MatCarouselModule.forRoot(),
    VimeModule,
    NgxPayPalModule,
    NgChartsModule,
    LazyLoadImageModule,
    LayoutModule,
    ObserversModule
  ],
  providers: [
    {provide: TUI_SANITIZER, useClass: NgDompurifySanitizer},
    {provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true},
    Title
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
