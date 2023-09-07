import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import {of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit  {

  ngOnInit() {
    of(2,3,4,5).subscribe(item => console.log(item));

    from([20,30,40,50]).subscribe({
      next: (item) =>console.log(item),
      error: (ex) => console.log(ex),
      complete:() => console.log('done')
     } );

     of ('Apple1', 'Apple2','Apple3').subscribe({
      next:(item) => console.log(item)
      error: (ex) => console.log(ex),
      complete:() => console.log('done')
     });
  }  
}
