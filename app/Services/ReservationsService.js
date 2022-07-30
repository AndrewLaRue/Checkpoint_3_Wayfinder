import { ProxyState } from "../AppState.js";
import { Reservation } from "../Models/Reservation.js";





class ReservationsService {
  createReservation(newReservation) {
    ProxyState.reservations = [...ProxyState.reservations, new Reservation(newReservation)]
  }

  
  constructor() {

  }


  deleteReservation(id) {
    ProxyState.reservations = ProxyState.reservations.filter(r => r.id != id)
  }

  




  _test(){
  console.log('reservations service');
}
}







export const reservationsService = new ReservationsService()