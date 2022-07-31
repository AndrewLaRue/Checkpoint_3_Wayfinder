import { ProxyState } from "../AppState.js";
import { Reservation } from "../Models/Reservation.js";





class ReservationsService {

  deleteReservation(id) {
    ProxyState.reservations = ProxyState.reservations.filter(r => r.id != id)
  }

    createReservation(newReservation) {
    ProxyState.reservations = [...ProxyState.reservations, new Reservation(newReservation)]
  }

  // _test(){
  // console.log('reservations service');
// }
  
}







export const reservationsService = new ReservationsService()