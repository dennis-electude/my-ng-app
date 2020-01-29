import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  isHomeView() {
    // return true if the current page is home
    return this.router.url.match('^/$');
  }

  isDetailView() {
    // return true if the current page is login
    return this.router.url.match('^/products/');
  }

  goBack(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  ngOnInit() {
  }

}
