import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-new-song',
  templateUrl: './new-song.component.html',
  styleUrls: ['./new-song.component.css']
})
export class NewSongComponent implements OnInit {

  public newSongForm: FormGroup;
  public activeSub: Subscription[] = [];


  constructor(private songService: SongService, private formBuilder: FormBuilder) {
    this.newSongForm = formBuilder.group({
      artist: ['', [Validators.required]],
      title: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  public addSong(data: any): void {
    if (!this.newSongForm.valid) {
      window.alert('The form is not vallid! ');
    }

    const body = {
      artist: data.artist,
      title: data.title
    };

    const sub = this.songService.putSong(body).subscribe((message: any) => {
      if (message.message === "The song has successfully been scrobbled!") {
        window.alert(message.message);
        this.newSongForm.reset();
      }
      else {
        console.log(message.message);

      }
    });
    this.activeSub.push(sub);

  }

  ngOnDestroy() {
    this.activeSub.forEach((param) => param.unsubscribe());
  }
}
