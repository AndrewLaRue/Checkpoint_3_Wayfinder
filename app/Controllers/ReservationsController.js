import { reservationsService } from "../Services/ReservationsService.js";
import { Pop } from "../Utils/Pop.js";



export class ReservationController{

  constructor() {
    // console.log('reservations controller');
    // this.test()
  }


    createReservation(tripId) {
    // @ts-ignore
    window.event.preventDefault()
    
      // @ts-ignore
      let form = window.event.target

      let newReservation = {
        // @ts-ignore
        type: form.type.value,
        // @ts-ignore
        name: form.name.value,
        // @ts-ignore
        confirmation: form.confirmation.value,
        // @ts-ignore
        address: form.address.value,
        // @ts-ignore
        date: form.date.value,
        // @ts-ignore
        cost: parseInt(form.cost.value),
        tripId: tripId
      }
      // console.log('new res', newReservation);

      reservationsService.createReservation(newReservation)
      // @ts-ignore
      form.reset()
  }


 async deleteReservation(id) {
    if (await Pop.confirm()) {
      reservationsService.deleteReservation(id)
    }
  }

  // test() {
  //   reservationsService._test()
  // }
}