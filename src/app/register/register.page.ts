import { Component, OnInit, } from '@angular/core';
import { NavController } from '@ionic/angular'
import { EventRepositoryService } from '../event-repository.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private event: any;

  constructor(private navCtrl: NavController,
              private eventRepository: EventRepositoryService) { 
    this.event={
      eventDescription:"",
      locationDescription:"",
      longitude:0,
      latitude:0,
      timeMsEventDate:"",
      initialState:""
    };
  }

  ngOnInit() {
  }

  private async save(){
    let inputDateString = this.event.timeMsEventDate;
    this.event.timeMsEventDate = new Date(inputDateString)
    this.event.timeMsEventDate = this.event.timeMsEventDate.getTime();
    await this.eventRepository.save(this.event)
    this.navCtrl.pop()
    this.navCtrl.navigateForward('/home');
  }

  private goBack(){
    this.navCtrl.pop()
    this.navCtrl.navigateForward('/home');
  }

}
