import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 

  constructor(private app:AppService) {}
  collection: any = [];
  ngOnInit(): void {
    // this.app.getList().subscribe((result) => {
    //   console.warn(result);
    //   this.collection = result;
    // });
  }

}
