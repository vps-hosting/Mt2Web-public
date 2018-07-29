import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styles: []
})
export class InstallComponent implements OnInit {

  code = `<div class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        YOUR CODES GOES HERE
      </div>
    </div>
  </div>
  `

  constructor() { }

  ngOnInit() {
  }

}
