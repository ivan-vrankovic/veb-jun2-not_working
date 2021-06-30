import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SongService } from 'src/app/services/song.service';
import { Song } from 'src/app/songModel';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit, OnDestroy {

  @Input()
  song: Song;

  public songs: Observable<Song[]>;

  public noIncrement = false;

  public activeSubs: Subscription[] = [];

  constructor(private songService: SongService) {
   }

  ngOnInit(): void {
    this.songs = this.songService.getSongs("count");
  }

  ngOnDestroy(): void {
    for (const sub of this.activeSubs) {
      sub.unsubscribe();
    }
  }


  public incrementCount(id: string) {
    const body = {
      _id: id
    }

    const sub = this.songService.patchCount(body).subscribe((param) => {
      this.noIncrement = true;
    })
    this.activeSubs.push(sub);
    this.noIncrement = false;
  }

}
