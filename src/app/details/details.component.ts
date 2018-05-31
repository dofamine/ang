import {Component, Input} from '@angular/core';
import {Human} from "../entities/human";

@Component({
  selector: 'app-details',
  template: `
    <div>
   <textarea name="hum" id="" cols="30" rows="10">{{human.name+human.surname}}</textarea> 
</div>   
  `
})
export class DetailsComponent {
  @Input() human:Human;
  constructor() { }

}
