import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SongService } from 'src/app/services/song.service';
import { Song } from 'src/app/songModel';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit, OnDestroy {

  public activeSubs: Subscription[] = [];

  public songs: Song[] = [];

  constructor(private songService: SongService) { }


  sortSongsBy(event: any) {
    const sortParam = event.target.value;
    if (sortParam === 'title' || sortParam === 'artist' || sortParam === 'count') {
      const sub = this.songService.getSongs(sortParam).subscribe((s: Song[]) => {
        this.songs = s;
      })
      this.activeSubs.push(sub);
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    for (const sub of this.activeSubs) {
      sub.unsubscribe();
    }
  }
}
