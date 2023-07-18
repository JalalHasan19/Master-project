import { Injectable } from '@angular/core';
import { Items, itemInterface } from '../TASKS';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetTasksService {
  getItems() {
   return Items
  }
}
