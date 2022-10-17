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
  data: any[] = []
  gridDtataList: any[] = []
  constructor() {
    this.data = this._getData(100);
  }


  ngOnInit() { }


  initGrid(flexgrid: FlexGrid) {
    let selector = new Selector(flexgrid, {
      itemChecked: () => {
        let selectedItems = flexgrid.rows.filter(r => r.isSelected);
        console.log('selectedItems===>', selectedItems);

      }
    });

    flexgrid.scrollPositionChanged.addHandler((s, e) => {

      // if we're close to the bottom, add 20 items
      if (s.viewRange.bottomRow >= s.rows.length - 1) {
        let view = s.collectionView;
        let index = view.currentPosition; // keep position in case the view is sorted
        this._addData(this.data, 20);
        view.refresh();
        view.currentPosition = index;
      }
    });
  }

  private _getData(cnt: number, start?: number) {
    let data = [];
    let countries = 'USA,Germany,UK,Japan,Italy,Greece'.split(',');
    if (start == null) {
      start = 0;
    }
    for (let i = 0; i < cnt; i++) {
      data.push({
        id: i + start,
        country: countries[i % countries.length],
        date: new Date(2014, i % 12, i % 28),
        amount: Math.random() * 10000,
        active: i % 4 === 0
      });
    }
    return data;
  }


  // add random data to an array
  private _addData(data: any, cnt: number) {
    let a: any[] = [
      {
        id: 260,
        country: "USA",
        date: "2013-12-30T18:30:00.000Z",
        amount: 1259.9692359261817,
        active: true
      },
      {
        id: 261,
        country: "Germany",
        date: "2014-01-31T18:30:00.000Z",
        amount: 6533.881046076298,
        active: false
      },
      {
        id: 262,
        country: "UK",
        date: "2014-03-01T18:30:00.000Z",
        amount: 1292.5286874053743,
        active: false
      },
      {
        id: 263,
        country: "Japan",
        date: "2014-04-02T18:30:00.000Z",
        amount: 3195.878078732093,
        active: false
      },
      {
        id: 264,
        country: "Italy",
        date: "2014-05-03T18:30:00.000Z",
        amount: 9596.509362702476,
        active: true
      },

    ]
    this.data = [...data, ...a]
  }
}



