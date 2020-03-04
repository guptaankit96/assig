import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MserService } from './mser.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { ListingComponent } from './listing/listing.component';
import { EmpdataComponent } from './empdata/empdata.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    EmpdataComponent,
    EditComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule 
 
  ],
  providers: [MserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
