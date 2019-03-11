import { Component, OnInit, ViewChild } from '@angular/core'; 
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import {JsonbackendService} from '../jsonbackend.service'

@Component({
  selector: 'app-jmattabledata',
  templateUrl: './jmattabledata.component.html',
  styleUrls: ['./jmattabledata.component.css']
})
export class JmattabledataComponent implements OnInit {

  displayedColumns: string[] = ['SSAD_ID', 'STD_NM', 'ANNO', 'PERCENT'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private miservicio: JsonbackendService) {
   
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.miservicio.getData());
    
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

