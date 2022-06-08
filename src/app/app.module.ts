import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example/example.component';
import { CollapsibleComponent } from './components/collapsible/collapsible.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    CollapsibleComponent,
    DropdownComponent,
    ProgressbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
