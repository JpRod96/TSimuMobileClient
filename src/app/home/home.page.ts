import { Component } from '@angular/core';
import { EventRepositoryService } from '../event-repository.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private events:any;

  constructor(private eventRepository: EventRepositoryService) {
    this.chargeEvents();
  }

  private async chargeEvents(){
    this.events = await this.eventRepository.getAll();
    console.log(this.events)
  }
}
