import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { Series } from '../../models/series';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit, OnChanges {

  @Input() data: Series[];
  @Input() pageSize: number = 5;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  dataSource = new MatTableDataSource<Series>(this.data);
  public seriesSearchField: string = '';
  public seriesDuration: number = 0;
  public genre: string = '';
  public seriesYear: number = 0;
  public displayedColumns: string[] = ['name', 'season', 'network', 'premiere'];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes) {
    if (changes.data) {
      this.dataSource = new MatTableDataSource<Series>(this.data);
      this.dataSource.paginator = this.paginator;
    }
  }

}
