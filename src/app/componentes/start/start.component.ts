import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styles: []
})
export class StartComponent implements OnInit {
  code = `
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        YOUR CODES GOES HERE
      </div>
    </div>
  </div>
  `
  code1 = `
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        YOUR CODES GOES HERE
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        YOUR CODES GOES HERE
      </div>
    </div>
  </div>
  `
  code2 = `
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
        YOUR CODES GOES HERE
      </div>
      <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
        YOUR CODES GOES HERE
      </div>
      <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
        YOUR CODES GOES HERE
      </div>
    </div>
  </div>
  `
  constructor() { }

  ngOnInit() {
  }

}
