import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from 'src/app/services/Orders.Service';

@Component({
  selector: 'app-pending-item',
  templateUrl: './pending-item.component.html',
  styleUrls: ['./pending-item.component.css']
})
export class PendingItemComponent implements OnInit {

  @Input() pendingElement;
  @Input() index;
  constructor(private ordersService:OrdersService) { }

  ngOnInit() {
  }
}