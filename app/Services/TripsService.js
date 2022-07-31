import { ProxyState } from "../AppState.js";
import { Trip } from "../Models/Trip.js";


class TripsService{
  editNote(id, newText) {
    let noteEdit = ProxyState.trips.find(t => t.id == id)
    // @ts-ignore
    noteEdit.note = newText
    ProxyState.trips = ProxyState.trips

  }


  deleteTrip(id) {
    ProxyState.trips = ProxyState.trips.filter(t => t.id != id)
  }

  
  createTrip(newTrip) {
    ProxyState.trips = [...ProxyState.trips, new Trip(newTrip)]
  }
  
  constructor() {

  }


//    _test(){
//   console.log('trips service');
// }

}



export const tripsService = new TripsService()