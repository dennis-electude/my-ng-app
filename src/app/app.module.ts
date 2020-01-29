import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { GridComponent } from './grid/grid.component';

import { ContentfulService } from './contentful.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AnimationComponent } from './animation/animation.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
   declarations: [
      AppComponent,
      ToolbarComponent,
      GridComponent,
      ProductListComponent,
      ProductDetailsComponent,
      AnimationComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MaterialModule,
      ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
   ],
   providers: [
      ContentfulService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
