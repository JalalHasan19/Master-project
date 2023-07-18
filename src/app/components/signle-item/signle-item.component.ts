import { Component, Input } from '@angular/core';
import { itemInterface } from 'src/app/TASKS';

@Component({
  selector: 'app-signle-item',
  templateUrl: './signle-item.component.html',
  styleUrls: ['./signle-item.component.css']
})
export class SignleItemComponent {
  @Input() item!: itemInterface;
}
