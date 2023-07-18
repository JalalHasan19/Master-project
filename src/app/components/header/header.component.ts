import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Todo List'

  handleBtnClick() {
    console.log("Farah is a frotn end dev under construction");
  }
}
