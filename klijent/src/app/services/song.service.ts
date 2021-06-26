import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Song } from '../songModel';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private readonly url = "http://localhost:3000/api/songs/";

  constructor(private http: HttpClient) { }

  public getSongs(sortBy: string): Observable<Song[]>{
    return this.http.get<Song[]>(this.url + sortBy);
  }

  public patchCount(body: any): Observable<Song>{
    return this.http.patch<Song>(this.url, body);
  }

  public putSong(body: any) :Observable<any> {
    return this.http.put<Song>(this.url, body);
  }
}
