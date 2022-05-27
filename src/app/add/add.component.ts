import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import * as rxjs from 'rxjs';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hariharan',  symbol: 'H'},
//   {position: 2, name: 'Helal', symbol: 'He'},
//   {position: 3, name: 'Lavanya', symbol: 'Li'},
//   {position: 4, name: 'Balu',  symbol: 'Be'},
//   {position: 5, name: 'Babu', symbol: 'B'},
//   {position: 6, name: 'Chandru', symbol: 'C'},
//   {position: 7, name: 'Nithis',  symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit 
{
  ngOnInit(): void {}
//     throw new Error('Method not implemented.');
//   }
//   displayedColumns: string[] = ['position', 'name',  'symbol'];
//   dataToDisplay = [...ELEMENT_DATA];

//   dataSource = new ExampleDataSource(this.dataToDisplay);

//   addData() {
//     const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
//     this.dataToDisplay = [...this.dataToDisplay, ELEMENT_DATA[randomElementIndex]];
//     this.dataSource.setData(this.dataToDisplay);
//   }

//   removeData(): void {
//     this.dataToDisplay = this.dataToDisplay.slice(0, -1);
//     this.dataSource.setData(this.dataToDisplay);
//   }
// }

// class ExampleDataSource extends DataSource<PeriodicElement> {
//   private _dataStream = new rxjs.ReplaySubject<PeriodicElement[]>();

//   constructor(initialData: PeriodicElement[]) {
//     super();
//     this.setData(initialData);
//   }

//   connect(): rxjs.Observable<PeriodicElement[]> {
//     return this._dataStream;
//   }

//   disconnect() {}

//   setData(data: PeriodicElement[]) {
//     this._dataStream.next(data);
//   }
}

