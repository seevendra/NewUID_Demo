import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


public news = [
  {
    "item_id": "1",
    "name": "Fear & Greed Trader",
    "description": "S&P 500 Weekly Update: The Most Hated Bull Market Continues With New Highs",
    "icon": "https://material.angular.io/assets/img/examples/shiba1.jpg",
    "created" : "07/13/2016 11:05 AM"
  },{
    "item_id": "2",
    "name": "Mike van Dulken",
    "description": "Scoop identifies news that WorldPay may merge with JPMorgan Merge or Vantiv",
    "icon": "https://material.angular.io/assets/img/examples/shiba2.jpg",
    "created" : "07/01/2016 03:41 PM"
  },{
    "item_id": "3",
    "name": "Bowdeya Tweh",
    "description": "Scoop identifies the JPMorgan deal is off and that they will instead merge with Vantiv.",
    "icon": "https://material.angular.io/assets/img/examples/shiba1.jpg",
    "created" : "06/15/2016 09:02 AM"
  },{
    "item_id": "1",
    "name": "Fear & Greed Trader",
    "description": "S&P 500 Weekly Update: The Most Hated Bull Market Continues With New Highs",
    "icon": "https://material.angular.io/assets/img/examples/shiba2.jpg",
    "created" : "07/13/2016 11:05 AM"
  },{
    "item_id": "2",
    "name": "Mike van Dulken",
    "description": "Scoop identifies news that WorldPay may merge with JPMorgan Merge or Vantiv",
    "icon": "https://material.angular.io/assets/img/examples/shiba1.jpg",
    "created" : "07/01/2016 03:41 PM"
  },{
    "item_id": "3",
    "name": "Bowdeya Tweh",
    "description": "Scoop identifies the JPMorgan deal is off and that they will instead merge with Vantiv.",
    "icon": "https://material.angular.io/assets/img/examples/shiba2.jpg",
    "created" : "06/15/2016 09:02 AM"
  },{
    "item_id": "1",
    "name": "Fear & Greed Trader",
    "description": "S&P 500 Weekly Update: The Most Hated Bull Market Continues With New Highs",
    "icon": "https://material.angular.io/assets/img/examples/shiba1.jpg",
    "created" : "07/13/2016 11:05 AM"
  },{
    "item_id": "2",
    "name": "Mike van Dulken",
    "description": "Scoop identifies news that WorldPay may merge with JPMorgan Merge or Vantiv",
    "icon": "https://material.angular.io/assets/img/examples/shiba2.jpg",
    "created" : "07/01/2016 03:41 PM"
  }
]



  constructor(public dialog: MatDialog) { 
  }


	openDialog(){
	    let dialogRef = this.dialog.open(DialogComponent, {
	    hasBackdrop: false,
	    width: "500px",
	    height:"550px",
	    });
	    }

  ngOnInit() {
  }

}
