import { ProxyState } from "../AppState.js";
import { Reservation } from "../Models/Reservation.js";
import { Trip } from "../Models/Trip.js";




export function saveState(){
  console.log('saving');
  let data = {
    reservations : ProxyState.reservations,
    trips: ProxyState.trips
  }
  localStorage.setItem('WayFinder', JSON.stringify(data))

}

export function loadState(){
  console.log('loading');
  
  let rawData = localStorage.getItem('WayFinder')
  if(rawData){
    let data = JSON.parse(rawData)
    ProxyState.trips = data.trips.map(t => new Trip(t))
    ProxyState.reservations = data.reservations.map(r => new Reservation(r))
  }
  


}