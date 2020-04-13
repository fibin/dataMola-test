import { Injectable } from '@angular/core';
import { Series } from '../models/series';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor() { }

  private seriesMock: Series[] = [
    {
      name: 'The Terror',
      season: 3,
      network: ['AMC'],
      premiere: new Date(2019, 10, 20),
      genre: ['horror', 'drama']
    },
    {
      name: 'Better Call Saul',
      season: 4,
      network: ['AMC', 'Netflix'],
      premiere: new Date(2019, 11, 5),
      genre: ['crime', 'tragedy']
    },
    {
      name: 'Preacher',
      season: 5,
      network: ['AMC'],
      premiere: new Date(2019, 1, 6),
      genre: ['drama', 'dark comedy']
    },
    {
      name: 'The Terror',
      season: 2,
      network: ['AMC'],
      premiere: new Date(2018, 10, 1),
      genre: ['horror', 'drama']
    },
    {
      name: 'Better Call Saul',
      season: 3,
      network: ['AMC', 'Netflix'],
      premiere: new Date(2018, 4, 2),
      genre: ['crime', 'tragedy']
    }
  ]

  public get(): Observable<Series[]> {
    return of(this.seriesMock);
  }
}
