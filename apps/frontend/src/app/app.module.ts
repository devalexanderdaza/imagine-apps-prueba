import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthComponent } from './layouts/auth/auth.component';
import { InternalComponent } from './layouts/internal/internal.component';
import { AuthMainFooterComponent } from './layouts/components/auth-main-footer/auth-main-footer.component';
import { AuthMainIdentityComponent } from './layouts/components/auth-main-identity/auth-main-identity.component';
import { TopBarComponent } from './layouts/components/top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    InternalComponent,
    AuthMainIdentityComponent,
    AuthMainFooterComponent,
    TopBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
