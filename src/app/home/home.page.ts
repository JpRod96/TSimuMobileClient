import { Component } from '@angular/core';
import { EventRepositoryService } from '../event-repository.service'
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private events:any;

  constructor(private eventRepository: EventRepositoryService,
              private navCtrl: NavController) {
    this.chargeEvents();
  }

  private async chargeEvents(){
    this.events = await this.eventRepository.getAll();
  }

  private goToRegistePage(){
    this.navCtrl.pop()
    this.navCtrl.navigateForward('/register');
  }

  private seeEvent(id:string){
    this.navCtrl.pop()
    this.navCtrl.navigateForward('/event-summary/' + id);
  }
}
