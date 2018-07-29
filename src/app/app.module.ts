import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

import { app_routing } from './app.routes';


import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { FooterComponent } from './componentes/shared/footer/footer.component';
import { DocsHeadingComponent } from './componentes/shared/docs-heading/docs-heading.component';
import { WelcomeComponent } from './componentes/welcome/welcome.component';
import { InstallComponent } from './componentes/install/install.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DocsHeadingComponent,
    WelcomeComponent,
    InstallComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HighlightModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
