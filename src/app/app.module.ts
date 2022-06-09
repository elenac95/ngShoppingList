import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DateDisplayComponent } from './components/date-display/date-display.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { BtnPlusComponent } from './components/btn-plus/btn-plus.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DateDisplayComponent,
    ListItemComponent,
    ListComponent,
    FormComponent,
    WrapperComponent,
    BtnPlusComponent,
    FilterPipePipe,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
