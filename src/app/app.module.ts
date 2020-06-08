import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NouisliderModule } from 'ng2-nouislider'
import { TreeModule } from 'ng2-tree'

import { TabsComponent } from './common/tabs.component'
import { TabComponent } from './common/tab.component'

import { AppComponent } from './app.component'
import { ViewportComponent } from './components/viewport.component'
import { AnimationBarComponent } from './components/animation-bar.component'
import { ExplorerComponent } from './components/explorer.component'
import { ToolbarComponent } from './components/toolbar.component'
import { StatusbarComponent } from './components/statusbar.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    ViewportComponent,
    AnimationBarComponent,
    ExplorerComponent,
    ToolbarComponent,
    TabsComponent,
    TabComponent,
    StatusbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NouisliderModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
