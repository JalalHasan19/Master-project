import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { SignleItemComponent } from './components/signle-item/signle-item.component';
import { GetTasksService } from './services/get-tasks.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    ItemsListComponent,
    SignleItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GetTasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
