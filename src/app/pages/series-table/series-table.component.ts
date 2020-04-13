import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { Series } from '../../models/series';

@Component({
  selector: 'app-series-table',
  templateUrl: './series-table.component.html',
  styleUrls: ['./series-table.component.css']
})
export class SeriesTableComponent implements OnInit {

  private series: Series[] = [];

  public sortedList: Series[] = [];
  public searchByName: string;
  public selectedGenre: any;
  public genresMock: any[] = [
    {
      id: 0,
      name: 'horror'
    },
    {
      id: 1,
      name: 'comedy'
    },
    {
      id: 2,
      name: 'drama'
    }
  ];

  

  constructor(private seriesService: SeriesService) { }

  public onSearch(searchQuery: string): void {
    this.sortedList = this.series.filter(item => !item.name.toLowerCase().indexOf(searchQuery))
  }

  public onGenreFilter(genre: string): void {
    if (genre) {
      this.sortedList = this.series.filter(item => !item.genre.indexOf(genre));
    }
    else {
      this.sortedList = this.series;
    }
    
  }

  ngOnInit(): void {
    
    this.seriesService.get()
      .subscribe(result => {
        if(result) {
          this.series = result;
          this.sortedList = result;
        }
      })
  }

}
