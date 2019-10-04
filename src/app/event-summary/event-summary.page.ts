import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'
import { EventRepositoryService } from '../event-repository.service'
import { ActivatedRoute } from '@angular/router'
import { Event } from '../../model/event'

@Component({
  selector: 'app-event-summary',
  templateUrl: './event-summary.page.html',
  styleUrls: ['./event-summary.page.scss'],
})
export class EventSummaryPage implements OnInit {
  private event: Event;

  constructor(private navCtrl: NavController,
              private route: ActivatedRoute,
              private eventRepository: EventRepositoryService) {
    let id = this.route.snapshot.paramMap.get('id');
    this.event = new Event("","","","","");
    this.chargeEvent(id)
  }

  async chargeEvent(id: string){
    this.event = await this.eventRepository.getById(id);
  }

  ngOnInit(){}

  private goBack(){
    this.navCtrl.pop()
    this.navCtrl.navigateForward('/home');
  }
}
