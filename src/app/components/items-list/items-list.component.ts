import { Component, OnInit } from '@angular/core';
import { itemInterface } from '../../TASKS'
import { GetTasksService } from 'src/app/services/get-tasks.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  items: itemInterface[] = [];

  constructor(private getItemsService: GetTasksService) {

  }

  ngOnInit(): void {
    this.items = this.getItemsService.getItems()
  }

}
