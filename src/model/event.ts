export class Event {
    id: string;
    date: any;
    delationDate: any;
    description: string;
    locationDescription: string;
    initialState: string;

    constructor(id,
                date,
                delationDate,
                description,
                locationDescription)
    {
        this.id = id;
        this.date = date;
        this.delationDate = delationDate;
        this.description = description;
        this.locationDescription = locationDescription;
    }
}