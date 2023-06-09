import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artikel } from '../models/artikel.model';
import { SearchCondition } from '../models/searchcondition.model';

@Injectable({
  providedIn: 'root',
})

// Api-Class for calling the Backend
export class ArtikestammApiService {
  constructor(private http: HttpClient) {}


  find(searchCondition: SearchCondition[]): Observable<Artikel[]> {
    return this.http.post<Artikel[]>(
      'http://localhost:8080/artikelstammdaten/find',
      searchCondition
    );
  }

  deleteById(artikelnummer: string): Observable<void> {
    return this.http.delete<void>(
      'http://localhost:8080/artikelstammdaten/delete/' + artikelnummer
    );
  }

  searchById(artikelnummer: string): Observable<Artikel[]> {
    return this.http.get<Artikel[]>(
      'http://localhost:8080/artikelstammdaten/searchone/' + artikelnummer
    );
  }

  add(artikel: Artikel): Observable<void> {
    return this.http.post<void>(
      'http://localhost:8080/artikelstammdaten/add',
      artikel
    );
  }

  updateOne(artikel: Artikel): Observable<Artikel[]> {
    return this.http.put<Artikel[]>(
      'http://localhost:8080/artikelstammdaten/updateOne',
      artikel
    );
  }
}
