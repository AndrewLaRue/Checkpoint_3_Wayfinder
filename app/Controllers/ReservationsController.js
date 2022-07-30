import { reservationsService } from "../Services/ReservationsService.js";
import { Pop } from "../Utils/Pop.js";



export class ReservationController{

  constructor() {
    console.log('reservations controller');
    this.test()
  }


    createReservation(tripId) {
    window.event.preventDefault()
    
      let form = window.event.target

      let newReservation = {
        type: form.type.Value,
        name: form.name.value,
        confirmation: form.confirmation.value,
        address: form.address.value,
        date: form.date.value,
        cost: form.cost.value,
        tripId: tripId
      }
      console.log('new res', newReservation);
      reservationsService.createReservation(newReservation)
  }


 async deleteReservation(id) {
    if (await Pop.confirm()) {
      reservationsService.deleteReservation(id)
    }
  }

  test() {
    reservationsService._test()
  }
}