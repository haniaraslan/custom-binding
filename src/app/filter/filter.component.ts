import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  /*
  adding @input() makes it able to 
  recieve content from parent component
  */
  @Input("total") all: number = 0; 
  @Input("free") free: number = 0;
  @Input("premium") premium: number = 0;

}
