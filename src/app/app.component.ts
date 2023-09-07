import { Component, OnInit } from '@angular/core';
import {of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit  {

  ngOnInit() {
    of(2,3,4,5).subscribe(item => console.log(item));
  }
}
