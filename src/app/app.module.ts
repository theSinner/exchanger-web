import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { ROUTES } from './routes';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatMenuModule } from '@angular/material/menu';
import { SnackbarService } from './services/snackbar/snackbar.service';
import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';
import { ExchangeResource } from './resources/exchange';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyChooseComponent } from './components/currency-choose/currency-choose.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyChooseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMatSelectSearchModule,
    MatIconModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatMenuModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSnackBarModule,
    NgProgressModule,
  ],
  providers: [
    ExchangeResource,
    SnackbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
