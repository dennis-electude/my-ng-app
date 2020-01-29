import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AnimationComponent } from './animation/animation.component';

const routes: Routes = [
   { path: 'grid', component: GridComponent },
   { path: 'animation', component: AnimationComponent },
   { path: '', component: ProductListComponent },
   { path: 'products/:slug', component: ProductDetailsComponent }
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ],
   declarations: []
})
export class AppRoutingModule { }
