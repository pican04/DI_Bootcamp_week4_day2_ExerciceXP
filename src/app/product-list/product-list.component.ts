import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [
    {
      name: "CHEMISE ",
      price: 75.90
    },
    {
      name: "T-SHIRT",
      price: 9.29
    },
    {
      name: "POLO",
      price: 50.0
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
