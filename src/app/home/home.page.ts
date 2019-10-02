import { Component } from '@angular/core';
import { RestService } from '../rest.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private events:any;

  constructor(private restService: RestService) {
    this.chargeEvents();
  }

  private async chargeEvents(){
    this.events = await this.restService.getEvents();
  }
}
