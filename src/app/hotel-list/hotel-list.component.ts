import { Component } from '@angular/core';

@Component({
    selector: 'app-hotel-list',
    templateUrl: './hotel-list.component.html',
})
export class HotelListComponent  {

  public title = 'Liste hotels' ;
  public hotels : any[] =[{
      hotelId:1,
      hotelName: 'behija',
      description: 'This is a longer card with ',
      price: 20.5,
      imageUrl: 'assets/img/hotel-room.jpg'
  },{
  hotelId:2,
  hotelName: 'behjoujma',
  description: 'supporting text below as a natural lead-in to additional content.',
  price: 20.5,
  imageUrl: 'assets/img/indoors.jpg'
},{
    hotelId:3,
    hotelName: 'joujma',
    description: 'supporting text below as a natural lead-in to additional content.',
    price: 20.5,
    imageUrl: 'assets/img/the-interior.jpg'
},{
    hotelId:4,
    hotelName: 'behjoujma',
    description: 'supporting text below as a natural lead-in to additional content.',
    price: 20.5,
    imageUrl: 'assets/img/window.jpg'
   } ];
}
