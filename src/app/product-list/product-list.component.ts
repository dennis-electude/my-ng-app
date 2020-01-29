import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products: Entry<any>[] = [];
  breakpoint: number;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getProducts()
      .then(products => this.products = products);
    this.breakpoint = (window.innerWidth <= 768) ? 2 : 4;
  }

  log() {
    console.log(this.products[0].fields.productMedia.fields.file.url);
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 768) ? 2 : 4;
  }

}
