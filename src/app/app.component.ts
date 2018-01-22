import { EnvService } from './@core/data-provider/config/config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EnvService]
})
export class AppComponent implements OnInit {

  title = 'app';

  constructor (private env: EnvService) {}

  ngOnInit() {
    this.env.getEnv();
  }

}
