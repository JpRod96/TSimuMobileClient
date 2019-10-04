import { Injectable } from '@angular/core';
import { RestService} from './rest.service';
import { Event } from '../model/event'

@Injectable({
  providedIn: 'root'
})
export class EventRepositoryService {
  private EVENTS_URL: string = "/events";
  private EVENT_URL: string = "/event";
  constructor(private restService: RestService) { }

  public async getAll(){
    let events: Array<Event> = new Array;
    let jsonList = await this.restService.get(this.EVENTS_URL)
    for(let json of <any>jsonList){
      events.push(this.parse(json));
    }
    return events;
  }

  public async save(event:any){
    return this.restService.post(this.EVENT_URL, event);
  }

  public async getById(id:string){
    let json = await this.restService.get(this.EVENT_URL + "/" + id)
    return this.parse(json);
  }

  private parse(json){
    return new Event(json.id, 
                    json.date, 
                    json.delationDate, 
                    json.description, 
                    json.locationDescription);
  }
}
