import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  items:any=[];
  constructor(
    private orderService:OrderService
  ) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this.orderService.getOrders().subscribe( 
      response => {
        this.items = response;
      },error =>{
        console.log("failed to fetch");
      }
    )
  }
}
