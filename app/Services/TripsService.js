import { ProxyState } from "../AppState.js";
import { Trip } from "../Models/Trip.js";


class TripsService{
  deleteTrip(id) {
    ProxyState.trips = ProxyState.trips.filter(t => t.id != id)
  }

  
  createTrip(newTrip) {
    ProxyState.trips = [...ProxyState.trips, new Trip(newTrip)]
  }
  
  constructor() {

  }


   _test(){
  console.log('trips service');
}

}



export const tripsService = new TripsService()