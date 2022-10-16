import { Component, OnInit, } from '@angular/core';
import { Column, FlexGrid } from '@grapecity/wijmo.grid';
import { Selector } from "@grapecity/wijmo.grid.selector";
import { CollectionView } from '@grapecity/wijmo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   data:any[]=[]
  constructor(){
    var countries = "US,Germany,UK,Japan,Italy,Greece".split(","),
      products = "Phones,Computers,Cameras,Stereos".split(",")
    for (var i = 0; i < 50; i++) {
      this.data.push({
        id: i,
        country: countries[i % countries.length],
        product: products[i % products.length],
      });
    }
  }


  ngOnInit() { }


  initGrid(grid: FlexGrid) {
    grid.bigCheckboxes = false
    let selector = new Selector(grid, {
      itemChecked: () => {
        console.log("item checked");
        let selctedRow = grid.rows.filter(r => r.isSelected).map(x => x)
        console.log('selctedRow====>', selctedRow)
      },
    });



    grid?.collectionView.collectionChanged.addHandler( (host, event) => {
      console.log('event',event);
      console.log('host',host);
      console.log( grid?.collectionView.sourceCollection)
  });

 

   
  }


  
}

