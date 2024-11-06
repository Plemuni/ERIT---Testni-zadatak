import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
  imports: [BrowserModule, AppComponent],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
