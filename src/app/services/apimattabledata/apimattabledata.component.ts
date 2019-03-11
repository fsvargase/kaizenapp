import { Component, OnInit, ViewChild } from '@angular/core'; 
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import {BackendService} from '../backend.service';

@Component({
  selector: 'app-apimattabledata',
  templateUrl: './apimattabledata.component.html',
  styleUrls: ['./apimattabledata.component.css']
})
export class ApimattabledataComponent implements OnInit {

  displayedColumns: string[] = ['SSAD_ID', 'STD_NM', 'ANNO', 'PERCENT'];
  //dataSource: MatTableDataSource<any>;
  dataSource= new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private miservicio: BackendService) {
   
  }

  ngOnInit() {
   // this.dataSource = new MatTableDataSource( this.miservicio.getData().subscribe(res => this.dataSource.data = res["0"]["data"]));
        return this.miservicio.getData().subscribe(res => this.dataSource.data = res["0"]["data"]);
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

