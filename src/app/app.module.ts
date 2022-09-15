import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseService } from './shared/services/auths/base.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule} from '@angular/material/snack-bar'
import { MatSelectModule } from '@angular/material/select';
import { DialogComponent } from './shared/components/dialog/dialog.component'
import { MatDialogModule} from '@angular/material/dialog';
import { SafePipe } from './shared/components/safe.pipe';
import { RaceResultDialogComponent } from './shared/components/race-result-dialog/race-result-dialog.component'


@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    DialogComponent,
    SafePipe,
    RaceResultDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
