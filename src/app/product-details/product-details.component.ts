import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Entry } from 'contentful';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Entry<any>;
  breakpoint: number;

  constructor(
    // tslint:disable-next-line: no-shadowed-variable
    private ContentfulService: ContentfulService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(switchMap((params: ParamMap) => this.ContentfulService.getProduct(params.get('slug'))))
      .subscribe(product => this.product = product);
    this.breakpoint = (window.innerWidth <= 768) ? 2 : 4;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 768) ? 2 : 4;
  }
}
