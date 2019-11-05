import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Subscription } from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Comtravo';
  open: boolean;
  routeSubscription: Subscription;
  currentURL: String;
  constructor(
    private router: Router,
    private location: Location
  ) {}
  ngOnInit() {
    // to get the current url
    this.router.events.subscribe(event => {
      this.currentURL = this.location.path();
      console.log(this.currentURL)
    });
  }
   /**
   * this function is responsible for showing and hiding the left side bar from the header
   *
   * @memberof AppComponent
   */
  toggleMenu() {
    this.open = !this.open;
  }
    /**
   * Navigate to specific page
   *
   * @param {string} url
   * @memberof AppComponent
   */
  goToUrl(url: string) {
    if (url == "list") {
      this.router.navigateByUrl("/list");
    } else {
      this.router.navigateByUrl("invite");
    }
  }
}
