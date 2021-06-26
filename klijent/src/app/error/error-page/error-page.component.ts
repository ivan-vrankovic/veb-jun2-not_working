import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  public message: string = "";
  public statusCode: string = "";
  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe(params => {
      this.message = (params.get('message') as string);
      this.statusCode = (params.get('statusCode') as string);
    })
  }

  ngOnInit(): void {
  }

}
