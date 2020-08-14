import { Component, OnInit } from '@angular/core';
import { OrdersService } from './services/Orders.Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fashionStoreWeb';
  constructor() { }

  ngOnInit() { }
}