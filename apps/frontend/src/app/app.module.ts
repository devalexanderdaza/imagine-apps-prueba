import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { InternalComponent } from './layouts/internal/internal.component';
import { AuthMainIdentityComponent } from './layouts/components/auth-main-identity/auth-main-identity.component';
import { AuthMainFooterComponent } from './layouts/components/auth-main-footer/auth-main-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    InternalComponent,
    AuthMainIdentityComponent,
    AuthMainFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
